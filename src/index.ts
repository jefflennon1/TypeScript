import express from 'express';
import HelloWord from './routes'

const api = express();

api.get('/', HelloWord)

api.listen('5555', ()=>{
  console.log('BackEnd started! 😪');
})