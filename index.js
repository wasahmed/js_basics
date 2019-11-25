 // Comment use to explain why and how

 //primitives data types////////////////////////////////////
 let name = 'jack'; // string literal
 let age = 30; // number literal
 let isApproved = false; // boolean literal
 let firstName = undefined; // type and value is undefined
 //let selectedColor = null; //!!!!! typeof = object !!!!
 //////////////////////////////////////////////////////////

 //////////////objects(refernce type)//////////////////////////////
 let person = {
     name: 'a',
     age: 30
 };
 //dot notation
 person.name = 'john';
//bracket notation !keep in mind (php key value pair)
//////////////////////////////////////////////////////////////////

///////////////arrays(reference type)//////////////////////////////
let selectedColor = ['red', 'blue'];//array literal
//adding ! can be of different types
    selectedColor[2] = 'green';
//access (! dot notation can give us more info of the array)
console.log(selectedColor[0]);
//////////////////////////////////////////////////////////////////

//////////functions(reference type)//////////////////////////////////
function greet(name, lastName){// name is a parameter
    //logic 
    console.log('cool function' + name + lastName);
}

function square(number){
    return number * number;
}

//call function
greet(' john', ' snow');// thanks is a argument
console.log(square(2));
///////////////////////////////////////////////////////////////////////