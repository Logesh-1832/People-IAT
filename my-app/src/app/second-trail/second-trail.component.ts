import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Globals } from '../app.global';

@Component({
  selector: 'app-second-trail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './second-trail.component.html',
  styleUrl: './second-trail.component.css'
})
export class SecondTrailComponent {
  constructor(private globals: Globals){}
  
  text:string = '';
  positiveWordList:any;
  negativeWordList:any;
  bothWordsArray:any;
  isEnabled: boolean = true;
  isEnableWords: boolean = false;
  date:any | undefined;
  isWrong: boolean = false;
  isNext: boolean = false;
  isStarted: boolean = false;

  ngOnInit(){
    this.negativeWordList = this.globals.negativeWordsArray;
    this.positiveWordList = this.globals.positveWordsArray;
    this.bothWordsArray = this.globals.bothWordsArray;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == " " && !this.isNext && !this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.text = this.positiveWordList[0].name;
      this.isStarted = true;
    }
  
    if(event.key.toLowerCase() == "e" && this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.checkNegative();
    }
  
    if(event.key.toLowerCase() == "i" && this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
     this.checkPositive();
    }
  }
  
  checkPositive(){
    this.isWrong = false;
    let a = this.positiveWordList.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomWords();
      }
    }
    else if(!this.isNext){
      this.isWrong = true;
    }
    // this.date = Date.now()
    // console.log(this.date);
    // for(let i = 0; i<this.arr.length; i++){
    //   this.text = this.arr[i];
    // }
  }
  
  checkNegative(){
    this.isWrong = false;
    let a = this.negativeWordList.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomWords();
      }
    }
    else if(!this.isNext){
      this.isWrong = true;
    }
  }
  
  getRandomWords(){
    var ri = Math.floor(Math.random() * this.bothWordsArray.length);
    var rs = this.bothWordsArray.splice(ri, 1);
    if( rs.length != 0){
      this.text = rs[0];
    }
    else{
      this.text = " ";
    }
      
    if(this.bothWordsArray.length == 0 && this.text == " "){
      this.isNext = true;
      this.text = " ";
    } 
  }
  
}
