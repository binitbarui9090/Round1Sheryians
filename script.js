
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove",function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },{duration: 500, fill: "forwards"});
    
})
var whatwedone = document.querySelector(".whatwedone");
var whatwedone2 = document.querySelector(".whatwedone2");
var page2h1 = document.querySelector(".word");
var page2 = document.querySelector(".page2");
whatwedone.addEventListener("mouseenter",function () {
    cursorOutline.style.backgroundColor = "white";
    cursorOutline.style.height = "50vh"
    cursorOutline.style.width = "50vh"
    gsap.to(page2h1, { color: "white", duration: 0.5 });
    gsap.to(page2, { background: "linear-gradient(to right, #4D6548,#D2BE5C,#D2BE5C)", duration: 0.5 });
})

whatwedone.addEventListener("mouseleave",function () {
    cursorOutline.style.backgroundColor = "transparent";
    cursorOutline.style.height = "30px"
    cursorOutline.style.width = "30px"
    gsap.to(page2, { background: "black", duration: 0.5 });
})

whatwedone2.addEventListener("mouseenter", function () {
    gsap.to(page2, { background: "linear-gradient(to right, #02121F , #05186B, #072745)", duration: 0.5 });
    cursorOutline.style.height = "30vh"
    cursorOutline.style.width = "30vh"
    cursorOutline.style.backgroundColor = "white";
});

whatwedone2.addEventListener("mouseleave", function () {
    gsap.to(page2, { background: "black", duration: 0.5 });
    cursorOutline.style.height = "30px"
    cursorOutline.style.width = "30px"
    cursorOutline.style.backgroundColor = "transparent";
});

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");

let index = 0,
    interval = 1000;

const rand2 = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}

let page4h1 = document.querySelector(".magic-text");

page4h1.addEventListener("mouseenter",function () {
  cursorOutline.style.height = "20vh";
  cursorOutline.style.width = "20vh";
  cursorOutline.style.backgroundImage = "url('/assets/star.png')"
  cursorOutline.style.transform = "rotate(50deg)";
})


page4h1.addEventListener("mouseleave",function () {
  cursorOutline.style.height = "30px";
  cursorOutline.style.width = "30px";
  cursorOutline.style.backgroundImage = "none";
  cursorOutline.style.transform = "translate(-50%,-50%)";

})

let workimg = document.querySelector(".workimg");

workimg.addEventListener("mouseenter",function () {
  cursorOutline.style.width = "30vh";
  cursorOutline.style.height = "30vh";
  cursorOutline.style.backgroundColor = "white";
})

workimg.addEventListener("mouseleave",function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
  cursorOutline.style.backgroundColor = "transparent";
})

const logo = document.getElementById("logo"),
      images = logo.querySelectorAll("img");

const getActive = () => document.body.dataset.active === "true",
      setActiveTo = active => document.body.dataset.active = active;

const shift = (image, index, rangeX, rangeY) => {
  const active = getActive();
        
  const translationIntensity = active ? 24 : 6,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
  
  const scale = active ? 1 + (index * 0.4) : 1;
  
  image.animate({ 
    translate: currentTranslation, 
    scale 
  }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (images, rangeX, rangeY) => 
  images.forEach((image, index) => shift(image, index, rangeX, rangeY));

const shiftLogo = (e, images) => {  
  const rect = logo.getBoundingClientRect(),
        radius = 1000;
  
  const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);
  
  const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;
  
  shiftAll(images, rangeX, rangeY);
}

const resetLogo = () => {
  setActiveTo(false);
  shiftAll(images, 0.4, -0.7);
}

window.onmousemove = e => shiftLogo(e, images);

document.body.onmouseleave = () => {
  if(!getActive()) resetLogo();
}

window.onmousedown = e => {
  setActiveTo(true);
  shiftLogo(e, images);
}

window.onmouseup = e => resetLogo();

resetLogo();

let btn = document.querySelectorAll(".buy");

btn.forEach(function (btn) {
  btn.addEventListener("mouseenter",function () {
    cursorOutline.style.width = "8vh";
    cursorOutline.style.height = "8vh";
    cursorOutline.style.backgroundColor = "white"
  })
})

btn.forEach(function (btn) {
  btn.addEventListener("mouseleave",function () {
    cursorOutline.style.width = "30px";
    cursorOutline.style.height = "30px";
    cursorOutline.style.backgroundColor = "transparent"
  })
})

let reimagineicon = document.querySelector(".reimagine");

reimagineicon.addEventListener("mouseenter",function () {
  cursorOutline.style.width = "30vh";
  cursorOutline.style.height = "30vh";
  cursorOutline.style.backgroundColor = "#43C74F";
})

reimagineicon.addEventListener("mouseleave",function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
  cursorOutline.style.backgroundColor = "transparent";
})

let think = document.querySelector(".thank");

think.addEventListener("mouseenter",function () {
  cursorOutline.style.width = "10vh";
  cursorOutline.style.height = "10vh";
  cursorOutline.style.transform = "rotate(40deg)"
  cursorDot.style.display = "none";
  cursorOutline.style.borderRadius = "0px"
  cursorOutline.style.backgroundColor = "#43C74F";
})

think.addEventListener("mouseleave",function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
  cursorOutline.style.backgroundColor = "transparent";
  cursorOutline.style.transform = "translate(-50%,-50%)"
  cursorDot.style.display = "block";
  cursorOutline.style.borderRadius = "50%"
})

let footerimg = document.querySelector(".footer-content img");

footerimg.addEventListener("mouseenter",function () {
  cursorOutline.style.width = "20vh";
  cursorOutline.style.height = "20vh";
  cursorOutline.style.backgroundColor = "white";
})

footerimg.addEventListener("mouseleave",function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
  cursorOutline.style.backgroundColor = "transparent";
})