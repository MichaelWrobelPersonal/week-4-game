$(document).ready(function() {                                                      
     // ...
    var rubyCountArray = [0,0,0,0];
    var winCount = 0;
    var lossCount =0;
    var information = "Click a gem to start";

    // Reset the Game;
    gameReset(); 

    // Pick a word
    var theNumber = pickANumber();
    var theCount = 0;
    var playerCompletedNumber = false;
    var playerExceededNumber = false;

    //Intialize display
    updateOutputs(information);
   
// Event handlers - Game Play
$("#red-crystal").on("click", function(event) {
    console.log('red-crystal')
    theCount += rubyCountArray[0];
    common_processing();
});

$("#blue-crystal").on("click", function(event) {
    console.log('blue-crystal')
    theCount += rubyCountArray[1];
    common_processing();
});

$("#yellow-crystal").on("click", function(event) {
    console.log('yellow-crystal')
    theCount += rubyCountArray[2];
    common_processing();
});

$("#green-crystal").on("click", function(event) {
    console.log('green-crystal')
    theCount += rubyCountArray[3];
    common_processing();
});
   
// common game functionality 
function common_processing()
{
    /* clear out the info until something needs to be said */
    information = "";

    /* Check for completion/exceeding the limit */
    if ( theCount > theNumber)
        playerExceededNumber = true;
    if ( theCount == theNumber)
        playerCompletedNumber = true;

    console.log( "The Count: " + theCount );
    console.log( "The Number: " + theNumber ); 

    if (playerCompletedNumber)
    {
        winCount++;
        $('#info-text').text("Victory");
        information = "Victory!"
        console.log( 'Player Won' );
    }
    else if (playerExceededNumber)
    {
        lossCount++;
        information = "Defeat!";
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
    }
     
    // Output results to the Page for the user to see
    updateOutputs(information);
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
    rubyCountArray[0] = Math.floor((Math.random() * 12) + 1);
    rubyCountArray[1] = Math.floor((Math.random() * 12) + 1);
    rubyCountArray[2] = Math.floor((Math.random() * 12) + 1);
    rubyCountArray[3] = Math.floor((Math.random() * 12) + 1);
    for (var i=0; i<rubyCountArray.length; i++)
    {
        console.log('Ruby ' + (i+1) + ': ' + rubyCountArray[i] );
    }
    return selectedNumber;
};

function updateOutputs( info ) {
    // Output result to the web page
    $('#info-text').text(info);
    $('#win-count').text(winCount);
    $('#loss-count').text(lossCount);
    $('#random-crystal-target').text(theNumber);   
    $('#player-crystal-guess').text(theCount);
    // Output result to the Console for debugging
    console.log( 'Results so far.......' );
    console.log( "Info: " + info );
    console.log( 'Wins: ' + winCount );
    console.log( 'Losses: ' + lossCount);
    console.log( 'The Number: ' +  theNumber );
    console.log( 'The Count: ' + theCount);
};


// Event handlers for visual effects
$("#red-crystal").on("mouseout", function(event) {
    $("#red-crystal").fadeIn();
});

$("#blue-crystal").on("mouseout", function(event) {
    $("#blue-crystal").fadeIn();
});

$("#yellow-crystal").on("mouseout", function(event) {
    $("#yellow-crystal").fadeIn();
});

$("#green-crystal").on("mouseout", function(event) {
    $("#green-crystal").fadeIn();
});
 

$("#red-crystal").on("mouseover", function(event) {
    $("#red-crystal").fadeOut().fadeIn();
});

$("#blue-crystal").on("mouseover", function(event) {
    $("#blue-crystal").fadeOut().fadeIn();
});

$("#yellow-crystal").on("mouseover", function(event) {
    $("#yellow-crystal").fadeOut().fadeIn();
});

$("#green-crystal").on("mouseover", function(event) {
    $("#green-crystal").fadeOut().fadeIn();
});
 

}); 