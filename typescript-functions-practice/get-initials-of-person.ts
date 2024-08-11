/* exported getInitialsOfPerson */
const getInitialsOfPerson = (person: {
  firstName: string;
  lastName: string;
}): string => `${person.firstName[0]}${person.lastName[0]}`;
