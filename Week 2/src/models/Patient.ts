// src/models/Patient.ts
export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other'; 
};