
const links = document.getElementsByClassName("links");
const icons = document.getElementsByClassName("icons");
const hamburger = document.getElementsByClassName("hamburger");
const stack_images = $(".stack_images");
let previousWindowSize;
let mobilenav = false;

const work1_image = document.getElementById('work1_image');
const work2_image = document.getElementById('work2_image');
const work3_image = document.getElementById('work3_image');
const linkedin = document.getElementById('linkedin');
const gmail = document.getElementById('gmail');
let baseURL;
const navIcon = document.getElementById('nav-icon');

if(window.location.hostname == '127.0.0.1'){
  work1_image.setAttribute('src', '/images/spark.jpeg');
  work2_image.setAttribute('src', '/images/hospital.png');
  work3_image.setAttribute('src', '/images/boise.png');
  linkedin.setAttribute('src', '/images/linkedin.svg');
  gmail.setAttribute('src', '/images/gmail.svg');
  baseURL = '/images/'
} else{
  work1_image.setAttribute('src', '/portfolio/images/spark.jpeg');
  work2_image.setAttribute('src', '/portfolio/images/hospital.png');
  work3_image.setAttribute('src', '/portfolio/images/boise.png');
  linkedin.setAttribute('src', '/portfolio/images/linkedin.svg');
  gmail.setAttribute('src', '/portfolio/images/gmail.svg');
  baseURL = '/portfolio/images/'
}

let linkColors = [
  "teal",
  "#a2d5c6",
  "#12a4d9",
  "#5c3c92",
  "#ff6e40",
  "#ffc13b",
];

let stack = [
  "codeigniter.svg",
  "css-3.svg",
  "flask.svg",
  "html-5.svg",
  "javascript.svg",
  "jquery.svg",
  "python.svg",
  "react.svg",
  "redux.svg",
  "vim.svg",
];

//changes nav bar highlight color
for (let i = 0; i <= links.length - 1; i++) {
  let link = links[i];
  let icon = icons[i];
  icon.style.color = linkColors[i];
  link.addEventListener("mouseover", function () {
    link.style.borderLeft = `solid 4px ${linkColors[i]}`;
    link.style.backgroundColor = `rgb(241, 238, 238)`;
  });
  link.addEventListener("mouseout", function () {
    link.style.borderLeft = ``;
    link.style.backgroundColor = ``;
  });
}

//open and close nav on mobile
hamburger[0].addEventListener("click", function () {
  let nav = document.getElementById("nav");
  if (!mobilenav) {
    navIcon.classList.remove('fa-bars');
    navIcon.classList.add('fa-times');
    nav.style.display = "flex";
    nav.style.backgroundColor = "white";
    mobilenav = true;

  } else {
    navIcon.classList.remove('fa-times');
    navIcon.classList.add('fa-bars');
    nav.style.display = "none";
    nav.style.backgroundColor = "transparent";
    mobilenav = false;
  }
});

//show nav bar if full screen
function checkWidth(){
  if(window.innerWidth >= 1000){
    nav.style.display = "flex";
    nav.style.backgroundColor = "white";
    mobilenav = true;
  }
  if(window.innerWidth < 1000 && previousWindowSize >= 1000){
    nav.style.display = "none";
    nav.style.backgroundColor = "transparent";
    mobilenav = false;
  }
  previousWindowSize = window.innerWidth;
}


window.onresize = checkWidth;

//handles scrolling to match nav highlights
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  $("h4").each(function () {
    var target = $(this).offset().top;
    var id = $(this).attr("id");
    var distance = target - scrollTop;
    let color;

    if (distance < 10) {
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
        $(this).css({
          "background-color": "white",
          "font-weight": "normal",
          "border-left": "",
        });
      });
      $(`a[href='#${id}']`).css({
        "background-color": "rgb(241, 238, 238)",
        "font-weight": "bold",
        "border-left": `${color} solid 4px`,
      });
    }
  });
});

//3D rendering

// function init() {
//   let contact = document.getElementById("top");
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   camera.position.z = 3;
//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
//   let spinner = document.createElement('div');
//   spinner.setAttribute('class', 'loader');
//   contact.append(spinner);

//   const loader = new THREE.GLTFLoader();
//   const controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.enableZoom = false;
//   const clock = new THREE.Clock();
//   controls.update();
//   let mixer
//   loader.load(
//     // resource URL
//     `${baseURL}nate.gltf`,
//     // called when the resource is loaded
//     function (gltf) {
//       mixer = new THREE.AnimationMixer(gltf.scene);
//       var action = mixer.clipAction(gltf.animations[0]);
//       action.play();
//       scene.add(gltf.scene);
//       contact.innerHTML = '';
//       contact.appendChild(renderer.domElement);
//     }
//   );
//   const alight = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
//   scene.add(alight);

//   const light = new THREE.PointLight(0xffffff, 0.7, 100);
//   light.position.set(0, 0, 3);
//   scene.add(light);

//   function animate() {
//     requestAnimationFrame(animate);
//     var delta = clock.getDelta();
//     if (mixer) mixer.update(delta);
//     controls.update();
//     renderer.render(scene, camera);
//   }
//   animate();
// }

// init()