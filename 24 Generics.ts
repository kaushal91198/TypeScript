// T is type
//we don't know the argument type so we can give type T
function show<T>(arg: T): T {
    return arg
}

const hjk = show<string>("bjhbjhda")

console.log(hjk)

const fuc = show<number>(123)

console.log(fuc)


function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));


class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());


type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };