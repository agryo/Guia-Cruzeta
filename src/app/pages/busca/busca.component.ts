import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { NegocioData } from 'src/app/models/negocioData';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
  providers: [ MessageService ]
})
export class BuscaComponent implements OnInit {
  busca: string | undefined;
  negocioInfo: NegocioData[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
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
    if (this.busca === '') {
      // Exibe uma mensagem informando que o campo de busca está em branco
      this.messageService.add({ severity: 'info', summary: 'Digite algo', detail: 'O campo de busca está em branco.' })
      return // Retorna para evitar a execução do restante do código
    }

    this.apiService.listarBusca(this.busca).subscribe((res: any) => {
      if (res.status === 404) {
        // Exibe uma mensagem informando que a busca não foi localizada
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Nenhum resultado encontrado.' })
        // Limpa os resultados anteriores
        this.negocioInfo = []
      } else {
        // Atualiza o componente com os resultados da busca
        this.negocioInfo = res.map((item: any) => {
          return {
            id: item.id,
            nome: item.nome,
            logomarca: item.logomarca,
            telefone: item.telefones[0]?.numero ?? 'Sem telefone',
            descricao: item.descricao
          }
        })
      }
    })
  }

  verificarEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscarNome()
    }
  }
}
