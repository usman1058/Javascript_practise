//-----------find datatype--------------
 let ab=[1,2,3]
 const car = {type:"Fiat", model:"500", color:"white"};
function finddatatype(a){
    if (typeof a === 'number'){
        console.log("number")
}else if(typeof a === "boolean"){
    console.log("boolean")
}else if(typeof a === "string"){
    console.log("string")
}else if(typeof a === "bigint"){
    console.log("bigint")
}else if(typeof a === "object"){
    console.log("object")
}else{
    console.log("symbol")
}
}
 finddatatype(767n)

//-----------create person------------
function createperson(nam,ag){
    let person = {
        name:nam,
        age:ag
}
console.log(person)
}
createperson("sachin",25)
//-----------find age----------------
function findage(a){
    console.log(a.age)
}

findage({name:"sachin",age:25})
//------------add new property---------
function add_new(a,b,c){
console.log(a[b]+=c)

}
add_new("nam","hvj",car)
