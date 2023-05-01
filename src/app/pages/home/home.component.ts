import { Component, OnInit } from '@angular/core';
import { dbFake } from '../../db/dbFake';

interface IData {
  imgUrl: string;
  imgAlt: string;
  caption: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mainArticle: IData = dbFake[0];

  constructor() { }

  ngOnInit(): void {
  }

}
