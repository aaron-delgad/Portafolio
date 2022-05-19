import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRouting } from './project.routing';
import { ProjectComponent } from './project.component';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRouting
  ]
})
export class ProjectModule { }
