import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { Menu6Component } from './menu6/menu6.component';
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
import { AgingComponent } from './menu1/aging/aging.component';
import { HistoryOrderComponent } from './menu1/history-order/history-order.component';
import { StoreT1Component } from './menu4/store/store-t1/store-t1.component';
import { StoreT2Component } from './menu4/store/store-t2/store-t2.component';
import { StoreT3Component } from './menu4/store/store-t3/store-t3.component';
import { StoreT4Component } from './menu4/store/store-t4/store-t4.component';
import { StoreT5Component } from './menu4/store/store-t5/store-t5.component';
import { NotificationT1Component } from './menu6/notification/notification-t1/notification-t1.component';
import { NotificationT2Component } from './menu6/notification/notification-t2/notification-t2.component';
import { NotificationT3Component } from './menu6/notification/notification-t3/notification-t3.component';
import { NotificationT4Component } from './menu6/notification/notification-t4/notification-t4.component';
import { NotificationT5Component } from './menu6/notification/notification-t5/notification-t5.component';
import { AllSettingComponent } from './menu7/all-setting/all-setting.component';
import { Report1T1Component } from './menu5/report1/report1-t1/report1-t1.component';
import { Report1T2Component } from './menu5/report1/report1-t2/report1-t2.component';
import { Report1T3Component } from './menu5/report1/report1-t3/report1-t3.component';
import { Report1T4Component } from './menu5/report1/report1-t4/report1-t4.component';
import { Report1T5Component } from './menu5/report1/report1-t5/report1-t5.component';
import { Report2T1Component } from './menu5/report2/report2-t1/report2-t1.component';
import { Report2T2Component } from './menu5/report2/report2-t2/report2-t2.component';
import { Report2T3Component } from './menu5/report2/report2-t3/report2-t3.component';
import { Report2T4Component } from './menu5/report2/report2-t4/report2-t4.component';
import { Report2T5Component } from './menu5/report2/report2-t5/report2-t5.component';
import { PageComponent } from './page.component';
import { Report3Component } from './menu5/report3/report3.component';
import { Report4T1Component } from './menu5/report4/report4-t1/report4-t1.component';
import { Report4T2Component } from './menu5/report4/report4-t2/report4-t2.component';
import { Report4T3Component } from './menu5/report4/report4-t3/report4-t3.component';
import { Report4T4Component } from './menu5/report4/report4-t4/report4-t4.component';
import { Report4T5Component } from './menu5/report4/report4-t5/report4-t5.component';

const routes: Routes = [
  /* Dashboarad */
  { path: 'dashboard_store', component: PageComponent},
  /* Menu1 */
  { path: 'menu1/aging', component: AgingComponent },
  { path: 'menu1/history-order', component: HistoryOrderComponent},
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
  { path: 'menu3/order-t5', component: OrderT5Component },
  /* Menu4 */
  { path: 'menu4/store-t1', component: StoreT1Component },
  { path: 'menu4/store-t2', component: StoreT2Component },
  { path: 'menu4/store-t3', component: StoreT3Component },
  { path: 'menu4/store-t4', component: StoreT4Component },
  { path: 'menu4/store-t5', component: StoreT5Component },
  /* Menu5 */
  { path: 'menu5/report1-t1', component: Report1T1Component },
  { path: 'menu5/report1-t2', component: Report1T2Component },
  { path: 'menu5/report1-t3', component: Report1T3Component },
  { path: 'menu5/report1-t4', component: Report1T4Component },
  { path: 'menu5/report1-t5', component: Report1T5Component },
  { path: 'menu5/report2-t1', component: Report2T1Component },
  { path: 'menu5/report2-t2', component: Report2T2Component },
  { path: 'menu5/report2-t3', component: Report2T3Component },
  { path: 'menu5/report2-t4', component: Report2T4Component },
  { path: 'menu5/report2-t5', component: Report2T5Component },
  { path: 'menu5/report3', component: Report3Component },
  { path: 'menu5/report4-t1', component: Report4T1Component },
  { path: 'menu5/report4-t2', component: Report4T2Component },
  { path: 'menu5/report4-t3', component: Report4T3Component },
  { path: 'menu5/report4-t4', component: Report4T4Component },
  { path: 'menu5/report4-t5', component: Report4T5Component },
  /* Menu6 */
  { path: 'menu6/notification-t1', component: NotificationT1Component },
  { path: 'menu6/notification-t2', component: NotificationT2Component },
  { path: 'menu6/notification-t3', component: NotificationT3Component },
  { path: 'menu6/notification-t4', component: NotificationT4Component },
  { path: 'menu6/notification-t5', component: NotificationT5Component },
  /* Menu7 */
  { path: 'menu7/all-setting', component: AllSettingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class PageRoutingModule { }

export const PageRoutingComponents = [ Menu1Component, Menu2Component, Menu3Component, Menu4Component, Menu5Component, Menu6Component ];
