

let links = document.getElementsByClassName('links');
let icons = document.getElementsByClassName('icons');

let linkColors = ['teal', '#a2d5c6', '#12a4d9', '#5c3c92', '#ff6e40', '#ffc13b'];

for(let i = 0; i <= links.length - 1; i++){
    let link = links[i];
    let icon = icons[i];
    icon.style.color = linkColors[i];
    link.addEventListener('mouseover', function(){
        link.style.borderLeft = `solid 4px ${linkColors[i]}`;
        link.style.backgroundColor = `rgb(241, 238, 238)`;
    })
    link.addEventListener('mouseout', function(){
        link.style.borderLeft = ``;
        link.style.backgroundColor = ``;
    })
}


let hamburger = document.getElementsByClassName('hamburger');
let mobilenav = false;
hamburger[0].addEventListener('click', function(){
    let nav = document.getElementById('nav');
    if(!mobilenav){
        nav.style.display = 'flex';
        nav.style.backgroundColor = 'white';
        mobilenav = true;
    } else{
        nav.style.display = 'none';
        nav.style.backgroundColor = 'transparent';
        mobilenav = false;
    }

})

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  $("h4").each(function () {
      var target = $(this).offset().top;
      var id = $(this).attr("id");
      var distance = target - scrollTop;
      let color;
         
      if (distance < 10) {
          console.log(id)
        switch (id) {
            case "summary":
                color = "teal";
                break;
            case "stack":
                color = "#a2d5c6";
                break;
            case "experience":
                color = "#12a4d9";
                break;
            case "projects":
                color = "#5c3c92";
                break;
            case "contact":
                color = "#ffc13b";
                break;
        }
          $(".links").each(function () {
              $(this).css({ "background-color": "white", "font-weight": "normal", "border-left": ""})
          })
          $(`a[href='#${id}']`).css({ "background-color": "rgb(241, 238, 238)", "font-weight": "bold", "border-left": `${color} solid 4px` });
        
      }
  });
});