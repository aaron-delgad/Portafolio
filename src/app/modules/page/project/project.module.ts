import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectRouting} from './project.routing';
import {ProjectComponent} from './project.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRouting,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ProjectModule { }
