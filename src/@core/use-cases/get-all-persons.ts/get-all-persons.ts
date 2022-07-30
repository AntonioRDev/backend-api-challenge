import { IPersonRepository } from "../ports/db/person-repository";
import { IGetAllPersonsUseCase } from "../ports/get-all-persons";
import { GetPersonDto } from "./output-models/get-person-dto";

export class GetAllPersonUseCase implements IGetAllPersonsUseCase {
    constructor(private readonly personRepository: IPersonRepository) {}

    async execute(): Promise<GetPersonDto[]> {
        return await this.personRepository.getAll();
    }
}