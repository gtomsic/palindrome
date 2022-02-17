// Write your code below

const palindrome = (text) => {
  const newText = text.split('').reverse().join('');
  return text === newText;
};

console.log(palindrome('hello'));
