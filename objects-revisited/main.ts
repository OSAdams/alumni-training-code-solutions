interface Employee {
  position: string;
  daysOfWeekWorking: string[];
}

interface Businesses {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: {
    [key: string]: Employee;
  };
}

interface ApiEmployee {
  name: string;
}

const weekDays: string[] = ['M', 'T', 'W'];
const weekends: string[] = ['S', 'S'];
const positions: string[] = ['Nights Watch', 'Manager', 'Saiyan', 'Owner'];

const business = {
  opens: '7am',
  closes: '5pm',
  totalEmployees: 3,
  daysOpen: ['M', 'T', 'W'],
  employees: {
    jon: {
      position: 'Nights Watch',
      daysOfWeekWorking: [weekDays[Math.floor(Math.random() * 3)]],
    },
    kakarot: {
      position: 'Saiyan',
      daysOfWeekWorking: [weekDays[Math.floor(Math.random() * 3)]],
    },
    tori: {
      position: 'Owner',
      daysOfWeekWorking: [weekDays[Math.floor(Math.random() * 3)]],
    },
  },
};

const addWeekends = (company: Businesses, days: string[]): Businesses => {
  for (const day of days) {
    company.daysOpen.push(day);
  }
  for (const name in company.employees) {
    const employee = company.employees[name];
    if (employee.daysOfWeekWorking.length < 3) {
      employee.daysOfWeekWorking.push(...days);
    }
  }
  return company;
};

// addWeekends(business, weekends);

const addEmployees = (
  company: Businesses,
  url: string,
  limit: number
): Businesses => {
  fetch(url)
    .then((res) => res.json())
    .then((result: ApiEmployee[]) => {
      const newEmployees = result.slice(0, limit);
      for (const employee of newEmployees) {
        company.employees[employee.name] = {
          position: positions[Math.floor(Math.random() * positions.length)],
          daysOfWeekWorking: [
            weekDays[Math.floor(Math.random() * weekDays.length)],
          ],
        };
      }
    })
    .catch((error) => console.error({ error }));
  return company;
};

// addEmployees(business, 'https://jsonplaceholder.typicode.com/users', 4);

console.log('initial business: ', business);
addEmployees(business, 'https://jsonplaceholder.typicode.com/users', 4);
console.log('employees added: ', business);
addWeekends(business, weekends);
console.log('weekends added: ', business);
