// IN CHROME DEV TOOLS WE CAN CODE IN CONSOLE AS WELL AS SOURCES->SNIPPETS.
// ALERT IS A FUNCTION WHICH IS A POP UP AND IT DISPLAYS ANYTHING THAT IS WRITTEN INSIDE IT.
// IN CONSOLE, IF YOU HIT ENTER AFTER WRITING A LINE OF CODE THEN IT GETS EXECUTED INSTEAD OF GOING INTO THE NEXT LINE.
// IN ORDER TO GO TO THE NEXT LINE PRESS ENTER+SHIFT.
//alert("hello");  prints hello
// alert(3);  prints 3
// alert(3+5);  prints 8
// alert(how are you); this will give error as string should have double quotes.
// VM275:1 Uncaught SyntaxError: missing ) after argument list
// alert(@); same thing string should have double quotes.
// VM303:1 Uncaught SyntaxError: Invalid or unexpected token
// alert("@"); prints @
// IF YOU WRITE A MULTI STEP CODE LIKE WRITTEN BELOW THEN IT EXECUTES LINES ONE BY ONE AND NOT TOGETHER SO IN THE FOLLOWING FIRST HELLO IS DISPLAYED AND THEN WORLD.
//alert("Hello");
//alert("World");
// IN CONSOLE, AFTER YOU PRESS ENTER ONCE THEN THE CODE GETS EXECUTED AND THEN IF YOU WRITE SOME MORE CODE AFTER THAT THEN THAT CODE WILL BE EXECUTED AND THE PREVIOUS CODE WONT RUN.
//TO AVOID THIS CONSOLE ISSUE WE CAN USE CHROME SNIPPETS.
// IN SNIPPETS LIKE ANY EDITOR YOU CAN WRITE THE WHOLE CODE AND THEN RUN IT AND IT STARTS FROM THE BEGINNING ALWAYS.
// TO KNOW PROPER WRITING JAVASCRIPT STYLE REFER TO https://github.com/rwaldron/idiomatic.js#naming
// 2+3; IN CONSOLE, YOU CAN WRITE 2+3; WHICH WILL GIVE 5
// typeof(2) typeof gives the datatype name
// 'number'
// typeof("Aditya");
// 'string'
// typeof(true);
// 'boolean'
// to take input from the user prompt keyword is used.
// inside prompt we write our message which can be a string, number or even a boolean variable.This message is displayed while inpupt is being taken.
//prompt("What is your name?");
// prompt(true);
// prompt(3);
// prompt(hello);  this will give error as it is not a string.
// var myName="Aditya";//var is a keyword for a datatype
// alert(myName);//prints Aditya
// var x=3;
// alert(x);
// var yourName=prompt("Enter your name");
// alert(yourName);
// alert(prompt("What is your age?")); //prints entered thing
//alert("My name is "+myName+" and your name is "+yourName);// even if you delete the above lines still this line will get printed correctly as these variables and their values are stored in computers memory.
// ctrl+L is to clear the console.
// on reloading the page, all the data and variables stored get lost.
//var message="Hello";
// var name="Aditya";
// alert(message+" there,"+name); prints Hello there,Aditya
// var name="Phunksu wangdu"; //strings here also are like c++ without a null character at the end.
// alert(name.length);// pop up prints answer and not the console. length wont have ()
// name.length;// this prints the answer on the console and there is no pop up as alert is not called
// //size is not there in javascript.
//var input=prompt("Enter something");
//alert("You have written "+input.length+" characters, you have "+(240-input.length)+" characters left"); you need to put bracket for 240-input.length otherwise it gives error.
//in the above case, if you run the code and the prompt opens but you switch to another tab then the prompt gets dismissed and stores null so you will get error after you come back to the tab as null.length is not possible.
// in js, 6/4 will give 1.5 not 1
//What does y  equal?

// var x = 3;
// var y = x++;
// y += 1; answer 4
// if you dont want to click ok each time then you can use console.log instead of alert. This prints the output in the console and there is no pop up.
// click ctrl+F to find alert and then click on AtoB icon and type console.log and replace all. console.log is for the developer as the user wont be able to see it.
// this is the code to have Karel put Beepers diagonally. Go to https://stanford.edu/~cpiech/karel/ide.html
// function moveDiagonal()
// {
//     move();
//   turnLeft();
//   move();
//   putBeeper();
//   turnRight();
// }
// function main(){
//   //your code here
//   putBeeper();
//   moveDiagonal();
//   moveDiagonal();
//   moveDiagonal();
//   moveDiagonal();
// }
// the below function takes input.To take floor value write Math.floor(value) as done in line 89.
//function getMilk(money) {   
    //   console.log("leaveHouse");
    //   console.log("moveRight");
    //   console.log("moveRight");
    //   console.log("moveUp");
    //   console.log("moveUp");
    //   console.log("moveUp");
    //   console.log("moveUp");
    //   console.log("moveRight");
    //   console.log("moveRight");
    //   console.log("Buy "+Math.floor(money/1.5)+" bottles of milk");
    //   console.log("moveLeft");
    //   console.log("moveLeft");
    //   console.log("moveDown");
    //   console.log("moveDown");
    //   console.log("moveDown");
    //   console.log("moveDown");
    //   console.log("moveLeft");
    //   console.log("moveLeft");
    //   console.log("enterHouse");
    // }
    // getMilk(10);
    // in js, var is used for all datatypes.
    // this is a function which returns values.
    // function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("Buy "+Math.floor(money/1.5)+" bottles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return money%1.5;
// }
// var change=getMilk(10);
//The Math.round() static method returns the value of a number rounded to the nearest integer.
// function bmiCalculator(weight,height)
// {
//     return Math.round((weight/(height*height)));  height*height ke around you have to put bracket otherwise / will make problems.
   // you can use Math.pow(height,2) also.
// }
// js string has a function called slice which is used to select particular piece of a string.
// if you have a string name="aditYa" and if you want to select first letter a and make it capital then you can use slice
// name.slice(x,y) x is the starting point of the string to be selected and y is the ending point+1 of the string to be selected.
// to do uppercase we have toUpperCase function and for lower case we have toLowerCase function. stringname.toUpperCase()
// var name=prompt("What is your name?"); here we want the first letter to be capital and the rest to be small
// var size=name.length;
// console.log("Hello, "+(name.slice(0,1)).toUpperCase()+(name.slice(1,size)).toLowerCase());
// we can use slice to limit the number of characters entered by a user like in Twitter.
//var input=prompt("enter");
//console.log(input.slice(0,140));
// name.toUppercase is temporary, in order to have a permanent change do name=name.toUpperCase()
// in js, in if condition there are 3 equal to signs and for not equal to we use !==
// in js, if we use == instead of === then it only checks for the value and not the datatype.
//For e.g. if(1=="1") this will give true whereas if(1==="1") will give false.
//function bmiCalculator (weight, height) {  js mein koi return type nahi hota so we can return whole strings too.
//     var bmi=weight/(height*height);
//     if(bmi>24.9)
//     {
//         return "Your BMI is "+bmi+", so you are overweight.";
//     }
//     else if(bmi >=18.5 && bmi<=24.9)
//     {
//         return "Your BMI is "+bmi+", so you have a normal weight.";
//     }
//     else
//     {
//         return "Your BMI is "+bmi+", so you are underweight.";
//     }
// }
// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//         //Write your code here.  
//         if(year%4===0)
//         {
//          if(year%100===0)
//          {
//              if(year%400===0)
//              {
//                return "Leap year.";   
//              }
//              else
//              {
//                  return "Not leap year.";
//              }
//          }
//          else
//          {
//              return "Leap year.";
//          }
         
//         }
//         else
//         {
//             return "Not leap year.";
//         }
    
    
        
    
//     /**************Don't change the code below****************/    
    
//     }
//var teams=["csk","rcb","mi","srh"]; // array ke name ke baad no []
// we use [] instead of {} 
//console.log(teams.length); //prints 4
//console.log(teams[0]); //prints csk
//console.log(teams); // prints (4) ['csk', 'rcb', 'mi', 'srh']
//teams.includes("rcb"); // returns true if the thing is present in 
// the array.
//arrays in js have push and pop functions and any datatype data can be pushed into the arrays like after inserting a 1 you can push Aditya(a string) too.
// to create an empty array write var arr=[];
// arr.push(3) // inserts 3 at the end.
// solve coding exercise-6 who's buying lunch after 107.
//console.log always prints in a new line.
// prompt("Enter first person's name");
// prompt("Enter second person's name");
// var n=Math.round(Math.random()*100)+1;// Math.random() gives a number from 0 to 0.9999..16times so to get the number in a range like if you want random numbers from 1 to 6 then u can multiply with 6 so the range of random numbers will become 0 to 5.999..16 times so now take its floor value and add 1 to get random number from 1 to 6. 
// alert(n);
