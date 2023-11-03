import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NegocioData } from 'src/app/models/negocioData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: string | undefined = ''
  negocioInfo: NegocioData[] = []

  constructor(
    private apiService: ApiService,
    private router: Router ) {  }

  ngOnInit(): void {
    this.apiService.listarNegociosHome().subscribe((res: any) => {
      this.negocioInfo = res.map((item: any) => {
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

  buscar() {
    if (this.value != "") {
      this.router.navigate(['/buscar'], {
        queryParams: {
          query: this.value
        }
      });
    }
  }

  verificarEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.value != '') {
      this.buscar();
    }
  }
}
