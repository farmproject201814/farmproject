import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { OrderT1Component } from './menu3/order/order-t1/order-t1.component';
import { OrderT2Component } from './menu3/order/order-t2/order-t2.component';
import { OrderT3Component } from './menu3/order/order-t3/order-t3.component';
import { OrderT4Component } from './menu3/order/order-t4/order-t4.component';
import { OrderT5Component } from './menu3/order/order-t5/order-t5.component';
import { ImportT1Component } from './menu2/import/import-t1/import-t1.component';
import { ImportT2Component } from './menu2/import/import-t2/import-t2.component';
import { ImportT3Component } from './menu2/import/import-t3/import-t3.component';
import { ImportT4Component } from './menu2/import/import-t4/import-t4.component';
import { ImportT5Component } from './menu2/import/import-t5/import-t5.component';


const routes: Routes = [
  /* Menu1 */
  // { path: 'menu1/import-t1', component: ImportT1Component },
  // { path: 'menu1/import-t2', component: ImportT2Component },
  // { path: 'menu1/import-t3', component: ImportT3Component },
  // { path: 'menu1/import-t4', component: ImportT4Component },
  // { path: 'menu1/import-t5', component: ImportT5Component },
  /* Menu2 */
  { path: 'menu2/import-t1', component: ImportT1Component },
  { path: 'menu2/import-t2', component: ImportT2Component },
  { path: 'menu2/import-t3', component: ImportT3Component },
  { path: 'menu2/import-t4', component: ImportT4Component },
  { path: 'menu2/import-t5', component: ImportT5Component },
  /* Menu3 */
  { path: 'menu3/order-t1', component: OrderT1Component },
  { path: 'menu3/order-t2', component: OrderT2Component },
  { path: 'menu3/order-t3', component: OrderT3Component },
  { path: 'menu3/order-t4', component: OrderT4Component },
  { path: 'menu3/order-t5', component: OrderT5Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class PageRoutingModule { }

export const PageRoutingComponents = [ Menu1Component, Menu2Component, Menu3Component, Menu4Component, Menu5Component ];
