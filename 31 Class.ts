class message {
    a = 100
    constructor() {
        this.sms()
    }
    sms() {
        console.log("I m doing")
    }
    hello() {
        console.log("Hello")
    }
    display(name: string) {
        console.log(name)
    }
}
const obj = new message()
obj.display("kaushal")
