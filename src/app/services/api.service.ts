import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { NegocioData } from './../models/negocioData';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseAPI: string = ""
  private id: number = 1
  private dados: NegocioData | any

  constructor( private http:HttpClient ) {
    this.baseAPI = environment.apiUrl
  }

  listarNegocios():Observable<NegocioData> {
    this.dados = this.http.get<NegocioData>(`${this.baseAPI}${this.id}`)
    return this.dados
  }
}
