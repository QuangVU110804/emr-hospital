import './App.css'
import type { Patient } from '../models/Patient'
import { PatientCard } from '../component/patient/PatientCard '


function App() {
  const patients: Patient[] = [
    { id: 'P001', name: 'Nguyen Van A', age: 30, gender: 'male', role: 'patient', status: 'active', records: [] },
    { id: 'P002', name: 'Tran Thi B', age: 25, gender: 'female', role: 'patient', status: 'active', records: [] },
    { id: 'P003', name: 'Le Van C', age: 40, gender: 'other', role: 'patient', status: 'active', records: [] }
  ]

  return (
    <div style={{ padding: 20 }}>
      <h1>Patient List</h1>

      {patients.map(patient => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  )
}

export default App