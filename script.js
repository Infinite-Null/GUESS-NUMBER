let guess,
  secretNumber,
  score,
  highscore = 0;
score = parseInt(document.querySelector('.score').textContent);
secretNumber = parseInt(Math.random() * 20);
for (let i = 0; i < 2; i++) {
  document.querySelectorAll('.again')[i].addEventListener('click', function () {
    score = 20;
    document.querySelector('.message').textContent = 'Enter a number....';
    document.querySelector('.score').textContent = score;
    secretNumber = parseInt(Math.random() * 20);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.lost').style.display = 'none';
    document.querySelector('.Blur').style.display = 'none';
  });
}
document.querySelector('.check').addEventListener('click', function () {
  guess = document.querySelector('.guess').value;
  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Value was out of bound.....';
    document.querySelector('body').style.backgroundColor = 'rgb(255, 122, 122)';
  } else {
    if (guess != secretNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too High..........' : 'Too Low...........';
        document.querySelector('body').style.backgroundColor = '#222';
      } else {
        document.querySelector('.message').textContent = 'You Lost...........';
        document.querySelector('.score').textContent = score - 1;
        document.querySelector('body').style.backgroundColor =
          'rgb(255, 122, 122)';
        document.querySelector('.number').textContent = '😢';
        document.querySelector('.lost').style.display = 'inline-block';
        document.querySelector('.Blur').style.display = 'inline-block';
      }
    } else {
      document.querySelector('.message').textContent = 'Victory............';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  }
});
