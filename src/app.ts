import express from "express";
import homeRouter from "./routes/home";

const app = express();

app.use("/", homeRouter);

export default app;
