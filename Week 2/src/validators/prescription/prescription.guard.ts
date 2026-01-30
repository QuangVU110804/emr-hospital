import { Prescription } from '../../models/prescription'

export function validatePrescription(pres: unknown): pres is Prescription {
  if (!pres || typeof pres !== 'object') {
    throw new Error('Prescription must be an object')
  }

  const p = pres as Prescription

  if (typeof p.id !== 'string' || !p.id.trim()) {
    throw new Error('Prescription must have a valid id')
  }

  if (typeof p.medicalRecordId !== 'string' || !p.medicalRecordId.trim()) {
    throw new Error('Prescription must have a valid medicalRecordId')
  }

  if (typeof p.medicine !== 'string' || !p.medicine.trim()) {
    throw new Error('Prescription must have a valid medicine')
  }

  if (typeof p.dosage !== 'string' || !p.dosage.trim()) {
    throw new Error('Prescription must have a valid dosage')
  }

  return true
}
