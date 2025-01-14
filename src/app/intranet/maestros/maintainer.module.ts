import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MaintainerRoutingModule } from './maintainer-routing.module';
import { StudentService } from './services/student.service';
import { EditStudentComponent } from './views/students/edit/edit.component';
import { StudentListComponent } from './views/students/list/students.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MaintainerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [],
  providers: [StudentService],
  declarations: [StudentListComponent, EditStudentComponent],
})
export class MaintainerModule {}
