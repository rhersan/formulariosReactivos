import { Component, OnInit } from '@angular/core';
interface IPersona{
  nombre: string;
  favoritos: IFavorito[];
}
interface IFavorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

 persona: IPersona={
  nombre: 'Angelica',
  favoritos: [
    {id: 1, nombre: 'DBZ Super'},
    {id: 2, nombre: 'Super Campeones'}
  ]
 }


  guardar(){
    console.log('formulario posteado');
  }
}
