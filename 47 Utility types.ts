
// 1. Partial
interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional

console.log(pointPart);

// 2. Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

console.log(myCar);

// 3.Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

interface Person {
    name: string;
    age: number;
    location?: string;
}

// 4.Omit
// Omit` has removed age and location from the type and they can't be defined here
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
};


// 5.Pick
// Pick has only kept name, so age and location were removed from the type and they can't be defined here
interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob2: Pick<Person, 'name'> = {
    name: 'Bob'
};


// 6 Exclude
// Exclude removes types from a union.
type Primitive = string | number | boolean
const value12: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
