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
  'A fast track to be taken off your parent\'s / grandparent\'s will',
  'A 0.6 litre Fiat 500 will still be more fun',
  'Sure if you enjoy ending conversations',
  'Multiple fluid leaks > Artificial exhaust notes',
  'There is no shame, but do make sure your friends still treat you the same',
  'Dad\'s crying in disappointment just like that time Manchester United lost 7-0 to Liverpool',
  'Southgate\'s horrific judgment is still better than this',
  'Were you childhood walls full of Tesla posters? I didn\'t think so...',
  'Walking 500 miles (& 500 more) is still faster than waiting for an EV to finish charging',
  'Sure if your like your car looking like a puffer fish',
  'Gambling all your savings in a game of blackjack is still more sensible than leasing an EV',
  'Yes because going from 2 minutes refuels to 2 hours recharges is a step forward in humanity',
  'Did James Bond elevate his macho in an EV? I didn\'t think so...',
  'Congrats for stopping ice from breaking, so no more ice breakers --> Stay single',
  'More anxiety from remaining range than a Manchester United game',
  'Make sure you\'re still invited to family gatherings',
  'Yes because loosing charge whilst parked is such a quality achievement',
  'Trust me, you will look back at your life and wish you had a Mustang',
  'It\'s only a phase, go sleep on it and ignore your temptations',
  'Do you want to loose 30k in depreciation on day 1?!',
  'Tell you girlfriend you\'ve officially given up',
  'Go live life! Get a Mustang!',
  'The date will go well until you say I drive a Renault Zoe',
  'You can have a Mazda MX5 + a Mini Cooper S for 1 Tesla... Think again',
  'Do you still have a dream??',
  'No.',
];
