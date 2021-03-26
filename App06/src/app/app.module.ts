import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex0102Component } from './views/exngif/ex0102/ex0102.component';
import { Ex03Component } from './views/exngif/ex03/ex03.component';
import { Ex04Component } from './views/exngif/ex04/ex04.component';
import { NgForComponent } from './views/ng-for/ng-for.component';
import { NgForEx01Component } from './views/ng-for-ex01/ng-for-ex01.component';
import { NgForEx02Component } from './views/ng-for-ex02/ng-for-ex02.component';
import { NgForEx03Component } from './views/ng-for-ex03/ng-for-ex03.component';
import { NgForEx04Component } from './views/ng-for-ex04/ng-for-ex04.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex0102Component,
    Ex03Component,
    Ex04Component,
    NgForComponent,
    NgForEx01Component,
    NgForEx02Component,
    NgForEx03Component,
    NgForEx04Component
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
