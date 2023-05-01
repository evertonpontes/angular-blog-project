import { Component, OnInit, Input } from '@angular/core';

interface IData {
  imgUrl: string;
  imgAlt: string;
  caption: string;
  title: string;
}


@Component({
  selector: 'app-featured-article-small',
  templateUrl: './featured-article-small.component.html',
  styleUrls: ['./featured-article-small.component.css']
})
export class FeaturedArticleSmallComponent implements OnInit {

  @Input() data: IData = {
    imgUrl: "https://media.gettyimages.com/id/165719514/pt/foto/peru-de-a%C3%A7%C3%A3o-de-gra%C3%A7as.jpg?s=612x612&w=0&k=20&c=AtQeX2oJ0azyE21SquI3NYqtznLMobgXxQfAipRcWoo=",
    imgAlt: "Perú de natal",
    caption: "Dezembro 10, 2022",
    title: "Aprenda a fazer o melhor peru de Natal: dicas e truques para uma receita deliciosa e suculenta"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
