/** @format */

const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");
// document.getElementById("div").style.display = "hidden";
portfolioItems.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.childNodes[1].classList.add("img-darken");
  });
  e.addEventListener("mouseout", () => {
    e.childNodes[1].classList.remove("img-darken");
  });
});

document.getElementById("animateDot").addEventListener("click", function(){
  myMove();
});

var id = null;
function myMove() {
  var elem = document.getElementById("container");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
      document.getElementById("animateDot").style.width = 'fit-content';
      document.getElementById("animateDot").style.backgroundColor = 'white';
      document.getElementById("animateDot").innerHTML = "I bet you'll hire me now";
      setTimeout(function(){
        document.getElementById("animateDot").innerHTML = "";
        document.body.style.backgroundColor = "black";
        
        let i = 0;
        while(i < 5){
          let left = Math.floor(Math.random() * 90);
          let top = Math.floor(Math.random() * 90);
          const star = document.createElement('div');
          star.setAttribute('id', 'star');
          star.style.top = `${top}%`;
          star.style.left = `${left}%`;
          document.body.appendChild(star);
          i++;
        }
      }, 2000);
    } else {
      pos++;
      elem.style.marginTop = pos + 'px';
      elem.style.marginLeft = pos + 'px';
    }
  }
}


