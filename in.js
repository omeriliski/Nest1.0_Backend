// for (let i= 1; i < 100; i++) {
//     if(i % 3==0 && i % 5==0 ) console.log("EvoMotiv")
//     else if(i % 3==0) console.log("Evo")
//     else if(i % 5==0) console.log("Motiv")
//     else console.log(i);
// } 

// const test=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             // console.log('i :>> ', i);
//             // console.log('j :>> ', j);
//             if(arr[j]==arr[i]) return true;
//         }
//     }
//     return false
// }

// const arr=[1,3,5,8,6,9,10,12];
// const t = test(arr);
// console.log(t);

const test2 = (arr)=>{
    // arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==arr[i+1]) return true       
    }
    return false;
}
const arr=[1,3,5,8,6,9,5,10,12];
const t = test2(arr);
console.log(t);