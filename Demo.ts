
// 8. Type Annotations
var message: string = "Munno"
var munno: boolean = true

console.log(message)
console.log(typeof(message))
console.log(typeof (munno));

function add (x:number,y:number):void{
let z:number = x +y 

console.log(z)
}

add(5,3)



// Video 9th let vs cont vs var
function showName() {
    // 1. we can't do this 
    // console.log(x)
    // var x: string = "lao"
    let name: number = 56
    if (name > 5) {
        let name2: string = "munno"
    }
    while (name > 5) {
        console.log(name)
        //2. we can't overide this coz lt's blockscope
        // name2 = "panchal"
        name++
    }

    //3. we can do this in with but not let
    // var z:number;
    // var z:number
}


// 10 Types in typescript
// three types
// 1. static type
// at compile time or without running time
// it can be divided into two types 
//    1/