import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1995-01-02"
  urlImagem = "/assets/image.png"

  mostrarDataNascimento() {
    alert(`Data de nascimento do João é: ${this.dataNascimento}`)
  }
}
