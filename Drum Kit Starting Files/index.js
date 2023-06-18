//we want our first button to send an alert which says that i got clicked when it gets clicked.
//This can be done by selecting the first button and then adding an event listener to it.
// Event listeners have mainly two parameters namely typeofevent and function to be triggered on the occurrence of that event.
// the type of event is put in string.e.g.keydown, click is a type which triggers the function when the selected item is clicked.
//For more event types refer mdn
//Now check below e.g.
// function enableClick()
// {
//     alert("Hey, I got clicked");
// }
// document.querySelector("button").addEventListener("click",enableClick);
//Now the thing to notice is that we dont actually have brackets after enableClick which is quite wierd because whenever we call a function we have brackets.
//but here we cant have brackets because if we have brackets then when the site loads up and when it checks the index.js file and then it reaches enableClick and as there are brackets so it calls the function and we get our alert even without clicking the button. So we dont have bracket.
//in an addeventListener function, the function is passed as an input which only executes if click happens.
//Now the other way of writing this addEventListener line is to have an anonymous function i.e. without any name and the function definition is written in the addeventlistener function part itself.
//e.g.
// document.querySelector("button").addEventListener("click",function()
// {
//  alert("Hey, I got clicked");
// });
//Now to have the same alert for all buttons we can simply use querySelectorAll and use a loop as done below
// for(var i=0;i<document.querySelectorAll("button").length;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function()
// {
//   alert("Baba re baba");
// });
// }
// In dev tools, anything(like h1) that you selecte gets a short form which is $0 which can be used to select that particular element and you can change its javascript.
//e.g. suppose we select h1 then if i type in console $0.innerHTML="bye"; then h1 gets changed to bye.
//the below code demonstrates the concept of passing function as an input
// function add(num1,num2)
// {
//     return num1+num2;
// }
// function multiply(num1, num2)
// {
//     return num1*num2;
// }
// function calculator(num1,num2, operator)
// {
//     return operator(num1,num2);
// }
// calculator(4,5,multiply); we dont put bracket so that we can pass it and it doesnt get called.So actually we are passing the function name as a variable.
// 20
// calculator(4,5,add);
// 9
// you can use debugger by typing debugger; in the console.
//Higher order functions are those which can take functions as inputs.
// the below code lets us play tom-1 on all buttons.
// for(var i=0;i<document.querySelectorAll("button").length;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function()
// {
//   var sound=new Audio("./sounds/tom-1.mp3");  // we make an object of Audio.We give the url of the sound file in the parameter to the constructor.Audio has a method called play which actually plays the sound.
//   sound.play();
// });
// }
//Now head over to the CSS where we give our buttons a background image.
//Now we want to apply different sounds to different buttons which can be done easily by using switch case because we know that we have different characters assigned to different buttons.
//But to do that we will have to find out the button which was clicked so that we can get its innerHTML(its character) and then use switch case.
//by using 'this' we get to know the button which was clicked.
// we can do all the things by using 'this' like this.innerHTML="HELLO"; or see the code below
// for(var i=0;i<document.querySelectorAll("button").length;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function()
// {
//   this.style.color="white";
// });
// }
//OOPs in javascript
// the below code is an object
// var houseKeeper1=
//     {
//         yearsOfExperience:12,
//         name:"Aidien",
//         cleaning: ["bathroom","bedroom","lobby"]
//         cleanRoom: function()
//         {
//          alert("May i clean your room");
//         }
//     }
// console.log(houseKeeper1.yearsOfExperience); prints 12
//but we cant make objects for each housekeeper so its better to use a constructor which will construct the objects as done below
// Constructor's name will be capital
// function HouseKeeper(yearsOfExperience,name,cleaning)
// {
//     this.yearsOfExperience=yearsOfExperience;
//     this.name=name;
//     this.cleaning=cleaning;
    //    this.cleanRoom=function()
    //    {
    //      alert("May i clean your room");
    //    }
// }
// we can initialize objects as done below
// var houseKeeper2=new HouseKeeper(9,"Lily",["Bathroom","Bedroom"]);
// console.log(houseKeeper2.yearsOfExperience);
//the below code adds the required sound to the drums
for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function()
{
   var clickedButton=this.innerHTML;
   buttonAnimation(clickedButton);
   makeSound(clickedButton);
   
});
}
function makeSound(key)
{
    switch(key)
    {
     case "w":
         var crash=new Audio("./sounds/crash.mp3");
         crash.play();
         break;
     case "a":
         var kickbass=new Audio("./sounds/kick-bass.mp3");
         kickbass.play();
         break;
     case "s":
         var snare=new Audio("./sounds/snare.mp3");
         snare.play();
         break;
     case "d":
         var tom1=new Audio("./sounds/tom-1.mp3");
         tom1.play();
         break;
     case "j":
         var tom2=new Audio("./sounds/tom-2.mp3");
         tom2.play();
         break;
     case "k":
         var tom3=new Audio("./sounds/tom-3.mp3");
         tom3.play();
         break;
     case "l":
         var tom4=new Audio("./sounds/tom-4.mp3");
         tom4.play();
        
    }
}
// the below code adds sound to keyboard presses.
// in the above case we added eventListener to buttons but here we will apply the eventListener to the whole document so that the whole document listens to keyboard presses.
// Thats why we dont need loop this time as we have applied eventListener to each element.
// the type of event is keydown.
// how to detect which key was pressed? Now if you do 'this' then you will get the whole document because we have applied eventListener to the whole doc. So 'this' wont work here.
//So here we will use a callback function and pass event or any variable in the anonymous function.
//on doing console.log(event), we get all the info about the keyboard press with a lot of properties like key,etc.
// so this event variable has all info about the press.
//Then we pass the variable to the switch case.
// key is in the form of a string.
document.addEventListener("keydown",function(event)
{
    var key=event.key;
    buttonAnimation(key);
    makeSound(key);
    
});
//A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
//the anonymous function above is a callback function.
// the below is an e.g. code for addEventListener 
// function addEventListener(typeOfEvent,callback)
// {
    // inside the function, the event object gets created.
//     var event=
//         {
//             eventType:"keydown",
//             eventKey:"p"
//         }
//     if(typeOfEvent===event.eventType)
//     {
//         callback(event); // this object is passed to the callback function which then with the help of the property key makes sound.
//     }
// }
//Now we want to have some button animation so that the user gets to know that the button was clicked.
//As we want the animation for both click and key press so we create a function.
// Now the function will take the letter as the parameter because we know that we have a class named by the letter in all the buttons so we can tap into the button by using the letter as the class and then we can add a class pressed which has animation but we want to remove that animation back too once the sound is produced.
//So we use setTimeout function which has mainly two parameters, the first one is the function which will get executed after the timeout and the second parameter is the timeout in milliseconds.
//Now actally you can call the buttonAnimation function before or after the sound is produced as it is a matter of 100ms and wont make much difference.
// in the function parameter of the setTimeout function, we write an anonymous function which removes the class pressed after 100ms so that the animation goes off.
function buttonAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed"); //as we want something like .w
    setTimeout(function()
    {
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}