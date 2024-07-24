let score = 0;

function getRandomColor() {
    const letters = '0123456789ABCDE';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startGame() {
    let gameWidth = document.getElementById("game").offsetWidth;
    console.log(gameWidth);

    let positionNumber1 = Math.floor(Math.random() * 650);
    let positionNumber2 = Math.floor(Math.random() * (gameWidth - 150));
    let ranColor = getRandomColor();
    document.getElementById("mainButton").style.backgroundColor = ranColor;

    document.getElementById("startButton").style.visibility = "hidden";

    setTimeout(function(){
        document.getElementById("boxContainer").style.marginTop = positionNumber1 + "px";
        document.getElementById("boxContainer").style.marginLeft = positionNumber2 + "px";
        document.getElementById("mainButton").style.visibility = "visible";
    }, 250);
}

function clickFunction() {

    let gameWidth = document.getElementById("game").offsetWidth;
    console.log(gameWidth);

    let positionNumber1 = Math.floor(Math.random() * 650);
    let positionNumber2 = Math.floor(Math.random() * (gameWidth - 150));
    let ranColor = getRandomColor();

    score++;

    document.getElementById("scoreNumber").innerHTML = score;

    document.getElementById("mainButton").style.visibility = "hidden";

    document.getElementById("mainButton").style.backgroundColor = ranColor;

    document.getElementById("pop").style.visibility = "visible";

    setTimeout(function(){
        document.getElementById("pop").style.visibility = "hidden";
    }, 250);

    setTimeout(function(){
        document.getElementById("boxContainer").style.marginTop = positionNumber1 + "px";
        document.getElementById("boxContainer").style.marginLeft = positionNumber2 + "px";
        document.getElementById("mainButton").style.visibility = "visible";
    }, 250);
}