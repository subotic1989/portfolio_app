import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  strings = [
    "I'm Dejan",
    "I'm a Developer",
    "I'm Creative",
    'I Love to Develop',
  ];
}
