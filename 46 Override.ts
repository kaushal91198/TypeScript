interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    //override
    // this toString replaces the toString from Rectangle
    public toString(): string {
      return `Square[width=${this.width}]`
    }
  }


  const mySqu = new Square(12)

  console.log(mySqu.toString())