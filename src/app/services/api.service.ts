import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';

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
  private baseAPIUpload: string = ""
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
    this.baseAPIUpload = environment.apiUrlUpload
  }

  listarNegocios():Observable<any> {
    this.dados = this.http.get<any>(`${this.baseAPINegocio}`)
    return this.dados
  }

  listarNegocioId(id: string):Observable<any> {
    return this.dados = this.http.get<any>(`${this.baseAPINegocio}/${id}`)
  }

  listarNegociosHome():Observable<any> {
    return this.dados = this.http.get<any>(`${this.baseAPIHome}/4`)
  }

  listarBusca(busca: string = ''):Observable<any> {
    return this.dados = this.http.get<any>(`${this.baseAPIBusca}/${busca}`)
  }

  salvarNegocio(usurioId: string, negocio: NegocioDto):Observable<NegocioDto> {
    /*
    console.log('Entrou no método da API')
    console.log(`Link ${this.baseAPIUsuario}/${usurioId}`)
    console.log(negocio)
    */
    return this.http.post<NegocioDto>(`${this.baseAPIUsuario}/${usurioId}/negocios`, negocio, this.httpOptionsJSON)
  }

  salvarUsuario(usuario: UsuarioDto):Observable<UsuarioDto> {
    /*
    console.log('Entrou no método da API')
    console.log(`Link: ${this.baseAPIUsuario}`)
    console.log(usuario)
    */
    return this.http.post<UsuarioDto>(`${this.baseAPIUsuario}`, usuario, this.httpOptionsJSON)
  }

  salvarLogo(file: FormData): Observable<string> {
    /*
    console.log("Entrou na API de Upload")
    console.log(`Link: ${this.baseAPIUpload}`)
    console.log(file)
    */
    return this.http.post<string>(this.baseAPIUpload, file)
  }

}
