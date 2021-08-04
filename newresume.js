

let links = document.getElementsByClassName('links');
let icons = document.getElementsByClassName('icons');

let linkColors = ['teal', '#a2d5c6', '#12a4d9', '#5c3c92', '#ff6e40', '#ffc13b'];

for(let i = 0; i <= links.length - 1; i++){
    let link = links[i];
    let icon = icons[i];
    icon.style.color = linkColors[i];
    link.addEventListener('mouseover', function(){
        link.style.borderLeft = `solid 4px ${linkColors[i]}`;
        link.style.backgroundColor = `lightgray`;
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