// src/models/MedicalRecord.ts
import { IIdentifiable } from './IIdentifiable'
import { Prescription } from './prescription'

export interface MedicalRecord extends IIdentifiable {
  patientId: string
  doctorId: string
  date: Date
  diagnosis: string
  prescriptions: Prescription[]
}
