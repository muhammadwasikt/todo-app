import express from "express";
import { enums } from "../utils/constant/enums.js";
import Todos from "../models/todos_models.js";


export const todosRoute = express.Router();




todosRoute.get("/", async (req, res) => {
    try {
        const getAllTodos = await Todos.find();
        res
            .status(200)
            .send({ status: 200, message: enums.SUCCESS, data: getAllTodos });
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
    }
});

todosRoute.post("/add", async (req, res) => {
    console.log(req.body);
    
    try {
        const data = req.body;
        const response = await Todos.create(data);
        res
            .status(200)
            .send({ status: 200, message: enums.SUCCESS_MSG, data: response });
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
    }
});

todosRoute.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Todos.findByIdAndDelete(id);
        const updateData = await Todos.find()
        res
            .status(200)
            .send({ status: 200, message: enums.DELETE_MSG, data: updateData});
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
    }
});
todosRoute.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = await Todos.findByIdAndUpdate(id, data);
        res
            .status(200)
            .send({ status: 200, message: enums.UPDATE_MSG, data: response });
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
    }
});
