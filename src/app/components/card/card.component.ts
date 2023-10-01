import { Component, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  negocio:NegocioData | any
  nome:string = ""

  constructor( private service:ApiService ) {

  }

  ngOnInit(): void {
    this.service.listarNegocios().subscribe(
      {
        next: (res) => {
          this.negocio =
            {
              id: res.id,
              nome: res.nome,
              descricao: res.descricao,
              numero: res.telefones[0].numero
            }
        },
        error: (err) => console.log(err)
      }
    )
  }
}
