import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseAPI: string = ""
  private dados: any

  constructor( private http:HttpClient ) {
    this.baseAPI = environment.apiUrl
  }

  listarNegocios():Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPI}`)
    return this.dados
  }

  listarBusca(busca: string = ''):Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPI}/buscar/${busca}`)
    return this.dados
  }
}
