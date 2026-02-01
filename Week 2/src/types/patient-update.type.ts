import { Patient } from '../models/Patient'

/**
 * DTO dùng cho update patient
 * Chỉ update field cần thiết
 */
export type UpdatePatientDTO = Partial<Patient>
