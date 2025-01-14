import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './views/students/list/students.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainerRoutingModule {}
