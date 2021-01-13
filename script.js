const glass1 = document.getElementById("glass-1");
const glasses = document.querySelectorAll(".glass--small");

const bigGlass = document.getElementById("glass--big");
const bigGlassTop = document.querySelector(".glass--top");
const bigGlassBottom = document.querySelector(".glass--bottom");

const counterDrunk = document.getElementById("drunk");
const counterRemain = document.getElementById("remain");

const index = 1;

glasses.forEach((glass) => {
  glass.addEventListener("click", () => updateGlasses(glass));
});

function updateGlasses(glass) {
  let index = glass.dataset.index;

  for (let i = 0; i < glasses.length; i++) {
    if (i < index) {
      glasses[i].classList.add("active");
    } else {
      glasses[i].classList.remove("active");
    }
  }
  calculateWater();
}

function calculateWater() {
  const glassesActive = document.querySelectorAll(".glass--small.active").length;
  const ratio = glassesActive / glasses.length;
  const heightBottom = ratio * 100 + "%";
  const heightTop = 100 - ratio * 100 + "%";
  bigGlassBottom.style.height = heightBottom;
  bigGlassTop.style.height = heightTop;

  counterDrunk.innerText = heightBottom;
  counterRemain.innerText = 2 - ratio * 2 + "L";

  console.log(ratio);
}
