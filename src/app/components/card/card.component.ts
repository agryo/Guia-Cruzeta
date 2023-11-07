import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NegocioData } from 'src/app/models/negocioData';
import { NegocioDto } from 'src/app/models/NegocioDto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() negocio!:NegocioData
  @Input() info!:NegocioDto
  visivel: boolean = false;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {

  }

  mostrarDetalhes() {
    this.apiService.listarNegocioId(this.negocio.id).subscribe((res: NegocioDto) => {
      this.info = (res as NegocioDto)
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
