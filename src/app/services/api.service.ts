import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "src/environments/environment";
import { UsuarioDto } from '../models/UsuarioDto';
import { NegocioDto } from "../models/NegocioDto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseAPIUsuario: string = ""
  private baseAPINegocio: string = ""
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
    this.baseAPIUsuario = environment.apiUrlUsuario
    this.baseAPINegocio = environment.apiUrlNegocio
    this.baseAPIBusca = environment.apiUrlBusca
    this.baseAPIHome = environment.apiUrlHome
  }

  listarNegocios():Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPINegocio}`)
    return this.dados
  }

  listarNegocioId(id: string):Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPINegocio}/${id}`)
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

  salvarNegocio(usurioId: string, negocio: NegocioDto):Observable<NegocioDto> {
    console.log('Entrou no método da API')
    console.log(`Link ${this.baseAPIUsuario}/${usurioId}`)
    console.log(negocio)
    return this.http.post<NegocioDto>(`${this.baseAPIUsuario}/${usurioId}/negocios`, negocio, this.httpOptionsJSON)
  }

  salvarUsuario(usuario: UsuarioDto):Observable<UsuarioDto> {
    console.log('Entrou no método da API')
    console.log(`Link ${this.baseAPIUsuario}`)
    console.log(usuario)
    return this.http.post<UsuarioDto>(`${this.baseAPIUsuario}`, usuario, this.httpOptionsJSON)
  }

}
