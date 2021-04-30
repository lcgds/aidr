import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question5Component } from './question5/question5.component';
import { Question8Component } from './question8/question8.component';
import { Question10Component } from './question10/question10.component';
import { HqComponent } from './hq/hq.component';

@NgModule({
  declarations: [
    AppComponent,
    Question5Component,
    Question8Component,
    Question10Component,
    HqComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
