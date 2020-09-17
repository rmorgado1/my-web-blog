//const myHeading = document.querySelector('h1'); //commented to avoid constant problems onvariable myHeading below the code


//myHeading.textContent = 'Hello world!';


//get the atribute href from the box of the image
let myRef = document.querySelector('a').href
//alert(myRef) //if commented it is to avoid bug of the empty alert box


//changes between two images on click
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/square.png') {
      myImage.setAttribute ('src','images/logo.png');
    } else {
      myImage.setAttribute ('src','images/square.png');
    }
}


//creates the functionality of the change user buttom
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}