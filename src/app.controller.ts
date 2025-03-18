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
import { PersonaDto } from './Dto/persona.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appServices: AppService) {}

  @Get()
  public buscarTodos() {
    try {
      return this.appServices.buscarTodos();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  public buscarPorId(@Param('id') id: string) {
    try {
      return this.appServices.buscarPorId(parseInt(id));
    } catch (error) {
      throw error;
    }
  }

  @Post()
  public agregarPersona(
    @Body()
    persona: PersonaDto,
  ) {
    try {
      return this.appServices.agregarPersona(persona);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  public actualizarPersona(
    @Param('id') id: number,
    @Body()
    persona: PersonaDto,
  ) {
    try {
      return this.appServices.actualizarPersona(id, persona);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  public eliminarPersona(@Param('id') id: number) {
    try {
      return this.appServices.eliminarPersona(id);
    } catch (error) {
      throw error;
    }
  }
}
