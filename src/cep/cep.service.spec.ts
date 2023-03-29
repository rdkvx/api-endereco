import { Test, TestingModule } from '@nestjs/testing';
import { CepService } from './cep.service';
import { utilsCep } from './utils/constants';

describe(utilsCep.cepService, () => {
  let service: CepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CepService],
    }).compile();

    service = module.get<CepService>(CepService);
  });

  it(utilsCep.shouldBeDefined, () => {
    expect(service).toBeDefined();
  });
});
