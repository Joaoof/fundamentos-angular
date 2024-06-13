import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.messagens.push(mensagem);
  }

  exibeTodosOsLogs() {
    console.log(this.messagens);
  }
}
