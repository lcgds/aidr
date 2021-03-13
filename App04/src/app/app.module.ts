import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingsComponent } from './views/bindings/bindings.component';
import { Exercise1Component } from './views/exercise1/exercise1.component';
import { Exercise2Component } from './views/exercise2/exercise2.component';
import { Exercise3Component } from './views/exercise3/exercise3.component';
import { Exercise4Component } from './views/exercise4/exercise4.component';
import { Exercise5Component } from './views/exercise5/exercise5.component';
import { Exercise6Component } from './views/exercise6/exercise6.component';
import { Exercise7Component } from './views/exercise7/exercise7.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    Exercise5Component,
    Exercise6Component,
    Exercise7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
