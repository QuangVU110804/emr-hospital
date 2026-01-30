import { Prescription } from '../models/prescription'
import { validatePrescription } from '../validators/prescription/prescription.guard'

export class PrescriptionService {
  private prescriptions: Prescription[] = []

addPrescription(data: unknown): Prescription {
  validatePrescription(data)

  const prescription = data as Prescription

  this.prescriptions.push(prescription)
  return prescription
}

  getAll(): Prescription[] {
    return this.prescriptions
  }
}
