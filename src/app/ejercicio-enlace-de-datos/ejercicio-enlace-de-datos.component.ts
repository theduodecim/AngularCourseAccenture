import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-enlace-de-datos',
  templateUrl: './ejercicio-enlace-de-datos.component.html',
  styleUrls: ['./ejercicio-enlace-de-datos.component.css']
})
export class EjercicioEnlaceDeDatosComponent implements OnInit {
  public ciudad = true;
  public ciudadName: string;
  constructor() { }

  ngOnInit() {
  }
  onShowCiudad() {
    if (this.ciudad) {
      this.ciudad = false;
    } else {
      this.ciudad = true;
    }
  }

}
