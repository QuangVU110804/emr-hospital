// src/models/MedicalRecord.ts
import { IIdentifiable } from './IIdentifiable'

export interface MedicalRecord extends IIdentifiable {
  patientId: string
  doctorId: string
  date: Date
  diagnosis: string
}
