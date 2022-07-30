import { GetPersonDto } from "../get-all-persons.ts/output-models/get-person-dto";

export interface IGetAllPersonsUseCase {
    execute(): Promise<GetPersonDto[]>
}