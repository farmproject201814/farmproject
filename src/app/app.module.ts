// system
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { CommonModule } from '@angular/common';
import { LyRadioModule } from '@alyle/ui/radio';

// mainpage
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadService } from './service/uploads/shared/upload.service';
import { Upload } from './service/uploads/shared/upload';
import { UsersService } from './service/API/users.service';
import { AboutcattleService } from './service/API/beefgrading/aboutcattle.service';
import { CalculateGService } from './service/API/beefgrading/calculate-g.service';
import { GradingService } from './service/API/beefgrading/grading.service';
import { HistoryService } from './service/API/beefgrading/history.service';
import { SumgradingService } from './service/API/beefgrading/sumgrading.service';
import { AuthService } from './auth.service';

// beefgrading
import { BeefgradingRoutingModule } from './beefgrading/beefgrading-routing.module';
import { AboutcattleComponent } from './beefgrading/page-grading/aboutcattle/aboutcattle.component';
import { GradingComponent } from './beefgrading/page-grading/grading/grading.component';
import { SumgradingComponent } from './beefgrading/page-grading/sumgrading/sumgrading.component';
import { SummedComponent } from './beefgrading/page-grading/sumgrading/summed/summed.component';
import { HistoryComponent } from './beefgrading/page-grading/history/history.component';
import { AddcattleComponent } from './beefgrading/page-grading/setting/addcattle/addcattle.component';
import { EditprofileComponent } from './beefgrading/page-grading/setting/editprofile/editprofile.component';
import { UserComponent } from './beefgrading/page-grading/setting/config/user/user.component';
import { SystemComponent } from './beefgrading/page-grading/setting/config/system/system.component';
import { NavmanuComponent } from './beefgrading/page-grading/setting/navmanu/navmanu.component';
import { GradeComponent } from './beefgrading/page-grading/setting/config/grade/grade.component';
import { NotigradeComponent } from './beefgrading/page-grading/setting/config/notigrade/notigrade.component';

// storehouse
import { StorehouseComponent } from './storehouse/storehouse.component';
import { BeefgradingComponent } from './beefgrading/beefgrading.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { PageComponent } from './storehouse/page/page.component';
import { Menu1Component } from './storehouse/page/menu1/menu1.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { firebaseConfig } from 'src/environments/firebase.config';
import { Menu2Component } from './storehouse/page/menu2/menu2.component';
import { Menu3Component } from './storehouse/page/menu3/menu3.component';
import { Menu4Component } from './storehouse/page/menu4/menu4.component';
import { Menu5Component } from './storehouse/page/menu5/menu5.component';
import { PageRoutingModule, PageRoutingComponents } from './storehouse/page/page-routing.module';
import { ImportComponent } from './storehouse/page/menu1/import/import.component';
import { ImportT1Component } from './storehouse/page/menu2/import/import-t1/import-t1.component';
import { ImportT2Component } from './storehouse/page/menu2/import/import-t2/import-t2.component';
import { ImportT3Component } from './storehouse/page/menu2/import/import-t3/import-t3.component';
import { ImportT4Component } from './storehouse/page/menu2/import/import-t4/import-t4.component';
import { ImportT5Component } from './storehouse/page/menu2/import/import-t5/import-t5.component';
import { Dashboard2Component } from './dashboard/dashboard2/dashboard2.component';
import { PrivilegeComponent } from './dashboard/privilege/privilege.component';
import { SettingComponent } from './storehouse/setting/setting.component';
import { EditProfileComponent } from './storehouse/setting/edit-profile/edit-profile.component';
import { OrderComponent } from './storehouse/page/menu3/order/order.component';
import { OrderT1Component } from './storehouse/page/menu3/order/order-t1/order-t1.component';
import { OrderT2Component } from './storehouse/page/menu3/order/order-t2/order-t2.component';
import { OrderT3Component } from './storehouse/page/menu3/order/order-t3/order-t3.component';
import { OrderT4Component } from './storehouse/page/menu3/order/order-t4/order-t4.component';
import { OrderT5Component } from './storehouse/page/menu3/order/order-t5/order-t5.component';
import { SimulationComponent } from './storehouse/simulation/simulation.component';
import { StorehouseRoutingModule } from './storehouse/storehouse-routing.module';
import { InputDataComponent } from './storehouse/simulation/input-data/input-data.component';
import { SimulationT1Component } from './storehouse/simulation/simulation-t1/simulation-t1.component';
import { SimulationT2Component } from './storehouse/simulation/simulation-t2/simulation-t2.component';
import { SimulationT3Component } from './storehouse/simulation/simulation-t3/simulation-t3.component';
import { Menu6Component } from './storehouse/page/menu6/menu6.component';
import { AgingComponent } from './storehouse/page/menu1/aging/aging.component';
import { HistoryOrderComponent } from './storehouse/page/menu1/history-order/history-order.component';
import { StoreComponent } from './storehouse/page/menu4/store/store.component';
import { StoreT1Component } from './storehouse/page/menu4/store/store-t1/store-t1.component';
import { StoreT2Component } from './storehouse/page/menu4/store/store-t2/store-t2.component';
import { StoreT3Component } from './storehouse/page/menu4/store/store-t3/store-t3.component';
import { StoreT4Component } from './storehouse/page/menu4/store/store-t4/store-t4.component';
import { StoreT5Component } from './storehouse/page/menu4/store/store-t5/store-t5.component';
import { SimulationT1Import1Component } from './storehouse/simulation/simulation-t1/simulation-t1-import1/simulation-t1-import1.component';
import { NotificationComponent } from './storehouse/page/menu6/notification/notification.component';
import { NotificationT1Component } from './storehouse/page/menu6/notification/notification-t1/notification-t1.component';
import { NotificationT2Component } from './storehouse/page/menu6/notification/notification-t2/notification-t2.component';
import { NotificationT3Component } from './storehouse/page/menu6/notification/notification-t3/notification-t3.component';
import { NotificationT4Component } from './storehouse/page/menu6/notification/notification-t4/notification-t4.component';
import { NotificationT5Component } from './storehouse/page/menu6/notification/notification-t5/notification-t5.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StorehouseComponent,
    BeefgradingComponent,

    // grading --------------
    AboutcattleComponent,
    GradingComponent,
    SumgradingComponent,
    SummedComponent,
    HistoryComponent,
    AddcattleComponent,
    EditprofileComponent,
    UserComponent,
    SystemComponent,
    NavmanuComponent,
    GradeComponent,
    NotigradeComponent,

    // storehouse------------
    PageComponent,
    Menu1Component,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    PageRoutingComponents,
    ImportComponent,
    ImportT1Component,
    ImportT2Component,
    ImportT3Component,
    ImportT4Component,
    ImportT5Component,
    Dashboard2Component,
    PrivilegeComponent,
    SettingComponent,
    EditProfileComponent,
    OrderComponent,
    OrderT1Component,
    OrderT2Component,
    OrderT3Component,
    OrderT4Component,
    OrderT5Component,
    SimulationComponent,
    InputDataComponent,
    SimulationT1Component,
    SimulationT2Component,
    SimulationT3Component,
    Menu6Component,
    AgingComponent,
    HistoryOrderComponent,
    StoreComponent,
    StoreT1Component,
    StoreT2Component,
    StoreT3Component,
    StoreT4Component,
    StoreT5Component,
    SimulationT1Import1Component,
    NotificationComponent,
    NotificationT1Component,
    NotificationT2Component,
    NotificationT3Component,
    NotificationT4Component,
    NotificationT5Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    AppRoutingModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    PageRoutingModule,
    StorehouseRoutingModule,
    BeefgradingRoutingModule,
    CommonModule,
    LyRadioModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
    AuthService,
    UploadService, UsersService, AboutcattleService, CalculateGService, GradingService, HistoryService, SumgradingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
