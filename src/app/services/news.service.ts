import { Injectable } from '@angular/core';
import { INews } from '../interfaces/news.interface';
import { Observable, of } from 'rxjs';
import { dataFake } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getNews(): Observable<INews[]> {
    return of(dataFake);
  }
}
