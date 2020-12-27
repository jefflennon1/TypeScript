import { Request, Response } from 'express'

export default function HelloWord(request : Request, response: Response){
  return  response.json({ message: 'Hello word'});
}