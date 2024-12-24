const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const notName = document.querySelector(".notificationName")
const notEmail = document.querySelector(".notificationEmail")


form.addEventListener("submit", (event) => {
    event.preventDefault();

   //refactoring the notifications
    notName.style.display = fullName.value === "" ? "block" : "none";
    notEmail.style.display = email.value === "" ? "block" : "none";
})