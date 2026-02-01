// src/services/patientService.ts
import { Patient } from '../models/Patient';
import { UpdatePatientDTO } from '../types/patient-update.type';
import { Log } from '../decorators/log.decorator';
export function getPatientInfo(patient: Patient): string {
  return `${patient.name} (${patient.age}) - ${patient.gender}`;
}
export class PatientService {
  private patients: Patient[] = []

  @Log
  add(patient: Patient): void {
    this.patients.push(patient)
  }

  update(id: string, data: UpdatePatientDTO): void {
    const patient = this.patients.find(p => p.id === id)
    if (!patient) {
      throw new Error(`Patient with id ${id} not found`)
    }

    Object.assign(patient, data)
  }

  getById(id: string): Patient | undefined {
    return this.patients.find(p => p.id === id)
  }

  getAll(): Patient[] {
    return this.patients
  }
}