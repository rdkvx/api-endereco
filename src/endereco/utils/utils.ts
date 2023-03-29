import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateEnderecoDto } from "../dto/create-endereco.dto";
import { UpdateEnderecoDto } from "../dto/update-endereco.dto";
import { utilsEndereco } from "./constants";

export const validaTodosOsCamposPreenchidos = (createEnderecoDto: CreateEnderecoDto)=>{
    if(createEnderecoDto.bairro == null || createEnderecoDto.cep == null || createEnderecoDto.complemento == null || createEnderecoDto.ddd == null || createEnderecoDto.gia == null || createEnderecoDto.ibge == null 
        || createEnderecoDto.localidade == null || createEnderecoDto.logradouro == null || createEnderecoDto.siafi == null || createEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    validaNumeroDeCaracter(createEnderecoDto)
    
    return true;
}

export const validaNumeroDeCaracter = (createEnderecoDto: CreateEnderecoDto)=>{
    const regexApenasNumeros = /^[0-9]+$/;
    const regexContemNumeros = /[0-9]/;
    
    
    if(createEnderecoDto.bairro.length < 2 || createEnderecoDto.bairro.length > 100){
        throw new HttpException(utilsEndereco.bairroErr, HttpStatus.BAD_REQUEST)
    }
    
    if(createEnderecoDto.cep.length != 8 || !regexApenasNumeros.test(createEnderecoDto.cep)){
        throw new HttpException(utilsEndereco.cepErr, HttpStatus.BAD_REQUEST)
    }

    if(createEnderecoDto.complemento.length < 2 || createEnderecoDto.complemento.length > 100){
        throw new HttpException(utilsEndereco.complementoErr, HttpStatus.BAD_REQUEST)
    }
    
    
    if(createEnderecoDto.ddd.length != 2 || !regexApenasNumeros.test(createEnderecoDto.ddd)){
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

    
    if(createEnderecoDto.uf.length != 2 || regexContemNumeros.test(createEnderecoDto.uf)) {
        throw new HttpException(utilsEndereco.ufErr, HttpStatus.BAD_REQUEST)
    }
}

export const validaTodosOsCamposPatch = (updateEnderecoDto: UpdateEnderecoDto)=>{
    if(updateEnderecoDto.bairro == null && updateEnderecoDto.cep == null && updateEnderecoDto.complemento == null && updateEnderecoDto.ddd == null && updateEnderecoDto.gia == null && updateEnderecoDto.ibge == null 
        && updateEnderecoDto.localidade == null && updateEnderecoDto.logradouro == null && updateEnderecoDto.siafi == null && updateEnderecoDto.uf == null) {

        throw new HttpException(utilsEndereco.payloadInvalido, HttpStatus.BAD_REQUEST)
    }

    const camposPreenchidos = filtraCamposPreenchidos(updateEnderecoDto)

    validaCamposEdit(camposPreenchidos, updateEnderecoDto)

    return true;
}

export const filtraCamposPreenchidos = (updateEnderecoDto: UpdateEnderecoDto)=>{
    let camposEndereco = [];
    
    if(updateEnderecoDto.bairro != null ){
        camposEndereco.push(updateEnderecoDto.bairro)
    }
    if(updateEnderecoDto.cep != null){
        camposEndereco.push(updateEnderecoDto.cep)
    }
    if(updateEnderecoDto.complemento != null){
        camposEndereco.push(updateEnderecoDto.complemento)
    }
    if(updateEnderecoDto.ddd != null){
        camposEndereco.push(updateEnderecoDto.ddd)
    }
    if(updateEnderecoDto.gia != null){
        camposEndereco.push(updateEnderecoDto.gia)
    }
    if(updateEnderecoDto.ibge != null){
        camposEndereco.push(updateEnderecoDto.ibge)
    }
    if(updateEnderecoDto.localidade != null){
        camposEndereco.push(updateEnderecoDto.localidade)
    }
    if(updateEnderecoDto.logradouro != null){
        camposEndereco.push(updateEnderecoDto.logradouro)
    }
    if(updateEnderecoDto.siafi != null){
        camposEndereco.push(updateEnderecoDto.siafi)
    }
    if(updateEnderecoDto.uf != null){
        camposEndereco.push(updateEnderecoDto.uf)
    }

    return camposEndereco;

}




export const validaCamposEdit = (camposEndereco, updateEnderecoDto: UpdateEnderecoDto) =>{
    for(let i = 0; i < camposEndereco.length; i++){
        if(updateEnderecoDto.bairro == camposEndereco[i]){
            if(updateEnderecoDto.bairro.length < 2 || updateEnderecoDto.bairro.length > 100){
                throw new HttpException(utilsEndereco.bairroErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.cep == camposEndereco[i]){
            if(updateEnderecoDto.cep.length != 8){
                throw new HttpException(utilsEndereco.cepErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.complemento == camposEndereco[i]){
            if(updateEnderecoDto.complemento.length < 2 || updateEnderecoDto.complemento.length > 100){
                throw new HttpException(utilsEndereco.complementoErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.ddd == camposEndereco[i]){
            if(updateEnderecoDto.ddd.length != 2){
                throw new HttpException(utilsEndereco.dddErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.gia == camposEndereco[i]){
            if(updateEnderecoDto.gia.length < 2 || updateEnderecoDto.gia.length > 100){
                throw new HttpException(utilsEndereco.giaErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.ibge == camposEndereco[i]){
            if(updateEnderecoDto.ibge.length < 2 || updateEnderecoDto.ibge.length > 100){
                throw new HttpException(utilsEndereco.ibgeErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.localidade == camposEndereco[i]){
            if(updateEnderecoDto.localidade.length < 2 || updateEnderecoDto.localidade.length > 100){
                throw new HttpException(utilsEndereco.localidadeErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.logradouro == camposEndereco[i]){
            if(updateEnderecoDto.logradouro.length < 2 || updateEnderecoDto.logradouro.length > 100){
                throw new HttpException(utilsEndereco.logradouroErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.siafi == camposEndereco[i]){
            if(updateEnderecoDto.siafi.length < 2 || updateEnderecoDto.siafi.length > 100){
                throw new HttpException(utilsEndereco.siafiErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.uf == camposEndereco[i]){
            const regex = /[0-9]/;
            if(updateEnderecoDto.uf.length != 2 || regex.test(updateEnderecoDto.uf)) {
                throw new HttpException(utilsEndereco.ufErr, HttpStatus.BAD_REQUEST)
            }
        }
    }
}
/* 
export const validaCamposEdit = (camposEndereco, updateEnderecoDto: UpdateEnderecoDto) =>{
    for(let i = 0; i < camposEndereco.length; i++){
        if(updateEnderecoDto.bairro == camposEndereco[i]){
            if(updateEnderecoDto.bairro.length < 2 || updateEnderecoDto.bairro.length > 100){
                throw new HttpException(utilsEndereco.bairroErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.cep == camposEndereco[i]){
            if(updateEnderecoDto.cep.length != 8){
                throw new HttpException(utilsEndereco.cepErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.complemento == camposEndereco[i]){
            if(updateEnderecoDto.complemento.length < 2 || updateEnderecoDto.complemento.length > 100){
                throw new HttpException(utilsEndereco.complementoErr, HttpStatus.BAD_REQUEST)
            }
        }

        if(updateEnderecoDto.ddd == camposEndereco[i]){
            if(updateEnderecoDto.ddd.length != 2){
                throw new HttpException(utilsEndereco.dddErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.gia == camposEndereco[i]){
            if(updateEnderecoDto.gia.length < 2 || updateEnderecoDto.gia.length > 100){
                throw new HttpException(utilsEndereco.giaErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.ibge == camposEndereco[i]){
            if(updateEnderecoDto.ibge.length < 2 || updateEnderecoDto.ibge.length > 100){
                throw new HttpException(utilsEndereco.ibgeErr, HttpStatus.BAD_REQUEST)
            }
        }
        
        if(updateEnderecoDto.localidade == camposEndereco[i]){
            if(updateEnderecoDto.localidade.length < 2 || updateEnderecoDto.localidade.length > 100){
                throw new HttpException(utilsEndereco.localidadeErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.logradouro == camposEndereco[i]){
            if(updateEnderecoDto.logradouro.length < 2 || updateEnderecoDto.logradouro.length > 100){
                throw new HttpException(utilsEndereco.logradouroErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.siafi == camposEndereco[i]){
            if(updateEnderecoDto.siafi.length < 2 || updateEnderecoDto.siafi.length > 100){
                throw new HttpException(utilsEndereco.siafiErr, HttpStatus.BAD_REQUEST)
            }
        }
    
        if(updateEnderecoDto.uf == camposEndereco[i]){
            const regex = /[0-9]/;
            if(updateEnderecoDto.uf.length != 2 || regex.test(updateEnderecoDto.uf)) {
                throw new HttpException(utilsEndereco.ufErr, HttpStatus.BAD_REQUEST)
            }
        }
    }
} */