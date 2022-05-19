import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    MatButtonModule,
    MatCardModule,
  ]
})
export class HomeModule { }
