import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info.component';

import {NvD3Component} from 'ng2-nvd3';



@NgModule({
  declarations: [
    AppComponent,
    NvD3Component,
    InfoComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  
 }

