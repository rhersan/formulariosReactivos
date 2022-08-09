import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    const urlApi = ` http://localhost:3000/usuarios?q=${ email }`
    return this.http.get<any[]>(urlApi)
            .pipe(
              // delay(1000),
              map( resp => {
                return (resp.length === 0)
                        ? null
                        : {emailTomado: true}
              })
            )

  }
}
