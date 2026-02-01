// src/models/patient.ts
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other'; 
};