import { RegisterPersonUseCase } from "../../../../@core/use-cases/register-person/register-person";
import { InMemoryPesonRepository } from "../../../repositories/memory/in-memory-person-repository";

export const makeRegisterPersonUseCase = () => {
    const personRepository = new InMemoryPesonRepository();
    const registerPersonUseCase = new RegisterPersonUseCase(personRepository);

    return registerPersonUseCase;
}