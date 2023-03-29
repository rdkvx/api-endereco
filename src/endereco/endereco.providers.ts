import { DataSource } from 'typeorm';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';

export const enderecoProviders = [
  {
    provide: utilsEndereco.repository,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Endereco),
    inject: [utilsEndereco.dataSource],
  },
];