import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/dashboard/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/dashboard/sign-up/sign-up.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { PrivilegeComponent } from './privilege/privilege.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'privilege', component: PrivilegeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class DashboardRoutingModule { }
