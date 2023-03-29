import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';


@Injectable()
export class EnderecoService {
  constructor(
    @Inject(utilsEndereco.repository)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoRepository.save(createEnderecoDto);
  }

  findAll() {
    return this.enderecoRepository.find();;
  }

  findOne(id: number) {
    return this.enderecoRepository.findOne({ where: { id } });
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoRepository.update(id, updateEnderecoDto);
  }

  remove(id: number) {
    return this.enderecoRepository.delete(id);
  }
}
