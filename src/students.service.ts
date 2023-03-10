import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor() { }

  getAll() {
    return [...mockStudents];
  }
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine', status: 'present' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett', status: 'present' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte', status: 'present' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend', status: 'present' },
  { id: '5', firstName: 'Casey', lastName: 'McBride', status: 'present' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera', status: 'present' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez', status: 'present' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little', status: 'present' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins', status: 'present' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner', status: 'absent' }
];

