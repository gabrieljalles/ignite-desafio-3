import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    console.log(user_id);
    user_id = user_id.toString();

    const all = this.listAllUsersUseCase.execute({ user_id });

    return response.json(all);
  }
}

export { ListAllUsersController };
