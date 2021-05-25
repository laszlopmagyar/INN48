import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { App1Component } from './app1/app1.component';


const routes: Routes = [
  {
    path: 'application1', component: App1Component,
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
