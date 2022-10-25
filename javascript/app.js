window.onload( startGame() );
function startGame ()
{
    // make Number of dice one
    var numDice1 = Math.random() * 5;
    numDice1 = Math.round( numDice1 ) + 1;

    // make Number of dice Two
    var numDice2 = Math.random() * 5;
    numDice2 = Math.round( numDice2 ) + 1;

    // set the number to dice one
    document.querySelector( "#dicePlayer1" ).setAttribute( "src", "img/dice-" + numDice1 + ".png" );

    // set the number to dice two
    document.querySelector( "#dicePlayer2" ).setAttribute( "src", "img/dice-" + numDice2 + ".png" );

    // cahnge the dice
    if ( numDice1 > numDice2 )
    {
        document.getElementById( "head" ).innerHTML = "<img src='img/flag.png'>" + "Play 1 Wins";
        document.getElementById( "start" ).innerHTML = "Player 1";
    } else if ( numDice1 < numDice2 )
    {
        document.getElementById( "head" ).innerHTML = "Player 2 Wins" + "<img src='img/flag.png'>";
        document.getElementById( "start" ).innerHTML = "Player 2";
    } else
    {
        document.getElementById( "head" ).innerHTML = "<b id='darw'>Draw!</b>";
    }
}