import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutcattleComponent } from './page/aboutcattle/aboutcattle.component';
import { GradingComponent } from './page/grading/grading.component';
import { SumgradingComponent } from './page/sumgrading/sumgrading.component';
import { SummedComponent } from './page/sumgrading/summed/summed.component';
import { HistoryComponent } from './page/history/history.component';
import { AddcattleComponent } from './page/setting/addcattle/addcattle.component';

const routes: Routes = [
  { path: 'listcattle', component: AboutcattleComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'sumgrading', component: SumgradingComponent },
  { path: 'summed', component: SummedComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'addcattle', component: AddcattleComponent },
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
