//medical-record.guard validator
import { MedicalRecord } from '../models/MedicalRecord ';
export function isMedicalRecord(obj: any): obj is MedicalRecord {
  return (
    typeof obj.id === 'string' &&
    typeof obj.patientId === 'string' &&
    typeof obj.doctorId === 'string' &&
    obj.date instanceof Date && !isNaN(obj.date.getTime())&& 
    typeof obj.disnosis === 'string'
    
  );
}