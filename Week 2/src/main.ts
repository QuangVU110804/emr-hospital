import { Patient } from './models/Patient';
import { getPatientInfo } from './services/patientService';
let patients: Patient[] = [];

const p1: Patient = {
  id: 'P001',
  name: 'Nguyen Van A',
  age: 30,
  gender: 'male'
};
console.log(getPatientInfo(p1));