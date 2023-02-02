interface A {
    display(): void;
}

class B implements A {
    display() {
        console.log("B");
    }
}

class C implements A {
    display() {
        console.log("B");
    }
    //  Throws error:  Class 'C' incorrectly
    // implements interface 'A'.
    //  Property 'display' is missing in type
    // 'C' but required in type 'A'.
    Display() {
        console.log("C");
    }
}

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width123: number, protected readonly height123: number) { }

    public getArea(): number {
        return this.width123 * this.height123;
    }
}
const  myRect = new Rectangle(35,23)


console.log(myRect.getArea())