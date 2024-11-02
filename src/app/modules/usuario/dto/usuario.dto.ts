import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email-eh-unico.validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'Campo nome é obrigatório'})
    nome: string;

    @EmailEhUnico({ message: 'Já existe usuário com este email'})
    @IsEmail(undefined, { message: 'Campo email é inválido'})
    email: string;

    @MinLength(6, { message: 'Tamanho mínimo da senha é 6 caracteres'})
    senha: string;
}