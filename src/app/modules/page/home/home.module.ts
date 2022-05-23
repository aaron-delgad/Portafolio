import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
  ]
})
export class HomeModule { }
