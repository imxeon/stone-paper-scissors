
    let scores = {
      wins: 0,
      loses: 0,
      ties: 0
    }

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.';
        } else if (computerMove === 'scissors') {
          result = 'Tie.';
        }

      } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'Tie.';
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }

      } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }


      // Score
      if (result === 'You win.') {
        scores.wins += 1;
      }
      else if (result === 'You lose.') {
        scores.loses += 1;
      }
      else if (result === 'Tie.') {
        scores.ties += 1;
      }

      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-moves').innerHTML = `You --- <img class="move-icon" src="images/${playerMove}-emoji.png" alt="rock"> 
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="scissors">--- Computer.`;

      updateScoreElement();
    }

      // If an variable is declared inside script. It is termed as global variable and it is acessible to others (could be wrong)
      function pickComputerMove() {

      const randomNumber = Math.random();  // Everytime this button is clicked a random number is generated between 0 and 1
      let computerMove = ''; // The computerMove variable created here is different from the one created inside button element.
      // This variable is only known inside this scope {the nearest curly braces}. Similarly the variable declared inside the button are inacessible from here.

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
        computerMove = 'scissors'
      }

      return computerMove;
    }

    function resetScores() {
      scores.wins = 0;
      scores.loses = 0;
      scores.ties = 0;
      updateScoreElement();
    }

    function updateScoreElement() {
      // The following line of code will pull the targeted p element and place it inside the Javascript.
      document.querySelector('.js-score').innerHTML = `wins: ${scores.wins} Losses: ${scores.loses} Ties: ${scores.ties}`;
    }
