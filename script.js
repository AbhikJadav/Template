// /////Reload Page At Top
// //

let icontoggler = document.getElementById("funicon");
let sidebar = document.querySelector("div.sidebar");
let ncoll = document.querySelectorAll(".responsiveMenu");

for (let i = 0; i < ncoll.length; i++) {
  ncoll[i].onclick = function (e) {
    console.log("target", ncoll[i]);
    if (e.target.classList !== "ncoll") {
      sidebar.classList.remove("show");
      console.log("done");
    }
  };
}
// if([...e.target.classList].includes('dropdown-toggle')){
//   console.log("sidebar", sidebar);
//   sidebar.classList.add("show");
//   console.log("sidebar", sidebar);
// }
// else {
//   // console.log("sidebar", sidebar);
//   // sidebar.classList.add("show");
//   // console.log("sidebar", sidebar);
// }

// //
/////////Navbar Add Class  navactive
let navBarNav = document.querySelector(".navbar-nav").children;
let navBar = document.querySelector(".portfolioallimage").children;

for (let i = 0; i < navBarNav.length; i++) {
  navBarNav[0].classList.add("navactive");
  navBarNav[i].addEventListener("click", function () {
    for (let j = 0; j < navBarNav.length; j++) {
      navBarNav[j].classList.remove("navactive");
    }
    this.classList.add("navactive");
  });
}

/////////Navbar Add Class Sticky
var navbar = document.getElementById("navbar");
var navbarsticky = document.querySelector(".navbar-nav");
var menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("sticky");
    menu.classList.add("newcontainer-fluid");
    navbarsticky.classList.add("dropdownmar");
    navbar.classList.remove("navbarattop");
  } else {
    navbar.classList.remove("sticky");
    menu.classList.remove("newcontainer-fluid");
    navbarsticky.classList.remove("dropdownmar");
    navbar.classList.add("navbarattop");
  }
});

////////////Counter
window.addEventListener("scroll", () => {
  const countNumber = document.querySelectorAll(".count-number");
  const countSection = document.querySelector(".count-section");
  const speed = 90;
  var rect = countSection.getBoundingClientRect();
  var scroll = window.scrollY;
  if (scroll >= Math.round(rect.bottom) + 160) {
    countNumber.forEach((curelem) => {
      const updateCount = () => {
        const targetNum = parseInt(curelem.dataset.number);

        const checkNum = parseInt(curelem.innerText);

        const dividedNum = Math.round(targetNum / speed);

        if (checkNum < targetNum) {
          curelem.innerText = `${checkNum + dividedNum}+`;
        }
        setTimeout(updateCount, 150);
      };
      updateCount();
    });
  } else {
    // console.log("not count");
  }
});

/////////////Portfolio Images
let list = document.querySelector(".port-navlink-menu").children;
let listitem = document.querySelector(".portfolioallimage").children;
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("current");
    }
    this.classList.add("current");

    let datafilter = this.getAttribute("data-target");

    for (let k = 0; k < listitem.length; k++) {
      listitem[k].classList.remove("active");
      listitem[k].classList.add("hide");

      if (
        listitem[k].getAttribute("data-item") == datafilter ||
        datafilter == "all"
      ) {
        listitem[k].classList.remove("hide");
        listitem[k].classList.add("active");
      }
    }
  });
}

const nchild = [...document.querySelectorAll(".portimginnerbutton")];
const over = document.querySelectorAll(".overlay");
const popimg = document.querySelector(".popup-img");
const inimage = document.querySelector(".overlay-inner img");
const righta = document.querySelector(".overlay-inner .right-arrow");
const lefta = document.querySelector(".overlay-inner .left-arrow");

for (let i = 0; i < nchild.length; i++) {
  nchild[i].addEventListener("click", function () {
    var a = nchild[i].parentElement;
    console.log(a);
    var b = a.parentNode;
    console.log(b);
    let c = b.children[0].src;
    let d = nchild[i].parentElement;
    function open(e) {
      console.log("d", d);
      popimg.classList.add("open");
      inimage.src = c;
      // console.log("in", inimage);
      // console.log("yes");
      // document.body.style.position = "fixed";
    }
    
    function close() {
      popimg.classList.remove("open");
      // document.body.style.position = "sticky";
    }
    over.forEach((over) => over.addEventListener("click", open));
    popimg.addEventListener("click", close);
    // let imgval=nchild[i++]
    // console.log("imgval",imgval)
  });

}
// ///////////Testimonials Swiper

new Swiper(".mySwiper", {
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

////Scroll To Top Button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient( #8cc9e3 ${scrollValue}%,#fff ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

AOS.init();
