//STEP 1
// Convert the following identifiers to Camel Case notation:

// var someMonth;
// function theMonth();
// var currentMonth;
// var summerMonth;
// var myLibraryFunction;


//STEP 2
// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

// 1.9
// "Web developer"
// true


//STEP 3
// Give me two examples of complex / variable expressions.

// let milesPerGallon = totalMilesDriven / gallonsInTank;
// let volume = width * length * height;


//STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zipCode;
// let yourAge;
// let referralSource;
// let mayWeContactYou;


//STEP 5
// Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.

// 1st method
// let firstName;
// let lastName;
// let address;
// firstName = Dahwin;
// lastName = DelaCruz;
// address = "In San Diego";

// 2nd method
// let city = "San Diego"
// let state = CA
// let zipCode = "92120"

// 3rd method
// let yourAge = 38, referralSource = web, mayWeContactYou = yes;


//STEP 6
// Create a variable. 
// Add a number and a string and display the coerced result in the browser’s console window. 

// let myAge = 38;
// window.console.log("Dahwin is " + myAge + " years old.");


//STEP 7
// Create two variables. 
// For the first variable, add a Boolean and a string and display the coerced result. 
// For the second variable, add a number and a Boolean and display the coerced result. 

// let realName = true + " is his real name";
// window.console.log(realName);

// let realAge = 38 + true;
// window.console.log(realAge);


//STEP 8
// Is the following string literal valid? If not, how would you fix it?

// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
// window.console.log(someString);

// invalid, fix shown below
// let someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\"";
// window.console.log(someString);


//STEP 9
// Create a variable that produces a null value in the console window. 
// Create a variable that produces an undefined value in the console window.

// let x = null;
// window.console.log(x);

// let y;
// window.console.log(y);


//STEP 10
// Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

// typeof "Dahwin"
// typeof 38
// typeof true
// typeof new Date()
// typeof myShirt


//STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

// alert("Hello Dahwin DelaCruz, welcome to the Javascript class!");


//STEP 12
// Declare a variable called name and set it equal to your name. 
// Substitute your name in the previous alert string with the variable instead.

// let name = "Dahwin";
// alert("Hello " + name + ", welcome to the Javascript class!");


//STEP 13
// Declare a variable called course and set it equal to “JavaScript”. 
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// let name = "Dahwin";
// let langType = "JavaScript";
// alert("Hello " + name + ", welcome to the " + langType + " class!");


//STEP 14
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

// let name = "Dahwin";
// let langType = "JavaScript";
// alert("Hello " + name + ".\nWelcome to the " + langType + " class!");


//STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

// let name = window.prompt("Please enter your name");
// let langType = "JavaScript";
// alert("Hello " + name + ".\nWelcome to the " + langType + " class!");


//STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// let name = window.prompt("Please enter your name");
// let langType = window.prompt("What class are you taking?");
// alert("Hello " + name + ".\nWelcome to the " + langType + " class!");


//STEP 17
// Assign the value 10 to x on a new line. 
// Assign the value 20 to y on a new line. 
// Display the sum of those two numbers in the console window. 

// let x = 10;
// let y = 20;
// window.console.log(x + y);


//STEP 18
// Declare a variable called x and assign it a value of 20. 
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

// let x = 20;
// window.console.log(x + 20);


//STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window. 
// The result should be 100.

// let x = 20;
// window.console.log(5 * x);


//STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window. 
// The result should be 2. If you got 6.66 try again.

// let x = 20 % 3;
// window.console.log(x / 1);


//STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// let x = 10000;
// let y = 10000;
// window.console.log(x == y);


//STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

// let x = 10000;
// let y = 10000;
// window.console.log(x != y);


//STEP 23
// Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.

// let widget = new Object();
// typeof widget
// "object"


//STEP 24
// Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

// let widget = new Object();
// let isTrue = widget instanceof Object;
// console.log(isTrue);


//STEP 25
// Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

// class Spinner{}
// let widget = new Object();
// let fidget = new Spinner(); 

// let isTrue = widget instanceof Object;
// let isTrue2 = widget instanceof Spinner;

// console.log(isTrue);
// console.log(isTrue2);

// true
// false