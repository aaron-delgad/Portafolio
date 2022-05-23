import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConst} from "../../../setting/constants/route.const";
import {NoFoundComponent} from "./no-found.component";

const routes: Routes = [
  {
    path: RouteConst.clean,
    component: NoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoFoundRouting { }
