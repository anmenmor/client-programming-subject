class Account {
    constructor(id, name, amount){
        this.id = id;
        this.name = name;
        this.amount = amount || 0;
    }

    deposit(amount){
        if(!isNaN(amount) && amount > 0 && /^\d+(\.\d{0,2})?$/.test(amount)){
            this.amount += amount;
        }
    }

    draw(amount){
        if(!isNaN(amount) && amount > 0 && /^\d+(\.\d{0,2})?$/.test(amount)){
            this.amount -= amount;
        }
    }

    toString(){
        return `id: ${this.id}, name: ${this.name}, amount: ${this.amount}.`;
    }
}