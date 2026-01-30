// src/models/MedicalRecord.ts
import type { IIdentifiable } from './IIdentifiable'
import type { Prescription } from './prescription'

export interface MedicalRecord extends IIdentifiable {
  patientId: string
  doctorId: string
  date: Date
  diagnosis: string
  prescriptions: Prescription[]
}
