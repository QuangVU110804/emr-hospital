// src/models/Patient.ts
import { Role } from "./role";
import { status } from "./status";
import type { IIdentifiable } from "./IIdentifiable";
import type { MedicalRecord } from "./medical-record";
export interface Patient extends IIdentifiable {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  role: typeof Role.Patient;
  status: typeof status[keyof typeof status];
  records: MedicalRecord[];
}