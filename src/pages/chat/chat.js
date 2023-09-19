const emojiPopover = document.querySelector("#emoji-popover");
const emojiPickerBtn = document.querySelector("#emoji-picker-btn");

emojiPickerBtn.addEventListener("click", function () {
  emojiPopover.classList.toggle("visible");
});
