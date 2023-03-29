import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { GetEnderecoDto } from 'src/endereco/dto/get-endereco.dto';



@Injectable()
export class CepService {
  
  constructor(private readonly httpService: HttpService) {}

  async getCep(cepNumber: number) : Promise<GetEnderecoDto>{

    const url = process.env.API_URL+`${cepNumber}/json/`;

    const endereco = new GetEnderecoDto()
    
    try{
      const res = await lastValueFrom(this.httpService.get(url));

      endereco.response = "SUCCESS!";  
      endereco.bairro = res.data.bairro;
      endereco.cep = res.data.cep;
      endereco.complemento = res.data.complemento;
      endereco.ddd = res.data.ddd;
      endereco.gia = res.data.gia;
      endereco.ibge = res.data.ibge;
      endereco.localidade = res.data.localidade;
      endereco.logradouro = res.data.logradouro;
      endereco.siafi = res.data.siafi;
      endereco.uf = res.data.uf;

      return endereco;
    }catch{
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
