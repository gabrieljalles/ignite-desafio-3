import express, { Request, Response, NextFunction } from "express";

import { usersRoutes } from "./routes/users.routes";
import { ErrorHandler } from "./helpers/ErrorHandler";

import "express-async-errors";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      console.log(err);

      if (err instanceof ErrorHandler) {
        return response.status(err.statusCode).json({
          status_code: err.statusCode,
          error: err.error,
        });
      }
  
      return response.status(500).json({
        status_code: 500,
        error: err.message || "Internal Server Error",
      });
    }
  );
  

export { app };
