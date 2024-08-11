/* exported getDescriptionOfPerson */
type PersonD = {
  name: string;
  occupation: string;
  birthPlace: string;
};
const getDescriptionOfPerson = (person: PersonD): string =>
  `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
