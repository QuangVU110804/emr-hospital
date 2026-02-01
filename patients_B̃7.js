// patients.js
const PatientModule = (function () {

    const defaultPatient = {
        id: null,
        name: '',
        age: 0,
        disease: ''
    };
 function addPatient(patients, newPatient) {
    const patient = { ...defaultPatient, ...newPatient };
    return [...patients, patient];
  }
const updatePatient = (patients, id, updates) => {
    return patients.map(patient =>
        patient.id === id ? { ...patient, ...updates } : patient
    );
};
return { addPatient, updatePatient };
})();
//Test
let patients = [
    { id: '1', name: "Nguyen Van A", age: 30, disease: "Flu" },
    { id: '2', name: "Tran Thi B", age: 25, disease: "Cold" }
];
console.log("Bệnh nhân", patients); // Bệnh nhân ban đầu
patients = PatientModule.addPatient(patients, { id: '3', name: "Le Van C", age: 40, disease: "Fever" });
console.log("Sau khi thêm bệnh nhân:", patients);
patients = PatientModule.updatePatient(patients,"2", { age: 26, disease: "Sick" });
console.log("Sau khi cập nhật bệnh nhân:", patients);