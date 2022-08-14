import { IsNotEmpty, IsString } from "class-validator";

export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}