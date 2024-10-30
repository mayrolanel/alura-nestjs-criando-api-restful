import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'Campo nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, { message: 'Campo email é inválido'})
    email: string;

    @MinLength(6, { message: 'Tamanho mínimo da senha é 6 caracteres'})
    senha: string;
}