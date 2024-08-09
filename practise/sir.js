let  nam = "talhaMalik"
let fn = nam.slice(0,5)
let ln  = nam.slice(5)

ln2 = ln.toLowerCase()

let sample = fn+"_"+ln2

 console.log( sample)
//         --------------------------------------------------
 let obj = {
    firstName: "Talha",
    lastName: "Malik",
    age: 23,
    occupation: "Software Eng."
}

let jik = "";
for (let key in obj) {
jik += (obj[key])
}

console.log(jik)
//           -----------------------------------------------------
let array = [1,2,3,4,5,]
for(let i=5;i>=0;i--){
   console.log(array[i])
}
//           ---------------------------------------------------------4
let arr = "qwrtyuiopasadfh";   //  array of characters
function countvowals(string){
   let count = 0;
   let vowels = ["a","e","i","o","u"];
   for (let i = 0; i < arr.length; i++) {
      let char = string[i];
      if(vowels.includes(char)){
         count++;
      }

console.log(count);
}
}

countvowals(arr)
   // ------------------------------------

function printNumbers() {
   for (let i = 1; i <= 5; i++) {
     console.log(i);
   }
 }
 
 printNumbers();
//========

  function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
 
 
//   const Array = [1, 2, 3, 4, 5];
//   const result = sumArray(Array);
//   console.log(result); 
 
//  // _____________FOR-IN-LOOP______________
// let obrj = {
//    name: 'Ahmad',
//    age: 19,
//    occupation: 'Digital Marketer'
//   };
//   for(let value in obrj){
//    console.log(value);
//   }



// listProperties(Object);
//  // _____________Array______________
//  function getFirstElement(array) {
//    if (array.length > 0) {
//      return array[0];
//    } else {
//      return undefined; 
//    }
//  }
 
 
//  const myArray = [10, 20, 30, 40];
//  const firstElement = getFirstElement(myArray);
//  console.log(firstElement); 
//    // _____________objects______________
//    function getAge(person) {
//        return person.age;
//      }
     
     
//      const person = {
//        name: 'Ahmad',
//        age: 19
//      }
     
//      const age = getAge(person);
//      console.log(age)

let ig = " "
     let oj = {
      name: 'Ahmad',
      age: 19,
      occupation: 'Digital Marketer'
     };
     for(let key in oj){
    ig += (oj[key])
     }
   
     console.log(ig)

      const myArray = [10, 20, 30, 40];
      for(let value in myArray){
         console.log(myArray[value])
      }