import { Component, Input } from '@angular/core';
import { INews } from 'src/app/interfaces/news.interface';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input() card!: INews;
}
