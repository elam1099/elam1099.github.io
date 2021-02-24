console.log("reading js");

(function() {
    'use strict';
    console.log("reading js from IIFE");

    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var roll = document.getElementById('roll');
    var actionArea = document.getElementById('actions');


    var gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['PLAYER 1', 'PLAYER 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function (){
        //randomly set game index
        gameData.index = Math.round(Math.random());
        //gameControl.innerHTML = '<h2 id="gamestarted">GAME HAS STARTED</h2>';
        gameControl.innerHTML = '<div class="buttonquit"><button id="quit">QUIT</button></div>';

        //button to quit game and reload page
        document.getElementById("quit").addEventListener("click", function (){
            location.reload();
        });

        //console.log("set up the turn!");
        console.log(gameData.index);
        setUpTurn();


    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        roll.innerHTML = '<div class="buttonroll"><button id="roll">ROLL THE DICE</button></div>';
        document.getElementById('roll').addEventListener('click', function(){

            throwDice();
        });
    };

    function throwDice(){
        roll.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src ="images/${gameData.dice[gameData.roll1-1]}">
                        <img src = "images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        //if two 1's are rolled
        if(gameData.rollSum === 2) {   
            game.innerHTML += '<p>Oh snap! Snake eyes! </p>';
            //switch player
            gameData.score[gameData.index]=0;
            gameData.index ? (gameData.index = 0) : (gameData.index=1);

            showCurrentScore();

            //show current score
            setTimeout(setUpTurn, 2000);
        }

        // if either die is a 1
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            //switch players
            gameData.index ? (gameData.index = 0) : (gameData.index=1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
        
            setTimeout(setUpTurn, 2000);
        }
            

        // if neither die is a 1
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            //actionArea.innerHTML = 'ROLL AGAIN?';
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';
            //actionArea.innerHTML = '<div class="bg"><div id="rollask">ROLL AGAIN?</div> <div id="actionbtn"> <div id="passbtn"><button id="pass">Pass</button></div>  <div id="againbtn"><button id="rollagain">Roll Again</button></div></div>';

            document.getElementById('rollagain').addEventListener('click', function(){
                //setUpTurn();
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function(){
                //switch players
                gameData.index ? (gameData.index = 0) : (gameData.index=1);
                setUpTurn();
            });
           
            //check if player won
           checkWinningCondition();
        }

      
    };

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML="";
            document.getElementById('quit').innerHTML = "Start a New Game";
        }

        else {
            showCurrentScore();
        };
    };

    function showCurrentScore(){
        //update score
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;

    };

    
}());