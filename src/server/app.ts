import express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import * as test from './test';

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

console.log('test2');

let num:number = 0;

app.get('/', (req, res) => {
  test.thing(num);
  num += 1;
  res.status(200).send({ success:`working: ${num}` });
});

app.listen(port, () => {
  return console.log(`Server is started on ${port}`);
});

/*
    Modules that aren't typed require a *.d.ts file
    with the following inside (put these in the modules folder)):
    declare module NAME;
*/
