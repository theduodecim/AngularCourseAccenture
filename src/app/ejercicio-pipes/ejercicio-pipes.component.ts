import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-pipes',
  templateUrl: './ejercicio-pipes.component.html',
  styleUrls: ['./ejercicio-pipes.component.css']
})
export class EjercicioPipesComponent implements OnInit {
  public fechaActual = new Date();
  constructor() { }

  ngOnInit() {
  }

}
