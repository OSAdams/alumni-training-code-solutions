'use strict';
const business = {
  opens: '7am',
  closes: '5pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    jon: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
    kakarot: {
      position: 'Security Officer',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    tori: {
      position: 'Owner',
      daysOfWeekWorking: ['M', 'T', 'W', 'Th', 'F'],
    },
  },
};
const addWeekends = () => {
  business.daysOpen.unshift('Su');
  business.daysOpen.push('S');
  for (const employee in business.employees) {
    const currentEmployee = business.employees[employee];
    currentEmployee.daysOfWeekWorking.unshift('Su');
    currentEmployee.daysOfWeekWorking.push('S');
  }
};
const addEmployees = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    for (let i = 0; i <= 4; i++) {
      const employeeFirstName = data[i].name.split(' ')[0].toLowerCase();
      const newEmployeeObj = createEmployee();
      business.employees[employeeFirstName] = newEmployeeObj;
      business.totalEmployees++;
    }
  } catch (error) {
    console.log(error);
  }
};
const createEmployee = () => {
  const positionsArr = [
    'Developer',
    'Designer',
    'HR',
    'Marketing',
    'Customer Support',
    'Receptionist',
  ];
  const randomPosition = Math.floor(Math.random() * positionsArr.length);
  const employeePosition = positionsArr[randomPosition];
  const randomDaysArr = generateRandomArr();
  const newEmployee = {
    position: employeePosition,
    daysOfWeekWorking: ['Su', ...randomDaysArr, 'S'],
  };
  const isEmployeeFullTime = checkIfFullTime(newEmployee);
  newEmployee.fullTime = isEmployeeFullTime;
  return newEmployee;
};
const generateRandomArr = () => {
  const daysArr = ['M', 'T', 'W', 'Th', 'F'];
  const returnArr = [];
  const randomLength = Math.floor(Math.random() * daysArr.length);
  for (let i = 0; i <= randomLength; i++) {
    const randomDay = Math.floor(Math.random() * daysArr.length);
    if (!returnArr.includes(daysArr[randomDay])) {
      returnArr.push(daysArr[randomDay]);
    }
  }
  return returnArr;
};
const checkIfFullTime = (employee) => {
  if (employee.daysOfWeekWorking.length >= 5) {
    return true;
  } else {
    return false;
  }
};
const deleteEmployee = (employeeName) => {
  delete business.employees[employeeName];
  business.totalEmployees--;
};
const updateObject = () => {
  addWeekends();
  addEmployees();
  deleteEmployee('jon');
  for (const employee in business.employees) {
    const currentEmployee = business.employees[employee];
    const isFullTime = checkIfFullTime(currentEmployee);
    currentEmployee.fullTime = isFullTime;
  }
  console.log('business: ', business);
};
document.addEventListener('DOMContentLoaded', updateObject);
