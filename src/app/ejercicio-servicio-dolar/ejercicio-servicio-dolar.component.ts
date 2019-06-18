import { Component, OnInit } from '@angular/core';
import { DolarService } from '../dolar.service';
import { Dolar } from '../dolar';

@Component({
  selector: 'app-ejercicio-servicio-dolar',
  templateUrl: './ejercicio-servicio-dolar.component.html',
  styleUrls: ['./ejercicio-servicio-dolar.component.css']
})
export class EjercicioServicioDolarComponent implements OnInit {
  public mocksDolarData;
  public mocksDolarDataProd;
  public commingMocks = false;
  public commingProdMocks = false;
  constructor(public dolarService: DolarService) { }

  ngOnInit() {
  }

  onGettingMocks() {
    this.commingMocks = true;
    this.dolarService.getMocks().subscribe((respuesta: Dolar) => {
      this.commingMocks = false;
      this.mocksDolarData = respuesta;
    }, (error) => {
      console.error(error.message);
    });
  }

  getProductionMocks() {
    this.commingProdMocks = true;
    this.dolarService.getProductionMocks().subscribe((respuesta: Dolar) => {
      console.log(respuesta);
      this.commingProdMocks = false;
      this.mocksDolarDataProd = respuesta;
    }, (error) => console.error(error));
  }

}
