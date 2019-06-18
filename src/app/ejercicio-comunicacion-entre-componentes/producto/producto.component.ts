import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto;
  @Output() nombreProductoAComprar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public comprarProducto(nombre: string) {
    this.nombreProductoAComprar.emit(nombre);
    console.log(this.nombreProductoAComprar);

    // simple test to show on the console the value that is emmited
    this.nombreProductoAComprar.subscribe(res => {
      console.log(res);
    });
  }

}
