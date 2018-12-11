import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutcattleComponent } from './page-grading/aboutcattle/aboutcattle.component';
import { GradingComponent } from './page-grading/grading/grading.component';
import { SumgradingComponent } from './page-grading/sumgrading/sumgrading.component';
import { SummedComponent } from './page-grading/sumgrading/summed/summed.component';
import { HistoryComponent } from './page-grading/history/history.component';
import { AddcattleComponent } from './page-grading/setting/addcattle/addcattle.component';
import { EditprofileComponent } from './page-grading/setting/editprofile/editprofile.component';
import { UserComponent } from './page-grading/setting/config/user/user.component';
import { SystemComponent } from './page-grading/setting/config/system/system.component';
import { NavmanuComponent } from './page-grading/setting/navmanu/navmanu.component';
import { GradeComponent } from './page-grading/setting/config/grade/grade.component';
import { NotigradeComponent } from './page-grading/setting/config/notigrade/notigrade.component';

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
  { path: 'noti', component: NotigradeComponent },
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
