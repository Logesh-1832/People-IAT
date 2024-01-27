import { Injectable } from '@angular/core';

@Injectable()

export class Globals{
    baseImgPath:string = "./assets/Peoples/";

    negativeWordsArray:any = [
        {name:"Hate",value:"i"},
        {name:"Poison",value:"i"},
        {name:"Nasty",value:"i"}, 
        {name:"Disgust",value:"i"}, 
        {name:"Horrific",value:"i"}, 
        {name:"Abuse",value:"i"},
        {name:"Pain",value:"i"},
        {name:"Detest",value:"i"},
    ];

    positveWordsArray:any = [
        {name:"Enjoy",value:"e"},
        {name:"Pleasing",value:"e"},
        {name:"Excellent",value:"e"}, 
        {name:"Laughing",value:"e"}, 
        {name:"Celebrate",value:"e"}, 
        {name:"Love",value:"e"},
        {name:"Fantastic",value:"e"},
        {name:"Lovely",value:"e"},
    ];
   
    bothWordsArray:any = [ "Hate", "Poison", "Nasty", "Disgust", "Horrific", "Abuse", "Pain", "Detest" , "Enjoy", "Pleasing", "Excellent", "Laughing", "Celebrate", "Love", "Fantastic", "Lovely" ];

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

    bothPeopleArray:any = [ "RP1", "RP2", "RP3", "RP4", "RP5", "NP1", "NP2", "NP3" , "NP4", "NP5" ];

}
