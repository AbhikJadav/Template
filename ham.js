let hamburger = document.querySelector(".hamburger");
let navLink = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("open");
});
document.onclick=function (e){
    if(e.target.classList==links)
    navLink.classList.remove('open')
}

