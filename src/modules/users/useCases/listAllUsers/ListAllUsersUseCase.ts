import { ErrorHandler } from "../../../../helpers/ErrorHandler";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new ErrorHandler("User not found", 400);
    if (!user.admin) throw new ErrorHandler("User is not administrator", 400);

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
