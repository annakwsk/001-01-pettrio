$(function () {
  /* ==================================
画面表示されたらclass付与
================================== */
  function addClass() {
    // ターゲットの設定
    const items = document.querySelectorAll(".js-scroll");
    // IEのforEach対策
    const itemsList = Array.prototype.slice.call(items, 0);

    // オプションの設定
    const intersectptions = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(itemIntersect, intersectptions);

    // ターゲットを監視する
    itemsList.forEach((item) => {
      observer.observe(item);
    });

    // 交差した時の処理
    function itemIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
        }
      });
    }
  }
  addClass();

  /* ==================================
上部から離れるとclass付与
================================== */
  function pageScroll() {
    const scrollTop = document.getElementById("js-scroll-top");
    const scrollShare = document.getElementById("js-scroll-share");

    var startPos = 0,
      winScrollTop = 0;

    if (!scrollTop & !scrollShare) {
      return false;
    }

    // scrollイベントを設定
    window.addEventListener("scroll", function () {
      winScrollTop = this.scrollY;

      if (winScrollTop >= 200) {
        scrollTop.classList.add("is-active");
        scrollShare.classList.add("is-active");
      } else {
        scrollTop.classList.remove("is-active");
        scrollShare.classList.remove("is-active");
      }
      startPos = winScrollTop;
    });
  }
  pageScroll();

  /* ==================================
スムーススクロール
================================== */
  function smoothScroll() {
    const offset = 48; // ヘッダーの高さ
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        let href = link.getAttribute("href").substr(1);
        href = href == "#" ? "html" : `[id="${href}"]`;
        const target = document.querySelector(href);
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const position = rect.top + scrollTop - offset;
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      });
    });
  }
  smoothScroll();
  /* ==================================
モーダル
================================== */
  function modal() {
    const modalButton = document.querySelectorAll(".js-modal-button");
    modalButton.forEach(function (btn) {
      btn.onclick = function () {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
      };
    });

    const modalClose = document.querySelectorAll(".js-modal-close");
    modalClose.forEach(function (btn) {
      btn.onclick = function () {
        var modal = btn.closest(".js-modal");
        modal.style.display = "none";
      };
    });

    window.onclick = function (event) {
      if (event.target.className === "js-modal") {
        event.target.style.display = "none";
        console.log("aaa");
      }
    };
  }
  modal();

  /* ==================================
iosヘッダー
================================== */

  function iosView() {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // 画面のサイズ変動があった時に高さを再計算する
    window.addEventListener("resize", setFillHeight);

    // 初期化
    setFillHeight();
  }
  iosView();

  /* ==================================
インスタ
================================== */
  function posting() {
    /* postig */
    $(document).on("click", ".js-postig", function () {
      var postHash = "#地下謎";
      navigator.clipboard
        .writeText(postHash)
        .then(() => {
          alert("ハッシュタグをコピーしました！\nInstagramの投稿画面を開きます。");
          window.open("https://www.instagram.com/create/story/", "_blank");
        })
        .catch((err) => {
          alert("ハッシュタグのコピーに失敗しました", err);
        });
    });
  }
  posting();
});
