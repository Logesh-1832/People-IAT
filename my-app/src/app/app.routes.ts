import { Routes } from '@angular/router';
import { FifthTrialComponent } from './fifth-trial/fifth-trial.component';
import { FirstTrialComponent } from './First-Trial/first-trial/first-trial.component';
import { FourthTrailComponent } from './fourth-trail/fourth-trail.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { SecondTrailComponent } from './second-trail/second-trail.component';
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


];
