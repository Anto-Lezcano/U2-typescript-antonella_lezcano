import { Car } from "./9.clasePrivada.js";

class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  chargue() {
    console.log("El auto se esta cargando");
  }
}

let newElectricCar = new ElectricCar("Toyota", 5000);
console.log(newElectricCar);
