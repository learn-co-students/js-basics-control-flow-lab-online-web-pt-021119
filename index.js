let someValue;

function scuberGreetingForFeet(someValue){
  // Write your code here!
  let message;
  if(someValue <= 400) {
    message = 'This one is on me!';
  } else if (someValue > 2000 && someValue <= 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else {
    message = 'No can do.';
  }
  return message;
}

let city;
function ternaryCheckCity(city){
  // Write your code here!
  let message;

  city === 'NYC' ? (message = 'Ok, sounds good.') : (message = 'No go.');
  return message;
}

let tip;
function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;

  switch(tip){
    case "generous": message = "Thank you so much.";
      break;
    case "not as generous": message = "Thank you.";
      break;
    default: message = "Bye.";
  }
  return message;
}
