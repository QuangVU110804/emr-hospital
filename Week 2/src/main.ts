import { Patient } from './models/Patient';
import {
  addPatient,
  searchPatients,
  deletePatient,
  getPatientInfo
} from './services/patientService';



let patients: Patient[] = [];

const p1: Patient = {
  id: 'P001',
  name: 'Nguyen Van A',
  age: 30,
  gender: 'male'
};

patients = addPatient(patients, p1);

console.log(getPatientInfo(p1));
console.log(searchPatients(patients, 'Nguyen'));

patients = deletePatient(patients, 'P001');
console.log(patients);
