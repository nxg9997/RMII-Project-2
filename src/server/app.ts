const path = require('path');
// import * as path from 'path';
const express = require('express');
// import * as express from 'express';
const compression = require('compression');
// import * as compression from 'compression';
const favicon = require('serve-favicon');
// import * as favicon from 'serve-favicon';
const cookieParser = require('cookie-parser');
// import * as cookieParser from 'cookie-parser';
const bodyParser = require('body-parser');
// import * as bodyParser from 'body-parser';
const mongoose = require('mongoose');
// import * as mongoose from 'mongoose';
const expressHandlebars = require('express-handlebars');
// import * as expressHandlebars from 'express-handlebars';
const session = require('express-session');
// import * as session from 'express-session';
const RedisStore = require('connect-redis')(session);
// import * as RedisStoreImp from 'connect-redis';
// const RedisStore = RedisStoreImp(session());
const url = require('url');
const redis = require('redis');
const csrf = require('csurf');

import * as test from './test';

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost/Project2';

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURL, mongooseOptions, (err: Error) => {
  if (err) {
    console.log('Couldn\'t connect to Mongo');
    throw err;
  }
});

const router = require('./router');

const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted`)));
app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use(cookieParser());

// add csrf later
/*app.use(csrf());
app.use((err:any, req:any, res:any, next:Function) => {
  if(err.code !== 'EBADCSRFTOKEN') return next(err);

  console.log('Missing CSRF Token');
  return false;
});*/

router.router(app);

app.listen(port, () => {
  return console.log(`Server is started on ${port}`);
});

/*
    Modules that aren't typed require a *.d.ts file
    with the following inside (put these in the modules folder)):
    declare module NAME;
*/
