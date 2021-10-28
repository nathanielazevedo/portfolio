
const links = document.getElementsByClassName("links");
const icons = document.getElementsByClassName("icons");
const hamburger = document.getElementsByClassName("hamburger");
const stack_images = $(".stack_images");

let mobilenav = false;

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

//open and close nav on small screen
hamburger[0].addEventListener("click", function () {
  let nav = document.getElementById("nav");
  if (!mobilenav) {
    nav.style.display = "flex";
    nav.style.backgroundColor = "white";
    mobilenav = true;
  } else {
    nav.style.display = "none";
    nav.style.backgroundColor = "transparent";
    mobilenav = false;
  }
});

function checkWidth(){
  if(window.innerWidth >= 1000){
    nav.style.display = "flex";
    nav.style.backgroundColor = "white";
    mobilenav = true;
  }
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

//for initial stack layout

for (let i = 0; i < stack.length; i++) {
  stack_images.prepend(`<img class="stack_image" src="/images/${stack[i]}">`);
}

//for sliding stack left

$(".left").on("click", function () {
  let first = stack[0];
  stack_images.html("");
  stack.shift();
  stack.push(first);
  for (let i = 0; i < stack.length; i++) {
    stack_images.prepend(`<img class="stack_image" src="/images/${stack[i]}">`);
  }
});

//for sliding stack right

$(".right").on("click", function () {
  let last = stack[stack.length - 1];
  stack_images.html("");
  stack.pop();
  stack.unshift(last);
  for (let i = 0; i < stack.length; i++) {
    stack_images.prepend(
      `<img class="stack_image" src="/images/${stack[i]}"></img>`
    );
  }
});


//3D rendering

function init() {
  let contact = document.getElementById("top");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2.5, window.innerHeight / 2.5);
  contact.appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  const clock = new THREE.Clock();
  controls.update();
  let mixer
  loader.load(
    // resource URL
    "/images/nate.gltf",
    // called when the resource is loaded
    function (gltf) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      var action = mixer.clipAction(gltf.animations[0]);
      action.play();
      scene.add(gltf.scene);
    }
  );
  const alight = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
  scene.add(alight);

  const light = new THREE.PointLight(0xffffff, 0.7, 100);
  light.position.set(0, 0, 3);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

init()