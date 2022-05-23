import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteConst} from "../../setting/constants/route.const";
import {PageComponent} from "./page.component";

const routes: Routes = [
  {
    path: RouteConst.clean,
    component: PageComponent,
    children: [
      {
        path: RouteConst.clean, redirectTo: RouteConst.page.home.path, pathMatch: 'full'
      },
      {
        path: RouteConst.page.home.path,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: RouteConst.page.course.path,
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
      },
      {
        path: RouteConst.page.project.path,
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRouting { }
