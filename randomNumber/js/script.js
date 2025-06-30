// random number generator

// Lucky for Life
// 5 balls(1 to 48)
// Lucky Ball(1 to 18)

function luckyTimes () {
  let output;
  let luckyNums = [];
  for (let i = 0; i < 5; i++){
    output = Math.floor(Math.random() * 48 + 1);
    luckyNums.push(output);
  }
  let luckyBall;
  luckyBall = Math.floor(Math.random() * 18 + 1);
  luckyNums.push(luckyBall);
  console.log(luckyNums);
};

luckyTimes();

// Powerball
// 5 balls(1 to 69)
// Powerball(1 to 26)

function powerBallTimes () {
  let output;
  let powerNums = [];
  for (let i = 0; i < 5; i++){
    output = Math.floor(Math.random() * 69 + 1);
    powerNums.push(output);
  }
  let powerBall;
  powerBall = Math.floor(Math.random() * 26 + 1);
  powerNums.push(powerBall);
  console.log(powerNums);
};

powerBallTimes();

// Mega Millions
// 5 balls(1 to 70)
// Mega Ball(1 to 24)

function megaTimes () {
  let output;
  let megaNums = [];
  for (let i = 0; i < 5; i++){
    output = Math.floor(Math.random() * 70 + 1);
    megaNums.push(output);
  }
  let megaBall;
  megaBall = Math.floor(Math.random() * 24 + 1);
  megaNums.push(megaBall);
  console.log(megaNums);
};

megaTimes();