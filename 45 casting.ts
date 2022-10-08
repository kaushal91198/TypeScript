// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let x1: unknown = 'hello';
console.log((x1 as string).length);


let x2: unknown = 'hello';
console.log((<string>x2).length);