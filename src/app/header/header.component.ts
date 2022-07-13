import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public siteUrl: string = environment.url;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleClick(): void {
    setTimeout(() => {
      let element = document.querySelector('#navbarSupportedContent') as HTMLElement;
      let header = document.querySelector('#header') as HTMLElement;
      if (element.classList.contains('show')) {
        header.classList.add('toggle-clicked');
      } else {
        header.classList.remove('toggle-clicked');
      }
    }, 400);
  }

}
