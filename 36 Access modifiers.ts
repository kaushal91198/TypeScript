// public 
// private
// protected


// by default members are public
class par {
    a = 1
    private b = 2
    protected c = 3
    show() {
        console.log("showing only")
    }
    display() {

        this.a = 50
        this.b = 100
        this.c = 150
        console.log(this.a, this.b, this.c)
    }


}

class par2 extends par {
    a = 150
    //we can't do this coz b is private 
    // b = 50
    // we can do this coz c is protected
    c = 50
}

let mnjk = new par2()

//we can't do this coz b is private
// mnjk.b = 200
//we can't do this coz x is protected
// mnjk.x = 200

