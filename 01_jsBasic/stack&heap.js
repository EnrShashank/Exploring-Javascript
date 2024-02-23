// stack (Primitive types -> Number, String, Boolean, Undefined, Null)
// Heap (Non-Primitive types -> Object, Arrays, Function)

let myEmail = "shashank123";
let anotherEmail = myEmail;
anotherEmail = "shashankcu23@Gmail.com";

console.log(anotherEmail);
console.log(myEmail);

// hence the value of the original variable will not change as it is in stack memory.
//---------------------------------------------------------------------------------------//
let oneHeap = {
    email: "shashank.ofcs.19@gmail.com",
    user: "Google",
    City: "Varansi"
}
let userTwo = oneHeap;
userTwo.City = "Noida";
console.log(oneHeap.City);
console.log(userTwo.City);

//Hence, the value of City is changed in both the variable as it is taking reference from main value.
//With, Heap the main memory value is also changed.