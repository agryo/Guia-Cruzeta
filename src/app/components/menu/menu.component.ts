import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: '/'
          },
          {
              label: 'História',
              icon: 'pi pi-fw pi-book',
              items: [
                  {
                      label: 'Cruzeta',
                      icon: 'pi pi-fw pi-tag'
                  },
                  {
                      label: 'Guia-Cruzeta',
                      icon: 'pi pi-fw pi-tag'
                  }
              ]
          },
          {
              label: 'Usuários',
              icon: 'pi pi-fw pi-user',
              items: [
                  {
                      label: 'Novo',
                      icon: 'pi pi-fw pi-user-plus'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-user-minus'
                  },
                  {
                      label: 'Procurar',
                      icon: 'pi pi-fw pi-users',
                      items: [
                          {
                              label: 'Filtrar',
                              icon: 'pi pi-fw pi-filter',
                              items: [
                                  {
                                      label: 'Imprimir',
                                      icon: 'pi pi-fw pi-print'
                                  }
                              ]
                          },
                          {
                              icon: 'pi pi-fw pi-bars',
                              label: 'Lista'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Eventos',
              icon: 'pi pi-fw pi-calendar',
              items: [
                  {
                      label: 'Editar',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {
                              label: 'Salvar',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Delete',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  },
                  {
                      label: 'Arquivados',
                      icon: 'pi pi-fw pi-calendar-times',
                      items: [
                          {
                              label: 'Remove',
                              icon: 'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  }
              ]
          },
          {
              label: 'Sobre',
              icon: 'pi pi-fw pi-info-circle',
              routerLink: '/sobre'
          }
      ];
  }
}
