import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class UsuarioComponent implements OnInit {
  estadoSelecionado: any = null;
  cidadeSelecionada: any = null;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
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
