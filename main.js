const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark xmark" : "fa-solid fa-bars bar");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars bar");
});

// side scroll bar script

var scrollContainer=document.querySelector(".slider");
var arrowBtns=document.querySelectorAll(".wrapper h1");
const cardWidth=scrollContainer.querySelector(".review").offsetWidth;

const dragging=(e) =>{
slider.scrollLeft=e.pageX;
}
scrollContainer.addEventListener("mousemove",dragging); 

// buttons working

arrowBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
    scrollContainer.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
    });
});