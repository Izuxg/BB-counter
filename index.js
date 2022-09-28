var scoreh = 0
var scoreg = 0
// let resultHome = score
var homeScore = document.querySelector("#scoreHome")
var guestScore = document.querySelector("#scoreGuest")


// make the buttons work for Home.
function addOneHome() {
   homeScore.textContent = scoreh++
}
function addTwoHome() {
    homeScore.textContent = scoreh+=2;
}
function addThreeHome() {
    homeScore.textContent= scoreh+=3;
}

// make buttons work for Guest
function addOneGuest() {
    guestScore.textContent = scoreg++
 }
 function addTwoGuest() {
     guestScore.textContent = scoreg+=2;
 }
 function addThreeGuest() {
     guestScore.textContent= scoreg+=3;
 }
// display a sum of the scores

// New game
var newGame = document.querySelector("#reset")
function reset() {
    scoreh = 0
    scoreg = 0
    homeScore.textContent = 0;
    guestScore.textContent= 0;
}

// Highlight the winner
var leader = document.querySelector("p")
if (scoreh > scoreg) {
    leader.classList.add("winner")
} else  {
    
}

