import { Routes } from '@angular/router';
import { FirstComponent } from"./first/first.component"
import { MainPageComponent } from"./main-page/main-page.component"
import { ActivityComponent } from"./activity/activity.component"
import { InitiateComponent } from"./initiate/initiate.component"
import { FeedbackComponent } from"./feedback/feedback.component"
import { QuestionnaireDemoComponent } from"./questionnaire-demo/questionnaire-demo.component"
import { TestPageComponent } from './test-page/test-page.component';

export const routes: Routes =
[
  {path: 'app-first',component: FirstComponent,},
  {path: 'app-main-page',component: MainPageComponent},
  {path :"app-activity",component: ActivityComponent},
  {path: 'app-initiate',component:InitiateComponent},
  {path: 'app-feedback',component:FeedbackComponent},
  {path: 'app-questionnaire-demo',component:QuestionnaireDemoComponent},
  {path:'app-test-page',component: TestPageComponent},
  {path: '', redirectTo: 'app-first', pathMatch: 'prefix'},
];
