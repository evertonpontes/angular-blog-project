import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: [
    './menu-bar.component.css',
    './menu-bar-responsive.css'
  ]
})
export class MenuBarComponent implements OnInit {

  dropDownDisplay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplayDropDown() {
    this.dropDownDisplay = !this.dropDownDisplay;
  }

}
