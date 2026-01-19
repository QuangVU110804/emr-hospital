// src/services/patientService.ts
import { Patient } from '../models/Patient';
export function addPatient(patient: Patient[], newPatient: Patient): Patient[] {
  return [...patient, newPatient];
}
export function updatePatient( patients: Patient[], updatedPatient: Patient ): Patient[] {
  return patients.map((patient) =>
    patient.id === updatedPatient.id ? updatedPatient : patient
  );
}
export function deletePatient( patients: Patient[], patientId: string ): Patient[] {
  return patients.filter((patient) => patient.id !== patientId);
}
export function searchPatients( patients: Patient[], query: string ): Patient[] {
  return patients.filter((patient) =>
    patient.name.toLowerCase().includes(query.toLowerCase())
  );
}
export function getPatientInfo(patient: Patient): string {
  return `Patient ${patient.name} (${patient.age} years old)`;
}