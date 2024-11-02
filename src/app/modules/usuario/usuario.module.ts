import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "src/app/repositories/usuario.repository";
import { EmailEhUnicoValidator } from "./validator/email-eh-unico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator]
})
export class UsuarioModule {

}