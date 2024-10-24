import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProdutoRepository } from "src/app/repositories/produto.repository";

@Controller('/produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosProduto) {
        this.produtoRepository.salvar(dadosProduto);
        return dadosProduto;
    }

    @Get()
    async listaProduto() {
        const produtos = await this.produtoRepository.listar();
        return produtos;
    }
}