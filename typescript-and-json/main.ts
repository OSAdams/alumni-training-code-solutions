interface Book {
  isbn: string;
  title: string;
  author: string;
}

const books: Book[] = [
  {
    isbn: '12345',
    title: 'A Title',
    author: 'An Author',
  },
  {
    isbn: '123456',
    title: 'A Title Two',
    author: 'An Author Two',
  },
  {
    isbn: '1234567',
    title: 'A Title Three',
    author: 'An Author Three',
  },
];

console.log('typeof books: ', typeof books);
console.log('value of books: ', books);

const stringifiedBooks: string = JSON.stringify(books);

console.log('value of stringifiedBooks: ', stringifiedBooks);
console.log('typeof stringifiedBooks: ', typeof stringifiedBooks);

interface Student {
  id: number;
  name: string;
}

const JSONstudents: string =
  '[{ "id": 1, "name": "Jon Snow" },{ "id": 2, "name": "Kakarot" },{ "id": 3, "name": "Dougy Doug" }]';

console.log('value of JSONstudents: ', JSONstudents);
console.log('typeof JSONstudents: ', typeof JSONstudents);

const parsedStudents: Student[] = JSON.parse(JSONstudents);

console.log('value of parsedStudents: ', parsedStudents);
console.log('typeof parsedStudents: ', typeof parsedStudents);
