function greet123(first_name: string, last_name: string = "panchal"): string {
    return first_name + " " + last_name
}
console.log(greet123("kaushal"))
console.log(greet123("kaushal", 'Panchal'))
