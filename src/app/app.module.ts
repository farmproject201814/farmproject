import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { BeefgradingComponent } from './beefgrading/beefgrading.component';
import { HeadComponent } from './navbar/head/head.component';
import { FootComponent } from './navbar/foot/foot.component';
import { AppRoutingModule } from './app-routing.module';
import { Menu1Component } from './storehouse/menu1/menu1.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StorehouseComponent,
    BeefgradingComponent,
    HeadComponent,
    FootComponent,
    Menu1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
