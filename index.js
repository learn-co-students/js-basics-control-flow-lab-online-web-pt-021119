function scuberGreetingForFeet(feet){
  // Write your code here!
  let answer
  if (feet <= 400){
    answer = 'This one is on me!';
  }
  else if (feet >= 2000 && feet < 2500){
    answer = 'I will gladly take your thirty bucks.';
  }
  else if (feet >= 2500){
    answer = 'No can do.';
  }
  return answer
}

function ternaryCheckCity(city){
  // Write your code here!
  let answer = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return answer
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
      break;
    }
  }
