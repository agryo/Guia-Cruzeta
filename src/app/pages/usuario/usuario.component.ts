import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { NegocioDto } from 'src/app/models/NegocioDto';
import { UsuarioDto } from 'src/app/models/UsuarioDto';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService, MessageService, ApiService]
})
export class UsuarioComponent implements OnInit {
  baseApiUrlUpload: string = environment.apiUrlUpload
  uploadedFiles: any[] = []
  file: FormData = new FormData()

  usuario: UsuarioDto | undefined
  negocio: NegocioDto | undefined
  cadastroVisivel: boolean = false
  negociosVisivel: boolean = false

  id: string = ''
  nome: string = ''
  cpf: string = ''
  email: string = ''
  tel: string = ''
  cel: string = ''
  logradouro: string = ''
  numero: string = ''
  bairro: string = ''
  cidadeSelecionada: any = null
  cep: string = ''
  estadoSelecionado: any = null
  latitude: number = 0
  longitude: number = 0

  id_neg: number = 0
  nome_neg: string = ''
  logo_neg: string = ''
  descricao_neg: string = ''
  logradouro_neg: string = ''
  num_neg: string = ''
  bairro_neg: string = ''
  cidadeSelecionadaNeg: any = null
  estadoSelecionadoNeg: any = null
  cep_neg: string = ''
  lat_neg: number = 0
  long_neg: number = 0
  tel_neg: string = ''
  cel_neg: string = ''

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

  enviarLogo(event: FileUploadEvent) {
    console.log("Coleta do arquivo", event)
    const file_event: File = event.files[0]
    for(let file of event.files) {
      this.uploadedFiles.push(file)
    }
    console.log("uploadedFiles: ", this.uploadedFiles)
    console.log("file_event: ", file_event)
    this.file.append('file', file_event, file_event.name)

    console.log("PEGOU!!!")
    if (this.file.has('file')) {
      // Aqui você pode implementar a lógica de upload para o seu servidor
      this.apiService.salvarLogo(this.file).subscribe(
        (response: any) => {
          if (response.success) {
            this.logo_neg = response.data.logo_url
            console.log('Link da imagem:', this.logo_neg)
            this.messageService.add({ severity: 'info', summary: 'Sucesso', detail: response.message })
          } else {
            console.error('Erro durante a requisição:', response.message)
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: response.message })
          }
        },
        (error) => {
          console.error('Erro durante a requisição:', error)
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro durante o upload' })
        }
      )
    } else {
      console.log('Nenhum arquivo selecionado.')
    }
  }

  salvarCadastro() {
    console.log('Foi salvar uma')
    this.confirmationService.confirm({
      message: 'Você confirma que todas as informações estão corretas:',
      header: 'Confimar registro',
      icon: 'pi pi-check',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.usuario = {
          id: this.id,
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

        this.apiService.salvarUsuario(this.usuario).subscribe({
          next: (response) => {
            console.log('Usuário salvo com sucesso', response);
            this.id = response.id
            console.log(this.id)
            this.messageService.add({ severity: 'success', summary: 'Salvo', detail: 'Usuário salvo com sucesso!' });
          },
          error: (err) => {
            console.error('Erro ao salvar usuário', err);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar usuário!' });
          }
        });

        this.confirmationService.close()
      },
      reject: () => {
        console.log('Cancelado!')
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'O usuário não foi salvo!' });
        this.confirmationService.close()
      }
    });
  }

  salvarNegocio() {
    console.log('Foi salvar uma')
    this.confirmationService.confirm({
      message: 'Você confirma que todas as informações estão corretas:',
      header: 'Confimar registro',
      icon: 'pi pi-check',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.negocio = {
          nome: this.nome_neg,
          logomarca: this.logo_neg,
          descricao: this.descricao_neg,
          endereco: {
            logradouro: this.logradouro_neg,
            numero: this.num_neg,
            bairro: this.bairro_neg,
            cidade: this.cidadeSelecionadaNeg.code,
            cep: this.cep_neg,
            uf: this.estadoSelecionadoNeg.code,
            coordenadas: {
              latitude: this.lat_neg,
              longitude: this.long_neg
            }
          },
          telefones: [
            { numero: this.tel_neg },
            { numero: this.cel_neg }
          ]
        }
        console.log(this.negocio)

        this.apiService.salvarNegocio(this.id, this.negocio).subscribe({
          next: (response) => {
            console.log('Negócio salvo com sucesso', response);
            this.messageService.add({ severity: 'success', summary: 'Salvo', detail: 'Negócio salvo com sucesso!' });
          },
          error: (err) => {
            console.error('Erro ao salvar negócio', err);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao salvar negócio!' });
          }
        });

        this.confirmationService.close()
        this.fecharCadastroNegocio()
      },
      reject: () => {
        console.log('Cancelado!')
        this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'O negócio não foi salvo!' });
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

  mostrarCadastroNegocio() {
    /* Pode ser que use
    this.apiService.listarNegocioId(this.negocio.id).subscribe((res: NegocioInfoData) => {
      this.info = (res as NegocioInfoData)
    });
    */

    if (this.cadastroVisivel === false) {
      this.cadastroVisivel = true
    }
    else {
      this.cadastroVisivel = false
    }
  }

  fecharCadastroNegocio() {
    this.cadastroVisivel = false
  }

  mostrarNegocios() {

    if (this.negociosVisivel === false) {
      this.negociosVisivel = true
    }
    else {
      this.negociosVisivel = false
    }
  }

  fecharNegocios() {
    this.negociosVisivel = false
  }

}
