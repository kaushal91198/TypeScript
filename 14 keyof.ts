interface Person {
    name: string;
    age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(personjkl: Person, property: keyof Person) {
    console.log(`Printing personjkl property ${property}: "${personjkl[property]}"`);
}
let personjkl = {
    name: "Max",
    age: 27
};
printPersonProperty(personjkl, "name"); 