import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    MatButtonModule,
  ]
})
export class HomeModule { }
