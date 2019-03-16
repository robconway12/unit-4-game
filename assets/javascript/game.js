$(document).ready(function(){

    // === RANDOM NUMBER ===  Select a random number and map it to the random number field
    
    function anyNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      };

    var counter = 0;
    var targetNumber = anyNumber(19,120);

    $( '#randomNumber' ).text(targetNumber);

    // === GEMS ===

    var amethyst = anyNumber(1,12);
    var emerald = anyNumber(1,12);
    var diamond = anyNumber(1,12);
    var ruby = anyNumber(1,12);

    console.log('amethyst: ' + amethyst + ', emerald: ' + emerald + ', diamond: ' + diamond + ', ruby: ' + ruby);

    // When user clicks on each gem, the gem value will be added to the counter

    $( '#amethyst' ).click(function() {
        let add = parseInt(counter) + parseInt(amethyst);
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        });

    $( '#ruby' ).click(function() {
        let add = parseInt(counter) + parseInt(ruby);
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        });

    $( '#diamond' ).click(function() {
        let add = parseInt(counter) + parseInt(diamond);
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        });

    $( '#emerald' ).click(function() {
        let add = parseInt(counter) + parseInt(emerald);
        counter = add;
        console.log(counter);
        $( '#totalScore' ).text(counter);
        });

    
    //   var crystalValue = ($(this).attr("data-crystalvalue"));
    //   crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    //   counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //   alert("New score: " + counter);

    if (counter === targetNumber) {
    alert("You win!");
    }

    else if (counter >= targetNumber) {
    alert("You lose!!");
    }
});