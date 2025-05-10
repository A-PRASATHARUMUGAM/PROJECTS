// Array
let arr=["prasath","sabari", "vignesh","Tamil"];
console.log(arr);

// Add the Element in Array
 arr[4]="Ravi";             //Index to add the element 
 arr.push("Ravi Back");    //Add element Back    
 arr.unshift("Ravi Front") //Add element Front
 console.log(arr);

//Remove the Element

arr.pop();       //Remove last element 
arr.shift();     //Remove Front element 

console.log(arr);

//Add and Remove the element in specifice space 

//Add specifice place 
arr.splice(3,0,"English");
console.log(arr);


//Remove specifice place
arr.splice(3,1);
console.log(arr);







 




