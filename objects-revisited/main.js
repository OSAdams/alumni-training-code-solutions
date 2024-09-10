'use strict';
const weekDays = ['M', 'T', 'W', 'Th', 'F'];
const weekends = ['S', 'Sa'];
const positions = ['Nights Watch', 'Manager', 'Saiyan', 'Owner', 'Developer'];
/*
  Generate and return a random number at or between min and max number
  In this example, we are going to set a min of 1 and a max of 3 to ensure
  that our employees are working at most 3 work days to provide availability on weekends
*/
const generateNumberOfDaysWorking = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const numberOfDays = Math.floor(Math.random() * (max - min + 1)) + min;
  return numberOfDays;
};
/*
  Return an array of string values providing unique work weeks for each employee
*/
const daysWorkingArray = () => {
  const daysWorking = [];
  const limit = generateNumberOfDaysWorking(1, 3);
  for (let i = 0; i < limit; i++) {
    const currentDay = weekDays[Math.floor(Math.random() * weekDays.length)];
    if (daysWorking.indexOf(currentDay) === -1) {
      daysWorking.push(currentDay);
    }
  }
  return daysWorking;
};
const business = {
  opens: '7am',
  closes: '5pm',
  totalEmployees: 3,
  daysOpen: weekDays,
  employees: {
    jon: {
      position: 'Nights Watch',
      daysOfWeekWorking: daysWorkingArray(),
    },
    kakarot: {
      position: 'Saiyan',
      daysOfWeekWorking: daysWorkingArray(),
    },
    tori: {
      position: 'Owner',
      daysOfWeekWorking: daysWorkingArray(),
    },
  },
};
/*
  Add weekend workday to all employees (RIP) as well as updating the daysOpen array containing weekdays
  We are going to make sure that 'S' and 'Sa' are not duplicating days in the daysOfWeekWorking array for
  each employee as well as our daysOpen array for the business. Once we add more employees we should not have
  any duplicate days for each of the named arrays
*/
const addWeekends = (days) => {
  for (const day of days) {
    if (day === 'S') {
      if (business.daysOpen.indexOf(day) === -1) {
        business.daysOpen.unshift(day);
      }
      for (const employee in business.employees) {
        if (
          business.employees[employee].daysOfWeekWorking.indexOf(day) === -1
        ) {
          business.employees[employee].daysOfWeekWorking.unshift(day);
        }
      }
    } else {
      if (business.daysOpen.indexOf(day) === -1) {
        business.daysOpen.push(day);
      }
      for (const employee in business.employees) {
        if (
          business.employees[employee].daysOfWeekWorking.indexOf(day) === -1
        ) {
          business.employees[employee].daysOfWeekWorking.push(day);
        }
      }
    }
  }
};
const addEmployees = (url, limit) => {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const newEmployees = result.slice(0, limit);
      for (const employee of newEmployees) {
        business.employees[employee.name] = {
          position: positions[Math.floor(Math.random() * positions.length)],
          daysOfWeekWorking: daysWorkingArray(),
        };
      }
      business.totalEmployees += limit;
      addWeekends(weekends);
      checkIfFullTime();
    })
    .catch((error) => console.error({ error }));
};
const checkIfFullTime = () => {
  for (const employee in business.employees) {
    if (business.employees[employee].daysOfWeekWorking.length < 5) {
      business.employees[employee].fullTime = false;
    } else {
      business.employees[employee].fullTime = true;
    }
  }
};
const deleteEmployee = (employeeName) => {
  for (const employee in business.employees) {
    if (employee === employeeName) {
      delete business.employees[employee];
    }
  }
};
const updateObject = () => {
  addWeekends(weekends);
  checkIfFullTime();
  addEmployees('https://jsonplaceholder.typicode.com/users', 4);
  deleteEmployee('jon');
  console.log(business);
  return business;
};
window.addEventListener('DOMContentLoaded', updateObject);
