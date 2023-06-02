"use strict";

let max, min;
let flag = 0;
let highScore = 0;

function startGame() {
    let flag2 = flag;
    flag = 0;
    min = Number(prompt("Entire minimum limit"));
    max = Number(prompt("Entire maximum limit"));
    while (max < min && flag === 0) {
        if (max < min) {
            alert("Maximum Value cannot be less than minimum");
            min = Number(prompt("Entire minimum limit"));
            max = Number(prompt("Entire maximum limit"));
            if (max > min) {
                flag = 1;
            }
        }
    }
    flag = flag2;
}
startGame();
let currentScore = max - min;
document.querySelector(".between").textContent =
    "Between " + min + " and " + max + "";
document.querySelector(".score").textContent = currentScore;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let randNum = getRandomNumber(min, max);

document.querySelector(".check").addEventListener("click", function() {
    const val = Number(document.querySelector(".guess").value);
    if (!val) {
        document.querySelector(".message").textContent = "⚠️ No Number!";
    } else if (val === randNum) {
        document.querySelector(".message").textContent = "✅ Correct Guess";
        if (currentScore > highScore) {
            highScore = currentScore;
        }

        document.querySelector(".number").textContent = val;
        document.querySelector("body").style.backgroundColor = "#333c77";
        document.querySelector(".number").style.width = "40rem";
        flag = 1;
    } else if (currentScore > 1) {
        if (val > randNum) {
            document.querySelector(".message").textContent = "⬆️ Too High!";
        } else if (val < randNum) {
            document.querySelector(".message").textContent = "⬇️ Too Low!";
        }
        currentScore = currentScore - 1;
        document.querySelector(".score").textContent = currentScore;
    } else {
        document.querySelector(".message").textContent = "💔 Game Over! You Lost!";
    }
    document.querySelector(".highscore").textContent = highScore;
});

document.querySelector(".again").addEventListener("click", function() {
    startGame();
    currentScore = max - min;
    document.querySelector(".between").textContent =
        "Between " + min + " and " + max + "";
    document.querySelector(".score").textContent = currentScore;
    randNum = getRandomNumber(min, max);
    document.querySelector("body").style.backgroundColor = "#972929";
    // document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = currentScore;
    document.querySelector(".number").textContent = "?";
});
