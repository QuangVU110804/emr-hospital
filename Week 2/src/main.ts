// main.ts
import { Patient } from './models/Patient';
import { getPatientInfo } from './services/patientInfo';
import { addItem } from './utils/addItem';
import { checkAge } from './validators/patient/patient.validator';
import { PatientService } from './services/patientService';
import { Status } from './models/status';
import { isMedicalRecord } from './validators/medical-record/medical-record.guard';
import { MedicalRecord } from './models/medical-record';
import { isPatient } from './validators/patient/patient.guard';
import { validatePrescription } from './validators/prescription/prescription.guard';
import getLegacyPatient = require('./legacy/legacy-patient');
import { PatientRepository } from './repositories/PatientRepository'
import { PatientService as PatientServiceWithRepo } from './services/patientService'
import { PrescriptionService } from './services/prescriptionService'

// ================= DAY 1: BASIC TYPES =================
let patients: Patient[] = []

const p1: Patient = {
  id: 'P001',
  name: 'Nguyen Van A',
  age: 30,
  gender: 'male'
}

const p2: Patient = {
  id: 'P002',
  name: 'Tran Thi B',
  age: 25,
  gender: 'female'
}

console.log(getPatientInfo(p1))
console.log(getPatientInfo(p2))

patients = addItem(patients, p1)
patients = addItem(patients, p2)

// ================= DAY 2: VALIDATOR =================
patients.forEach(p => {
  console.log(`Tuoi ${p.name} hop le:`, checkAge(p))
})

// ================= DAY 4: TYPE GUARD =================
const externalInput: any = {
  id: 'P003',
  name: 'Le Van C',
  age: 40,
  gender: 'male',
  status: Status.Active
}

const patientRepo = new PatientRepository()
const patientService = new PatientService(patientRepo)

if (isPatient(externalInput)) {
  patientService.add(externalInput)
  console.log('✓ External patient added')
} else {
  console.error('✗ Invalid external patient')
}

// Legacy JS data
const legacyPatient = getLegacyPatient()

if (isPatient(legacyPatient)) {
  patientService.add(legacyPatient)
  console.log('✓ Legacy patient added safely')
} else {
  console.error('✗ Invalid legacy patient')
}

console.log('Danh sach benh nhan:')
console.log(patientService.getAll())

// ================= DAY 5–6: PRESCRIPTION + VALIDATION =================
const prescriptionService = new PrescriptionService()
try {
  const validPrescription = prescriptionService.addPrescription({
    id: 'RX001',
    medicalRecordId: 'MR001',
    medicine: 'Aspirin',
    dosage: '500mg'
  })

  console.log('✓ Prescription added:', validPrescription)
} catch (error) {
  console.error('✗ Error:', (error as Error).message)
}

// ❌ TEST INVALID PRESCRIPTION (PHẢI THROW ERROR)
try {
  prescriptionService.addPrescription({
    id: 'RX002',
    medicalRecordId: 'MR002',
    medicine: '', // ❌ invalid
    dosage: '250mg'
  })
} catch (error) {
  console.error(
    '✓ Caught expected error:',
    (error as Error).message
  )
}

// ================= END =================
console.log('DONE')