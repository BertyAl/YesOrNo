const $ = (s, o = document) => o.querySelector(s);

document.addEventListener('mousemove', function(e) {
    $('.cursor').style.left = (e.pageX - 25) + 'px';
    $('.cursor').style.top = (e.pageY - 25) + 'px';
  });

  let bYes = document.querySelector(".bYes");
  let bNo = document.querySelector(".bNo");
  let afk = document.querySelector("body");
  let isTranslated = false;

bYes.addEventListener('mouseover', () => {
  if (!isTranslated) {
    bYes.style.transform = 'translateX(320px)';
    bNo.style.transform = 'translateX(-320px)';
    isTranslated = true;
  } else {
    bYes.style.transform = 'translateX(0)';
    bNo.style.transform = 'translateX(0)';
    isTranslated = false;
  }
});


// Script agar link ke google
const myButton = document.getElementById("button2");
myButton.addEventListener("click", function () {

const nextPageUrl = "https://www.google.com/"; 

window.location.href = nextPageUrl;
});

