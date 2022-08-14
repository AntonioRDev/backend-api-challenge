import express from "express";
import { IGetAllPersonsUseCase } from "../../../../@core/use-cases/ports/get-all-persons";
import { IRegisterPersonUseCase } from "../../../../@core/use-cases/ports/register-person";
import { BaseController } from "../base/base-controller";
import { CreatePersonDto } from "./request-dto/create-person-dto";
import { plainToClass } from "class-transformer";

export class PersonController extends BaseController {
  constructor(
    private readonly getAllPersonsUseCase: IGetAllPersonsUseCase,
    private readonly registerPersonUseCase: IRegisterPersonUseCase
  ) {
    super();
  }

  async create(request: express.Request, response: express.Response) {
    console.log('casfasfdasdfasdf')
    await this.validateBody(request, CreatePersonDto);
    const parsedBody = plainToClass(CreatePersonDto, request.body);

    await this.registerPersonUseCase.execute(parsedBody.name);

    return response.status(201).send();
  }

  async getAll(request: express.Request, response: express.Response) {
    const persons = await this.getAllPersonsUseCase.execute();

    return response.status(201).json(persons);
  }
}
