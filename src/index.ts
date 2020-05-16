import express from 'express';
import apis from './api/apis';

const app = express();
const getYear = (date: Date): string => {
  return `${date.getFullYear()}`;
};
app.get('/', (req, res) => {
  const year = getYear(new Date());
  res.send(`Hello World ! ${year}`);
});
app.get('/health', (req, res) => {
  res.send('Success');
});
app.use('/twillio', apis.twillio);
app.listen(8080);
