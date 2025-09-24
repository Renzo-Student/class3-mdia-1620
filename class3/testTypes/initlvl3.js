
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Title for the bot
const title = "THE CHATTER BOT";

// Initialize variables
let myName = "Guest12345";  // Default name if user doesn't provide one
let chatCount = 0;          // Counter to track how many times the user has chatted
let wName = "Sun";
let fname ="Moon"
let ename ="dragon";
wName;
fname;
ename;

/**
 * Function that repeatedly asks the user for input (chatting loop)
 */
function AskFunction() {
  // Prompt the user to say something (or type "exit" to quit)
 //readline.question('Hello ' + myName + '! Let us write a story type "start to begin (type "exit" to quit): ', input => {
 readline.question('', input => {  
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, " + myName + ". BYE!"); // Farewell message
      console.log("You owe me " + chatCount + " dollars."); // Show how many times they've chatted
      readline.close(); // Close the input stream to end the program
      return;
    }

    // If the user didn't type "exit", keep chatting
    //console.log(input);
   // Acknowledge the user's input

    // Increment chatCount by 1 each time the user chats
    chatCount = chatCount + 1;

   if (chatCount ===1) {
      console.log(' Once upon a time there was a weapon named '+ myWeapon); // Alert user they've hit the limit
    }
     if (chatCount === 2) {
      console.log('After grabbing '+ myWeapon +' ' +myfriend +' went told his friend named'); // Alert user they've hit the limit
    }
     if (chatCount === 3) {
      console.log( myfriend +' was elated to find the legendary ' + myWeapon +' With this we can finally slay ' + myenemy); // Alert user they've hit the limit
    }
     if (chatCount === 4) {
      console.log(' After his weapon '+ myWeapon +' struck ' + myenemy + ' while his ally ' + myfriend + ' acted as a distraction'); // Alert user they've hit the limit
    }
     if (chatCount === 5) {
      console.log("The Hero rejoiced and his comrades rejoiced upon  " + myenemy + " defeat"); // Alert user they've hit the limit
    }
    // If the user has chatted 5 times, end the conversation and prompt for payment
    if (chatCount === 6) {
      console.log("After that purchase the hero left to go on another journey"); // Alert user they've hit the limit
      console.log("Please pay for the premium service to find out more"); // Prompt for payment
      readline.close(); // End the chat
      return;
    }

    // Recursively call the AskFunction() to keep the chat going
    AskFunction();
  });
}

/**
 * Function to ask for the user's name before starting the conversation
 */
function AskName() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  // Ask the user for their name (or to type "exit" to quit)
  readline.question('Hello Hero what is your name? (type "exit" to quit): ', input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }
    
    //assign the value
     myName = input;
     wName = input;
     fname = input;
     ename =input;


    // After getting the name, start the conversation loop
    AskFunction();
    console.log('To begin the story ' + myName + ' type start');
  });
}

function AskName() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  // Ask the user for their name (or to type "exit" to quit)
  readline.question('Hello Hero what is your name? (type "exit" to quit): ', input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }
    
    //assign the value
     myName = input;
    

    // After getting the name, start the conversation loop
   // AskFunction();
   askweapon();
  });
}

function askweapon() {
  readline.question('Hello Hero what is your weapon name? (type "exit" to quit): ', input => {
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }
    
    //assign the value
     myWeapon=input;

    // After getting the name, start the conversation loop
    askfriend();
  });
}

function askfriend() {
  readline.question('Hello Hero what is the name of your ally? (type "exit" to quit): ', input => {
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }
    
    //assign the value
     myfriend=input;

    // After getting the name, start the conversation loop
    askenemy();
  });
}

function askenemy() {
  readline.question('Who are we slaying? (type "exit" to quit): ', input => {
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }
    
    //assign the value
     myenemy=input;

    // After getting the name, start the conversation loop
    AskFunction();
    console.log('I will now generate you a story press any key for me to continue the story');
  });
}


// Start the program by asking for the user's name
AskName();

// Run the chatter bot then the counter for amount of times chatted is 0 and the name will be set
//If input goes username will be made if not a placeholder name will be used
// application will ask you to chat with it via placing any input up to 5 before ending the program
//If you indicate exit earlier the problem will count the amount of of times you have chatted.
