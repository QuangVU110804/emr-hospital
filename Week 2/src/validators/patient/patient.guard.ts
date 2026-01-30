// type groups/patient\
import { Patient } from '../../models/Patient';
export function isPatient(obj: any): obj is Patient { 
 return( typeof obj.name === 'string' &&
    typeof obj.age === 'number' &&
    (obj.gender === 'male' ||
      obj.gender === 'female' ||
      obj.gender === 'other')
  )
}