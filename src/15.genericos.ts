function identity<T>(arg: T): T {
  return arg;
}

let num: number = identity<number>(6983);
console.log(num);

let texto: string = identity<string>("Hola TypeScript");
console.log(texto);
let booleano: boolean = identity<boolean>(true);
console.log(booleano);
