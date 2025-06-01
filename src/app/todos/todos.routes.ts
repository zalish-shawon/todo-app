import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../../db/todo.json");

export const todosRouter = express.Router();


todosRouter.get('/', (req: Request, res: Response) => {

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
     
        res.json({
          message: "Todos fetched successfully",
          data,
        });
        
})

todosRouter.post('/create-todo', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.send("Received data successfully");
})