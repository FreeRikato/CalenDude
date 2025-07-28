import express from 'express';

console.log('Express entrypoint loaded');

const app = express();
const port = 3030;

app.get('/', (req, res) => {
  console.log('Received GET / request');
  console.log('Request headers:', req.headers);
  res.status(200).send('Hello from Express in Turborepo!');
});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
