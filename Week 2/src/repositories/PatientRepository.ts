// src/repositories/PatientRepository.ts
import { Patient } from '../models/Patient'
import { IRepository } from './IRepository'

export class PatientRepository implements IRepository<Patient> {
  private patients: Patient[] = []

  add(patient: Patient): void {
    this.patients.push(patient)
  }

  update(id: string, data: Partial<Patient>): void {
    const patient = this.findById(id)
    if (!patient) {
      throw new Error(`Patient with id ${id} not found`)
    }
    Object.assign(patient, data)
  }

  findById(id: string): Patient | undefined {
    return this.patients.find(p => p.id === id)
  }

  findAll(): Patient[] {
    return this.patients
  }
}
