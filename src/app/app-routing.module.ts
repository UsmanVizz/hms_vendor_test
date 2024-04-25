import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./oth/oth.module').then((m) => m.OthModule),
  },

  {
    path: 'hms-owner',
    loadChildren: () =>
      import('./main-page/mainpage.module').then((m) => m.MainModule),
  },
  {
    path: 'hms-vender',
    loadChildren: () =>
      import('./main-page/mainpage.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
