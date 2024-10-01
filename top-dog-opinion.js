const opinionDisplay = document.getElementById('the-worthy-opinion');

const displayAwesomeOpinion = () => {
  opinionDisplay.textContent = opinions[Math.floor(Math.random() * opinions.length)];
}

window.onload = displayAwesomeOpinion;

document.onclick = displayAwesomeOpinion;

document.addEventListener('keyup', event => {
  const spaceResults = [" ", "Space", 32];
  if (spaceResults.includes(event.key)) displayAwesomeOpinion();
});

const opinions = [
  'C\'mon lad/lass. Learn to shift your gears!',
  'A fast track to be taken off the will',
  'A 0.6 litre Fiat 500 will still be more fun',
  'Sure if you enjoy ending conversations',
  'Multiple fluid leaks > Artificial exhaust notes',
  'There is no shame, but do make sure your friends still treat you the same',
  'Dad\'s crying in disappointment just like that time Man United lost 7-0 to Liverpool',
  'Southgate\'s judgment is still better than this',
  'Sure because owning an EV is anyone\'s childhood dream',
  'I will walk 500 miles is still faster than waiting for an EV to finish charging',
  'Sure if you enjoy your car looking like a fish',
  'Gambling all your savings in a game of blackjack is still more sensible than leasing an EV',
  'Yes because going from 2 minutes refuels to 2 hours recharges is a step forward in humanity',
  'Did James Bond arrive in style in an EV? I didn\'t think so...',
  'Prevents ice from breaking, also prevents any solid ice breakers on dates',
  'More anxiety from range than a Man United game',
  'Make sure you\'re still invited to your annual family holiday',
  'Yes because loosing charge whilst parked is such a quality achievement',
  'No.',
];
