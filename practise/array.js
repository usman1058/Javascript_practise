
let ar=[10,2,3,1,345,3,43,54,34]
let at=[1,2,3,4,5,6,7,8,9]
let ad=[]

//-----------find largest num-------------
function findlv(a){
    let m = 0
for(let i=0;i<a.length;i++){
    if(a[i]>m){
        m=a[i];
}
}
console.log(m)
}

findlv(ar)
//-----------remove duplicate-------------

function removeDuplicate(a){
    let b = []
    for(let i=0;i<a.length;i++){
        if(!b.includes(a[i])){
            b.push(a[i])
        }
    }
    console.log(b)
}

removeDuplicate(ar)
//----------sum of even num---------------
function sunOfEvenNum(ab){
    let s=0;
    for(let i=0;i<ab.length;i++){
        if(ab[i]%2==0){
            s += ab[i]
        }
        }
        console.log(s)
}
sunOfEvenNum(at)
//----------getFirstElement-----------------
function getFirstElement(a){
    console.log(a[4])
}
getFirstElement(ar)
//----------getlastElement-----------------
function getlastElement(a){
    console.log(a[a.length-1])
}
getlastElement(ar)
//-----------lastElement--------------------
function last_element(ak){
    console.log(ak.length)
}
last_element(ar)
//----------if_empty-----------------------
function if_empty(a){
    if(a.length==0){
        console.log(true)
}
else{
    console.log(false)
}}
if_empty(ad)
//-------------2arrays----------------------
function combine(a,b){
   console.log ( [a += b])
}
combine(ar,at)
//-------------add2-------------------------
function add2(arr,b){
    console.log([arr+=b])
}
add2(ar,68768)