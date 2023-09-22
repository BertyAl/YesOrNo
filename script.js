const $ = (s, o = document) => o.querySelector(s);

document.addEventListener('mousemove', function(e) {
    $('.cursor').style.left = (e.pageX - 25) + 'px';
    $('.cursor').style.top = (e.pageY - 25) + 'px';
  });

  let bYes = document.querySelector(".bYes");
  let bNo = document.querySelector(".bNo");
  
  bNo.style.animationName = "none"; //SET bNo AGAR DIEM
  
  function startBNoAnimation() {
    bNo.style.animationName = "moveLeft";
  }
  
  bYes.addEventListener("mouseenter", () => {
    bYes.style.animationName = "moveRight"
    bYes.addEventListener("animationstart", startBNoAnimation, { once: true }); 
  });
  
  bYes.addEventListener("mouseleave", () => {
    bYes.style.animationName = "none";
    bNo.style.animationName = "none"; 
  });



const myButton = document.getElementById("button2");
myButton.addEventListener("click", function () {
 
  const nextPageUrl = "https://www.youtube.com"; 

  window.location.href = nextPageUrl;
});

