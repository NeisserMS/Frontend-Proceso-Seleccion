import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentModel } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;

  title: string = '';

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentModel
  ) {
    this.studentForm = this.fb.group({
      id: [data?.id || 0],
      nombres: [data?.nombres || '', Validators.required],
      apellidos: [data?.apellidos || '', Validators.required],
      direccion: [data?.direccion || '', Validators.required],
      telefono: [data?.telefono || '', Validators.required],
    });

    this.title = data
      ? `Editar Estudiante | ${data.nombres}`
      : 'Agregar estudiante';
  }

  ngOnInit(): void {
    if (this.data) {
      this.studentForm.patchValue(this.data);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.studentForm.valid) {
      const student = this.studentForm.value as StudentModel;

      if (!student.id) {
        this.studentService.create(student).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.studentService.update(student).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }
}
