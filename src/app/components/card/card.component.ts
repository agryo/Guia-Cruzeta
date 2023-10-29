import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NegocioData } from 'src/app/models/negocioData';
import { NegocioInfoData } from 'src/app/models/negocioInfoData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() negocio!:NegocioData
  @Input() info!:NegocioInfoData
  visivel: boolean = false;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }

  mostrarDetalhes() {
    this.apiService.listarNegocioId(this.negocio.id).subscribe((res: NegocioInfoData) => {
      this.info = (res as NegocioInfoData)
    });

    if (this.visivel === false) {
      this.visivel = true
    }
    else {
      this.visivel = false
    }
  }

  fecharDetalhes() {
    this.visivel = false
  }
}
