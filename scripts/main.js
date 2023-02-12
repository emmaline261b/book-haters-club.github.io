const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/book-background.jpeg") {
    myImage.setAttribute("src", "images/book-shelf-small.jpeg");
  } else {
    myImage.setAttribute("src", "images/book-background.jpeg");
  }
};


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}!`;
}

myButton.onclick = () => {
  setUserName();
};
