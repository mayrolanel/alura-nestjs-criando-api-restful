import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "src/app/repositories/usuario.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuaroComEmailExiste = await this.usuarioRepository.existeComEmail(value)
        return !usuaroComEmailExiste; 
    }

}

export const EmailEhUnico = (opcoesValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator
        })
    }
}