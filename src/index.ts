import express from 'express';

const api = express();

api.get('/', (req, res)=>{
  return res.json('Hello word!')
})

api.listen('5555', ()=>{
  console.log('BackEnd started! 😪');
})