// main.ts
import { Patient } from './models/Patient';
import { getPatientInfo } from './services/patientService';
import { addItem } from './utils/addItem';
import { checkAge } from './validators/patient.validator';
import { PatientService } from './services/patientService';
import { Status } from './models/status';
import { isMedicalRecord } from './validators/medical-record.guard';
import { MedicalRecord } from './models/MedicalRecord ';
import{ isPatient } from './validators/patient.guard';
import getLegacyPatient = require('./legacy/legacy-patient');

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
// ===== NGÀY 4: TYPE GUARD (VALIDATE INPUT NGOÀI HỆ THỐNG) =====

// giả lập dữ liệu từ API / JS legacy / user input
const externalInput: any = {
  id: 'P003',
  name: 'Le Van D',
  age: 40,
  gender: 'male',
  status: Status.Active
}

// dùng type guard trước khi add vào service
if (isPatient(externalInput)) {
  patientService.add(externalInput)
  console.log('Add external patient success')
} else {
  console.error('Invalid patient input')
}

console.log('Danh sach benh nhan SAU khi validate:')
console.log(patientService.getAll())
const legacyPatient = getLegacyPatient()

if (isPatient(legacyPatient)) {
  patientService.add(legacyPatient)
  console.log('Legacy patient added safely')
} else {
  console.error('Invalid legacy patient')
}
console.log('Final patient list:')
console.log(patientService.getAll())