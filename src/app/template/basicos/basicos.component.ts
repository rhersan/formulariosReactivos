import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm; 
  initForm = {
    txtProducto: '',
    txtPrecio: 0,
    txtExistencia: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  nombreValido():boolean{
    return  this.miFormulario?.controls['txtProducto'].invalid &&
            this.miFormulario?.controls['txtProducto'].touched;
  }
  validaPrecio():boolean{
    return this.miFormulario?.controls['txtPrecio'].touched
            && this.miFormulario?.controls['txtPrecio'].value < 0;
  }

  guardar(){
    console.log('Posteo Correcto');
    this.miFormulario.resetForm({
      txtPrecio: 0,
      txtxistencia: 0
    });
  }

}
