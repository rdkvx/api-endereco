import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CepService } from './cep.service';

@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cepService.getCep(+id);
  }
}
