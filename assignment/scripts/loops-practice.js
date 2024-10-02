console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('EXample: Count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('1.a: Count from 0 to 5');
for (let counter = 0; counter < 6; counter++){
  console.log(counter);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('1.b: Count from 3 to 5');
for (let counter = 3; counter < 6; counter++){
  console.log(counter);
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('1.c: Count even numbers from 2 to 10:');
let evenNumbers = 0; 
for (let counter = 2; counter <= 10; counter += 2) {
  console.log(counter);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('1.d: STRETCH: Countdown from 5 to 0');
for (let counter = 5; counter >= 0; counter--){
  console.log(counter);
}

// 2. For of loops  
//let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']
console.log('----2 For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']
for (star of stars){
 console.log(star);

}

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('2.a: Using -for off- loop');
for (eachStar of stars)
  console.log('Some stars: ' + eachStar);
 

// 3. While loops  
console.log('---- 3. While loop ----');
let i = 0;
while (i < stars.length) {
  console.log(stars[i]);
  i++;
 
}


// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('3.a: Using while loop:');
i = 0;
while (i < stars.length) {
  console.log(stars[i]);
  i++;
 
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('3.b: Count from 0 to 5');

let count = 0; 
while (count < 6){
  console.log(count);
  count++; 
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('3.c: Count backwards from 10 to 5');
count = 10; 
while (count >= 5){
  console.log(count);
  count--; 
}