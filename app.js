const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}

// const fakeRequest = (urlName) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.6) {
//         resolve('AWESOME DATA');
//       } else {
//         reject('WEWE!');
//       }
//     }, 2000);
//   });
// };

// const request = fakeRequest('http://www.tau.com')
//   .then((data) => console.log('DONE', data))
//   .catch((message) => console.log('REJECTED', message));

// const delayedColorChange = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       resolve(newColor);
//     }, delay);
//   });
// };

// delayedColorChange('yellow', 2000).then(() =>
//   delayedColorChange('purple', 2000)
// );

// async function hello() {}

// const test = async () => {
//   throw 'umcc';
//   return 'LALALA';
// };

// test()
//   .then((x) => console.log(x))
//   .catch((x) => console.log(x));

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgi') return 'Welcome';
  throw 'Invalid password';
};

// login('ABC', 'corgi')
//   .then((msg) => {
//     console.log('LOGGED IN!');
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log('THATS ERROR');
//     console.log(error);
//   });

const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve(newColor);
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange('red', 2000);
  await delayedColorChange('orange', 2000);
}

async function waitForRainbow() {
  await rainbow();
  return 'RAINBOW IS DONE';
}

const x = waitForRainbow();
console.log(x);
