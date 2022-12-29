// Task 1
const message = "Task 1";
alert(message)
let salaryFirstMonth = prompt("Enter first month salary", "");

let salarySecondMonth = prompt("Enter second month salary", "");

let total = Number(salaryFirstMonth) + Number(salarySecondMonth);

alert(`Your salary for two month is: ${total}$`);


// Task 2
const message2 = "Task 2";
alert(message2)
let salaryFirstMonth1 = prompt("Enter first month salary", "");

let salarySecondMonth1 = prompt("Enter second month salary", "");
let bonus1 = 1;
let total1 = Number(salaryFirstMonth1) + Number(salarySecondMonth1);
let totalSalary1 = total1 + bonus1;

alert(
  `You have extrabonus! Your salary was: ${total1}$. It\'s increas for ${bonus1}$ and now it is: ${totalSalary1}$`
);


// Task 3
const message3 = "Task 3";
alert(message3)
let salaryFirstMonth2 = prompt("Enter first month salary", "");
let salarySecondMonth2 = prompt("Enter second month salary", "");
let bonus2 = 1;
let total2 = Number(salaryFirstMonth2) + Number(salarySecondMonth2);
let totalSalary2 = total2 + bonus2;
alert(
  `You have extrabonus! Your salary was: ${total2}$. It\'s increas for ${bonus2}$ and now it is: ${totalSalary2}$`
);
let minSalary = 2000;
alert(`Will you work next? ${totalSalary2 >= minSalary}`);


// // Task 4
const message4 = "Task 4";
alert(message4)
let salaryFirstMonth3 = prompt("Enter first month salary", "");
let salarySecondMonth3 = prompt("Enter second month salary", "");
let bonus3 = 1;
let total3 = Number(salaryFirstMonth3) + Number(salarySecondMonth3);
let totalSalary3 = total3 + bonus3;

alert(
  `You have extrabonus! Your salary was: ${total3}$. It\'s increas for ${bonus3}$ and now it is: ${totalSalary3}$`
);

let minSalary3 = 2000;

const type = minSalary3 <= totalSalary3 ? "I'm ready to work" : "I'm out";

alert(type);
console.log(type);

// Или такой вариант к task 4 вместо тернарного оператора
// if (totalSalary >= minSalary) {
//   alert(`Will you work next? true`)
// } else {alert(`Will you work next? false`)

// }
