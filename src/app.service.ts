import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

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

  public personaExistente(persona: {
    primerNombre: string;
    documento: string;
    correo: string;
  }) {
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

  public correoExistente(persona: {
    primerNombre: string;
    documento: string;
    correo: string;
  }) {
    const correoExistente = AppRepository.buscarPorCorreo(persona.correo);
    if (correoExistente) {
      throw new HttpException(
        { message: 'Ya existe una persona con ese correo' },
        HttpStatus.CONFLICT,
      );
    }
  }

  public agregarPersona(persona: {
    primerNombre: string;
    documento: string;
    correo: string;
  }) {
    this.personaExistente(persona);
    this.correoExistente(persona);

    return AppRepository.agregarPersona(persona);
  }

  public actualizarPersona(
    id: number,
    persona: { primerNombre: string; documento: string; correo: string },
  ) {
    const idExistente = AppRepository.buscarPorId(id);
    if (!idExistente) {
      throw new HttpException(
        { message: 'No existe la persona' },
        HttpStatus.NOT_FOUND,
      );
    } else {
      this.personaExistente(persona);
      this.correoExistente(persona);
    }
    return AppRepository.actualizarPersona(id, persona);
  }

  public eliminar(id: number) {
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
