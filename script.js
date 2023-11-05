// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

var menu = document.querySelector("#nav-part1 h5");
var menutxt = document.querySelector("#nav-part1 h4");
var search = document.querySelector("#nav-part3 h5");
var full = document.querySelector("#full-scr");
var flag = 0;

menu.addEventListener("click", function () {
  if (flag == 0) {
    gsap.from("#full-scr h1", {
      x: -200,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      stagger: 0.25,
    });
    full.style.left = 0;
    full.style.opacity = 0.9;
    menu.innerHTML = '<i class="ri-close-line"></i>';
    menutxt.innerHTML = "Close Menu";
    search.innerHTML = "";
    flag = 1;
  } else {
    full.style.left = "-100%";
    setTimeout(() => {
      menu.innerHTML = '<i class="ri-menu-2-line"></i>';
      menutxt.innerHTML = "Menu";
      search.innerHTML = '<i class="ri-search-line"></i>';
    }, 400);
    flag = 0;
  }
});

var menu_heading = document.querySelector("#full-scr a h1");
menu_heading.addEventListener("click", function () {
  full.style.left = "-100%";
  menu.innerHTML = '<i class="ri-menu-2-line"></i>';
  menutxt.innerHTML = "Menu";
  search.innerHTML = '<i class="ri-search-line"></i>';
});
