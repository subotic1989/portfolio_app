import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss'],
})
export class PhraseComponent implements OnInit {
  constructor() {
    AOS.init({
      duration: 2000,
    });
  }

  ngOnInit(): void {}
}
