import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent implements OnInit {
  siteLink: string = ''

  constructor() {
  }

  ngOnInit(): void {
    this.siteLink = environment.siteLink
  }

}
