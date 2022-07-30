import { IPersonRepository } from "../ports/db/person-repository";
import { IRegisterPersonUseCase } from "../ports/register-person";

export class RegisterPersonUseCase implements IRegisterPersonUseCase {
    constructor(private readonly personRepository: IPersonRepository) {}

    async execute(name: string): Promise<void> {
        await this.personRepository.create(name);
    }
}