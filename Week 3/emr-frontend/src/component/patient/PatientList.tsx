import { useState } from 'react'
import type { Patient } from '../../models/Patient'
import { PatientCard } from './PatientCard '

const mockPatients: Patient[] = [
  { id: 'P001', name: 'Nguyen Van A', age: 30, gender: 'male', role: 'patient', status: 'active', records: [] },
  { id: 'P002', name: 'Tran Thi B', age: 25, gender: 'female', role: 'patient', status: 'active', records: [] },
  { id: 'P003', name: 'Le Van C', age: 40, gender: 'other', role: 'patient', status: 'active', records: [] }
]

export function PatientList() {
  const [patients] = useState<Patient[]>(mockPatients)
  const [showList, setShowList] = useState(true)
  const [loading] = useState(false)

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? 'Hide list' : 'Show list'}
      </button>

      {loading && <p>Loading...</p>}

      {showList && !loading && (
        <div>
          {patients.map(patient => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      )}
    </div>
  )
}
