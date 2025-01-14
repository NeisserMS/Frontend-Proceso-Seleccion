import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentModel } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';
import { EditStudentComponent } from '../edit/edit.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentListComponent {
  dataSource: StudentModel[] = [];
  displayedColumns: string[] = [
    'name',
    'surnames',
    'address',
    'phone',
    'actions',
  ];

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getAll().subscribe((data: StudentModel[]) => {
      this.dataSource = data;
    });
  }

  addStudent(): void {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '400px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getStudents();
        this.snackBar.open('Estudiante agregado correctamente', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  update(student: StudentModel) {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '400px',
      data: student,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getStudents();
        this.snackBar.open('Estudiante actualizado correctamente', 'Cerrar', {
          duration: 3000,
        });
      }
    });
  }

  delete(id: number): void {
    this.studentService.delete(id).subscribe(() => {
      this.getStudents();
      this.snackBar.open('Estudiante eliminado correctamente', 'Cerrar', {
        duration: 3000,
      });
    });
  }
}
