import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-first-trial',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './first-trial.component.html',
  styleUrl: './first-trial.component.css'
})
export class FirstTrialComponent {
text:string = '';
positveArray:any = [
  {name:"Enjoy",value:"e"},
  {name:"Pleasing",value:"e"},
  {name:"Excellent",value:"e"}, 
  {name:"Laughing",value:"e"}, 
  {name:"Celebrate",value:"e"}, 
  {name:"Love",value:"e"},
  {name:"Fantastic",value:"e"},
  {name:"Lovely",value:"e"},
];

negativeArray:any = [
  {name:"Hate",value:"i"},
  {name:"Poison",value:"i"},
  {name:"Nasty",value:"i"}, 
  {name:"Disgust",value:"i"}, 
  {name:"Horrific",value:"i"}, 
  {name:"Abuse",value:"i"},
  {name:"Pain",value:"i"},
  {name:"Detest",value:"i"},
];
bothArray:any = [ "Hate", "Poison", "Nasty", "Disgust", "Horrific", "Abuse", "Pain", "Detest" , "Enjoy", "Pleasing", "Excellent", "Laughing", "Celebrate", "Love", "Fantastic", "Lovely" ]

isEnabled: boolean = true;
isEnableWords: boolean = false;
date:any | undefined;
istrue: boolean = false;
constructor() {
   this.text
}

@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
  if(event.key == " "){
    this.isEnabled = false;
    this.isEnableWords = true;
    this.text = this.positveArray[0].name;
  }

  if(event.key.toLowerCase() == "e"){
    this.isEnabled = false;
    this.isEnableWords = true;
    this.checkPositive();
  }

  if(event.key.toLowerCase() == "i"){
    this.isEnabled = false;
    this.isEnableWords = true;
    this.checkNegative();
  }

 }

  checkPositive(){
    this.istrue = false;
    let a = this.positveArray.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomWords();
      }
    }
    else{
      this.istrue = true;
    }
    // this.date = Date.now()
    // console.log(this.date);
    // for(let i = 0; i<this.arr.length; i++){
    //   this.text = this.arr[i];
    // }
  }

  checkNegative(){
    this.istrue = false;
    let a = this.negativeArray.filter( (x: { name: string; }) => x.name == this.text);
    if(a.length != 0){
      if(this.text == a[0].name){
        this.getRandomWords();
      }
    }
    else{
      this.istrue = true;
    }
  }

  getRandomWords(){
    var ri = Math.floor(Math.random() * this.bothArray.length);
    var rs = this.bothArray.splice(ri, 1);
    if( rs.length != 0){
      this.text = rs[0];
    }
    else{
      this.text = " ";
    }
  }
}

