class Student extends Person{
    constructor(name, surName, lastName, typeStreet, address, number, email, course, payment){
        super({name: name, surname: surName, lastName: lastName}, {typeStreet: typeStreet, address: address, no: number},
             email)
        this.course = course
        this.payment = payment
    }
    toString(){
        return `${super.toString()}, course: ${this.course}, payment: ${this.payment}.`;
    }


}