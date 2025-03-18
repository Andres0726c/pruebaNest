import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class PersonaDto {
  @IsNotEmpty({ message: 'El primer nombre es requerido' })
  primerNombre: string;

  @IsNotEmpty({ message: 'El documento es requerido' })
  documento: string;

  @IsNotEmpty({ message: 'El correo es requerido' })
  correo: string;

  @IsNumber({}, { message: 'La edad debe ser un número' })
  @IsNotEmpty({ message: 'La edad es requerida' })
  @Min(18, { message: 'La persona debe ser mayor de edad' })
  @Type(() => Number)
  edad: number;
}