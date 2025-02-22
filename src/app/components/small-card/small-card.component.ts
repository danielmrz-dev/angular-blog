import { Component, Input } from '@angular/core';
import { INoticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() card!: INoticia;
}
