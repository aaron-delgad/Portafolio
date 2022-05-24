import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {AppComponent} from "./app.component";
import {RouteConst} from "./setting/constants/route.const";

const routes: Routes = [
  {
    path: RouteConst.clean, redirectTo: RouteConst.page.path, pathMatch: 'full'
  },
  {
    path: RouteConst.page.path,
    loadChildren: () => import('./modules/page/page.module').then(m => m.PageModule)
  },
  {
    path: RouteConst.noFound.path,
    loadChildren: () => import('./modules/components/no-found/no-found.module').then(m =>m.NoFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRouting { }
