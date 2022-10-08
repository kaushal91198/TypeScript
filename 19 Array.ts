var list :number[]  = [1,3,5]


//second way uses generic array type
//if we want to define type atr runtime then this can be very useful
var list2:Array<number> = [2,6,8]


console.log(list)
console.log(list2)

// if we put only readonly then values of array will not be changed
var list3:readonly string[] = ["jkj",'klj']
// list3.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

