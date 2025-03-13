import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appServices: AppService) {}

  @Get()
  public buscarTodos() {
    return this.appServices.buscarTodos();
  }

  @Get(':id')
  public buscarPorId(@Param('id') id: string) {
    return this.appServices.buscarPorId(parseInt(id));
  }

  @Post()
  public crear(
    @Body()
    persona: {
      primerNombre: string;
      documento: string;
      correo: string;
    },
  ) {
    try {
      return this.appServices.agregar(persona);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  public actualizar(
    @Param('id') id: number,
    @Body()
    persona: { primerNombre: string; documento: string; correo: string },
  ) {
    return this.appServices.actualizarPersona(id, persona);
  }

  @Delete(':id')
  public eliminar(@Param('id') id: number) {
    return this.appServices.eliminar(id);
  }
}
