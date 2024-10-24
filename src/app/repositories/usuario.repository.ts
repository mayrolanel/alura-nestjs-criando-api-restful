import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private usuarios = [];

    async salvar(usuario: object) {
        this.usuarios.push(usuario);
    }

    async listar(){
        return this.usuarios;
    }
}