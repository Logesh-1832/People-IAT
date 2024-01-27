import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Globals } from '../app.global';

@Component({
  selector: 'app-third-trial',
  standalone: true,
  imports: [CommonModule,RouterLink ],
  templateUrl: './third-trial.component.html',
  styleUrl: './third-trial.component.css'
})
export class ThirdTrialComponent {
  constructor(private globals: Globals){}

  text:string = '';
  imgPath: string = '';
  baseSrc:string = './assets/Peoples/';
  richPeopleArray:any; 
  normalPeopleArray:any;
  bothArray:any;
  isEnabled: boolean = true;
  isEnableWords: boolean = false;
  date:any | undefined;
  isWrong: boolean = false;
  isNext: boolean = false;
  isImg: boolean = true;
  isStarted: boolean = false;

  ngOnInit() {
    this.richPeopleArray = this.globals.richPeopleArray;
    this.normalPeopleArray = this.globals.normalPeopleArray;
    this.bothArray = this.globals.bothPeopleArray;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == " " && !this.isNext && !this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.text = this.richPeopleArray[0].name;
      this.imgPath = this.baseSrc + this.richPeopleArray[0].name + ".jpg";
      this.isStarted = true;
    }
  
    if(event.key.toLowerCase() == "e" && this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.checkNormalPeople();
    }
  
    if(event.key.toLowerCase() == "i" && this.isStarted){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.checkRichPeople();
    }
  }
  
  checkRichPeople(){
    this.isWrong = false;
    let a = this.richPeopleArray.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomArray();
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

  checkNormalPeople(){
    this.isWrong = false;
    let a = this.normalPeopleArray.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomArray();
      }
    }
    else if(!this.isNext){
      this.isWrong = true;
    }
  }

  getRandomArray(){
    var ri = Math.floor(Math.random() * this.bothArray.length);
    var rs = this.bothArray.splice(ri, 1);
    if( rs.length != 0){
      this.text = rs[0]
      this.imgPath =this.baseSrc + rs[0] + ".jpg";
    }
    else{
      this.text = " ";
    }
    
    if(this.bothArray.length == 0 && this.text == " "){
      this.isNext = true;
      this.isImg = false;
    } 
  }

}
