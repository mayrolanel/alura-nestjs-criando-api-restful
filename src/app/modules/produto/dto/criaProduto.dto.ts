import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsString, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./caracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./imagemProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {
    @IsNotEmpty()
    @IsString({ message: 'O nome do produto é obrigatorio' })
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'Valor do produto deve ser maior que zero' })
    valor: string;

    @IsNumber()
    @Min(0, { message: 'Quantidade minima deve ser maior ou igual a zero' })
    quantidade: number;

    @IsNotEmpty({ message: 'Descrição do produto é obrigatória' })
    @IsString()
    @MaxLength(1000, { message: 'Descrição não pode ter mais de 1.000 caracteres' })
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty({ message: 'Categoria do produto é obrigatória' })
    @IsString()
    categoria: string;
}