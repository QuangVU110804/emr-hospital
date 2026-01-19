import { Role } from "./role";
export interface Doctor {
    id: string;
    name: string;
    specialization: string;
    role: Role.Doctor;
}