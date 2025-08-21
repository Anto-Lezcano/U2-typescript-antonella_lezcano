export class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }
  drive() {
    console.log(`Driving a ${this.make}`);
  }
}

let newCar = new Car("Toyota");

newCar.drive();
