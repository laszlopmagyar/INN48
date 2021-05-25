import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { projectComponent } from './project/project.component';
import { headerComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { App1Component } from './app1/app1.component'
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';

@NgModule({
  declarations: [
    AppComponent,
    projectComponent,
    headerComponent,
    App1Component,
    App2Component,
    App3Component,
    App4Component,
    App5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
