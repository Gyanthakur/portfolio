var typed = new Typed(".typing",{
    strings:["","Web Desiner","Problem Solver","Web Devloper"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

var typed = new Typed(".typing1",{
    strings:["","Web Desiner","Problem Solver","Web Devloper"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container1");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
