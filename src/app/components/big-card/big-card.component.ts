import { Component, Input } from '@angular/core';
import { INews } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() card!: INews;
}
