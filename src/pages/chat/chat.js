const emojiPopover = document.querySelector("#emoji-popover");
const emojiPickerBtn = document.querySelector("#emoji-picker-btn");
const attachFileBtn = document.querySelector("#attach-file");
const uploadFileDivision = document.querySelector("#upload-file-division");

// Open chat top action buttons
const user_chat_more_actions = document.querySelector("#user-chat-more-btn");
const more_dropdown = document.querySelector("#more-dropdown");

// Emoji Picker
emojiPickerBtn.addEventListener("click", function () {
  more_dropdown.classList.remove("visible");
  uploadFileDivision.classList.remove("visible-flex");
  emojiPopover.classList.toggle("active-button-icon");
  emojiPopover.classList.toggle("visible");
});

// Attach File
attachFileBtn.addEventListener("click", function () {
  more_dropdown.classList.remove("visible");
  emojiPopover.classList.remove("visible");
  uploadFileDivision.classList.toggle("active-button-icon");
  uploadFileDivision.classList.toggle("visible-flex");
});

// Open chat top action buttons
user_chat_more_actions.addEventListener("click", function () {
  more_dropdown.classList.toggle("active-action-button");
  emojiPopover.classList.remove("visible");
  uploadFileDivision.classList.remove("visible-flex");
  more_dropdown.classList.toggle("visible");
  more_dropdown.classList.toggle("active-action-button");
});

const rightSection = document.querySelector(".right-section");
const mainSection = document.querySelector(".main-section");
const toggleButton = document.querySelector(".toggle-right-section-button");

toggleButton.addEventListener("click", () => {
  rightSection.classList.add("active");
  mainSection.classList.add("active");
});

// close the more dropdown when clicking outside but maintain when one clicks inside the dropdown
window.addEventListener("click", function (e) {
  if (!user_chat_more_actions.contains(e.target)) {
    more_dropdown.classList.remove("visible");
  }
});

const close_right_section_btn = document.querySelector(
  "#close-rigth-section-btn"
);

close_right_section_btn.addEventListener("click", () => {
  rightSection.classList.remove("active");
  mainSection.classList.remove("active");
});
