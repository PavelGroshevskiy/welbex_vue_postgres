import { Router } from "express";
import tableController from "../controller/table.controller.js";

export const tableRouter = new Router();

tableRouter.post("/create", tableController.createTableRow);
tableRouter.get("/get", tableController.getAll);
