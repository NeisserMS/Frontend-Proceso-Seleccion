export class StudentModel {
  id: number;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;

  constructor(params?: Partial<StudentModel>) {
    this.id = params?.id || 0;
    this.nombres = params?.nombres || '';
    this.apellidos = params?.apellidos || '';
    this.direccion = params?.direccion || '';
    this.telefono = params?.telefono || '';
  }
}
