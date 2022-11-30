const bar = document.querySelector("i.fa-solid.fa-bars");
// console.log(bar);
const sidebar = document.querySelector(".container")

const closingButton = document.querySelector(".fa-x");
bar.addEventListener("click", () => {
    // console.log("I got Clicked!!!");
    sidebar.classList.toggle("show-sidebar");
})

closingButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
})