import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonaDto } from './app.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appServices: AppService) {}

  @Get()
  getAll() {
    return this.appServices.buscar();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.appServices.buscarPorId(parseInt(id));
  }

  @Post()
  create(@Body() personaDto: PersonaDto) {
    return this.appServices.agregar(personaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() personaDto: PersonaDto) {
    return this.appServices.actualizar(parseInt(id), personaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appServices.eliminar(parseInt(id));
  }
  // @Get()
  // getHello(): any {
  //   return this.appServices.getHello();
  // }
}

