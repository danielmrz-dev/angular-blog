import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { INoticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bigCardData: INoticia = dataFake[0];
  smallCardsData: INoticia[] = dataFake.slice(1);

  ngOnInit(): void {
  }

}
