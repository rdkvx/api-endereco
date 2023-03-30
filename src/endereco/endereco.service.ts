import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';
import { validaTodosOsCamposPreenchidos, validaNumeroDeCaracter, validaTodosOsCamposPatch } from './utils/utils';


@Injectable()
export class EnderecoService {
  constructor(
    @Inject(utilsEndereco.repository)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    if(validaTodosOsCamposPreenchidos(createEnderecoDto)){
      try{
        return await this.enderecoRepository.save(createEnderecoDto);
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async findAll() {
    try{
      return await this.enderecoRepository.find();
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: number) {
    try{
      return await this.enderecoRepository.findOne({ where: { id } });
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    if(validaTodosOsCamposPatch(updateEnderecoDto)){
      try{
        return await this.enderecoRepository.update(id, updateEnderecoDto);
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  async remove(id: number) {
    try{
      return await this.enderecoRepository.delete(id);
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
