function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password:string){
    // Create user
}

let loginUser = (name:string , email:string , isAuth:boolean = false) => {

}

let myValue = addTwo(5);

getUpper("0xjordan");
signUpUser("0xjordan","test@email.com","123456789");
loginUser("0xjordan", "test@gmail.com")


const getHello = (s: string):string => {
    return "Hello";
}

const heros = ["thor", "spiderman", "ironman"]
const numbers = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

numbers.map(number => {
    return `number is ${number}`
})

function consoleError(error: string):void {
    console.log(error)
}

function handleError(error: string):never {
    throw new Error(error);
}

consoleError("Error 404");
