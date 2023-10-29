import { Component, OnInit } from '@angular/core';
import { NegocioData } from 'src/app/models/negocioData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicoInfo: NegocioData[] = []

  constructor( private apiService: ApiService ){
  }

  ngOnInit(): void {
    this.apiService.listarNegocios().subscribe((res: any) => {
      this.servicoInfo = res.map((item: any) => {
        return {
          id: item.id,
          nome: item.nome,
          logomarca: item.logomarca,
          telefone: item.telefones[0]?.numero ?? 'Sem telefone', // Pega o primeiro número da lista ou undefined se a lista não existir
          descricao: item.descricao
        };
      });
    });
  }
}
