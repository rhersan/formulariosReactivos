import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.vs.nombreApellidoPAttern) ] ],
    email: ['', [ Validators.required, Validators.pattern(this.vs.emailPattern) ], [this.emailValidator] ],
    username: ['', [ Validators.required,this.vs.noPuedeSerStrider ] ] ,
    password: ['', [ Validators.required, Validators.minLength(6) ] ] ,
    password2: ['', [ Validators.required ] ] ,
  },{
    validators: [ this.vs.camposIguales('password','password2')  ]
  });

  emailError: string = '';

  get emailErrorMsg():  string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es Obligatorio'
    }else if(errors?.['pattern']){
      return 'El valor ingresado no es válido'
    }else if(errors?.['emailTomado']){
      return 'El email ya existe'
    }
    return '';
  }

  constructor(private fb: FormBuilder,
           private vs: ValidatorService,
           private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ricardo Hernandez',
      email: 'test1@test.com',
      username: 'rhernandez',
      password: '123456',
      password2: '123456',
    });
  }

  validaCampo(campo: string){
    return this.miFormulario.get(campo)?.invalid 
            && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
