export interface Partidas {
  idPartida: number;
  idPresupuesto: number;
  orden: string;
  secuencial: number;
  codPartida: string;
  descripcion: string;
  unidad: string
  metrado: string;
  precio: string;
  parcial: string;
  codPresupuesto: string;
  codSubpresupuesto: string;
  subPresupuesto: string;
  partidas: Partidas[];

}

