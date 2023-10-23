import { Component, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {
  negocioInfo: NegocioData[] = []

  constructor( private apiService: ApiService ) {

  }

  ngOnInit(): void {
    this.apiService.listarNegocios().subscribe((res: any) => {
      this.negocioInfo = res.map((item: any) => {
        return {
          nome: item.nome,
          telefone: item.telefones[0]?.numero ?? 'Sem telefone', // Pega o primeiro número da lista ou undefined se a lista não existir
          descricao: item.descricao
        };
      });
    });
  }
}
