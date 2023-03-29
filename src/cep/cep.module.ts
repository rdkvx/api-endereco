import { Module } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepController } from './cep.controller';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 5000,
      maxRedirects: 5,
    }),
  })],
  controllers: [CepController],
  providers: [CepService]
})
export class CepModule {}
