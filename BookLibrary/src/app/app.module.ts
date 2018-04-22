import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopupModule } from 'ng2-opd-popup';
import { RouteModule } from './routeModule';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainLibraryComponent } from './main-library/main-library.component';
import { MainLibraryService } from './services/main-library.service';
import { CostumValidatorsService } from './services/costum-validators.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLibraryComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpModule,
    PopupModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MainLibraryService, CostumValidatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
