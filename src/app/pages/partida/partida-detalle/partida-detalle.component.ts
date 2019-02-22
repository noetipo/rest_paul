import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PartidaService} from '../../../providers/services';
import {PartidasDetalle} from '../../models/partidasDetalle';

@Component({
  selector: 'erpv-partida-detalle',
  templateUrl: './partida-detalle.component.html',
  styleUrls: ['./partida-detalle.component.scss'],
})
export class PartidaDetalleComponent implements OnInit {
  private codPartida: string;
  public error: string;
  public partidasDetalle: PartidasDetalle[];
  p: any;
  constructor(private route: ActivatedRoute, private partidaService: PartidaService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.codPartida = params['id'];
        this.partidaService.getParidasDetalle$(this.codPartida).subscribe(response => {
          this.partidasDetalle = response.data;

        }, error => {
          this.error = error;
        });
      }
    });
  }

}
