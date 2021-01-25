class Rectangle{
    base;
    altura;

    constructor(obj){
        this.base = obj.base
        this.altura = obj.altura
    }

    calcArea(){
        return base * altura;
    }

    calcPerimeter(){
        return 2 * (base + altura);
    }

    calcDiagonal(){
        return Math.sqrt(base)+Math.sqrt(altura);
    }
}

