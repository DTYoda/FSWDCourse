console.log("Starting");

let sequence = [];
let playerSequence = [];

let score = 0;
let started = false;

function addSequence()
{
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    sequence.push(randomNumber);
    playerSequence = [];
    $("#" + randomNumber).addClass("pressed"); 
    setTimeout(() => {
        $("#" + randomNumber).removeClass("pressed");
    }, 100);

    $("h1").text("Level " + score);
}

function fail()
{
    $("h1").text("Failed. Your final score is " + score + ". Press A to restart.");

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 100);
    started = false;
}

function pressButton(button)
{
    $("#" + button.target.id).addClass("pressed");
    setTimeout(() => {
        $(".btn").removeClass("pressed");
    }, 100);

    playerSequence.push(parseInt(button.target.id));

    if(sequence.length == playerSequence.length)
    {
        if(sequence.join() == playerSequence.join())
        {
            setTimeout(addSequence, 500);
            playerSequence = [];
            score++;
        }
        else
        {
            fail();
        }
    }
    else
    {
        checkArrays();
    }
}

function checkArrays(){
    for(let i = 0; i < playerSequence.length; i++)
    {
        if(playerSequence[i]!= sequence[i])
        {
            fail();
        }
    }
}

$(".btn").click(pressButton);

$(document).on("keypress", (event) => {
    if(event.key == "a" && !started)
    {
        sequence = [];
        playerSequence = [];
        score = 1;
        addSequence();
        started = true;
    }
});
