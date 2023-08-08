const User = {
    name: "0xjordan",
    email: "test@gmail.com",
    isActve: true
}

function createUser({name: string, isPaid: boolean}){
    //Logic here
}


let newUser = {name: "0xjordan", isPaid: true}

createUser(newUser);

function createCourse():{name: string, price: number}{
    return {name: "react", price: 399}
}

