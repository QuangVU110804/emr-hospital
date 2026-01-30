// src/models/Prescription.ts
import type { IIdentifiable } from './IIdentifiable'

export interface Prescription extends IIdentifiable {
  medicalRecordId: string
  medicine: string
  dosage: string
}
