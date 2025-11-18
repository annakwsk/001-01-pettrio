import noUiSlider from "nouislider";

export default function initNoUiSlider() {
  // ← 関数名を変更
  const slider = document.getElementById("js-slider-budget");
  const output = document.getElementById("js-price-output");
  const minHidden = document.getElementById("minHidden");
  const maxHidden = document.getElementById("maxHidden");

  noUiSlider.create(slider, {
    start: [10, 100], // 初期値（万円単位）
    connect: true,
    range: {
      min: 0,
      max: 300,
    },
    step: 10, // 10万円単位
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value),
    },
  });

  slider.noUiSlider.on("update", function (values) {
    const min = values[0];
    const max = values[1];
    output.textContent = `${min}万円 ～ ${max}万円`;
    minHidden.value = min;
    maxHidden.value = max;
  });
}
