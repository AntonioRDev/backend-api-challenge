import { PersonController } from "../../../api/controllers/person/person-controller"
import { makeGetAllPersonsUseCase } from "../use-cases/get-all-persons.factory"
import { makeRegisterPersonUseCase } from "../use-cases/register-person-factory";

export const makePersonController = () => {
    const getAllPersonsUseCase = makeGetAllPersonsUseCase();
    const registerPersonUseCase = makeRegisterPersonUseCase();
    
    return new PersonController(getAllPersonsUseCase, registerPersonUseCase);
}