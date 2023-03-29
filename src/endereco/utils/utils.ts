import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";
import { utilsEndereco } from "./constants";

export const validaCampoVazio = (createEnderecoDto: CreateEnderecoDto)=>{
    if(createEnderecoDto.bairro == null || createEnderecoDto.cep == null || createEnderecoDto.complemento == null || createEnderecoDto.ddd == null || createEnderecoDto.gia == null || createEnderecoDto.ibge == null 
        || createEnderecoDto.localidade == null || createEnderecoDto.logradouro == null || createEnderecoDto.siafi == null || createEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    validaNumeroDeCaracter(createEnderecoDto)
    
    return true;
}

export const validaTodosOsCampos = (updateEnderecoDto: UpdateEnderecoDto)=>{
    if(updateEnderecoDto.bairro == null && updateEnderecoDto.cep == null && updateEnderecoDto.complemento == null && updateEnderecoDto.ddd == null && updateEnderecoDto.gia == null && updateEnderecoDto.ibge == null 
        && updateEnderecoDto.localidade == null && updateEnderecoDto.logradouro == null && updateEnderecoDto.siafi == null && updateEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    return true;
}

export const validaNumeroDeCaracter = (createEnderecoDto: CreateEnderecoDto)=>{
    
    if(createEnderecoDto.bairro.length < 2 || createEnderecoDto.bairro.length > 100){
        throw new HttpException(utilsEndereco.bairroErr, HttpStatus.BAD_REQUEST)
    }
    
    if(createEnderecoDto.cep.length != 8){
        throw new HttpException(utilsEndereco.cepErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.complemento.length < 2 || createEnderecoDto.complemento.length > 100){
        throw new HttpException(utilsEndereco.complementoErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.ddd.length != 2){
        throw new HttpException(utilsEndereco.dddErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.gia.length < 2 || createEnderecoDto.gia.length > 100){
        throw new HttpException(utilsEndereco.giaErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.ibge.length < 2 || createEnderecoDto.ibge.length > 100){
        throw new HttpException(utilsEndereco.ibgeErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.localidade.length < 2 || createEnderecoDto.localidade.length > 100){
        throw new HttpException(utilsEndereco.localidadeErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.logradouro.length < 2 || createEnderecoDto.logradouro.length > 100){
        throw new HttpException(utilsEndereco.logradouroErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.siafi.length < 2 || createEnderecoDto.siafi.length > 100){
        throw new HttpException(utilsEndereco.siafiErr, HttpStatus.BAD_REQUEST)
    }

    const regex = /[0-9]/;
    if(createEnderecoDto.uf.length != 2 || regex.test(createEnderecoDto.uf)) {
        throw new HttpException(utilsEndereco.ufErr, HttpStatus.BAD_REQUEST)
    }
}