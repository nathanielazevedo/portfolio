/** @format */

let links = document.getElementsByClassName("links");
let icons = document.getElementsByClassName("icons");

let linkColors = [
  "teal",
  "#a2d5c6",
  "#12a4d9",
  "#5c3c92",
  "#ff6e40",
  "#ffc13b",
];

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

let hamburger = document.getElementsByClassName("hamburger");
let mobilenav = false;
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

let stack_images = $(".stack_images");
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
let size = 1;
for (let i = 0; i < stack.length; i++) {
  stack_images.prepend(`<img class="stack_image" src="/portfolio/images/${stack[i]}">`);
}

$(".left").on("click", function () {
  let first = stack[0];
  stack_images.html("");
  stack.shift();
  stack.push(first);
  for (let i = 0; i < stack.length; i++) {
    stack_images.prepend(`<img class="stack_image" src="/portfolio/images/${stack[i]}">`);
  }
});

$(".right").on("click", function () {
  let last = stack[stack.length - 1];
  stack_images.html("");
  stack.pop();
  stack.unshift(last);
  for (let i = 0; i < stack.length; i++) {
    stack_images.prepend(
      `<img class="stack_image" src="/portfolio/images/${stack[i]}"></img>`
    );
  }
});

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
    "/portfolio/images/nate.gltf",
    // called when the resource is loaded
    function (gltf) {
      mixer = new THREE.AnimationMixer(gltf.scene);
      var action = mixer.clipAction(gltf.animations[0]);
      action.play();
      console.log(gltf);
      scene.add(gltf.scene);
    }
  );
  const alight = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
  scene.add(alight);

  const light = new THREE.PointLight(0xffffff, 0.7, 100);
  light.position.set(0, 0, 3);
  scene.add(light);

  console.log(scene);
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


function init2() {
  let contact = document.getElementById("spark");
  const scene = new THREE.Scene();
//   scene.background = new THREE.Color( 0xff0000 );
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1.7;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setClearColor( 0xffffff, 0 );
  renderer.setSize(150, 75);
  contact.appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  const clock = new THREE.Clock();
  controls.update();
  let spark;
  loader.load(
    // resource URL
    "/portfolio/images/spark.gltf",
    // called when the resource is loaded
    function (gltf) {
    //   mixer = new THREE.AnimationMixer(gltf.scene);
    //   var action = mixer.clipAction(gltf.animations[0]);
    //   action.play();
      console.log(gltf);
      spark = gltf.scene
      scene.add(gltf.scene);
    }
  );
  const alight = new THREE.AmbientLight(0xffffff, 1); // soft white light
  scene.add(alight);

//   const light = new THREE.PointLight(0xffffff, 0.2, 100);
//   light.position.set(0, 0, 3);
//   scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    // var delta = clock.getDelta();
    // if (mixer) mixer.update(delta);
    spark ? spark.rotation.y += 0.01 : ''
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

init2()

function init3() {
  let contact = document.getElementById("boise");
  const scene = new THREE.Scene();
//   scene.background = new THREE.Color( 0xff0000 );
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1.7;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setClearColor( 0xffffff, 0 );
  renderer.setSize(150, 75);
  contact.appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  const clock = new THREE.Clock();
  controls.update();
  let spark;
  loader.load(
    // resource URL
    "/portfolio/images/boise.gltf",
    // called when the resource is loaded
    function (gltf) {
    //   mixer = new THREE.AnimationMixer(gltf.scene);
    //   var action = mixer.clipAction(gltf.animations[0]);
    //   action.play();
      console.log(gltf);
      spark = gltf.scene
      scene.add(gltf.scene);
    }
  );
  const alight = new THREE.AmbientLight(0xffffff, 1); // soft white light
  scene.add(alight);

  const light = new THREE.PointLight(0xffffff, 0.3, 100);
  light.position.set(0, 0, 3);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    // var delta = clock.getDelta();
    // if (mixer) mixer.update(delta);
    spark ? spark.rotation.y += 0.01 : '';
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

init3()


function init4() {
  let contact = document.getElementById("hospital");
  const scene = new THREE.Scene();
//   scene.background = new THREE.Color( 0xff0000 );
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1.7;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setClearColor( 0xffffff, 0 );
  renderer.setSize(150, 75);
  contact.appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader();
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  const clock = new THREE.Clock();
  controls.update();
  let spark;
  loader.load(
    // resource URL
    "/portfolio/images/hospital.gltf",
    // called when the resource is loaded
    function (gltf) {
    //   mixer = new THREE.AnimationMixer(gltf.scene);
    //   var action = mixer.clipAction(gltf.animations[0]);
    //   action.play();
      console.log(gltf);
      spark = gltf.scene
      scene.add(gltf.scene);
    }
  );
  const alight = new THREE.AmbientLight(0xffffff, 1); // soft white light
  scene.add(alight);

  const light = new THREE.PointLight(0xffffff, 0.3, 100);
  light.position.set(0, 0, 3);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    // var delta = clock.getDelta();
    // if (mixer) mixer.update(delta);
    spark ? spark.rotation.y += 0.01 : '';
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

init4()