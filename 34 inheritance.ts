class createAccount {
    makeEmail(email) {
        return `${email} added`
    }
}



class User extends createAccount {
    addUser(user) {
        return `${user} added`
    }
    deleteUser(user) {
        return `${user} deleted`
    }
}

const user = new User()

console.log(user.makeEmail("munno@email.com"))