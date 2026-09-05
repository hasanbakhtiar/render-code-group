
class Car {

    public infoBrand: string;
    protected infoYear: number;
    private infoNewVehicle: boolean;


    constructor(brand: string, year: number, newVehicle: boolean) {
        this.infoBrand = brand;
        this.infoYear = year;
        this.infoNewVehicle = newVehicle;
    }

    public calculateSpeed(km: number, h: number) {
        return this.infoBrand + " speed: " + km / h + " km/h"
    }
}

class Moto extends Car {
    constructor(brand: string, year: number, newVehicle: boolean) {
        super(brand, year, newVehicle)
    }


    
    
}

const myCar = new Car("BMW", 2000, true);
const myMoto = new Moto("Yamaha", 2002, true);

console.log(myCar.calculateSpeed(200, 4));
myCar.infoBrand;







// function infoFunc(a: number, b: number):void {
//     a+b;

// }

// infoFunc(20, 10);