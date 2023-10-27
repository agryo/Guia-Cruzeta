import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { NegocioData } from 'src/app/models/negocioData';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  busca: string | undefined;
  negocioInfo: NegocioData[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      map((params: Params) => params['query'])
    ).subscribe((query: string | undefined) => {
      this.busca = query
      this.buscarNome()
    });
  }

  buscarNome() {
    //console.log("Teste funcionando, recebendo " + this.busca)

    if (this.busca === '') {
      return;
    }

    this.apiService.listarBusca(this.busca).subscribe((res: any) => {
      this.negocioInfo = res.map((item: any) => {
        return {
          nome: item.nome,
          logomarca: item.logomarca,
          telefone: item.telefones[0]?.numero ?? 'Sem telefone', // Pega o primeiro número da lista ou undefined se a lista não existir
          descricao: item.descricao
        };
      });
    });
  }

  verificarEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (this.busca != '') {
        this.buscarNome();
      }
    }
  }
}
