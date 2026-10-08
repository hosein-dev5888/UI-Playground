console.log("Hello World");
//+++++++++++++++++++++++++++++++++++++++++++++++++++
// section:Dropdown - Menu
const btnDropdown = document.getElementById("btn-dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");
btnDropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Section Sidebar - Menu
const btnOpen = document.getElementById("open-btn-side");
const btnClose = document.getElementById("close-btn-side");
const allSidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
btnOpen.addEventListener("click", () => {
  allSidebar.classList.add("active");
  overlay.classList.add("active");
});

btnClose.addEventListener("click", () => {
  allSidebar.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  allSidebar.classList.remove("active");
  overlay.classList.remove("active");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Section Accordion - Menu
const btnOpenAccordion = document.querySelectorAll(".btn-header-accordion");
btnOpenAccordion.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});