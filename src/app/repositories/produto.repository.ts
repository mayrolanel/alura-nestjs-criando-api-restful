import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository {
    private produtos = [];

    async salvar(produto: object){
        this.produtos.push(produto);
    }

    async listar() {
        return this.produtos;
    }
}