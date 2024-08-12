//------------reversARRAY--------------
arr =[1,2,3,4,5]


function rev(a){
    let r=[]
    for(let i=a.length;i>=0;i--){
     r.push(a[i]);
    }
console.log(r)
}
 rev(arr)
 //-------------sumArray---------------
 function sumArray(a){
    let sum=0
    for(i=0;i<a.length;i++){
       sum+=a[i]
    }
    console.log(sum) 
 }
 sumArray(arr)
 