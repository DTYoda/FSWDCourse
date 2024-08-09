window.onload = function exampleFunction()
{
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    document.getElementsByClassName("img1").setAttribute("src", "Images/dice" + player1 + ".png");
    document.getElementsByClassName("img2").setAttribute("src", "Images/dice" + player2 + ".png");

    console.log("done!");
}