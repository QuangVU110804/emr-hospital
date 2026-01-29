// src/models/Doctor.ts
import { IIdentifiable } from './IIdentifiable'
import { Role } from './role'

export interface Doctor extends IIdentifiable {
  name: string
  specialization: string
  role: Role.Doctor
}
