import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { INews } from 'src/app/interfaces/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bigCardData!: INews;
  smallCardsData!: INews[];

  constructor(private readonly _newsService: NewsService) {}

  ngOnInit(): void {
    this._newsService.getNews().subscribe((news) => {
      this.bigCardData = news[0];
      this.smallCardsData = news.slice(1);
    })
  }
}
