function createMap() {
        const cars = new Map();
        let brand = prompt('Introduce una marca de coche');
        let model = prompt('Inyroduce un modelo de esa marca de coche');
        let cv = prompt('Introduce la potencia del coche');
        let numDoors = prompt('Introduce el número de puertas');

        cars.set('brand', brand);
        cars.set('model', model);
        cars.set('cv', cv);
        cars.set('numDoors', numDoors);

        console.log(cars);
        cars.clear();
        console.log(cars);

}

createMap();


