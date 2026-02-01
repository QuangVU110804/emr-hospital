// patient.validator.ts
import { Patient } from '../models/Patient'

export function checkAge(patient: Patient): boolean {
  return patient.age > 0
}
