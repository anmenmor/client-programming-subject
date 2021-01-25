class Teacher extends Person{
    constructor(name, surName, lastName, typeStreet, address, number, email, courses, salary){
        super({name: name, surname: surName, lastName: lastName}, {typeStreet: typeStreet, address: address, no: number},
             email)
        this.courses = courses
        this.salary = salary     
    }
    toString(){
        return `${super.toString()}, courses: [${this.courses}], salary: ${this.salary}.`;
    }


}