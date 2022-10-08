// first position must be number and second postion must be string
let tuple: [string, number] = ["kaushal", 12]


// we can also do this
let num: number = 12
let str: string = "panchal"

tuple = [str, num]


let tuple2: [number, string][]

tuple2 = [[10, "munno"], [11, "patel"], [13, "paddtel"]]


// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');