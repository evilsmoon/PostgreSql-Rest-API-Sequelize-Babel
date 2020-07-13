import express, { json } from "express";
import morgan from "morgan";
//importing routes
import projectRouter from "./routes/projects";
import taskRouter from "./routes/tasks";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(json());
// routes
app.use("/api/projects", projectRouter);
app.use("/api/tasks", taskRouter);

export default app;