import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-second-trail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './second-trail.component.html',
  styleUrl: './second-trail.component.css'
})
export class SecondTrailComponent {
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
  isWrong: boolean = false;
  isNext: boolean = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == " " && !this.isNext){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.text = this.positveArray[0].name;
    }
  
    if(event.key.toLowerCase() == "e"){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.checkNegative();
    }
  
    if(event.key.toLowerCase() == "i"){
      this.isEnabled = false;
      this.isEnableWords = true;
     this.checkPositive();
    }
  }
  
  checkPositive(){
    this.isWrong = false;
    let a = this.positveArray.filter( (x: { name: string; }) => x.name == this.text);
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
    let a = this.negativeArray.filter( (x: { name: string; }) => x.name == this.text);
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
    var ri = Math.floor(Math.random() * this.bothArray.length);
    var rs = this.bothArray.splice(ri, 1);
    if( rs.length != 0){
      this.text = rs[0];
    }
    else{
      this.text = " ";
    }
      
    if(this.bothArray.length == 0 && this.text == " "){
      this.isNext = true;
      this.text = " ";
    } 
  }
  
}
