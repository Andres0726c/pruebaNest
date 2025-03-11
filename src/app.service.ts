import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

import { PersonaDto } from './app.dto';

@Injectable()
export class AppService {
  private personas = [
    { id: 1, nombre: 'Andrés', documento: '123456789' },
    { id: 2, nombre: 'Camilo', documento: '987654321' },
  ];

  buscar(): any[] {
    return this.personas;
  }

  buscarPorId(id: number) {
    return this.personas.find((p) => p.id === id);
  }

  agregar(personaDto: PersonaDto) {
    const nuevaPersona = { id: this.personas.length + 1, ...personaDto };
    this.personas.push(nuevaPersona);
    return nuevaPersona;
  }

  actualizar(id: number, personaDto: PersonaDto) {
    const index = this.personas.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.personas[index] = { id, ...personaDto };
      return this.personas[index];
    }
    return null;
  }

  eliminar(id: number) {
    this.personas = this.personas.filter((p) => p.id !== id);
    return { message: 'Persona eliminada' };
  }
  // getHello(): any[] {
  //   return AppRepository.obtenerPersonas();
  // }
}
