import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaProdutoDTO{

    @IsString()
    @IsNotEmpty({ message: 'Nome  da característica é obrigatório'})
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição  da característica é obrigatório'})
    descricao: string
}