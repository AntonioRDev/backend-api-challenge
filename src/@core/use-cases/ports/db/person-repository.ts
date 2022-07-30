import { GetPersonDto } from "../../get-all-persons.ts/output-models/get-person-dto";

export interface IPersonRepository {
    getAll(): Promise<GetPersonDto[]>;
    create(name: string): Promise<void>;
}