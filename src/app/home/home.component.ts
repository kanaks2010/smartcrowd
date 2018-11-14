import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss', './home.component.scss']
})
export class HomeComponent implements OnInit {
  hideWelcome: Boolean;
  constructor() { }

  ngOnInit() {
    this.hideWelcome = false;
  }

}
