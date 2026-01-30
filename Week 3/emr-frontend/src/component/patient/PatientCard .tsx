import type { Patient } from '../../models/Patient'

interface PatientCardProps {
  patient: Patient
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 8 }}>
      <p><b>ID:</b> {patient.id}</p>
      <p><b>Name:</b> {patient.name}</p>
      <p><b>Age:</b> {patient.age}</p>
      <p><b>Gender:</b> {patient.gender}</p>
    </div>
  )
}
