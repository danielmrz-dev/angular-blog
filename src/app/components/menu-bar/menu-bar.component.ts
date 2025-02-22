import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  socialMediaList = [
    {
      social: "Github",
      link: "https://github.com/danielmrz-dev"
    },
    {
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/danielmrz-dev/"
    },
    {
      social: "Twitter (X)",
      link: "https://x.com/danielmrz_dev"
    }
  ]

}
