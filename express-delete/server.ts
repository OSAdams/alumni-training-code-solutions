import express from 'express';
const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

app.listen(8080, () => {
  console.log('App listening on port 8080');
});

app.get('/api/grades', (req, res) => {
  const result = [];
  for (const index in grades) {
    result.push(grades[index]);
  }
  res.status(200).json(result);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: 'invalid id format' });
  }
  if (!(id in grades)) {
    res.status(404).json({ error: 'id does not exist in the object' });
  }
  delete grades[id];
  res.sendStatus(204);
});
