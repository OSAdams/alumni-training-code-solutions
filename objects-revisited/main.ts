interface Employee {
  position: string;
  daysOfWeekWorking: string[];
  fullTime?: boolean;
}

interface Business {
  opens: string;
  closes: string;
  totalEmployees: number;
  daysOpen: string[];
  employees: Record<string, Employee>;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const business: Business = {
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

const addWeekends = (): void => {
  business.daysOpen.unshift('Su');
  business.daysOpen.push('S');
  for (const employee in business.employees) {
    const currentEmployee = business.employees[employee];
    currentEmployee.daysOfWeekWorking.unshift('Su');
    currentEmployee.daysOfWeekWorking.push('S');
  }
};

const addEmployees = async (): Promise<void> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = (await response.json()) as User[];
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

const createEmployee = (): Employee => {
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
  const newEmployee: Employee = {
    position: employeePosition,
    daysOfWeekWorking: ['Su', ...randomDaysArr, 'S'],
  };
  const isEmployeeFullTime = checkIfFullTime(newEmployee);
  newEmployee.fullTime = isEmployeeFullTime;
  return newEmployee;
};

const generateRandomArr = (): string[] => {
  const daysArr = ['M', 'T', 'W', 'Th', 'F'];
  const returnArr: string[] = [];
  const randomLength = Math.floor(Math.random() * daysArr.length);
  for (let i = 0; i <= randomLength; i++) {
    const randomDay = Math.floor(Math.random() * daysArr.length);
    if (!returnArr.includes(daysArr[randomDay])) {
      returnArr.push(daysArr[randomDay]);
    }
  }
  return returnArr;
};

const checkIfFullTime = (employee: Employee): boolean => {
  if (employee.daysOfWeekWorking.length >= 5) {
    return true;
  } else {
    return false;
  }
};

const deleteEmployee = (employeeName: string): void => {
  delete business.employees[employeeName];
  business.totalEmployees--;
};

const updateObject = (): void => {
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
