import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  isMenuFixed = false;

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
                      label: 'Guia-Cruzeta',
                      icon: 'pi pi-fw pi-history'
                  },
                  {
                      label: 'Cruzeta',
                      icon: 'pi pi-fw pi-history'
                  }
              ]
          },
          {
              label: 'Guia',
              icon: 'pi pi-fw pi-compass',
              items: [
                  {
                      label: 'Negócios',
                      icon: 'pi pi-fw pi-chart-line'
                  },
                  {
                      label: 'Serviços',
                      icon: 'pi pi-fw pi-wrench'
                  },
                  {
                      label: 'Turismo',
                      icon: 'pi pi-fw pi-sun',
                      items: [
                          {
                              label: 'Trilhas',
                              icon: 'pi pi-fw pi-map',
                              items: [
                                  {
                                      label: 'Rotas',
                                      icon: 'pi pi-fw pi-sort-alt'
                                  }
                              ]
                          },
                          {
                              label: 'Locais',
                              icon: 'pi pi-fw pi-map-marker'
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
                      label: 'Festividades',
                      icon: 'pi pi-fw pi-gift',
                      items: [
                          {
                              label: 'Públicas',
                              icon: 'pi pi-fw pi-calendar-plus'
                          },
                          {
                              label: 'Privadas',
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifique a posição de rolagem
    if (window.scrollY  > 100) { // Ajuste o valor conforme necessário
      this.isMenuFixed = true;
    } else {
      this.isMenuFixed = false;
    }
  }
}
