import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPAttern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  

  constructor() { }

 noPuedeSerStrider (ctrl: FormControl): ValidationErrors|null {
    console.log(ctrl.value);
    const valor = ctrl.value?.trim().toLowerCase();

    if(valor === 'strider'){
      return {
        noStrider: true
      }
    }

    return null;
  }

  camposIguales(campos1: string, campos2: string){

    return (formGroup: AbstractControl ): ValidationErrors | null  => {
      const pass1 = formGroup.get(campos1)?.value;
      const pass2 = formGroup.get(campos2)?.value;

      console.log(pass1,pass2);
      if(pass1 !== pass2){
        formGroup.get(campos2)?.setErrors({noIguales: true})
        return {
          noIguales: true
        }
      }

      formGroup.get(campos2)?.setErrors(null)


      return null;
    }
  }
}
