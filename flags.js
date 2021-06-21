"USE STRICT"

let user = {
    name: "John",
    secName: "fuck",
};

Object.defineProperty(user, "secName", {
    enumerable: false,//this property will be hidden
    writable: true //can rewrite this property
});

user.secName = "notFuck";
console.log(Object.isExtensible(user));