export interface PartidasDetalle {
  cantidad: string;
  codInsumo: string;
  codPartida: string;
  cuadrilla: string;
  idPresupuesto: number;
  idPresupuestoDetalle: number;
  insumo: string;
  parcial: string;
  precio: string;
  tipo: string;
  unidad: string;
  partidasDetalle: PartidasDetalle[];
}
