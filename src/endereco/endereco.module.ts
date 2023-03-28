import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { enderecoProviders } from './endereco.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EnderecoController],
  providers: [...enderecoProviders, EnderecoService]
})
export class EnderecoModule {}
