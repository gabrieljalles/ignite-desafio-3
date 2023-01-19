import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name, admin } = request.body;
    console.log(email, name, admin);
    const user = this.createUserUseCase.execute({ email, name, admin });
    return response.status(201).send(user);
  }
}

export { CreateUserController };
