import { Routes } from '@angular/router';
import { EightTrialComponent } from './eight-trial/eight-trial.component';
import { FifthTrialComponent } from './fifth-trial/fifth-trial.component';
import { FirstTrialComponent } from './First-Trial/first-trial/first-trial.component';
import { FourthTrailComponent } from './fourth-trail/fourth-trail.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { SecondTrailComponent } from './second-trail/second-trail.component';
import { SeventhTrialComponent } from './seventh-trial/seventh-trial.component';
import { SixthTrialComponent } from './sixth-trial/sixth-trial.component';
import { ThirdTrialComponent } from './third-trial/third-trial.component';

export const routes: Routes = [
    {path: '', component: IntroPageComponent},
    {path: 'first-trial', component: FirstTrialComponent},
    {path: 'second-trial', component: SecondTrailComponent},
    {path: 'third-trial', component: ThirdTrialComponent},
    {path: 'fourth-trial', component: FourthTrailComponent},
    {path: 'fifth-trial', component: FifthTrialComponent},
    {path: 'sixth-trial', component: SixthTrialComponent},
    {path: 'seventh-trial', component: SeventhTrialComponent},
    {path: 'eight-trial', component: EightTrialComponent},
    
];
