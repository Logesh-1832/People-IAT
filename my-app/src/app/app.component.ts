import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstTrialComponent } from "./First-Trial/first-trial/first-trial.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstTrialComponent, RouterLink]
})
export class AppComponent {
  title = 'my-app';
}
