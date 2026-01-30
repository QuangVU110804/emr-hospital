// src/models/Doctor.ts
import { Role } from "./role";
import type { IIdentifiable } from "./IIdentifiable";

export interface Doctor extends IIdentifiable {
  name: string;
  specialty: string;
  role: typeof Role.Doctor;
}