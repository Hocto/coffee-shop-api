import express from "express";
import { Request, Response } from "express";
import { getAllCoffees as getAllCoffeesService } from "../service";

export const controller = express.Router();

controller.get("/coffees", (req: Request, res: Response) => {
  //some check for validation for req
  console.log("Get all coffees");
  res.status(200).json(getAllCoffeesService());
});

controller.get("/coffee/{id}", (req: Request, res: Response) => {
  //some check for validation for req
  console.log("Get all coffee by id");
});

controller.post("/coffee", (req: Request, res: Response) => {
  //some check for validation for req
  console.log("Post a coffee");
});

controller.put("/coffee", (req: Request, res: Response) => {
  //some check for validation for req
  console.log("Put a coffee");
});

controller.delete("/coffee", (req: Request, res: Response) => {
  //some check for validation for req
  console.log("Delete a coffee");
});
