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

  create(createEnderecoDto: CreateEnderecoDto) {
    if(validaTodosOsCamposPreenchidos(createEnderecoDto)){
      try{
        return this.enderecoRepository.save(createEnderecoDto);
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  findAll() {
    try{
      return this.enderecoRepository.find();
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    try{
      return this.enderecoRepository.findOne({ where: { id } });
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    if(validaTodosOsCamposPatch(updateEnderecoDto)){
      try{
        return this.enderecoRepository.update(id, updateEnderecoDto);
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  remove(id: number) {
    try{
      return this.enderecoRepository.delete(id);
    }catch{
      throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
