function show() {
  let ul = document.querySelector(".ul");
  ul.classList.remove("-right-[100%]");
  ul.classList.add("right-0")
}
function hidin() {
  let ul = document.querySelector(".ul");
  ul.classList.add("-right-[100%]");
  ul.classList.remove("right-0")
}