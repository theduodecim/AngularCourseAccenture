import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-comunicacion-entre-componentes',
  templateUrl: './ejercicio-comunicacion-entre-componentes.component.html',
  styleUrls: ['./ejercicio-comunicacion-entre-componentes.component.css']
})
export class EjercicioComunicacionEntreComponentesComponent implements OnInit {
  public productoSeleccionado;
  public nombreProductoAComprar;

  public productos =
    [
      {
        nombre: 'Memoria Ram',
        precio: '500'
      },
      {
        nombre: 'Fuente',
        precio: '2000'
      },
      {
        nombre: 'Placa de video',
        precio: 12000
      }
    ];

  constructor() { }

  ngOnInit() {
  }

  public seleccion(producto) {
    this.productoSeleccionado = producto;
  }

  public comprarProducto(nombre) {
    this.nombreProductoAComprar = nombre;
  }

}
