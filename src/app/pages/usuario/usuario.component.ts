import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService]
})
export class UsuarioComponent implements OnInit {
  uploadedFiles: any[] = [];
  selectedState: any = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
  }

  dropdownItems = [
      { uf: 'Rio Grande do Norte', code: 'RN' },
      { uf: 'Paraiba', code: 'PB' },
      { uf: 'Pernambuco', code: 'PE' }
  ];

  onUpload(event: any) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }
}
