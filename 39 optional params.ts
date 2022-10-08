function greet456(first_name: string, last_name?: string): string {
    if (!last_name) {
        return first_name
    }
    return first_name + " " + last_name
}
console.log(greet456("kaushal"))
console.log(greet456("kaushal", 'Panchal'))
