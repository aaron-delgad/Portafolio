import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseRouting} from './course.routing';
import {CourseComponent} from './course.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRouting,
    MatCardModule,
    MatButtonModule,
  ]
})
export class CourseModule { }
