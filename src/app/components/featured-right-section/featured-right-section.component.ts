import { Component, OnInit } from '@angular/core';
import { dbFake } from '../../db/dbFake';

@Component({
  selector: 'app-featured-right-section',
  templateUrl: './featured-right-section.component.html',
  styleUrls: ['./featured-right-section.component.css']
})
export class FeaturedRightSectionComponent implements OnInit {

  dbArticles = dbFake.splice(1, 3);

  constructor() { }

  ngOnInit(): void {
  }

}
