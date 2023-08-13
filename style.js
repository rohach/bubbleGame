var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
  var totalBubbles = "";

  for (var i = 1; i <= 160; i++) {
    var numberInBubble = Math.floor(Math.random() * 10);
    totalBubbles += `<div class="bubble">${numberInBubble}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = totalBubbles;
}
makeBubble();

function finalScore() {}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `
      <div class="finalScore">
                    <h1>Game Over!!!</h1>
                    <h3>Your Final Score is ${score}</h3>
                    <h3>Play Again? <a href="/">Click Here</a></h3>
                </div>`;
    }
  }, 1000);
}

runTimer();

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});
