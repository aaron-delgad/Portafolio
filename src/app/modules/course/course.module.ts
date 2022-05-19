import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRouting } from './course.routing';
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRouting
  ]
})
export class CourseModule { }
