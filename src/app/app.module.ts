import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AppRouting,
        BrowserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
