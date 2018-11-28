import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { BeefgradingComponent } from './beefgrading/beefgrading.component';
import { HeadComponent } from './navbar/head/head.component';
import { FootComponent } from './navbar/foot/foot.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
