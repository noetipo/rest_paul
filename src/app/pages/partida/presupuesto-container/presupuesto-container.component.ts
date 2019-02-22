import {Component, OnInit} from '@angular/core';
import {PartidaService} from '../../../providers/services';
import {Partidas} from '../../models/partida';
import {Router} from '@angular/router';

@Component({
  selector: 'erpv-presupuesto-container',
  templateUrl: './presupuesto-container.component.html',
  styleUrls: ['./presupuesto-container.component.scss'],
})
export class PresupuestoContainerComponent implements OnInit {
  public error: string;
  public partidas: Partidas[];
  p: any;

  constructor(private partidaService: PartidaService, private router: Router) {
  }

  ngOnInit() {
    this.partidaService.getParidas$().subscribe(response => {
      this.partidas = response.data;

    }, error => {
      this.error = error;
    });
  }

  public verDetalle(data): void {
    this.router.navigate(['pages/partida/presupuesto', data]);
  }

}
