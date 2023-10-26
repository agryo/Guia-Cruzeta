import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NegocioData } from 'src/app/models/negocioData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: string | undefined = ''
  negocioInfo: NegocioData[] = []

  constructor( private apiService: ApiService, private router: Router ) {

  }

  ngOnInit(): void {
    this.apiService.listarNegociosHome().subscribe((res: any) => {
      this.negocioInfo = res.map((item: any) => {
        return {
          nome: item.nome,
          telefone: item.telefones[0]?.numero ?? 'Sem telefone', // Pega o primeiro número da lista ou undefined se a lista não existir
          descricao: item.descricao
        };
      });
    });
  }

  buscar() {
    //console.log("Teste funcionando, recebendo " + this.value)

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
