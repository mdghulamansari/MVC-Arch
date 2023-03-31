import express, { Request, Response } from "express";
import cors from "cors";
import studentRoutes from "./../routes/student.routes";

const app = express();
app.use(express.json());

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/student", studentRoutes);

// 404 Error
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ msg: "Not Found", data: [] });
});

export default app;
