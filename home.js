// $(function () {
//   $(window).on("scroll", function () {
//     const sliderHeight = $(".mv").height();
//     if (sliderHeight - 30 < $(this).scrollTop()) {
//       $(".photo1").addClass("headerColorScroll");
//     } else {
//       $(".photo1").removeClass("headerColorScroll");
//     }
//   });
// });

const scrollEvent = function () {
  window.addEventListener("scroll", function () {
    // スクロール量の取得
    let scrollValue = window.pageYOffset;
    // 要素の取得
    let scrollEle = document.querySelector(".scroll");
    //取得した要素のtop値の取得 + スクロール量
    let scrollTop = scrollEle.getBoundingClientRect().top + scrollValue;
    // 画面の高さを取得
    let windowHeight = window.innerHeight;

    // はみ出させる値(変更可能)
    let value = 100;

    //条件設定
    if (scrollValue > scrollTop - windowHeight + value) {
      scrollEle.classList.add("js-fade");
    }
  });
};

scrollEvent();
