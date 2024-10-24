import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "../../repositories/usuario.repository";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario) {
        this.usuarioRepository.salvar(dadosDoUsuario);
        return dadosDoUsuario;
    }

    @Get()
    async listaUsuarios() {
        const usuarios = await this.usuarioRepository.listar();
        return usuarios;
    }
}