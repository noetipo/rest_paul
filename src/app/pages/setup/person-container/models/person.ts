export interface Persons {
  seg_persona_id: string;
  seg_per_estado: number;
  seg_per_nombres: string;
  seg_per_apellido_paterno: string;
  seg_per_apellido_materno: string;
  seg_per_dni: number;
  seg_per_telefono: string;
  seg_per_direccion: string;
  seg_per_email: string;
  user_id: number;
  persons: Persons[];


}

export class Person {
  seg_persona_id: string;
  seg_per_estado: number;
  seg_per_nombres: string;
  seg_per_apellido_paterno: string;
  seg_per_apellido_materno: string;
  seg_per_dni: number;
  seg_per_telefono: string;
  seg_per_direccion: string;
  seg_per_email: string;
  user_id: number;
}

export class PersonReniec {
  dni: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  caracter_verificacion: string;
  caracter_verificacion_anterior: string;
}
