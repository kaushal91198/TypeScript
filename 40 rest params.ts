function greet16(greetings: string, ...names: string[]): string {

    return greetings + " " + names.join(", ")
}
console.log(greet16("Hello", 'Panchal',' Disco' ,'Dancer'))
