// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// array.shift();
// array.sort();
// array.push("Kiwi");
// array.shift();
// array.reverse();

// var array2 = ["Banana",["Appels",["Oranges"], "Blueberries"]];
// array2[1][1][0];



// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells: ["abrakadabra", "shazam", "boo"],
// 	shout: function(){
// 		console.log("AHHH");
// 	}

// }

// var list = [
// 	{
// 		username: "andy",
// 		password: "secret"
// 	},
// 	{
// 		username: "jess",
// 		password: "123"
// 	}

// ]


// var database = [
// 	{
// 		username: "Daniel",
// 		password: "1234"
// 	},
// 	{
// 		username: "sally",
// 		password: "1234"
// 	},
// 	{
// 		username: "ingrid",
// 		password: "777"
// 	},
// ]

// var newsFeed = [
// 	{
// 		username: "Bobby",
// 		timeline: "So tired from all that learning"
// 	},{
// 		username: "yoni",
// 		timeline: "Holloo fans"
// 	},{
// 		username: "Sunny lu", 
// 		timeline: "go vechain"
// 	}

	
// ];

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt =prompt("What's your password?");

// function isUserValid(username, password){
// 	for (var i = 0; i < database.length; i++){
// 		if (username === database[i].username && password === database[i].password){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function signIn(username, password){
// 	if(isUserValid(username, password)) {
// 		console.log(newsFeed);	
// 	}


	// if (username === database[0].username && password === database[0].password){
	// 	console.log(newsFeed);
	// } else {
	// 	alert("Sorry wrong username or password");
	// }
// };


// signIn(userNamePrompt, Number(passwordPrompt));


// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];
// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++){
// 	console.log(i);
// }

// todos.forEach(function(i){
// 	console.log(i);
// })



// // var counterOne = 0;
// // while(counterOne < todosLength){
// // 	todos.pop();
// // 	counter;
// // }
// // var counterTwo = 10;
// // do {
// // 	console.log(counterTwo);
// // 	counterTwo--;

// // } while (counterTwo > 0);



// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function greaterthan(){
// 	return input.value.length;
// // }


// // function reapiter(){
// // 	var li = document.createElement("li");
// // 	li.appendChild(document.createTextNode(input.value));
// // 	ul.appendChild(li);
// // 	input.value = "";
// // }

// // function addListAfterClick(){
// // 	if (greaterthan() > 0){
// // 		reapiter();
// // 	} 
// // }


// // function addAfterEnter(event){
// // 	if (greaterthan() > 0 && event.keyCode === 13){
// // 		reapiter();
// // 	} 
// // }

// // button.addEventListener("click", addListAfterClick);
// // input.addEventListener("keypress", addAfterEnter);


// var inputFirst = document.querySelector(".color1");
// var inputSecond = document.querySelector(".color2");
// var bodyOf = document.querySelector("body");
// var hh3 = document.querySelector("h3");


// function reapeater(){
// 	bodyOf.style.background = "linear-gradient(to right," + inputFirst.value + "," + inputSecond.value + ")";
// 	hh3.textContent = bodyOf.style.background;
// }




// inputFirst.addEventListener("input", reapeater);
// inputSecond.addEventListener("input", reapeater);






	
	// hh3.innerHTML = event.target.value;


	// 	bodyOf.style.background = "linear-gradient(to right," + event.target.value + "," + inputSecond.value + ")";
	// 


// var fun = 5;

// function funFunction(){
// 	var fun = "hellooo";
// 	console.log(1, fun);
// }

// function funerFunction(){
// 	var fun = "Byee";
// 	console.log(2, fun);
// }

// function funestFunction(){
// 	fun = "AHHH";
// 	console.log(3, fun);
// }


// console.log("window", fun);
// funFunction();
// funerFunction();
// funestFunction();


// function moveCommand(direction){
// 	var whatHappens;
// 	switch(direction){
// 		case "forward":
// 			whatHappens = "you encounter a monster";
// 			break;
// 		case "back":
// 			whatHappens = "you arrived home";
// 			break;
// 		case "right":
// 			whatHappens = "you found a river";
// 			break;
// 		case "left":
// 			whatHappens = "you run into a troll";
// 			break;
// 		default:
// 			whatHappens = "Please enter a valid direction";
// 	}	
// 	return whatHappens;
// }

// condition ? truee : falsee ;





// //#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if () {
//         return ;
//     } else {
//         return ;
//     }
// }

// experiencePoints = winBattle() ? 10 : 1



// Destructuring

// const a = 'Simon';
// const b = true;
// const c = {};



// const obj = {
// 	a,
// 	b,
// 	c
// }

// const player = obj.player;
// const experoence = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const {player, experience} = obj;
// let {wizardLevel} = obj;


// const templgreeting = `hi ${name} how are you?`




// const add = (a,b) => a + b;



const first = () => {
	let greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

let newFunc = first();
newFunc();

//Closures

//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// Compose
const compose = (f, g) => (a) => f(g(a));

// Avoiding Side Effects, functional purity.


// Advanced Arrays

const array = [1, 2, 10, 16];
const emptpush = [];
const multiplyyy = array.forEach(num => {
emptpush.push(num * 2);
});
console.log(emptpush);


// map, filter, reduce

// map

const mapArray = array.map(num => num * 2);

// filter

const filterArray = array.filter(num => num > 5); 

// reduce

const reduceArray = array.reduce((accumulator, num) => {


}, 0);



// reference type

// context

const object4 = {
	a: function(){
		console.log(this)
	}
}

// instantiation
class Player{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type){
		super(name, type)
	}
	play(){
		console.log(`WEEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');


const basket = ["Apples", "oranges", "grapes"]
const detailedBasket = {
	apples: 5, 
	oranges: 10,
	grapes: 1000
}



//2
fbasket.forEach(item => console.log(item));



// for of 
for (item of basket){
	console.log(item);
}


// for in (works with objects) - properties
// enumerating 
for (item in detailedBasket){
	console.log(item);
}




// ------------------ Exercise ----------:

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
 let highest = 0;
 for (let i = 0; i < arr.length; i++){
 	if(highest < arr[i]){
 		highest = arr[i]; 
 	}
 }
 return highest
}



function biggestNumberInArray2(arr) {
let highest = 0;
arr.forEach(item => {
	if (highest < item){
		highest = item;
	}
	return highest;	
})

return highest;	
}

function biggestNumberInArray3(arr) {
	let highest = 0;
	for(item of arr) {
		if (highest < item) {
			highest = item;
		}
	}
	return highest;
}


amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
let answer = 'No the item is not in the basket';
for (item in basket) {
	if (item === lookingFor){
		return `${item} is in the basket`
	}

}

return answer;
}



const one = () => {
	const two = () = > {

	}
	two();
}