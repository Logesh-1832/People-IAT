import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Globals } from '../app.global';

@Component({
  selector: 'app-sixth-trial',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sixth-trial.component.html',
  styleUrl: './sixth-trial.component.css'
})
export class SixthTrialComponent {
  
  constructor(private globals: Globals){}

  negativeWordList: any;
  positiveWordList: any;
  bothWordsArray: any;
  richPeopleArray: any;
  normalPeopleArray: any;
  bothPeople: any;
  text:string = '';
  imgPath: string = '';
  baseSrc:string = './assets/Peoples/';
  isEnabled: boolean = true;
  isEnableWords: boolean = false;
  isEnableImages: boolean = false;
  date:any | undefined;
  isWrong: boolean = false;
  isNext: boolean = false;
  isImg: boolean = true;
  isImage: boolean = false;

  ngOnInit() {
    this.richPeopleArray = this.globals.richPeopleArray;
    this.normalPeopleArray = this.globals.normalPeopleArray;
    this.bothPeople = this.globals.bothPeopleArray;
    this.negativeWordList = this.globals.negativeWordsArray;
    this.positiveWordList = this.globals.positveWordsArray;
    this.bothWordsArray = this.globals.bothWordsArray;  

    this.richPeopleArray = this.richPeopleArray.concat(this.negativeWordList);
    this.normalPeopleArray = this.normalPeopleArray.concat(this.positiveWordList);
    this.bothWordsArray = this.bothWordsArray.concat(this.bothPeople);
  }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == " " && !this.isNext){
      this.isEnabled = false;
      this.isEnableImages = true;
      this.text = this.richPeopleArray[0].name;
      this.imgPath = this.baseSrc + this.richPeopleArray[0].name + ".jpg";
    }
  
    if(event.key.toLowerCase() == "e"){
      this.isEnabled = false;
      this.checkRichPeople();
    }
  
    if(event.key.toLowerCase() == "i"){
      this.isEnabled = false;
      this.checkNormalPeople();
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
    // let b = this.negativeArray.fliter( (x: { name: string; })=> x.name == this.text);
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
    var ri = Math.floor(Math.random() * this.bothWordsArray.length);
    var rs = this.bothWordsArray.splice(ri, 1);
    this.checkifImg(rs[0]);
   if(this.isImage){
    if( rs.length != 0){
      this.text = rs[0]
      this.imgPath =this.baseSrc + rs[0] + ".jpg";
      this.isEnableImages = true;
    }
    else{
      this.text = " ";
      this.isEnableImages = false;
    }
   }
   else{
    if( rs.length != 0){
      this.text = rs[0];
      this.isEnableImages = false;
    }
    else{
      this.text = " ";
      this.isEnableImages = false;
    }
   }
    if(this.bothWordsArray.length == 0 && this.text == " "){
      this.isNext = true;
      this.isImg = false;
    } 
  }

 checkifImg(data: string){
    let a = this.bothPeople.filter( ((x: string) => x == data));
    if(a.length !=0 ){
      this.isImage = true;
      this.isEnableWords = false;
    }
    else{
      this.isImage = false;
      this.isEnableWords = true;
    }
  }

}
