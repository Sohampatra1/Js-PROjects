var userInput = prompt("Enter tweet");

var userSize = prompt("Enter size");

if(userInput.length <= userSize) {
  console.log(userInput);
}
else {
  console.log(userInput.slice(0,userSize));
}
