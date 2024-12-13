const noticeEl = document.querySelector(".notice");

if (noticeEl) {
  const noticeCloseBtn = document.querySelector(".notice__button");
  noticeCloseBtn.addEventListener("click", () => {
    noticeEl.classList.add("notice--hidden");
  });
}
