const checkBtn = document.getElementById('checkBtn');
const clearBtn = document.getElementById('clearBtn');
const wordInput = document.getElementById('wordInput');
const message = document.getElementById('message');

const getPalindrome = (word) => {
  const arrLength = word.length;
  for (let i = 0; i < arrLength / 2; i++) {
    if (word[i] !== word[arrLength - 1 - i]) {
      return false;
    }
  }
  return true;
};

//get user input
checkBtn.addEventListener('click', () => {
  const userInput = wordInput.value;
  //turn user input into an array
  const word = userInput.split('');
  const isPalindrome = getPalindrome(word);
  message.textContent = isPalindrome
    ? `"${userInput}" is a palindrome!`
    : `"${userInput}" is not a palindrome.`;
  checkBtn.hidden = true;
  clearBtn.hidden = false;
});

clearBtn.addEventListener('click', () => {
  wordInput.value = '';
  message.textContent = '';
  clearBtn.hidden = true;
  checkBtn.hidden = false;
});
