import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnderecoModule } from './endereco/endereco.module';
import { CepModule } from './cep/cep.module';

@Module({
  imports: [EnderecoModule, CepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
