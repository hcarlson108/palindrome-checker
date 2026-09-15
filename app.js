const checkBtn = document.getElementById('checkBtn');
const wordInput = document.getElementById('wordInput');
const message = document.getElementById('message');
let userInput = '';

checkBtn.addEventListener('click', () => {
  userInput = wordInput.value;
  console.log(userInput);
});

const palindromeResults = () => {};
