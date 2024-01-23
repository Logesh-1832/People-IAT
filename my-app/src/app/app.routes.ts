import { Routes } from '@angular/router';
import { FirstTrialComponent } from './First-Trial/first-trial/first-trial.component';
import { IntroPageComponent } from './intro-page/intro-page.component';

export const routes: Routes = [
    {path: '', component: IntroPageComponent},
    {path: 'first-trial', component: FirstTrialComponent},
];
