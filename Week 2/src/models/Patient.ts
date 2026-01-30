// src/models/Patient.ts
import { IIdentifiable } from './IIdentifiable'
import { MedicalRecord } from './medical-record'
export interface Patient extends IIdentifiable {
  id: string
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
  medicalRecords?: MedicalRecord[]
}