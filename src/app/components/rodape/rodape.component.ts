import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html'
})
export class RodapeComponent implements OnInit {
  siteLink: string = ''
  instagram: string = ''
  twitter: string = ''
  github: string = ''

  constructor() {
  }

  ngOnInit(): void {
    this.siteLink = environment.siteLink
    this.instagram = environment.instagram
    this.twitter = environment.twitter
    this.github = environment.github
  }
}
