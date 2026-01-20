// main.ts
import { Patient } from './models/Patient';
import { getPatientInfo } from './services/patientService';
import { addItem } from './utils/addItem';
let patients: Patient[] = [];

const p1: Patient = {
  id: 'P001',
  name: 'Nguyen Van A',
  age: 30,
  gender: 'male'
};
console.log(getPatientInfo(p1));
patients = addItem(patients, p1);

const p2: Patient = {
  id: 'P002',
  name: 'Tran Thi B',
  age: 25,
  gender: 'female'
};
console.log(getPatientInfo(p2));
patients = addItem(patients, p2);