interface Shape {
  area(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(20);
console.log(circle);
