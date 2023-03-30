import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';
import { validaTodosOsCamposPreenchidos, validaTodosOsCamposPatch } from './utils/utils';


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
    const res = await this.enderecoRepository.findOne({ where: { id } });

    if(res == null){
      throw new HttpException(utilsEndereco.enderecoErr, HttpStatus.NOT_FOUND)
    }

    return res;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    if(validaTodosOsCamposPatch(updateEnderecoDto)){
      const res = await this.enderecoRepository.update(id, updateEnderecoDto);
      
      if(res.affected == 0){
        throw new HttpException(utilsEndereco.enderecoErr, HttpStatus.NOT_FOUND)
      }
  
      return res;
    }
  }

  async remove(id: number) {
    
    const res = await this.enderecoRepository.delete(id);

    if(res.affected == 0){
      throw new HttpException(utilsEndereco.enderecoErr, HttpStatus.NOT_FOUND)
    }

    return res;
  }
}
