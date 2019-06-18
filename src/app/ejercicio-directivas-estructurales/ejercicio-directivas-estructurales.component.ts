import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-directivas-estructurales',
  templateUrl: './ejercicio-directivas-estructurales.component.html',
  styleUrls: ['./ejercicio-directivas-estructurales.component.css']
})
export class EjercicioDirectivasEstructuralesComponent implements OnInit {
  public rosario = true;
  public ciudadesArray: any[] = ['Rosario', 'Bariloche', 'Oliveros'];
  public nuevaCiudad;
  constructor() { }

  ngOnInit() {
  }

  agregarCiudad() {
    this.ciudadesArray.push(this.nuevaCiudad);
  }

}
