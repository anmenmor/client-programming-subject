class Person{
  
    constructor(name, address, email){
        this.name = name
        this.address = address
        this.email = email
    }

    toString(){
        return `name: {name: ${this.name.name}, surname: ${this.name.surname}, lastName: ${this.name.lastName}}, 
        address: {typeStreet: ${this.address.typeStreet}, address: ${this.address.address}, no: ${this.address.no}}, email: ${this.email}.`;
    }
}

