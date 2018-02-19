$(document).ready(function() {                                                      
     // ...
    var rubyCountArray = [0,0,0,0];
    var winCount = 0;
    var lossCount =0;

    // Reset the Game;
    gameReset(); 

    // Pick a word
    var theNumber = pickANumber();
    var theCount = 0;
    var playerCompletedNumber = false;
    var playerExceededNumber = false;

    //Intialize display
    updateOutputs("Click a gem to start!");
   
    // Event handlers
    $('#red-crystal').on('click'), function(e) {
        console.log('red-crystal')
        theCount += rubyCountArray[0];
        common_processing();
    };

    $('#blue-crystal').on('click'), function(e) {
        console.log('blue-crystal')
        theCount += rubyCountArray[1];
        common_processing();
    };

    $('#yellow-crystal').on('click'), function(e) {
        console.log('yellow-crystal')
        theCount += rubyCountArray[2];
        common_processing();
    };

    $('#green-crystal').on('click'), function(e) {
        console.log('green-crystal')
        theCount += rubyCountArray[3];
        common_processing();
    };
   
    // common game functionality 
    function common_processing()
    {
        /* Check for completion/exceeding the limit */
        if ( theCount > theNumber)
            playerExceededNumber = true;
        if ( theNumber == theNumber)
            playerCompletedNumber = true;

          if (playerCompletedNumber)
            {
                winCount++;
                $('#info-text').text("Victory");
                console.log( 'Player Won' );
            }
            else if (playerExceededNumber)
            {
                lossCount++;
                $('#info-text').text("Defeat");
                console.log( 'Player Lost' );
            }
            else
            {
                console.log( 'Keep guessing' );
            }
  
        // Reset to a new work if player guessed all of the words and then pressed Enter  
        if ( (playerCompletedNumber || playerExceededNumber) ) // Keycode 13 is Enter
        {
           // Reset the Game;
           gameReset(); 
           // Pick another word
           theNumber = pickANumber();
           $('#info-text').text("Press any key to start");                                                                           
        }
     
        // Output results to the Page for the user to see
        updateOutputs("");
};

function gameReset()
{
    console.log( 'Game Reset')
    // Reset everything (except number of wins/losses)
    playerCompletedNumber = false;
    playerExceededNumber = false;
    theCount=0;
    rubyCountArray[0] = 0;
    rubyCountArray[1] = 0;
    rubyCountArray[2] = 0;
    rubyCountArray[3] = 0;
};

function pickANumber( ) {
    console.log( 'Pick a Number' );
    var randnum= Math.floor((Math.random()) * 100 + 1);
    console.log('Random Number: ' + randnum);
    var selectedNumber = randnum + 19;
    console.log('Selected Number: ' + selectedNumber);
    // Pick counts for the rubies 
    rubyCountArray[0] = ((Math.floor(Math.random()) * randnum) + 1);
    rubyCountArray[1] = ((Math.floor(Math.random()) * randnum) + 1);
    rubyCountArray[2] = ((Math.floor(Math.random()) * randnum) + 1);
    rubyCountArray[3] = ((Math.floor(Math.random()) * randnum) + 1);
    for (var i=0; i<rubyCountArray.length; i++)
    {
        console.log('Ruby ' + (i+1) + ': ' + rubyCountArray[i] );
    }
    return selectedNumber;
};

function updateOutputs( information ) {
    // Output result to the web page
    $('#info-text').text(information);
    $('#win-count').text(winCount);
    $('#loss-count').text(lossCount);
    $('#random-crystal-target').text(theNumber);   
    $('#player-crystal-guess').text(theCount);
    // Output result to the Console for debugging
    console.log( 'Results so far.......' );
    console.log( 'Wins: ' + winCount );
    console.log( 'Losses: ' + lossCount);
    console.log( 'The Number: ' +  theNumber );
    console.log( 'The Count: ' + theCount);

};

}); 