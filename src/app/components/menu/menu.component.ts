import { Component, HostListener, OnInit } from '@angular/core';
import { TemaService } from "../../services/tema.service";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[]
  isMenuFixed = false
  tema: string = 'dark-blue'
  buttonTema: {
    icon: string
  };

  constructor(private temaService: TemaService) {
    this.buttonTema = { icon: 'pi pi-sun' };
  }

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
            icon: 'pi pi-fw pi-history',
            routerLink: '/guia'
          },
          {
            label: 'Cruzeta',
            icon: 'pi pi-fw pi-history',
            routerLink: '/cruzeta'
          }
        ]
      },
      {
        label: 'Guia',
        icon: 'pi pi-fw pi-compass',
        items: [
          {
            label: 'Negócios',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: '/negocios'
          },
          {
            label: 'Serviços',
            icon: 'pi pi-fw pi-wrench',
            routerLink: '/servicos'
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
                    icon: 'pi pi-fw pi-sort-alt',
                    routerLink: '/rotas'
                  }
                ]
              },
              {
                label: 'Locais',
                icon: 'pi pi-fw pi-map-marker',
                routerLink: '/locais'
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
            label: 'Feriados',
            icon: 'pi pi-fw pi-calendar-minus',
            routerLink: '/feriados'
          },
          {
            label: 'Festividades',
            icon: 'pi pi-fw pi-gift',
            items: [
              {
                label: 'Públicas',
                icon: 'pi pi-fw pi-calendar-plus',
                routerLink: '/publicos'
              },
              {
                label: 'Privadas',
                icon: 'pi pi-fw pi-calendar-minus',
                routerLink: '/privados'
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

  mudarTema() {
    if (this.tema === 'dark-blue') {
      // Muda o tema
      this.tema = 'light-blue'
      // Altera o ícone do botão
      this.buttonTema.icon = 'pi pi-moon'
      // Altera o import do CSS
      this.temaService.switchTheme('light-blue')
    } else {
      // Muda o tema
      this.tema = 'dark-blue'
      // Altera o ícone do botão
      this.buttonTema.icon = 'pi pi-sun'
      // Altera o import do CSS
      this.temaService.switchTheme('dark-blue')
    }
  }
}
