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
isEnabled: boolean = true;
isEnableWords: boolean = false;

constructor() {
   this.text
}

@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
  if(event.key == " "){
    this.isEnabled = false;
    this.isEnableWords = true;
    this.getDummy();
  }
}

  getDummy(){
    this.text = "BAD";
  }
}
