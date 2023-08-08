const User = {
    name: "0xjordan",
    email: "test@gmail.com",
    isActve: true
}

function createUser({name: string, isPaid: boolean}){
    // Logic here
}


let newUser = {name: "0xjordan", isPaid: true}

createUser(newUser);

function createCourse():{name: string, price: number}{
    return {name: "react", price: 399}
}

type User = {
    name: string,
    email: string,
    isActive: boolean
    credCardDetails?: number //Optional
}

type UserReadOnly = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
}

function createNewUser(user: User):User {
    // Logic Here
    return user;
}

createNewUser({name: "0xjordan", email: "test@email.com", isActive: true})

let myUser: UserReadOnly = {
    _id: "12345",
    name: "0xjordan",
    email: "test@gmail.com",
    isActive: false
}

myUser.email = "tester@gmail.com";
