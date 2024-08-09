for (i of document.querySelectorAll(".drum")) {
    i.addEventListener("click", function () {
        let audio = new Audio("sounds/" + i.id + ".mp3");
        audio.play();

        console.log(i.id);
    });
}