//  for loop


for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//    for in loop in js

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }

  

//    for of loop in js 

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}


//  for each loop in js

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
