import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sixth-trial',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sixth-trial.component.html',
  styleUrl: './sixth-trial.component.css'
})
export class SixthTrialComponent {
  text:string = '';
  imgPath: string = '';
  baseSrc:string = './assets/Peoples/';
  richPeopleArray:any = [
    {name:"RP1",value:"e"},
    {name:"RP2",value:"e"},
    {name:"RP3",value:"e"}, 
    {name:"RP4",value:"e"}, 
    {name:"RP5",value:"e"},
    {name:"Poison",value:"i"},
    {name:"Nasty",value:"i"}, 
    {name:"Disgust",value:"i"}, 
    {name:"Horrific",value:"i"}, 
    {name:"Abuse",value:"i"},
    {name:"Pain",value:"i"},
    {name:"Detest",value:"i"},
    {name:"Hate",value:"i"},
  ];
  
  normalPeopleArray:any = [
    {name:"NP1",value:"i"},
    {name:"NP2",value:"i"},
    {name:"NP3",value:"i"}, 
    {name:"NP4",value:"i"}, 
    {name:"NP5",value:"i"}, 
    {name:"Enjoy",value:"e"},
    {name:"Pleasing",value:"e"},
    {name:"Excellent",value:"e"}, 
    {name:"Laughing",value:"e"}, 
    {name:"Celebrate",value:"e"}, 
    {name:"Love",value:"e"},
    {name:"Fantastic",value:"e"},
    {name:"Lovely",value:"e"},
  ];
   bothPeople:any = [ "RP1", "RP2", "RP3", "RP4", "RP5", "NP1", "NP2", "NP3" , "NP4", "NP5" ]
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
  bothArray:any = [ "Hate", "Poison", "Nasty", "Disgust", "Horrific", "Abuse", "Pain", "Detest" , "Enjoy", "Pleasing", "Excellent", "Laughing", "Celebrate", "Love", "Fantastic", "Lovely", "RP1", "RP2", "RP3", "RP4", "RP5", "NP1", "NP2", "NP3" , "NP4", "NP5" ]
  
  isEnabled: boolean = true;
  isEnableWords: boolean = false;
  isEnableImages: boolean = false;
  date:any | undefined;
  isWrong: boolean = false;
  isNext: boolean = false;
  isImg: boolean = true;
  isImage: boolean = false;

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
    var ri = Math.floor(Math.random() * this.bothArray.length);
    var rs = this.bothArray.splice(ri, 1);
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
    if(this.bothArray.length == 0 && this.text == " "){
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
