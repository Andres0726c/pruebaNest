import { Persona } from './interfaces/persona.interface';

export class AppRepository {
  private static personas = [
    {
      id: 1,
      primerNombre: 'Andrés',
      documento: '123',
      correo: 'admin@gmail.com',
      edad: 25,
    },
    {
      id: 2,
      primerNombre: 'Camilo',
      documento: '456',
      correo: 'admin2@gmail.com',
      edad: 17,
    },
    {
      id: 3,
      primerNombre: 'Felipe',
      documento: '789',
      correo: 'admin3@gmail.com',
      edad: 18,
    },
    {
      id: 4,
      primerNombre: 'David',
      documento: '012',
      correo: 'admin4@gmail.com',
      edad: 20,
    },
  ];

  public static buscarTodos() {
    return this.personas;
  }

  public static buscarPorDocumento(documento: string) {
    return this.personas.find((persona) => persona.documento === documento);
  }

  public static buscarPorCorreo(correo: string) {
    return this.personas.find((persona) => persona.correo === correo);
  }

  public static buscarPorId(id: number) {
    return this.personas.find((persona) => Number(persona.id) === Number(id));
  }

  public static agregarPersona(persona: Persona) {
    const nuevoUsuario = { id: this.personas.length + 1, ...persona };
    this.personas.push(nuevoUsuario);
    return nuevoUsuario;
  }

  public static actualizarPersona(id: number, persona: Persona) {
    const index = this.personas.findIndex(
      (persona) => Number(persona.id) === Number(id),
    );
    if (index !== -1) {
      this.personas[index] = { id, ...persona };
      return this.personas[index];
    }
    return null;
  }

  public static eliminarPersona(id: number) {
    this.personas = this.personas.filter((persona) => persona.id !== id);
    return { message: 'Persona eliminada' };
  }
}
