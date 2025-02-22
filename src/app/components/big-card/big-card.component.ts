import { Component, Input } from '@angular/core';
import { INoticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() card!: INoticia;
}
