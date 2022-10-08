//when we create object of class the constructor will be automatically called

class user {
    constructor() {
        console.log("Constructor called")
    }
}

const user1 = new user()


class check {
    name = ""
    age = ""
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    displayVal() {
        console.log(this.name, this.age)
    }
}

const check1 = new check("kaushal", 18)
console.log(check1)