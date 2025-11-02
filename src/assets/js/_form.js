$(function () {
  /*  ヒント */
  function hintForm() {
    const button = document.getElementById("button-hints");
    let answer = document.getElementById("input-hints");

    if (!button) {
      return false;
    }
    answer.focus();

    button.addEventListener("click", function () {
      if (answer.value === String.fromCharCode(104, 105, 110, 116, 50, 48, 50, 53) || answer.value === String.fromCharCode(65352, 65353, 65358, 65364, 65298, 65296, 65298, 65301)) {
        window.open("h.html", "_self");
        return false;
      } else {
        window.open("incorrect.html", "_self");
        return false;
      }
    });
  }
  hintForm();
  /*  ANSWER */
  function answerForm() {
    const button = document.getElementById("button-answer");
    let answer = document.getElementById("input-answer");

    if (!button) {
      return false;
    }
    answer.focus();

    button.addEventListener("click", function () {
      if (
        answer.value === String.fromCharCode(12365, 12412, 12358) ||
        answer.value === String.fromCharCode(24076, 26395) ||
        answer.value === String.fromCharCode(12461, 12508, 12454) ||
        answer.value === String.fromCharCode(107, 105, 98, 111, 117) ||
        answer.value === String.fromCharCode(75, 73, 66, 79, 85) ||
        answer.value === String.fromCharCode(65355, 65353, 65346, 65359, 65365) ||
        answer.value === String.fromCharCode(65399, 65422, 65438, 65395)
      ) {
        window.open("kbu.html", "_self");
        return false;
      } else {
        window.open("incorrect.html", "_self");
        return false;
      }
    });
  }
  answerForm();
  /*  ANSWER 謎C */
  function answerNazoCForm() {
    const button = document.getElementById("button-answer-nazoc");
    let answer = document.getElementById("input-answer-nazoc");

    if (!button) {
      return false;
    }

    button.addEventListener("click", function () {
      if (
        answer.value === String.fromCharCode(12431, 12384, 12356) ||
        answer.value === String.fromCharCode(35441, 38988) ||
        answer.value === String.fromCharCode(12527, 12480, 12452) ||
        answer.value === String.fromCharCode(119, 97, 100, 97, 105) ||
        answer.value === String.fromCharCode(87, 65, 68, 65, 73) ||
        answer.value === String.fromCharCode(65367, 65345, 65348, 65345, 65353) ||
        answer.value === String.fromCharCode(65436, 65408, 65438, 65394)
      ) {
        window.open("wdi.html", "_self");
        return false;
      } else {
        window.open("incorrect.html", "_self");
        return false;
      }
    });
  }
  answerNazoCForm();

  /*  ANSWER 最後の謎 */
  function answerLastCForm() {
    const button = document.getElementById("button-answer-last");
    let answer = document.getElementById("input-answer-last");

    if (!button) {
      return false;
    }

    button.addEventListener("click", function () {
      if (
        answer.value === String.fromCharCode(12362, 12375, 12414, 12356) ||
        answer.value === String.fromCharCode(12458, 12471, 12510, 12452) ||
        answer.value === String.fromCharCode(12362, 32066, 12356) ||
        answer.value === String.fromCharCode(12362, 20181, 33310, 12356) ||
        answer.value === String.fromCharCode(24481, 20181, 33310, 12356) ||
        answer.value === String.fromCharCode(111, 115, 105, 109, 97, 105) ||
        answer.value === String.fromCharCode(79, 83, 73, 77, 65, 73) ||
        answer.value === String.fromCharCode(111, 115, 104, 105, 109, 97, 105) ||
        answer.value === String.fromCharCode(65359, 65363, 65352, 65353, 65357, 65345, 65353) ||
        answer.value === String.fromCharCode(65359, 65363, 65353, 65357, 65345, 65353) ||
        answer.value === String.fromCharCode(79, 83, 72, 73, 77, 65, 73) ||
        answer.value === String.fromCharCode(65397, 65404, 65423, 65394)
      ) {
        window.open("../osmi/index.html", "_self");
        return false;
      } else {
        window.open("incorrect.html", "_self");
        return false;
      }
    });
  }
  answerLastCForm();
});
