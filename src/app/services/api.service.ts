import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseAPI: string = ""
  private baseAPIBusca: string = ""
  private baseAPIHome: string = ""
  private dados: any

  constructor( private http:HttpClient ) {
    this.baseAPI = environment.apiUrl
    this.baseAPIBusca = environment.apiUrlBusca
    this.baseAPIHome = environment.apiUrlHome
  }

  listarNegocios():Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPI}`)
    return this.dados
  }

  listarNegocioId(id: string):Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPI}/${id}`)
    return this.dados
  }

  listarNegociosHome():Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPIHome}/4`)
    return this.dados
  }

  listarBusca(busca: string = ''):Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPIBusca}/${busca}`)
    return this.dados
  }
}
