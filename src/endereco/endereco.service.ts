import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
import { utilsEndereco } from './utils/constants';
import { validaCampoVazio, validaTodosOsCampos } from './utils/utils';


@Injectable()
export class EnderecoService {
  constructor(
    @Inject(utilsEndereco.repository)
    private enderecoRepository: Repository<Endereco>,
  ) {}

  create(createEnderecoDto: CreateEnderecoDto) {
    if(validaCampoVazio(createEnderecoDto)){
      try{
        this.enderecoRepository.save(createEnderecoDto);

        return
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }

  findAll() {
    return this.enderecoRepository.find();;
  }

  findOne(id: number) {
    return this.enderecoRepository.findOne({ where: { id } });
  }

  update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    if(validaTodosOsCampos(updateEnderecoDto)){
      try{
         this.enderecoRepository.update(id, updateEnderecoDto);

         return
      }catch{
        throw new HttpException(utilsEndereco.erroInterno, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
   
  }

  remove(id: number) {
    return this.enderecoRepository.delete(id);
  }
}
