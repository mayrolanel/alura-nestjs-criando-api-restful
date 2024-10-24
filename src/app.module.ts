import { Module } from '@nestjs/common';
import { UsuarioModule } from './app/modules/usuario/usuario.module';
import { ProdutoModule } from './app/modules/produto/produto.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
