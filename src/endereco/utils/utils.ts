import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";
import { utilsEndereco } from "./constants";

export const validaCampoVazio = (createEnderecoDto: CreateEnderecoDto)=>{
    if(createEnderecoDto.bairro == null || createEnderecoDto.cep == null || createEnderecoDto.complemento == null || createEnderecoDto.ddd == null || createEnderecoDto.gia == null || createEnderecoDto.ibge == null 
        || createEnderecoDto.localidade == null || createEnderecoDto.logradouro == null || createEnderecoDto.siafi == null || createEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    return true;
}

export const validaTodosOsCampos = (updateEnderecoDto: UpdateEnderecoDto)=>{
    if(updateEnderecoDto.bairro == null && updateEnderecoDto.cep == null && updateEnderecoDto.complemento == null && updateEnderecoDto.ddd == null && updateEnderecoDto.gia == null && updateEnderecoDto.ibge == null 
        && updateEnderecoDto.localidade == null && updateEnderecoDto.logradouro == null && updateEnderecoDto.siafi == null && updateEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    return true;
}