import { Component, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {
  visivel: boolean = false
  negocio: NegocioData

  constructor() {
    this.negocio = {
      logomarca: '',
      nome: '',
      telefone: '',
      descricao: ''
    }
   }

  ngOnInit(): void {  }

  fecharDetalhes() {
    this.visivel = false
  }
}
