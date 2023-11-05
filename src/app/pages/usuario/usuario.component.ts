import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { usuarioData } from 'src/app/models/usuarioData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService, MessageService, ApiService]
})
export class UsuarioComponent implements OnInit {
  nome: string = ''
  cpf: string = ''
  email: string = ''
  tel: string = ''
  cel: string = ''
  logradouro: string = ''
  numero: string = ''
  bairro: string = ''
  cidadeSelecionada: any = null;
  cep: string = ''
  estadoSelecionado: any = null;
  latitude: number = 0
  longitude: number = 0

  usuario: usuarioData | undefined

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private apiService: ApiService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  dropdownItemsEstado = [
    { uf: 'Rio Grande do Norte', code: 'RN' },
  ];

  dropdownItemsCidade = [
    { cidade: 'Cruzeta', code: 'Cruzeta'}
  ];

  salvarCadastro() {
    console.log('Foi salvar uma')
    this.confirmationService.confirm({
      message: 'Você confirma que todas as informações estão corretas:',
      header: 'Confimar registro',
      icon: 'pi pi-check',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        console.log('Salvar')
        this.usuario = {
          nome: this.nome,
          cpf: this.cpf,
          email: this.email,
          enderecos: [{
            logradouro: this.logradouro,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidadeSelecionada.code,
            cep: this.cep,
            uf: this.estadoSelecionado.code,
            coordenadas: {
              latitude: this.latitude,
              longitude: this.longitude
            }
          }],
          telefones: [
            { numero: this.tel },
            { numero: this.cel }
          ]
        }
        console.log(this.usuario)
        this.apiService.salvarUsuario(this.usuario)
        this.messageService.add({ severity: 'success', summary: 'Salvo', detail: 'Usuário salvo com sucesso!' });
        this.confirmationService.close()
      },
      reject: () => {
        console.log('Cancelado!')
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'O usuário não foi salvo!' });
        this.confirmationService.close()
      }
    });
  }

  cancelarCadastro() {
    console.log('Foi cancelar uma')
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja cancelar o cadastro?',
      header: 'Confirmar cancelamento',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        console.log('Cancelado')
        this.router.navigate(['/'])
      },
      reject: () => {
        console.log('Cancelado o cancelamento')
        this.confirmationService.close()
      }
    });
  }

}
