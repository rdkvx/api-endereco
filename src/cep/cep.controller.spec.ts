import { Test, TestingModule } from '@nestjs/testing';
import { CepController } from './cep.controller';
import { CepService } from './cep.service';
import { utilsCep } from './utils/constants';

describe(utilsCep.cepController, () => {
  let controller: CepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepController],
      providers: [CepService],
    }).compile();

    controller = module.get<CepController>(CepController);
  });

  it(utilsCep.shouldBeDefined, () => {
    expect(controller).toBeDefined();
  });
});
