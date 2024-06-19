class Accordion {
  constructor(selector) {
    this.accordion = document.querySelector(selector);
    this.headers = this.accordion.querySelectorAll(".accordion-header");
    this.bindEvents();
  }

  bindEvents() {
    this.headers.forEach((header) => {
      header.addEventListener("click", () => this.toggle(header));
    });
  }

  toggle(header) {
    const content = header.nextElementSibling;
    const caret = header.querySelector(".caret");

    content.style.display =
      content.style.display === "block" ? "none" : "block";
    caret.classList.toggle("rotate");
  }
}

class Tabs {
  constructor(selector) {
    this.tabs = document.querySelector(selector);
    this.buttons = this.tabs.querySelectorAll(".tab-header button");
    this.contents = this.tabs.querySelectorAll(".tab-content");
    this.bindEvents();
  }

  bindEvents() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.showTab(button));
    });
  }

  showTab(button) {
    const target = button.getAttribute("data-tab");

    this.contents.forEach((content) => {
      content.classList.remove("active");
    });

    this.buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.tabs.querySelector(`#${target}`).classList.add("active");
    button.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const accordion = new Accordion("#accordion");
  const tabs = new Tabs("#tabs");
});
