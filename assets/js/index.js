document.addEventListener('DOMContentLoaded', () => {

  function handleSearchInput(buttonId, inputId) {
    const searchBtn = document.getElementById(buttonId);
    const searchInput = document.getElementById(inputId);

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener('click', function () {
      searchInput.classList.toggle('active');
      this.classList.toggle('active');
    });
    // click outside to search then input close
    document.addEventListener('click', function (event) {
      if (!searchInput.contains(event.target) && !searchBtn.contains(event.target)) {
        searchInput.classList.remove('active');
        searchBtn.classList.remove('active');
      }
    })
  }

  // handle search input
  handleSearchInput("search-btn", "search-input");
})

// custom-select.js
document.addEventListener("DOMContentLoaded", () => {
  const SELECTORS = {
    container: ".custom-select",
    button: ".select-btn",
    dropdown: ".select-dropdown",
    input: ".select-input",
    option: ".list-item",
  };

  // Toggle dropdown
  document.querySelectorAll(SELECTORS.button).forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(SELECTORS.container);
      if (!parent) return;
      const dropdown = parent.querySelector(SELECTORS.dropdown);
      let isOpen = dropdown.classList.contains("show");
      // close if open
      if (isOpen) {
        dropdown.classList.remove("show");
      }
      else {
        // Close all others
        document.querySelectorAll(SELECTORS.dropdown).forEach((d) => d.classList.remove("show"));
        dropdown.classList.add("show"); // open current dropdown
      }
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(SELECTORS.container)) {
      document.querySelectorAll(SELECTORS.dropdown).forEach((d) => d.classList.remove("show"));
    }
  });

  // Select option
  document.querySelectorAll(SELECTORS.option).forEach((option) => {
    option.addEventListener("click", () => {
      const parent = option.closest(SELECTORS.container);
      if (!parent) return;

      const button = parent.querySelector(SELECTORS.button);
      const dropdown = parent.querySelector(SELECTORS.dropdown);
      const input = parent.querySelector(SELECTORS.input);

      if (!button || !dropdown || !input) return;

      button.textContent = option.textContent;
      input.value = option.dataset.id;

      parent.querySelectorAll(SELECTORS.option).forEach((item) => item.classList.remove("active"));
      option.classList.add("active");
      dropdown.classList.remove("show");
    });
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(SELECTORS.dropdown).forEach((d) => d.classList.remove("show"));
    }
  });

  // Initialize from existing input value
  document.querySelectorAll(SELECTORS.container).forEach((select) => {
    const input = select.querySelector(SELECTORS.input);
    const button = select.querySelector(SELECTORS.button);
    const options = select.querySelectorAll(SELECTORS.option);

    if (input?.value) {
      const selected = Array.from(options).find((opt) => opt.dataset.id === input.value);
      if (selected) {
        button.textContent = selected.textContent;
        selected.classList.add("active");
      }
    }
  });
});

// Password toggle js
document.addEventListener('DOMContentLoaded', () => {
  const passwordToggleButtons = document.querySelectorAll(".password-toggle-btn");
  passwordToggleButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("toggle");
      let parent = this.closest(".password-wrapper");
      if (!parent) return;
      let input = parent.querySelector(".password-input");

      // toggle input type
      input.type = input.type == "password" ? "text" : "password";
    })
  })
});

// edit popup handle
document.addEventListener('DOMContentLoaded', () => {

  function handleEditPopup(popup, btn) {
    const popupHandleButton = document.querySelector(btn);
    const editPopup = document.querySelector(popup);
    const cancelButton = editPopup.querySelector(".cancel-btn");

    if (!popupHandleButton || !editPopup) return;

    // Click on edit buttons then relative popup will open
    popupHandleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      editPopup.classList.add("show")
      editPopup.setAttribute("data-open", "true");
    });

    // Cancel popup button
    cancelButton.addEventListener("click", function () {
      editPopup.classList.remove("show");
      editPopup.setAttribute("data-open", "false");
      editPopup.querySelector("form").reset();
    })

    // When click outside of popup body
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".popup-content")) {
        editPopup.classList.remove("show");
        editPopup.setAttribute("data-open", "false");
      }
    });
  }

  handleEditPopup("#profile-popup", "#profile-edit-btn") // edit profile popup
  handleEditPopup("#email-popup", "#email-edit-btn"); // Edit user email popup
  handleEditPopup("#password-popup", "#password-edit-btn"); // Edit password popup
  handleEditPopup("#name-popup", "#name-edit-btn"); // edit name popup
  handleEditPopup("#phone-popup", "#phone-edit-btn"); //  edit phone popup

});

// header js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById("menu-btn");
  const responsiveMenu = document.getElementById("menu-content");
  const menuBg = document.getElementById("menu-bg");
  const closeMenuButton = document.getElementById("close-menu");

  if (!menuButton || !responsiveMenu || !menuBg || !closeMenuButton) return;

  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    responsiveMenu.classList.add("active");
    menuBg.style.display = "block";
    document.body.style.overflowY = "hidden";
  });

  closeMenuButton.addEventListener("click", () => {
    responsiveMenu.classList.remove("active");
    menuBg.style.display = "none";
    document.body.style.overflowY = "auto"
  });

  // click outside popup will close
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-header")) {
      responsiveMenu.classList.remove("active");
      menuBg.style.display = "none";
      document.body.style.overflowY = "auto"
    }
  });

})
