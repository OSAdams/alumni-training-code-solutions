import express from 'express';
const app = express();

app.use((req, res) => {
  const method = req.method;
  console.log('Method used: ', method);
  res.send('Holda, Mundo!');
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});
