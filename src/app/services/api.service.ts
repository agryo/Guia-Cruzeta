import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { UsuarioDto } from '../models/UsuarioDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseAPIRoot: string = ""
  private baseAPI: string = ""
  private baseAPIBusca: string = ""
  private baseAPIHome: string = ""
  private dados: any

  private httpOptionsJSON = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Authorization': 'seu-token-de-autenticação'
    })
  };

  constructor( private http:HttpClient ) {
    this.baseAPIRoot = environment.apiUrlRoot
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

  salvarUsuario(usuario: UsuarioDto):Observable<UsuarioDto> {
    console.log('Entrou no método da API')
    console.log(`Link ${this.baseAPIRoot}`)
    console.log(usuario)
    return this.http.post<UsuarioDto>(`${this.baseAPIRoot}`, usuario, this.httpOptionsJSON)
  }
}
