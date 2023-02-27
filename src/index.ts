import express from "express";

const app = express();

const port = 8080;

const getYear = (date: Date): string => {
  return `${date.getFullYear()}`;
};

app.get("/", (req, res) => {
  const year = getYear(new Date());
  res.send(`Hello World ! ${year}`);
});

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`App listening on port ${port}!`);
});
