import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './setting/edit-profile/edit-profile.component';
import { SimulationT1Component } from './simulation/simulation-t1/simulation-t1.component';
import { SimulationT2Component } from './simulation/simulation-t2/simulation-t2.component';
import { SimulationT3Component } from './simulation/simulation-t3/simulation-t3.component';
import { InputDataComponent } from './simulation/input-data/input-data.component';

const routes: Routes = [
  { path: 'setting/edit-profile', component: EditProfileComponent },
  { path: 'simulation-t1', component: SimulationT1Component},
  { path: 'simulation-t2', component: SimulationT2Component},
  { path: 'simulation-t3', component: SimulationT3Component},
  { path: 'input-data', component: InputDataComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class StorehouseRoutingModule { }
