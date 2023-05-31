"use strict";

const input = document.querySelector(".input");
const errorMessage = document.querySelector(".error_message");
const errorPicture = document.querySelector(".input_img");
const btn = document.querySelector(".button");
const placeholder = document.querySelector("::placeholder");

btn.addEventListener("click", function () {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.match(mailformat) || input.value === "") {
    errorMessage.classList.remove("hidden");
    errorPicture.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
    errorPicture.classList.add("hidden");
    input.value = "Registration completed";
    input.style.color = "blue";
    input.style.fontSize = "0.9rem";
    btn.disabled = true;
  }
});
