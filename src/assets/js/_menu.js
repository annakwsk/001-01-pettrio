$(function () {
  function menu() {
    const navToggle = document.getElementById("js-nav-toggle");
    const navContent = document.getElementById("js-nav-content");
    const body = document.body;

    if (!navToggle) {
      return false;
    }

    navToggle.addEventListener("click", function () {
      if ((navToggle.classList.contains("is-active"), navContent.classList.contains("is-active"))) {
        navToggle.classList.remove("is-active");
        navContent.classList.remove("is-active");
        body.classList.remove("is-active");
      } else {
        navToggle.classList.toggle("is-active");
        navContent.classList.toggle("is-active");
        body.classList.toggle("is-active");
      }
    });

    function menuClose() {
      navToggle.classList.remove("is-active");
      navContent.classList.remove("is-active");
      body.classList.remove("is-active");
    }

    document.querySelectorAll('.js-nav-list a[href^="#"]').forEach((e, i) => {
      e.addEventListener("click", menuClose);
    });
  }

  menu();
});
