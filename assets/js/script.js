'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    testimonialsModalFunc();
  });
}
// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// project variables
const projectsItem = document.querySelectorAll("[data-projects-item]");
const modalProjectsContainer = document.querySelector("[data-modal-projects-container]");
const modalProjectsCloseBtn = document.querySelector("[data-modal-projects-close-btn]");
const modalProjectsOverlay = document.querySelector("[data-modal-projects-overlay]");

// modal variable
const modalProjectsImg = document.querySelector("[data-modal-projects-img]");
const modalProjectsTitle = document.querySelector("[data-modal-projects-title]");
const modalProjectsMade = document.querySelector("[data-modal-projects-made]");
const modalProjectsTime = document.querySelector("[data-modal-projects-time]");
const modalProjectsTeam = document.querySelector("[data-modal-projects-team]");
const modalProjectsText = document.querySelector("[data-modal-projects-text]");

// modal toggle function
const projectsModalFunc = function () {
  modalProjectsContainer.classList.toggle("active");
  modalProjectsOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < projectsItem.length; i++) {

  projectsItem[i].addEventListener("click", function () {
    const imgSrc = this.querySelector("[data-projects-img]").src;
    const title = this.querySelector("[data-projects-title]").innerHTML;
    const made = this.querySelector("[data-projects-made]").innerHTML;
    const time = this.querySelector("[data-projects-time]").innerHTML;
    const team = this.querySelector("[data-projects-team]").innerHTML;
    const text = this.querySelector("[data-projects-text]").innerHTML;

    modalProjectsImg.src = imgSrc;
    modalProjectsTitle.innerHTML = title;
    modalProjectsMade.innerHTML = made;
    modalProjectsTime.innerHTML = time;
    modalProjectsTeam.innerHTML = team;
    modalProjectsText.innerHTML = text;

    projectsModalFunc();

  });

}

// add click event to modal close button
modalProjectsCloseBtn.addEventListener("click", projectsModalFunc);
modalProjectsOverlay.addEventListener("click", projectsModalFunc);


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        if (navigationLinks[i]) navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        if (navigationLinks[i]) navigationLinks[i].classList.remove("active");
      }
    }

  });
}