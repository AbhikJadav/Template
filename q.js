///////Reload Page At Top
// if (history.scrollRestoration) {
//   history.scrollRestoration = 'manual';
// } else {
//   window.onbeforeload = function () {
//       window.scrollTo(0, 0);
//   }
// }



let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
  if (e.target.id !== 'sidebar' && e.target.id !== 'menu'){
    menu.classList.remove("active");
  sidebar.classList.remove("active")}
};

menu.onclick = function () {
  menu.classList.toggle("active");
  sidebar.classList.toggle("active");
};

const nchild = [...document.querySelectorAll(".portimginnerbutton")];

for (let i = 0; i < nchild.length; i++) {
  nchild[i].addEventListener("click", function () {
    var a = nchild[i].parentElement;
    console.log(a);
    var b = a.parentNode;
    console.log(b);
    let c = b.children[0].src;
    const pro = document.querySelectorAll(".portfolio-image");
    const over = document.querySelectorAll(".overlay");
    const popimg = document.querySelector(".popup-img");
    const inimage = document.querySelector(".overlay-inner img");
    const img = document.querySelector(".portfolio-image img");
    // console.log("adsa", img);
    // console.log("pop", popimg);
    function open(e) {
      popimg.classList.add("open");
      //   const src = "";
      // console.log('src',src);
      inimage.src = c;
      console.log("in", inimage);
      console.log("yes");
    }
    function close() {
      popimg.classList.remove("open");
    }

    over.forEach((over) => over.addEventListener("click", open));
    popimg.addEventListener("click", close);

    // console.log("img", c);
  });
}

function getClickId(clickId) {
  console.log(clickId);
}

AOS.init();
