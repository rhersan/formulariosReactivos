import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero:['M', Validators.required],
    notificaciones:[true, Validators.required],
    codiciones: [false, Validators.required]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
       ...this.persona,
        condiciones: false
    });
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue => {
    //     console.log(newValue);
    // });

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      console.log(rest);
    });
  }
  guardar(){
    const formValue = {...this.miFormulario.value };
    console.log(formValue);
  }


}
