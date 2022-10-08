interface example {
    key: number
    value: string
}

function show() {
    let kp: example = {
        key: 1,
        value: "nfn"
    }
}

//important 9.00
// sum is method
//here we declared but not defined
interface example2 {
    sum(a: number, b: number)
}

let calc: example2 = {
    sum(a: number, b: number) {
        return a + b
    }
}

console.log(calc)
console.log(calc.sum(1, 2))


interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};