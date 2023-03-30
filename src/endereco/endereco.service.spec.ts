import { Test, TestingModule } from '@nestjs/testing';
import { EnderecoService } from './endereco.service';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';

const listaEndereco = [
    new Endereco({
        bairro: 'eng de dentro',
        cep: '99999999',
        complemento: 'mock',
        ddd: '21',
        gia: 'mock',
        ibge: 'mock',
        localidade: 'mock',
        logradouro: 'mock',
        siafi: 'mock',
        uf: 'rj'
    }),
    new Endereco({
        bairro: 'saracuruna',
        cep: '99999999',
        complemento: 'mock',
        ddd: '21',
        gia: 'mock',
        ibge: 'mock',
        localidade: 'mock',
        logradouro: 'mock',
        siafi: 'mock',
        uf: 'rj'
    })
]

describe(utilsEndereco.enderecoService, () => {
  let service: EnderecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [EnderecoService,
            {
                provide: utilsEndereco.repository,
                useValue: {
                    find: jest.fn().mockResolvedValue(listaEndereco),
                },
            }
        ],
    }).compile();

    service = module.get<EnderecoService>(EnderecoService);
  });

  it(utilsEndereco.shouldBeDefined, () => {
    expect(service).toBeDefined();
  });

  describe('findAll', ()=>{
    it('deve retornar todos os enderecos', async ()=>{
        const result = await service.findAll()

        expect(result).toEqual(listaEndereco)
    })
  })
});
