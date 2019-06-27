var feedbackLink = document.querySelector(".map-contact-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackForm.querySelector("[name=feedback-name]");
var feedbackEmail = feedbackForm.querySelector("[name=feedback-email]");
var feedbackComment = feedbackForm.querySelector("[name=feedback-comment]");
var storageName = localStorage.getItem("feedbackName");
var storageEmail = localStorage.getItem("feedbackEmail");
var storageComment = localStorage.getItem("feedbackComment");
var enterButton = feedbackPopup.querySelector("[type=submit]");

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storageName && !storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  } else if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackComment.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

enterButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
    feedbackPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("feedbackName", feedbackName.value);
    localStorage.setItem("feedbackEmail", feedbackEmail.value);
    localStorage.setItem("feedbackComment", feedbackComment.value);
  }
});
