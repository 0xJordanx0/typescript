let value: string | number = "";

value = 2;
value = "test";

type Moderator = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let jordan: Moderator | Admin = {name: "test", id: 0}

jordan = {username: "test", id: 2}

function getDbId(id: number | string){
    if (typeof id === "string"){
        id.toLowerCase();
    }
}