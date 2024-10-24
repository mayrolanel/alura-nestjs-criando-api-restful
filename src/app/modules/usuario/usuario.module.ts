import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "src/app/repositories/usuario.repository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})
export class UsuarioModule {

}