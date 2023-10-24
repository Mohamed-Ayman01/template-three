let skillBars = document.querySelectorAll(".our-skills .skill .progress-bar div");
let skillsSect = document.querySelector(".our-skills");

function checkIfSkillSectReached(e) {
  console.log(1);

  if (skillsSect.getBoundingClientRect().top <= 300) {
    skillBars.forEach((bar) => bar.style.width = bar.getAttribute("data-progress"));
    
    window.removeEventListener("scroll", checkIfSkillSectReached);
  }
}

window.addEventListener("scroll", checkIfSkillSectReached)

let megaMenuLi = document.querySelector("nav .links .mega-menu-li");

megaMenuLi.onclick = e => e.preventDefault();