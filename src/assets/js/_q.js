$(function () {
  function subForm() {
    const choice = "選択してください";
    const button = document.getElementById("submit");

    button.addEventListener("click", function () {
      let isRight = true;

      function successMessage(success) {
        success.innerHTML = "";
      }

      function errorMessage(error, message) {
        const errorText = document.getElementById("js-error-message");
        error.innerHTML = message;
        errorText.innerHTML = "未入力の項目があります";
        errorText.classList.add("is-active");
        isRight = false;
      }

      /* どなたと参加しましたか？ */
      const radio5 = document.querySelectorAll(".js-radio-05");
      const error8 = document.getElementById("js-form-error-01");
      const one = radio5[0];
      const friends = radio5[1];

      if (one.checked || friends.checked > 0) {
        successMessage(error8);
      } else {
        errorMessage(error8, choice);
      }

      /* 満足度はいかがでしたか？ */
      const select3 = document.getElementById("js-form-select-03").value;
      const error12 = document.getElementById("js-form-error-12");

      if (select3 === "") {
        errorMessage(error12, choice);
      } else {
        successMessage(error12);
      }

      /* 友人、知人へのオススメ度はいかがでしたか？ */
      const select4 = document.getElementById("js-form-select-04").value;
      const error13 = document.getElementById("js-form-error-13");

      if (select4 === "") {
        errorMessage(error13, choice);
      } else {
        successMessage(error13);
      }

      /* 難易度はいかがでしたか？ */
      const select5 = document.getElementById("js-form-select-05").value;
      const error14 = document.getElementById("js-form-error-14");

      if (select5 === "") {
        errorMessage(error14, choice);
      } else {
        successMessage(error14);
      }

      /* デザインはどうでしたか？ */
      const select6 = document.getElementById("js-form-select-06").value;
      const error15 = document.getElementById("js-form-error-15");

      if (select6 === "") {
        errorMessage(error15, choice);
      } else {
        successMessage(error15);
      }
      return isRight;
    });
  }
  subForm();
});
