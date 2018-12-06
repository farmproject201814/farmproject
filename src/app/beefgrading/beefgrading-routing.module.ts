import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutcattleComponent } from './page/aboutcattle/aboutcattle.component';
import { GradingComponent } from './page/grading/grading.component';
import { SumgradingComponent } from './page/sumgrading/sumgrading.component';
import { SummedComponent } from './page/sumgrading/summed/summed.component';
import { HistoryComponent } from './page/history/history.component';
import { AddcattleComponent } from './page/setting/addcattle/addcattle.component';
import { EditprofileComponent } from './page/setting/editprofile/editprofile.component';
import { UserComponent } from './page/setting/config/user/user.component';
import { SystemComponent } from './page/setting/config/system/system.component';
import { NavmanuComponent } from './page/setting/navmanu/navmanu.component';
import { GradeComponent } from './page/setting/config/grade/grade.component';
import { NotificationComponent } from './page/setting/config/notification/notification.component';

const routes: Routes = [
  { path: 'listcattle', component: AboutcattleComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'sumgrading', component: SumgradingComponent },
  { path: 'summed', component: SummedComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'addcattle', component: AddcattleComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'configuser', component: UserComponent },
  { path: 'configsys', component: SystemComponent },
  { path: 'navmanu', component: NavmanuComponent },
  { path: 'configgrade', component: GradeComponent },
  { path: 'noti', component: NotificationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class BeefgradingRoutingModule { }

export const BeefgradingRoutingComponents = [];
