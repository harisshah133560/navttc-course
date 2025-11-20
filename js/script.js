// task 1
// let num = + prompt("Inter the number to check it Postive or Nagtive ");
// if (num > 0) {
//     console.log("the number is postive " + num);
// }
// else {
//     console.log("the number is negative " + num);
// }
// both method work same
// optimize code
// let num = Number(prompt("Enter a number to check if it's positive or negative:"));
// let checkedNum = num > 0 ?
// `The number is positive: ${num}`: `The number is negative: ${num}`;
// console.log(checkedNum);

// task 2
// switch

// let marks = +prompt("Enter your marks");

// switch (true) {
//     case marks >= 90 && marks <= 100:
//         console.log("Your grade is A+");
//         break;
//     case marks >= 80 && marks < 90:
//         console.log("Your grade is B");
//         break;
//     case marks >= 70 && marks < 80:
//         console.log("Your grade is C");
//         break;
//     case marks >= 60 && marks < 70:
//         console.log("Your grade is D");
//         break;
//     case marks >= 0 && marks < 60:
//         console.log("Sorry, you have failed");
//         break;
//     default:
//         console.log("Invalid Number! Please enter marks between 0 and 100");
// }
// task 3

// isNaN using

// let marks = +prompt("Enter your marks");

// switch (true) {
//     case isNaN(marks):
//         console.log("Invalid input! Please enter a number.");
//         break;
//     case marks > 100 || marks < 0:
//         console.log("Invalid Number! Please enter marks between 0 and 100");
//         break;
//     case marks >= 90 && marks <= 100:
//         console.log("Your grade is A+");
//         break;
//     case marks >= 80 && marks < 90:
//         console.log("Your grade is B");
//         break;
//     case marks >= 70 && marks < 80:
//         console.log("Your grade is C");
//         break;
//     case marks >= 60 && marks < 70:
//         console.log("Your grade is D");
//         break;
//     case marks >= 0 && marks < 60:
//         console.log("Sorry, you have failed");
//         break;
// }

// task 4

// for loop
// while loop
// dowhile loop

// guess the number using loops

// Code for the Activity:

// let randomNumber = Math.floor(Math.random() * 10) + 1;

// let guess;

// do (

//     console.log("Too high! Try again.");

// guess = Number(prompt("Guess a number between 1 and 10:")); if (guess > randomNumber) ( } else if (guess < randomNumber) ( ) console.log("Too low! Try again.");

// ) while (guess)== randomNumber);

// console.log("Congratulations! You guessed the correct number: " + randomNumber);

// my practice

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess = +prompt("Enter your guess (1–10):");

// while (guess !== randomNumber) {
//     console.log("Wrong guess, try again!");
//     guess = +prompt("Enter your guess (1–10):");
// }

// console.log(" Congratulations! You guessed the correct number: " + randomNumber);

// Print numbers from 1 to 10

// let print = () => {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`printing number from 1 to 10 : ${i}`)
//     }
// }

// print();

// Break the loop when number is 7

// let print = () => {
//     for (let i = 1; i <= 10; i++) {

//         console.log(`Break the loop when number is 7 : ${i}`)
//         if (i === 7){
//             break;
//         }
//     }
// }

// print();

// Reverse multiplication table of 10

// let print = () => {
//     for (let i = 10; i >=1 ; i--) {

//  console.log(`${i} * 10 = ${i * 10}`)

//     }
// }

// print();

// Print sum of even numbers from 1 to 20

// let evenSum = () => {
//     let total = 0;
//     for (let i = 2; i <= 20; i += 2) {  // step by 2 to get even numbers
//         total += i;
//     }
//     console.log(`Sum of even numbers from 1 to 20 is: ${total}`);
// }

// evenSum();

// Print factorial of 6
// let factorial = () => {
//     let result = 1;
//          // start with 1 because multiplying by 0 makes everything 0
//     for (let i = 1; i <= 6; i++) {
//         result *= i;
//         // same as result = result * i
//     }
//     console.log(`Factorial of 6 is: ${result}`);
// }

// factorial();

// zulkif task
// let sum = () => {
//     let total = 0;
//     for (let i = 1; i <= 10; i++) {
//         total += i;   // add each number to total
//     }
//     console.log(`Sum of numbers from 1 to 10 is: ${total}`);
// }

// sum();

// task  5
// let student = {
//     name: "Haris",
//     age: 20,
//     marks: [50, 60, 70, 80, 90, 95]
// };

// let CalculateAverage = (marks) => {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     return sum / marks.length;
// }
// console.log(`Name of the student : ${student.name}`);
// console.log(`age of the student : ${student.age}`);
// console.log(`marks of the student : ${student.marks}`);
// console.log(`average of marks is : ${CalculateAverage(student.marks)}`);

// to take this name , age , marks from user

// let name = prompt("Enter student name: ");
// let age = +prompt("Enter student age: ");
// let marksInput = prompt("Enter marks separated by commas (e.g. 50,60,70,80): ");

// Convert input string into an array of numbers
// let marks = marksInput.split(",").map(Number);

// let student = {
//     name: name,
//     age: age,
//     marks: marks
// };

// let CalculateAverage = (marks) => {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     return sum / marks.length;
// }

// console.log(`Name of the student : ${student.name}`);
// console.log(`Age of the student : ${student.age}`);
// console.log(`Marks of the student : ${student.marks}`);
// console.log(`Average of marks is : ${CalculateAverage(student.marks)}`);

// take arry from user and use puch method

// let name = prompt("Enter student name: ");
// let age = +prompt("Enter student age: ");
// let size = +prompt("Enter number of subjects: ");
// let marks = [];

// for (let i = 0; i < size; i++) {
//     marks.push(+prompt(`Enter element ${i + 1}:`));
// }

// console.log(marks);
// let student = {
//     name: name,
//     age: age,
//     marks: marks
// };
// let CalculateAverage = (marks) => {
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     console.log(`total number of the student : ${sum}`);
//     return sum / marks.length;
// }
// let calculateSum =()=>{

// }

// console.log(`Name of the student : ${student.name}`);
// console.log(`Age of the student : ${student.age}`);
// console.log(`Marks of the student : ${student.marks}`);
// console.log(`Average of marks is : ${CalculateAverage(student.marks)}`);

// task

// let number = +prompt("Enter a number to calculate its square");
// let square = (number) => {
//     console.log(`The square of a ${number} is ${number * number}`);
// }
// square(number);

// task 6
// Q1: Shopping Discount System
// Write a program that checks if a customer’s purchase amount is more than 5000, they get 20% discount, otherwise 10% discount.

// let purchaseAmount = +prompt("Enter your purchase amount: ");
// let discount, finalAmount;

// if (purchaseAmount > 5000) {
//     discount = purchaseAmount * 0.20; // 20% discount
// } else {
//     discount = purchaseAmount * 0.10; // 10% discount
// }

// finalAmount = purchaseAmount - discount;

// console.log("Purchase Amount: " + purchaseAmount);
// console.log("Discount: " + discount);
// console.log("Final Amount to Pay: " + finalAmount);

// DOM
// getelement by id , byclass , queryselector , tagname , and queryselectorall

// 1 getelement by tag name
// let tagname = document.getElementsByTagName("div");
// console.log(tagname);
// tagname[0].style.background = "red";
// tagname[0].style.textDecoration = "underline";

// 2 getelement by id and byclass

// let getElementById = document.getElementById("2");
// getElementById.style.color = "red";

// let byclass = document.getElementsByClassName("main");
// byclass[0].innerText = "hello world";

//     // using query selector all
// let chg = document.querySelectorAll("#2");
//   chg[0].setAttribute("src", "/new-image.jpeg");
//    //  changes the image
//   chg[0].setAttribute("alt", "New Logo");
//   //  changes the alt text
// // Change background color of div
// let divElement = document.querySelector(".main");
// divElement.style.background = "lightblue";
// divElement.style.width = "300px";
// divElement.style.height = "200px";

// // Add border to image
// let imageElement = document.getElementById("logo");
// imageElement.style.border = "5px solid red";
// imageElement.style.width = "100px";
// imageElement.style.height = "100px";

// to do list
//  Create everything dynamically using pure JavaScript

// // --- Page styling ---
// document.body.style.background = "#f2f4f7";
// document.body.style.fontFamily = "Arial, sans-serif";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";

// // --- Create main container ---
// let container = document.createElement("div");
// Object.assign(container.style, {
//     width: "350px",
//     background: "#fff",
//     padding: "20px 30px",
//     borderRadius: "12px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
// });
// document.body.appendChild(container);

// // --- Create title ---
// let title = document.createElement("h2");
// title.innerText = "📝    To-Do List";
// title.style.textAlign = "center";
// title.style.color = "#003459";
// container.appendChild(title);

// // --- Input field ---
// let input = document.createElement("input");
// input.style.marginTop = "10px";
// Object.assign(input, {
//     type: "text",
//     placeholder: "Enter a new task..."
// });
// Object.assign(input.style, {
//     width: "70%",
//     padding: "10px",
//     border: "2px solid #003459",
//     borderRadius: "8px",
//     outline: "none"
    
// });
// container.appendChild(input);

// // --- Add button ---
// let addBtn = document.createElement("button");
// addBtn.innerText = "Add Task";
// addBtn.style.marginTop = "10px";

// Object.assign(addBtn.style, {
//     padding: "10px",
//     marginLeft: "10px",
//     background: "#003459",
//     color: "white",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "0.3s"
// });
// addBtn.onmouseover = () => (addBtn.style.background = "#0056a3");
// addBtn.onmouseout = () => (addBtn.style.background = "#003459");
// container.appendChild(addBtn);

// // --- Create list container (ul) ---
// let taskList = document.createElement("ul");
// Object.assign(taskList.style, {
//     listStyle: "none",
//     padding: "0",
//     marginTop: "15px"
// });
// container.appendChild(taskList);

// // --- Add button functionality ---
// addBtn.addEventListener("click", () => {
//     let taskText = input.value.trim();
//     if (taskText === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     // Create new task (li)
//     let li = document.createElement("li");
//     li.textContent = taskText;
//     Object.assign(li.style, {
//         background: "#f8f9fa",
//         padding: "10px 12px",
//         marginBottom: "8px",
//         borderRadius: "8px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         cursor: "pointer",
//         transition: "0.3s"
//     });

//     // Toggle completed
//     li.addEventListener("click", () => {
//         if (li.style.textDecoration === "line-through") {
//             li.style.textDecoration = "none";
//             li.style.color = "black";
//         } else {
//             li.style.textDecoration = "line-through";
//             li.style.color = "gray";
//         }
//     });

//     // Remove button
//     let removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     Object.assign(removeBtn.style, {
//         background: "red",
//         color: "white",
//         border: "none",
//         padding: "5px 10px",
//         borderRadius: "6px",
//         cursor: "pointer"
//     });

//     removeBtn.addEventListener("click", (e) => {
//         e.stopPropagation(); // Prevent click toggling
//         li.remove();
//     });

//     li.appendChild(removeBtn);
//     taskList.appendChild(li);

//     // Clear input
//     input.value = "";
// });

// my task modified
// --- Create main container ---
// let container = document.createElement("div");
// container.style.marginLeft = "50%";
// container.style.marginTop ="20px";
// container.style.background = "skyblue"

// document.body.appendChild(container);
// // --- Create title ---
// let title = document.createElement("h2");
// title.innerText = "To-Do List";

// container.appendChild(title);

// // --- Input field ---
// let input = document.createElement("input");
// input.placeholder  = "inter your daily task";
// input.style.margin="8px";
// input.style.border = "black";

// container.appendChild(input);

// // --- Add button ---
// let addBtn = document.createElement("button");
// addBtn.innerText = "Add Task";
// addBtn.style.background = "blue"
// addBtn.style.borderRadius = "5px"
// addBtn.style.border = "solid black"

// container.appendChild(addBtn);

//  // --- Create list container (ul) ---
// let taskList = document.createElement("ul");
// taskList.style.listStyle = "none";

// container.appendChild(taskList);

// //       // Create new task (li)
// let li = document.createElement("li");
// li.textContent = taskText;
// li.style.background = "#f8f9fa";
// li.appendChild(taskList);

// // --- Add button functionality ---
// addBtn.addEventListener("click" , function(){
//   li.innerText = input.value;
// })

// spread operator

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// api

// async function getdatapi(){
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(data);
//   let res = await data.json();
//   console.log(res);
// }
// getdatapi();

// show api data on webpage in table formate 
// async function getdatapi() {
//   // Fetch data from API
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let res = await data.json();

//   // Create table
//   let table = document.createElement("table");
//   table.style.border = "2px solid black";
//   table.style.borderCollapse = "collapse";
//   table.style.width = "100%";
//   table.style.textAlign = "left";
//   table.style.fontFamily = "Arial";
//   table.style.marginTop = "20px";

//   //    Add table to webpage
//   document.body.appendChild(table);

//   // Create header row
//   let headerRow = document.createElement("tr");

//   let headers = ["ID", "Title", "Body"];
//   for (let i = 0; i < headers.length; i++) {
//     let th = document.createElement("th");
//     th.textContent = headers[i];
//     th.style.border = "1px solid black";
//     th.style.padding = "8px";
//     th.style.backgroundColor = "#f2f2f2";
//     headerRow.appendChild(th);
//   }
//   table.appendChild(headerRow);

//   // Show only first 100 posts
//   for (let i = 0; i < res.length; i++) {
//     let post = res[i];
//     let row = document.createElement("tr");

//     // Add row to table
//     table.appendChild(row);

//     //         // Create and fill ID cell
//     let tdId = document.createElement("td");
//     tdId.textContent = post.id;
//     tdId.style.border = "1px solid black";
//     tdId.style.padding = "8px";
//     row.appendChild(tdId);

//     // Create and fill Title cell
//     let tdTitle = document.createElement("td");
//     tdTitle.textContent = post.title;
//     tdTitle.style.border = "1px solid black";
//     tdTitle.style.padding = "8px";
//     row.appendChild(tdTitle);

//     // Create and fill Body cell
//     let tdBody = document.createElement("td");
//     tdBody.textContent = post.body;
//     tdBody.style.border = "1px solid black";
//     tdBody.style.padding = "8px";
//     row.appendChild(tdBody);
//   }
// }
// getdatapi();

let a=[1,2,3]
let b=a;
b.push(4)
// b = [4,5]
console.log(a);