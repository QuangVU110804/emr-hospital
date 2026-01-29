// src/services/patientInfo.ts
import { Patient } from '../models/Patient'

export function getPatientInfo(patient: Patient): string {
  return `${patient.name} (${patient.age}) - ${patient.gender}`
}
