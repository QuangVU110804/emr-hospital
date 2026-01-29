// src/services/PatientService.ts
import { Patient } from '../models/Patient'
import { IRepository } from '../repositories/IRepository'
import { UpdatePatientDTO } from '../types/patient-update.type'
import { Log } from '../decorators/log.decorator'

export class PatientService {
  constructor(
    private readonly patientRepository: IRepository<Patient>
  ) {}

  @Log
  add(patient: Patient): void {
    this.patientRepository.add(patient)
  }

  update(id: string, data: UpdatePatientDTO): void {
    this.patientRepository.update(id, data)
  }

  getById(id: string): Patient | undefined {
    return this.patientRepository.findById(id)
  }

  getAll(): Patient[] {
    return this.patientRepository.findAll()
  }
}
