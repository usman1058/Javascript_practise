//--------------greet----------------
function greet(a){
    console.log("Hello, " + a);
}
greet("ali")
//-------------square root------------
function sq(a){
    let d = a**2
    console.log(d)
}
sq(5)
//-------------person-----------------
function person(nam,ag){
let per={
    name:nam,
    age:ag
}
console.log(per)
}
person("ali",43)
//------------find age----------------
let per={
    name:"ali",
    age:76
}
function fage(a){
    console.log("age"+a.age)
}
fage(per)
//------------even or order-----------
function eo(a){
    if(a%2==0){
        console.log("even")
}else{
    console.log("odd")
}}
eo(5)
//------------addNewProperty-----------
let pr={
    name:"ali",
    age:76
}
function akjkn(a,b,c){
    Object.defineProperty(a, b, {value:c})
    console.log(a)
}
akjkn(pr,"clas","768")
//------------delete property-----------
let er={
    name:"ali",
    age:76
}
function del(a){
 delete a.age
console.log(a)
}
del(er)
//-----------upper case----------------
function uc(a){
    console.log(a.toUpperCase())
}
uc("ali")
