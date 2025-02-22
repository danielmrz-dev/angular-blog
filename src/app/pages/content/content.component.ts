import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from 'src/app/interfaces/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  card!: INews;
  constructor(
    private route: ActivatedRoute,
    private readonly _newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((value) => {
      const id: number = Number(value.get("id")) - 1;
      this._newsService.getNews().pipe(take(1)).subscribe((news) => {
        this.card = news[id];
      })
    })
  }
}
