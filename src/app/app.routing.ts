import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth-guard-service.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () => import('./containers/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/containers/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
