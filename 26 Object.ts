const person: object = {
    name: "Kaushal",
    age: 15
}

// it behaves as blank object
console.log(person)
const person2: { name: string; age: number; } = {
    name: "Kaushal",
    age: 15
}
type objType = {
    name: string;
    age: number
}

const person3: objType = {
    name: "Kaushal",
    age: 15
}


const car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
const car1: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
car1.mileage = 2000;
