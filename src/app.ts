import express, { Application, Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
const app: Application = express()
app.use(express.json());
const filePath = path.join(__dirname, "../db/todo.json")


app.get('/', (req: Request, res: Response) => {
    
  res.send('Welcome to todos app')
})
app.get('/todos', (req: Request, res: Response) => {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
     
        console.log(data); 
        res.json(data);
        
})
app.post('/create-todo', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.send("Hello from create todo")
})

export default app;