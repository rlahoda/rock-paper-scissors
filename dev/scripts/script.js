const hands = ['rock', 'paper', 'scissors'];
const player1 = {
  name: '',
  hand: '',
  wins: 0,
};
const player2 = {
  name: 'Harriet',
  hand: getHand(),
  wins: 0,
};
let rounds = 1;
let roundCounter = 0;

function getHand() {
  return hands[parseInt((Math.random() * 10) % 3)];
}

function getPlayerName() {
  console.log('getPlayerName Started');
  const messageBox = document.querySelector('.messageBox');
 messageBox.innerHTML = `
<div class="enterName">
      <label for="name" class="visuallyhidden">Enter your name</label>
      <input type="text" name="name" id="name" class="enterNameField" placeholder="Enter Your Name" autocomplete="off"/>
      <button type="submit" class="enterNameButton" onClick="playerSetup()">Submit</button>
  </div>
  `;
}

function playerSetup() {
  let plyr1Name = document.querySelector('#name').value;
  const player1Name = document.querySelector('#player1Name');
  const player2Name = document.querySelector('#player2Name');
  const messageBox = document.querySelector('.messageBox');
  player1.name = plyr1Name;
  player1Name.innerHTML = player1.name;
  player2Name.innerHTML = player2.name;
  messageBox.innerHTML = `
  <div class="enterRounds">
      <label for="name" class="medLabel">How many rounds do you want to play?</label>
    <span class="enterRoundsForm">  <input type="number" name="rounds" id="rounds" class="enterRoundsField" step="1"/>
      <button type="submit" class="enterNameButton" onclick="roundsSetup()">Submit</button></span>
  </div>
  `;
}

function roundsSetup() {
  // get the value from the form field for rounds
  rounds = document.querySelector('#rounds').value;
  const roundsToPlay = document.querySelector('#totalRounds');
  const messageBox = document.querySelector('.messageBox');
  // put the number of rounds to play into the rounds box
  roundsToPlay.innerHTML = rounds;
  // clear out the message box
  messageBox.innerHTML = '';
  // call the function to start the game
  gamePlay(player1, player2);
}

// triggered by the user clicking the button in the play area
function playRound(hand) {
  // hide buttons
  // get p1 hand
  player1.hand = hand;
  // get p2 hand
  player2.hand = getHand();
  // determine winner
  play(player1, player2);
}







function play(p1, p2) {
  const messageBox = document.querySelector('.messageBox');
  const player1Score = document.querySelector('#player1Score');
  const player2Score = document.querySelector('#player2Score');
  const player1Hand = document.querySelector('.leftHand');
  const player2Hand = document.querySelector('.rightHand');
  changeHand(p1.hand, player1Hand);
  changeHand(p2.hand, player2Hand);
  let winner = {};
  if (p1.hand === p2.hand) {
    let result = `👎  It was a tie, nobody wins!`;
    messageBox.innerHTML = result;
    // return null;
  } else if (
    p1.hand === 'rock' && p2.hand === 'scissors' ||
    p1.hand === 'scissors' && p2.hand === 'paper' ||
    p1.hand === 'paper' && p2.hand === 'rock'
  ) {
    let result = `
      ${p1.name} is the winner!
      `;
    p1.wins++;
    player1Score.innerHTML = player1.wins;
    messageBox.innerHTML = result;
    winner = p1;
  } else {
    let result = `
      ${p2.name} is the winner!
      `;
    p2.wins++;
    player2Score.innerHTML = player2.wins;
    messageBox.innerHTML = result;
    winner = p2;
  }
  gamePlay(p1, p2);
}


function gamePlay(p1, p2) {
const messageBox = document.querySelector('.messageBox');
console.log(rounds);
const roundsToPlay = document.querySelector('#currentRound');
roundsToPlay.innerHTML = roundCounter;
  if (roundCounter < rounds) {
    // trigger selector

    roundCounter++;
  } else if (p1.wins === p2.wins) {
    //tiebreaker round
    messageBox.innerHTML = `
  <h1 class="lgLabel">It's a tie!<br>
    Prepare for a tiebreaker round!</h1>
    `;
    //trigger selector again

  } else {
    if (p1.wins > p2.wins) {
      messageBox.innerHTML = `
    <h1 class="lgLabel">${p1.name} wins the game!</h1>
      `;
    } else {
      messageBox.innerHTML = `
      <h1 class="lgLabel">${p2.name} wins the game!</h1>
      `;
    }
  }
    // declare winner
    console.log(p1);
    console.log(p2);
    console.log(rounds);


}

getPlayerName();
// gamePlay(player1, player2);

function changeHand(hand, handContainer) {
    switch (hand) {
      case 'paper':
      handContainer.innerHTML = `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:none;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}
      </style>
      <g>
        <polygon class="st0" points="126,48.4 85.8,48.4 72.6,35.1 51.2,35.1 46.6,39.8 11.6,39.8 8.9,42.4 8.9,52.5 4.3,57.1 4.3,64.1
          8.5,66.6 8.5,77 16.1,80.5 16.1,88.8 20.2,92.9 73.5,92.9 85.8,84 126,84 	"/>
        <polyline class="st0" points="61.6,46.6 61.6,64 59,66.6 47.6,66.6 47.6,39.8 	"/>
        <line class="st0" x1="8.9" y1="52.5" x2="41.4" y2="52.5"/>
        <line class="st0" x1="8.5" y1="66.6" x2="41.4" y2="66.6"/>
        <line class="st0" x1="16.1" y1="80.5" x2="41.4" y2="80.5"/>
      </g>
      </svg>
      `;
        break;

      case 'scissors':
      handContainer.innerHTML = `
      <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
      <style type="text/css">
        .st0{fill:none;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}
      </style>
      <g>
        <polygon class="st0" points="126,47.8 86.6,47.8 73.6,34.8 51,34.8 47.1,38.7 12.1,35.3 5.3,35.3 3.1,37.5 3.1,44.6 5.2,46.7
          28.2,52.8 3.1,61.2 3.1,68.5 5.6,71 10.6,71.3 28.2,66.7 28.2,76.3 31.5,79.6 31.5,90.5 33.6,93.2 75.5,93.2 85.2,83.5 126,83.5
          "/>
        <polyline class="st0" points="61.6,46.8 61.6,63.2 58.6,66.2 47.6,66.2 47.6,38.7 	"/>
        <line class="st0" x1="57.2" y1="82.1" x2="57.2" y2="93.2"/>
        <polyline class="st0" points="31.5,79.6 54.6,79.6 57.4,76.8 57.4,66.2 	"/>
        <line class="st0" x1="28.2" y1="66.7" x2="47.6" y2="66.7"/>
      </g>
      </svg>
      `;
        break;
      default:
      handContainer.innerHTML = `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:none;stroke:#000000;stroke-width:4;stroke-miterlimit:10;}
        </style>
        <g>
          <polygon class="st0" points="125.4,47.6 85.5,47.6 72.7,34.8 49.9,34.8 47,37.7 28.4,37.7 24.3,41.7 24.3,50.1 27.9,51.9
            24.3,54.2 24.3,62.5 27.7,65 24.3,68 24.3,76.1 29.2,78.9 29.2,89.5 32.8,93.2 75.9,93.2 86.2,82.9 125.4,82.9 	"/>
          <polyline class="st0" points="61,46.3 61,63.2 58.1,66.1 50.4,66.1 47,62.8 47,37.7 	"/>
          <line class="st0" x1="27.9" y1="51.9" x2="47" y2="51.9"/>
          <line class="st0" x1="27.7" y1="65" x2="47" y2="65"/>
          <polyline class="st0" points="29.2,78.9 53,78.9 56.6,75.3 56.6,66.1 	"/>
          <polyline class="st0" points="56.6,93.2 56.6,81.9 53.3,78.6 	"/>
        </g>
      </svg>
      `;
  }

}
