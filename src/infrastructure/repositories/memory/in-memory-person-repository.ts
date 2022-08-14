import { GetPersonDto } from "../../../@core/use-cases/get-all-persons.ts/output-models/get-person-dto";
import { IPersonRepository } from "../../../@core/use-cases/ports/db/person-repository";

export class InMemoryPesonRepository implements IPersonRepository {
    persons: GetPersonDto[];

    constructor() {
        this.persons = [];
    }

    async getAll(): Promise<GetPersonDto[]> {
        return this.persons;
    }

    async create(name: string): Promise<void> {
        const newPerson = {
            id: new Date().getTime().toString(),
            name: name
        };

        this.persons.push(newPerson)
    }
}