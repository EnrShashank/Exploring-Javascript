// arrays

// const arr = [1,2,3,4,"Shashank",true]
// console.log(arr);

//arr.unshift(11); // put the value to the first hence this is not the optimized way.
// arr.shift(3);

// console.log(arr.includes("Shashank"));
// console.log(arr);

const myarr = [0,1,2,3,4,5,6,7,8];
console.log(myarr);

console.log(myarr.splice(1,4)); //splice() changes the contents of the original array.
console.log("b",myarr);

console.log(myarr.slice(1,4)); //slice() extracts elements into a new array without modifying the original.
