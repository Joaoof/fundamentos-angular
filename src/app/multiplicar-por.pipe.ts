import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicarPor'
})
export class MultiplicarPorPipe implements PipeTransform {

  transform(valor: number, multiplicar: number): unknown {
    return valor * multiplicar;
  }

}
