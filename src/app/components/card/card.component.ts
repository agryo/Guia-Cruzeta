import { Component, Input, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() negocio:NegocioData

  constructor() {
    this.negocio = {
      nome:"",
      logomarca:"",
      descricao:"",
      telefone:""
    }
  }

  ngOnInit(): void {
  }
}
