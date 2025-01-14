import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'maestros',
    loadChildren: () =>
      import('../intranet/maestros/maintainer.module').then(
        (m) => m.MaintainerModule
      ),
  },
  {
    path: '',
    redirectTo: 'maestros',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
