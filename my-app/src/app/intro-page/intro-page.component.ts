import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Globals } from '../app.global';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent {
  negativeWordList: any;
  positiveWordList: any;
  richPeopleList: any;
  normalPeopleList: any;
  baseUrl: any;

  constructor(private globals: Globals){}
 
  ngOnInit(){
    this.negativeWordList = this.globals.negativeWordsArray;
    this.positiveWordList = this.globals.positveWordsArray;
    this.normalPeopleList = this.globals.normalPeopleArray;
    this.richPeopleList = this.globals.richPeopleArray;
    this.baseUrl = this.globals.baseImgPath;
 }

}
