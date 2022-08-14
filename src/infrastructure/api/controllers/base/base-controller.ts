import express from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from 'class-validator';

export class BaseController {
    async validateBody<T extends object>(request: express.Request, clazz: new() => T) {
        const parsedBody = plainToClass(clazz, request.body);
        let errors: ValidationError[];

        try {
           errors = await validate(parsedBody);
        } catch (err) {
            const error: any = err;
            throw new Error(`validateBody error: ${error.message}`);
        }

        if(errors.length) {
            console.log('validation errors', errors);
            throw new Error('Error in request body params');
        }
    }

    validateQueryParams<T extends object>(request: express.Request, clazz: new() => T) {
        
    }
}