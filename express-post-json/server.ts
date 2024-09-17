import express from 'express';
const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

let studentId: number = 1;

app.listen(8080, () => {
  console.log('Express server is listening on port 8080');
});

app.get('/api/grades', (req, res) => {
  const result: Grade[] = [];
  for (const student in grades) {
    result.push(grades[student]);
  }
  res.status(200).json(result);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  grades[studentId] = { id: studentId, name, course, score };
  res.status(201).json({ id: studentId, name, course, score });
  studentId++;
});
