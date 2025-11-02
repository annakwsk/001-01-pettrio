$(function () {
  $("#js-button-ending").click(function () {
    $("#js-endroll-contents").fadeIn(1000);
    $("#js-endroll-contents").fadeTo("slow");
    $("#js-endroll-contents").fadeIn();
    $("#js-endroll").show("slow");

    //スマホ/PCの挙動切り替え
    var ua = navigator.userAgent;
    if (ua.indexOf("iPhone") != -1 || ua.indexOf("Android") != -1) {
      //スマホ
      //アニメーション中はタッチ禁止
      $(window).on("touchmove.noScroll", function (e) {
        e.preventDefault();
      });
      $("html,body").animate(
        { scrollTop: $(".js-ending-fin").offset().top },
        {
          duration: 120000,
          easing: "linear",
          complete: function () {
            $(window).off(".noScroll");
          },
        }
      );
    } else {
      //PC
      $("body").addClass("of-h"); //アニメーション中はスクロール禁止
      $("html,body").animate(
        { scrollTop: $(".js-ending-fin").offset().top },
        {
          duration: 120000,
          easing: "linear",
          complete: function () {
            $("body").removeClass("of-h");
          },
        }
      );
    }

    const allHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    const mostBottom = allHeight - window.innerHeight;
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= mostBottom) {
        // 最下部に到達したときに実行する処理
        const body = document.body;
        body.classList.remove("of-h");
        $(window).off(".noScroll");
      }
    });
  });
});
