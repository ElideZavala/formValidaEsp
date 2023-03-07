import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

function filtrarCaracteres(caracter: AbstractControl) {
  if (caracter.value == null) return null;
  let contenido = caracter.value;
  for (let i = 0; i < contenido.length; i++) {
    let letra = contenido.substr(i, 1); // ==> Se extraera un caracter de la cadena
    let valor = letra.charCodeAt(0); // ==> Se obtiene el valor del caracter
    if (!(valor >= 65 && valor <= 90)) {
      return { filtrarCaracteres: true };
    }
  }
  return null;
}

@Directive({
  selector: '[filtrar-caracteres]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: filtrarCaracteres },
  ],
})
export class FiltrarCaracteres {}
