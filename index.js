/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 20;
console.log(votingAge > 18);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let noname = '';
let name = 'john';
if ((name == 'john') ? noname = 'bruce' : noname = 'jennifer');
console.log(noname);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = "1999";
let strNum = Number(str);
console.log(typeof(strNum), strNum);

//Task d: Write a function to multiply a*b 

function multiply(a, b){
    return a*b;
}
console.log(multiply(10, 20));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
  let dogYears = 7;
  return age * dogYears;
}

console.log(dogYears(27));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal, one month = 1/12) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function hungryDog(age, weight){
  if(age < 1) return 'not coded yet'; // not going to do, would do like dogs 1yr or older but i dont feel like getting into decimals with months
  if(age >= 1){
    if(weight > 15) return (weight * .02)
    if(weight >= 11) return (weight * .03) 
    if(weight >= 6) return (weight * .04) 
    if(weight >= 0) return (weight * .05) 
  }
}

console.log(hungryDog(1, 15));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function game(choice){
  let choices = ['rock', 'paper', 'scissors'];
  let player = choices.indexOf(choice);
  let opponent = choices[Math.floor(Math.random() * Math.floor(3))];
  let victory = 'You picked ' + choice + ' which beats ' + opponent + ', you WIN!!';
  let loss = 'You picked ' + choice + ' which doesnt beat ' + opponent + ', you are a LOOOOOOSSSSSSEEERRRRRR!!!';
  if (choice == opponent) return 'you both picked ' + choice + ", it's a tie!";
  if (player == 0 && opponent == 'scissors') return victory;
  if (player == 1 && opponent == 'rock') return victory;
  if (player == 2 && opponent == 'paper') return victory;
  return loss;
}

console.log(game('scissors'));
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(kilo){
    return kilo * 0.621371;
  }
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feet(feet){
    return feet * 30.48;
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should return (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(num){
  let remain = num
  for(let i = 1; i <= num - 1; i++){
    console.log(remain + ' bottles of soda on the wall, ' + remain + ', bottes of soda. Take one down, pass it around, ' + (remain - 1) + ' bottles of soda on the wall');
    remain--;
  }
  return remain + ' bottles of soda on the wall, ' + remain + ', bottes of soda. Take one down, pass it around, ' + (remain - 1) + ' bottles of soda on the wall'
}

console.log(annoyingSong(10));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(grade){
  if (grade >= 90) return 'A';
  if (grade >= 80) return 'B';
  if (grade >= 70) return 'C';
  if (grade >= 60) return 'D';
  return 'F'
}

console.log(grade(95));
console.log(grade(85));
console.log(grade(75));
console.log(grade(65));
console.log(grade(55));


/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method



function vowelCounter(arr) {
    let working = arr.concat().toLowerCase();
    let count = 0;
    let vowels = ['a','e','i','o','u']
    for (let letter of working){
      if(vowels.includes(letter)) count++;
    }
    return count;
}
console.log(vowelCounter('The Dog is a smarty PANTS'));



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade,
    vowelCounter
}