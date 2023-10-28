// ! 

// ! change skills bars width
let skillBars = document.querySelectorAll(
  ".our-skills .skill .progress-bar div",
);
let skillsSect = document.querySelector(".our-skills");

function onSkillSectReached(e) {
  if (!(skillsSect.getBoundingClientRect().top <= 300)) return;

  skillBars.forEach(
    (bar) => (bar.style.width = bar.getAttribute("data-progress")),
  );

  window.removeEventListener("scroll", onSkillSectReached);
}

window.addEventListener("scroll", onSkillSectReached);

// ! mega menu btn prevent default
let megaMenuLi = document.querySelector("nav .links .mega-menu-li");

megaMenuLi.onclick = (e) => e.preventDefault();

// ! start stats section counters
let statsSection = document.querySelector("#stats");
let statsCountElements = document.querySelectorAll("#stats .box .count");

function onStatsSectionReached(e) {
  if (!(statsSection.getBoundingClientRect().top <= 100)) return;

  statsCountElements.forEach((el) => {
    let dataCount = +el.getAttribute("data-count");

    let i = 1;

    let handler = setInterval(() => {
      
      el.textContent = i++;
      if (i > dataCount) clearInterval(handler);
    }, 20);
  });

  window.removeEventListener("scroll", onStatsSectionReached);
}

window.addEventListener("scroll", onStatsSectionReached);
