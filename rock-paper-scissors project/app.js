 
      let score = JSON.parse(localStorage.getItem('score'));
      
      
      if (!score ) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      };

      updateScore();
      
      let isAutoPlaying = false;
      let Intervalid;
      function autoPlay() {
        if (!isAutoPlaying) {
          Intervalid = setInterval(() => {
          const playerMove = pickComputerMove();
           playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        } else {
          clearInterval(Intervalid);
          isAutoPlaying = false;
        }
        
      };
      document.querySelector('.js-rock-button').addEventListener('click',() => {playGame("rock");});
      document.querySelector('.js-paper-button').addEventListener('click',() => {playGame("paper");});
      document.querySelector('.js-scissor-button').addEventListener('click',() => {playGame("scissor");});


      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          playGame('rock');
        }else if (event.key === 'p') {
          playGame('paper');
        }else  if (event.key === 's') {
          playGame('scissor')
        }
      });
      function playGame(playerMove) {
        const ComputerMove = pickComputerMove();

        let result = '';

        if (playerMove === "scissor") {
          const ComputerMove = pickComputerMove();


          if (ComputerMove === 'rock') {
            result = 'Lose'
          }
          else if (ComputerMove === 'paper') {
            result = 'Win'
          }
          else if (ComputerMove === 'scissor') {
            result = 'Tie'
          }
          }
        else if (playerMove === "paper") {
          const ComputerMove = pickComputerMove();
          
          if (ComputerMove === 'rock') {
            result = 'Win'
          }
          else if (ComputerMove === 'paper') {
            result = 'Tie'
          }
          else if (ComputerMove === 'scissor'){
            result = 'Lose'}
        }

        else if (playerMove === "rock")  {
          const ComputerMove = pickComputerMove();
          
          if (ComputerMove === 'rock') {
            result = 'Tie'
          }
          else if (ComputerMove === 'paper') {
            result = 'Lose'
          }
          else if (ComputerMove === 'scissor'){
            result = 'Win'}
        }
        if (result === "Win") {
            score.wins += 1
          }
        else if (result === "Lose") {
            score.losses += 1
        }
        else if (result === "Tie") {
            score.ties += 1
        }
        localStorage.setItem('score', JSON.stringify(score));

        
        
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = (`You <img class="icon" src="/${playerMove}-emoji.png">- Computer <img class="icon" src="/${ComputerMove}-emoji.png"> `);
        updateScore()
       
      }
        
      function updateScore() {
        document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Loss: ${score.losses}, Ties: ${score.ties}`;
      }
          
      function pickComputerMove() {
        const randomNumber = Math.random();
     
        if (randomNumber >=0 && randomNumber < 1 / 3) {
        
        ComputerMove = 'rock';
      
        }else if (randomNumber >=1 /3 && randomNumber < 2/3){
        ComputerMove = 'paper';
        }
        else if (randomNumber > 2/3 && randomNumber < 1){
        ComputerMove = 'scissor';
        }
        console.log(ComputerMove);
        return ComputerMove;
        
        }