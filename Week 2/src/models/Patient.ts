// src/models/Patient.ts
import { IIdentifiable } from './IIdentifiable'

export interface Patient extends IIdentifiable {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}
