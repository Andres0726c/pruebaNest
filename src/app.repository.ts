export class AppRepository {
  public static personas = [
    {
      id: 1,
      primerNombre: 'Andrés',
      documento: '123',
      correo: 'admin@gmail.com',
    },
    {
      id: 2,
      primerNombre: 'Camilo',
      documento: '456',
      correo: 'admin2@gmail.com',
    },
    {
      id: 3,
      primerNombre: 'Felipe',
      documento: '789',
      correo: 'admin3@gmail.com',
    },
    {
      id: 4,
      primerNombre: 'David',
      documento: '012',
      correo: 'admin4@gmail.com',
    },
  ];

  public static buscarTodos() {
    return this.personas;
  }

  public static agregar(persona: {
    primerNombre: string;
    documento: string;
    correo: string;
  }) {
    const nuevoUsuario = { id: this.personas.length + 1, ...persona };
    this.personas.push(nuevoUsuario);
    return nuevoUsuario;
  }

  public static buscarPorDocumento(documento: string) {
    return this.personas.find((persona) => persona.documento === documento);
  }

  public static buscarPorId(id: number) {
    return this.personas.find((persona) => persona.id === Number(id));
  }

  public static actualizarPersona(
    id: number,
    persona: { primerNombre: string; documento: string; correo: string },
  ) {
    const index = this.personas.findIndex((persona) => persona.id === Number(id));
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
