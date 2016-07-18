//Practising JavaScript Higher Order Functions via Array Methods

//Create a new array with only objects whose names start with the specified letter(s) using fitler()
var arr = [
  {name: "Babs", count: 2},
  {name: "Dee", count: 2},
  {name: "Gee", count: 2},
  {name: "Babs", count: 2},
  {name: "Babs", count: 2},
  {name: "Segs", count: 2},
  {name: "Vic", count: 2},
  {name: "Bros", count: 2},
  {name: "Babe", count: 2},
  {name: "Babbbs", count: 2},
  {name: "Baba", count: 2}
]



newArr = arr.filter(function(item){
  return item.name.startsWith('B') || item.name.startsWith('Vi')
})

console.log(newArr)

//Use .copyWithin() 
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits)
var selectedFruits = fruits.copyWithin(2,1,2);
console.log(selectedFruits); // ["Banana", "Orange", "Orange", "Mango", "Kiwi", "Papaya"]


//Use every() to check if all of the people below are above 18

var persons = [
  {name: "Mike", age: 26},
  {name: "Michelle", age: 36},
  {name: "John", age: 14},
  {name: "Seun", age: 29},
  {name: "Julie", age: 13},
  {name: "Derenle", age: 40},
  {name: "Grandpa", age: 98},
  {name: "Mufutau", age: 12},
  {name: "Seun", age: 19},

];
function checkAge(person) {
  return person.age >= 18;
}

console.log(persons.every(checkAge)); //False

//Use concat() to join both fruits and selectedFruits into one array 
var concatArr = fruits.concat(selectedFruits)
console.log(concatArr)

//Use fill() to the array elements of persons with "me"
//var fillArr = persons.fill("Me")
//console.log(fillArr); // ["Me", "Me", "Me", "Me", "Me", "Me", "Me", "Me", "Me"]

//Commented out to prevent it from mutating the persons array which is used in the following examples
  
//Use .find() to find the first person in Person named Seun
  var firstPerson = persons.find(function (pers) {
    return pers.name === "Seun";
  })
  
  console.log("The first person is " + firstPerson.name + " and his age is " + firstPerson.age);

var persons = [
  {name: "Mike", age: 26},
  {name: "Michelle", age: 36},
  {name: "John", age: 14},
  {name: "Seun", age: 29},
  {name: "Julie", age: 13},
  {name: "Derenle", age: 40},
  {name: "Grandpa", age: 98},
  {name: "Mufutau", age: 12},
  {name: "Seun", age: 19}
];

var arrAge = [2,34,56,7,8,19,33,34];

//Use findIndex to find the index of the first element in an array that meets the requirement
//Here we are looking for the first person aged 19.

function checkAge(age) {
  return age == 19;
}

(function displayIndex() {
  console.log(arrAge.findIndex(checkAge))
})(); //5


//forEach calls a provided function on each element in an array one after the other
//Use forEach to write out the names and ages of each person on a new line in HTML

var message = "";

function nameAndAge(person) {
  
  (function() {
    message += "<p>"+ person.name + "'s" + " age is " + person.age + "</p></br>"
  })();
}


persons.forEach(nameAndAge);
console.log(message) //<p>Mike's age is 26</p></br><p>Michelle's age is 36</p></br><p>John's age is 14</p></br><p>Seun's age is 29</p></br><p>Julie's age is 13</p></br><p>Derenle's age is 40</p></br><p>Grandpa's age is 98</p></br><p>Mufutau's age is 12</p></br><p>Seun's age is 19</p></br>


var persons = [
  {name: "Mike", age: 26},
  {name: "Michelle", age: 36},
  {name: "John", age: 14},
  {name: "Seun", age: 29},
  {name: "Julie", age: 13},
  {name: "Derenle", age: 40},
  {name: "Grandpa", age: 98},
  {name: "Mufutau", age: 12},
  {name: "Seun", age: 19}
];

var arrAge = [2,34,56,7,8,19,33,34];

//Use findIndex() to find the index of the first element in an array that meets the requirement
//Here we are looking for the first person aged 19.

function checkAge(age) {
  return age == 19;
}

(function displayIndex() {
  console.log(arrAge.findIndex(checkAge))
})(); //5


//forEach() calls a provided function on each element in an array one after the other
//Use forEach to write out the names and ages of each person on a new line in HTML

var message = "";

function nameAndAge(person) {
  message += "<p>"+ person.name + "'s" + " age is " + person.age + "</p></br>";
}


persons.forEach(nameAndAge);
console.log(message) //<p>Mike's age is 26</p></br><p>Michelle's age is 36</p></br><p>John's age is 14</p></br><p>Seun's age is 29</p></br><p>Julie's age is 13</p></br><p>Derenle's age is 40</p></br><p>Grandpa's age is 98</p></br><p>Mufutau's age is 12</p></br><p>Seun's age is 19</p></br>


var arrAge = [2,34,56,7,8,19,33,34];



//indexOf() returns the index at which the first instance of a specified value is found in an array
//Find the index of the value 56 in the arrAge array
var a = arrAge.indexOf(56);
console.log(a) // 2

//isArray() determines whether an object is an array
console.log(Array.isArray(message)) //false as message is a string
console.log(Array.isArray(arrAge)) //true as arrAge is an array


//.join() joins all the elements in an array together and forms a string
var ages = arrAge.join();
console.log(ages) //2,34,56,7,8,19,33,34
typeof ages //returns "string"


//.lastIndexOf() finds the last occurence of a specified value in an array and returns the index at which it is found. if it isn't found, it returns -1
var lastArr = arrAge.lastIndexOf(34);
console.log(lastArr) // returns 7 and ignores the value 34 stored at index 1 in the array.


//.map() creates an array with the result of calling a specified function on each element of the current array
function namesAndAges(item) {
  var personAge = [item.name,":",item.age].join(" ");
  return personAge
}

console.log(persons.map(namesAndAges));


//.push() adds elements to the end of an array
(function pushName(name,age) {
  persons.push({name: name, age: age});
})("Sarah",23);

console.log(persons)

//using .map() and .push() push all the elements in one object into another also, while at it, take off 2 years on each new person's age
var newPersons = [
  {name: "Esther", age: 24},
  {name: "Drake", age: 29},
  {name: "Mona", age: 27},
  {name: "Ada", age: 26}
];

function pushNewPerson(item) {
  item.age -= 2;
  persons.push(item);
}

newPersons.map(pushNewPerson)

console.log(persons); // [Object { name="Mike",  age=26}, Object { name="Michelle",  age=36}, Object { name="John",  age=14}, Object { name="Seun",  age=29}, Object { name="Julie",  age=13}, Object { name="Derenle",  age=40}, Object { name="Grandpa",  age=98}, Object { name="Mufutau",  age=12}, Object { name="Seun",  age=19}, Object { name="Sarah",  age=23}, Object { name="Esther",  age=22}, Object { name="Drake",  age=27}, Object { name="Mona",  age=25}, Object { name="Ada",  age=24}]
//the newly added persons also have two years taken off their ages as specified.


//.reduce() reduces an arrays elements into a single value
function addAge(total, age) {
  return total + age
}

console.log(arrAge.reduce(addAge)); // 193
console.log(arrAge.reduceRight(addAge)); // 193 also, but this time the evaluation went from right to left


//.reverse() reverses the order of elements in the array
arrAge.reverse(); //[34, 33, 19, 8, 7, 56, 34, 2]


//.shift() removes the first element of an array and returns the array minus the removed element. It is the inverse of .pop()
console.log(arrAge) //  [34, 33, 19, 8, 7, 56, 34, 2] still reversed from our .revers() call above
console.log(arrAge.shift()) //34
console.log(arrAge) //returns the array sans the lopped off first element "34"


//.pop() the inverse of shift
console.log(arrAge.pop());
console.log(arrAge)


//.slice() returns selected elements of an array as a new array
//Take only the first thre persons in the persons array
var slicedPersons = persons.slice(0,3);
console.log(slicedPersons)



//Take only the last three persons
var slicedPersons2 = persons.slice(-3);
console.log(slicedPersons2);



//.some() related to .every() but in this case tests if any of the elements passes a test. some() stops at the first instance of returning "true" and would not go through the remaining elements once an element meets the set conditions

function over18(age) {
  return age > 18
}

console.log(arrAge.some(over18)); //true as some are above eighteen even though some are not
console.log(arrAge.every(over18)); //false as not every one is above eighteen


//.sort() is used to sort elements in an array. Find the highest age in the age array
function sortArr(a,b) {
  return b-a
};

newArrAge = arrAge.sort(sortArr)
console.log(newArrAge[0]) //56, the oldest age in the array


//.splice either adds or removes elements to or from an array or does both at the same time
var toBeSpliced = [1,2,3,4,5,6,7,8,9]
//Remove numbers 4 and 5
var newSpliced = toBeSpliced.splice(3,2)
console.log(newSpliced)  // [4, 5] the removed items
console.log(toBeSpliced) // [1, 2, 3, 6, 7, 8, 9] the remaning items

//Add 10 and 11 to the end of the array
toBeSpliced.splice(8,0,10,11)
console.log(toBeSpliced);

//Add 12 and 13 but take away 3 and 6
var newSpliced2 = toBeSpliced.splice(2,2,12,13)
console.log(newSpliced2);
console.log(toBeSpliced);


//.toString() concerts an array into a string and returns the result
var arrAgeString = arrAge.toString();
console.log(arrAgeString);


//.unshift() is the inverse of .push(). It adds elements to the beginning of an array
var newArrLength = arrAge.unshift(30,21,88);
console.log(arrAge);
console.log(newArrLength);


//valueOf() method returns the value of the array itself. It is the default method of the array in question and will return the same as Array
console.log(arrAge.valueOf());





  