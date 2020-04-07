const controllers = require('./controllers');
/*const mid = require('./middleware');*/
const express = require('express');

let num:number = 0;

const router = (app: Express.Session) => {
  app.get('/test', (req: any, res: any) => {
      num += 1;
      res.status(200).send({ success:`working: ${num}` });
    });
  app.get('/', controllers.Home.homePage);
    /*app.get('/boot', (req:any,res:any)=>{
        res.send('bootstrap/dist/css/bootstrap.min.css');
    })*/
};

module.exports.router = router;
