import { GetAllPersonUseCase } from "../../../../@core/use-cases/get-all-persons.ts/get-all-persons";
import { InMemoryPesonRepository } from "../../../repositories/memory/in-memory-person-repository"

export const makeGetAllPersonsUseCase = () => {
    const personRepository = new InMemoryPesonRepository();
    const getAllPersonsUseCase = new GetAllPersonUseCase(personRepository);

    return getAllPersonsUseCase;
}