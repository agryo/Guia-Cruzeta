import { Component, Input, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() negocio:NegocioData
  logo:string = "../../../assets/imgs/logomarca.png"

  constructor() {
    this.negocio = {
      nome:"",
      telefone:"",
      descricao:""
    }
  }

  ngOnInit(): void {
  }
}
