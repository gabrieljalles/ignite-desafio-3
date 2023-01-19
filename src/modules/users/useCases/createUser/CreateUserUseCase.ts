import { ErrorHandler } from "../../../../helpers/ErrorHandler";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name, admin }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) throw new ErrorHandler("User already exists", 400);

    const user = this.usersRepository.create({ email, name, admin });

    return user;
  }
}
export { CreateUserUseCase };
