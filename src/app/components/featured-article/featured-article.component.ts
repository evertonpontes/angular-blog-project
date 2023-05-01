import { Component, OnInit, Input } from '@angular/core';

interface IData {
  imgUrl: string;
  imgAlt: string;
  caption: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.css']
})
export class FeaturedArticleComponent implements OnInit {

  @Input() data: IData = {
    imgUrl: "https://media.gettyimages.com/id/165719514/pt/foto/peru-de-a%C3%A7%C3%A3o-de-gra%C3%A7as.jpg?s=612x612&w=0&k=20&c=AtQeX2oJ0azyE21SquI3NYqtznLMobgXxQfAipRcWoo=",
    imgAlt: "Perú de natal",
    caption: "Dezembro 10, 2022",
    title: "Aprenda a fazer o melhor peru de Natal: dicas e truques para uma receita deliciosa e suculenta",
    description: "Se você está procurando por uma receita de peru de Natal incrível, este artigo é para você. Aqui você vai encontrar dicas valiosas para escolher o peru perfeito, temperá-lo de forma saborosa e assá-lo com perfeição."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
