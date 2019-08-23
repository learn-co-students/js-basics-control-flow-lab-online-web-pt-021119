function scuberGreetingForFeet(distance){
	// Write your code here!
	let answer;

	switch (true) {
		case (distance >= 2500):
		 answer = 'No can do.'
		 break;
		case distance >= 2000:
			answer = 'I will gladly take your thirty bucks.'
			break;
		case distance <= 400:
			answer = 'This one is on me!'
			break;
		default:
			break;
	}
	return answer;
}

function ternaryCheckCity(city){
	let answer;
	return answer = city === "NYC" ? 'Ok, sounds good.' : 'No go.'

}

function switchOnCharmFromTip(tip){

	let answer;

	switch (tip) {
		case 'generous':
			answer = 'Thank you so much.'
			break;
		case 'not as generous':
				answer = 'Thank you.'
				break;
		default:
				answer = 'Bye.'
				break;
	}
	return answer;
}