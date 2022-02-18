// New Features in ES6

//1.The let keyword -done
//2.The const keyword -done
//3.Arrow Functions -done

//4.For/of 

// The JavaScript for/of statement loops through the values of an iterable objects.

// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

// The for/of loop has the following syntax:

// for (variable of iterable) {
//   // code block to be executed
// }

var eg1; //looping over array

// const cars = ["BMW", "Volvo","Mini"];
// let text ="";
// for (let x of cars){
//     console.log(x);
// }


var eg2;//Looping over array

// let language = "Javascript";

// let text="";
// for (let x of language){
//     console.log(x);
// }


//5.Map Objects - has to Work Specifically

//6.Set Objects

var Set;

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.


//Steps to create:

// Passing an Array to new Set()
// const letters = new Set(["a","b","c","d"]);
// console.log(letters.size);-------------------------------------------------------------------------X-Set is not a constructor


// Create a new Set and use add() to add values
// const letters = new Set();-------------------------------------------------------------------------X-Set is not a constructor

// letters.add("a")
// letters.add("b")
// letters.add("c")
// console.log(letters)

// Create a new Set and use add() to add variables

// const letters = new Set();-------------------------------------------------------------------------X-Set is not a constructor

// const a= "a";
// const b= "b";
// const c= "c";

// letters.add(a);
// letters.add(b);
// letters.add(c);


//for each method for set

// letters.array.forEach(element => {
//     console.log(element);
// });


//7.Classes - has to work Specifically
//8.Promises -done
//9.Symbol

var symbol; //create a unique identifiers

// A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
// It represents a unique "hidden" identifier that no other code can accidentally access.
// For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.


// const person = {
//     fN: "anand",
//     LN:  "Ubale",
//     age: 24
// };

// let id = Symbol('id');
// person[id]=435;
// console.log(person[id]);
// console.log(person.id);





//10.Default Parameters

var Default_Parameters;

//we already define value while declaring function so if by the time of calling its not provided it takes its place


// function Myfunction(x,y=25){
//     return x+y;
// }
// console.log(Myfunction(20,30));  //taking value of y=30
// console.log(Myfunction(20));      //taking defualt value y=25 as not given











//11.Function Rest Parameter

var Rest_Parameter

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:


var eg1;
// function sum(...args){
//     let sum =0;
//     for(let arg of args){
//         sum += arg;
//     }
//     return sum;
    
// }


// let y = sum(23,34,3,23,4,3,576,87,9,9,64,3,42,42)
// console.log(y);


//spread operator :


// var arr1= [1,2,3];
// var arr2= [4,5,6];

// var arr3 = [...arr1,...arr2]
// arr3.forEach(element => {
//     console.log(element);
// })

// [a,b,...rest] = [1,2,3,4,5,6];

// console.log(a);     //1
// console.log(b);    //2
// console.log(rest);  //[ 3, 4, 5, 6 ]


//for array:

// const foo = ['one','two','three'];
// const [red,yellow,green] = foo;                       //reassigning to another array

// console.log(red);      //one
// console.log(yellow);   //two
// console.log(green);    //three

//for object:

// const user = {
//     id:42,
//     isVerified: true
// };

// const {is,isVerified} = user

// console.log(user.id);
// console.log(user.isVerified);




//12.String.includes()
var string_includes;

//Method return true if present other wise false;
// let text ="Hello worlds!"
// console.log(text.includes("Hello"));  //true 
// console.log(text.includes("hello"));  //false - case sentive



//13.String.startsWith()

var string_startsWith;
// The startsWith() method returns true if a string begins with a specified value, otherwise false:
// let text ="Hello worlds!"
// console.log(text.startsWith("Hello"));  //true 
// console.log(text.startsWith("hello"));



//14.String.endsWith()
var string_endwith;

//The endsWith() method returns true if a string ends with a specified value, otherwise false:

// let text ="Hello"
// console.log(text.endsWith("Hello"));  //false
// console.log(text.endsWith(""));  //true 



//15.Array.from()

var array_from;

//The Array.from() method returns an Array object from any object with a length property or any iterable object.

// const x= Array.from("KJHSDLALD");
// console.log(x)    //output: ['K', 'J', 'H','S', 'D', 'L','A', 'L', 'D']



//16.Array keys()
var Array_Keys;
//The keys() method returns an Array Iterator object with the keys of an array.

// const fruits = ["Apple","banana","orange"];
// const keys = fruits.keys();

// let text = "";
// for(let x of keys){
//     console.log(x);
// }




//17.Array find()-done
//18.Array findIndex()-done
//19.New Math Methods
//20.New Number Properties
//21.New Number Methods
//22.New Global Methods
//23.Object entries
//24.JavaScript Modules

//25.template literals
//26.MultiLine String


