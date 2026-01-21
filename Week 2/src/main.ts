// main.ts
import { Patient } from './models/Patient';
import { getPatientInfo } from './services/patientService';
import { addItem } from './utils/addItem';
import { checkAge } from './validators/patient.validator';
import { PatientService } from './services/patientService';
let patients: Patient[] = [];
/*---TEST getPatientInfo function---*/
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
/*---TEST checkAge function---*/
patients.forEach(patient => {
  console.log(`Tuoi cua ${patient.name} hop le:`, checkAge(patient));
});
//-- test add and update patient in PatientService
const patientService = new PatientService();
patientService.add(p1);
patientService.add(p2);
patientService.update('P001', { age: 31 });
patientService.update('P002', { name: 'Tran Thi C', age: 26 });
console.log(patientService.getAll());