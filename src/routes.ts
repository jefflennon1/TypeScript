import { Request, Response } from 'express';
import CreateUser from '../services/CreateUser'

export default function HelloWord(request : Request, response: Response){
  const user =  CreateUser({
    username: 'Jefferson',
    email: 'jeffersonlennon@outlook.com',
    password:'12345',
    tech: [{
      description: 'aaa',
      techs:3,
      title: 'aqui'
    }]
  });
  console.log(user)

  return  response.json({ message: 'Hello word'});
}