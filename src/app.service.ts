import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { Persona } from './interfaces/persona.interface';

@Injectable()
export class AppService {
  public buscarTodos(): any[] {
    return AppRepository.buscarTodos();
  }

  public buscarPorId(id: number) {
    if (!AppRepository.buscarPorId(id)) {
      throw new HttpException(
        { message: 'No existe la persona' },
        HttpStatus.NOT_FOUND,
      );
    }
    return AppRepository.buscarPorId(id);
  }

  public buscarPersonaExistente(persona: Persona) {
    const personaExistente = AppRepository.buscarPorDocumento(
      persona.documento,
    );
    if (personaExistente && personaExistente.documento === persona.documento) {
      throw new HttpException(
        { message: 'Ya existe una persona con ese documento' },
        HttpStatus.CONFLICT,
      );
    }
  }

  public buscarCorreoExistente(persona: Persona) {
    const correoExistente = AppRepository.buscarPorCorreo(persona.correo);
    if (correoExistente) {
      throw new HttpException(
        { message: 'Ya existe una persona con ese correo' },
        HttpStatus.CONFLICT,
      );
    }
  }

  public agregarPersona(persona: Persona) {
    this.buscarPersonaExistente(persona);
    this.buscarCorreoExistente(persona);

    if (!this.esMayorDeEdad(persona.edad)) {
      throw new HttpException(
        { message: 'La persona no es mayor de edad' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return AppRepository.agregarPersona(persona);
  }

  public actualizarPersona(id: number, persona: Persona) {
    const idExistente = AppRepository.buscarPorId(id);
    if (!idExistente) {
      throw new HttpException(
        { message: 'No existe la persona' },
        HttpStatus.NOT_FOUND,
      );
    } else {
      this.buscarPersonaExistente(persona);
      this.buscarCorreoExistente(persona);
    }
    return AppRepository.actualizarPersona(id, persona);
  }

  private esMayorDeEdad(edad: number): boolean {
    return edad >= 18;
  }

  public eliminarPersona(id: number) {
    const idExistente = AppRepository.buscarPorId(id);
    if (!idExistente) {
      throw new HttpException(
        { message: 'No existe la persona' },
        HttpStatus.NOT_FOUND,
      );
    }
    return AppRepository.eliminarPersona(id);
  }
}
