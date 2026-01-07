// Danh sách bệnh nhân
let patient = [
    {
        id: '1',
        name: "Nguyen Van A",
        age: 30,
    },
    {
        id: '2',
        name: "Tran Thi B",
        age: 25,
    },
    {
        id: '3',
        name: "Le Van C",
        age: 40,
    }
];
console.log("Patient data loaded.", patient);
// Thử nghiệm scope:
function testScope() {
    if(true) {
        let a ='1';
        var b ='2';
        const c ='3';
    }
    console.log(b); // Hoạt động vì var có phạm vi hàm
    //console.log(a); // Lỗi vì let có scope block
    //console.log(c); // Lỗi vì const có scope block
}
testScope();
