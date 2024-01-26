import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-third-trial',
  standalone: true,
  imports: [CommonModule,RouterLink ],
  templateUrl: './third-trial.component.html',
  styleUrl: './third-trial.component.css'
})
export class ThirdTrialComponent {
  text:string = '';
  imgPath: string = '';
  baseSrc:string = './assets/Peoples/';
  richPeopleArray:any = [
    {name:"RP1",value:"e"},
    {name:"RP2",value:"e"},
    {name:"RP3",value:"e"}, 
    {name:"RP4",value:"e"}, 
    {name:"RP5",value:"e"},
  ];
  
  normalPeopleArray:any = [
    {name:"NP1",value:"i"},
    {name:"NP2",value:"i"},
    {name:"NP3",value:"i"}, 
    {name:"NP4",value:"i"}, 
    {name:"NP5",value:"i"}, 
  ];
  bothArray:any = [ "RP1", "RP2", "RP3", "RP4", "RP5", "NP1", "NP2", "NP3" , "NP4", "NP5" ]
  
  isEnabled: boolean = true;
  isEnableWords: boolean = false;
  date:any | undefined;
  isWrong: boolean = false;
  isNext: boolean = false;
  isImg: boolean = true;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.key == " " && !this.isNext){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.text = this.richPeopleArray[0].name;
      this.imgPath = this.baseSrc + this.richPeopleArray[0].name + ".jpg";
    }
  
    if(event.key.toLowerCase() == "e"){
      this.isEnabled = false;
      this.isEnableWords = true;
      this.checkNormalPeople();
    }
  
    if(event.key.toLowerCase() == "i"){
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
