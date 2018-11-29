import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { BeefgradingComponent } from './beefgrading/beefgrading.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'store', component: StorehouseComponent },
  { path: 'beefgrading', component: BeefgradingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
