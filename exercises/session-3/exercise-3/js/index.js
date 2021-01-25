/*let persona = new Person({name: "pepe", surname: "perez", lastName: "asdf"}, {typeStreet: "Stree", address: "Amapola", no: 8}, "mail@mail.com")
console.log(persona.toString())
let student = new Student("pepe", "Perez", "asdf", "street", "amapola", 8, "mail@mail.com", 1, 10)
console.log(student.toString())
let teacher = new Teacher("pepe", "perez", "perez", "calle","clavel", 5, "a@mail.com",[1, 2, 3], 1500)
console.log(teacher.toString())*/

const inputNameSt = document.getElementById('nombre_alumno');
const inputSurnameSt = document.getElementById('apellido1_alumno');
const inputLastnameSt = document.getElementById('apellido2_alumno')
const inputTypeStreetSt = document.getElementById('tipoCalle_alumno');
const inputAddressSt = document.getElementById('direccion_alumno');
const inputNoSt = document.getElementById('numero_alumno');
const inputEmailSt = document.getElementById('email_alumno');
const inputCourseSt = document.getElementById('curso_alumno');
const inputPaymentSt = document.getElementById('cuota_alumno');
let student;
const inputNameTch = document.getElementById('nombre_profesor');
const inputSurnameTch = document.getElementById('apellido1_profesor');
const inputLastnameTch = document.getElementById('apellido2_profesor')
const inputTypeStreetTch = document.getElementById('tipoCalle_profesor');
const inputAddressTch = document.getElementById('direccion_profesor');
const inputNoTch = document.getElementById('numero_profesor');
const inputEmailTch = document.getElementById('email_profesor');
const inputCoursesTch = document.getElementById('cursos_profesor');
const inputSalaryTch = document.getElementById('sueldo_profesor');
let teacher;
//let students = [];
let teachers = [];
const textInput = document.getElementById('mostrar');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

document.getElementById('crear_alumno').addEventListener("click",()=>{
    let name = inputNameSt.value;
    let surname = inputSurnameSt.value;
    let lastName = inputLastnameSt.value;
    let typestreet = inputTypeStreetSt.value;
    let address = inputAddressSt.value;
    let number = inputNoSt.value;
    let email = inputEmailSt.value;
    let course = inputCourseSt.value;
    let payment = inputPaymentSt.value;
    let students;
    let studentsString = getCookie("students")
    if(studentsString !== undefined) {
        students = JSON.parse(studentsString)
    } else { 
        students = [] 
    }
    const newStudent = new Student(name, surname, lastName, typestreet, address, number, email, course, payment);
    let index = students.findIndex(element => element.email === email);
    if (index === -1){
        students.push(newStudent);
    } else {
        students[index] = newStudent;
    }
    textInput.value = newStudent.toString();
    document.cookie = `students=${JSON.stringify(students)}`;
})

document.getElementById('crear_profesor').addEventListener("click",()=>{
    let name = inputNameTch.value;
    let surname = inputSurnameTch.value;
    let lastName = inputLastnameTch.value;
    let typestreet = inputTypeStreetTch.value;
    let address = inputAddressTch.value;
    let number = inputNoTch.value;
    let email = inputEmailTch.value;
    let courses = inputCoursesTch.value;
    let salary = inputSalaryTch.value;
    let teachers;
    let teachersString = getCookie("teachers")
    if(teachersString !== undefined) {
        teachers = JSON.parse(teachersString)
    } else { 
        teachers = [] 
    }
    const newTeacher = new Teacher(name, surname, lastName, typestreet, address, number, email, courses, salary);
    let index = teachers.findIndex(element => element.email === email);
    if (index === -1){
        teachers.push(newTeacher);
    } else {
        teachers[index] = newTeacher;
    }
    textInput.value = newTeacher.toString();
    document.cookie = `teachers=${JSON.stringify(teachers)}`;
})


//document.cookie = `${name} ${surname1} ${surname2}; expires=${date}; path=/;`;
  //      textAreaInput.value = document.cookie;