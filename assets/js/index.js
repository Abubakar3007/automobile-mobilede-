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

    if (!popupHandleButton || !editPopup) return;

    const cancelButton = editPopup.querySelector(".cancel-btn");
    // Click on edit buttons then relative popup will open
    popupHandleButton.addEventListener("click", (e) => {
      e.stopPropagation();
      document.body.style.overflowY = "hidden";
      editPopup.classList.add("show")
      editPopup.setAttribute("data-open", "true");
    });

    // Cancel popup button
    cancelButton.addEventListener("click", () => closePopup());

    function closePopup() {
      editPopup.classList.remove("show");
      document.body.style.overflowY = "auto";
      editPopup.setAttribute("data-open", "false");
      editPopup.querySelector("form").reset();
    }

    // When click outside of popup body
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".popup-content")) {
        closePopup();
      }
    });
  }

  handleEditPopup("#profile-popup", "#profile-edit-btn") // edit profile popup
  handleEditPopup("#email-popup", "#email-edit-btn"); // Edit user email popup
  handleEditPopup("#password-popup", "#password-edit-btn"); // Edit password popup
  handleEditPopup("#name-popup", "#name-edit-btn"); // edit name popup
  handleEditPopup("#phone-popup", "#phone-edit-btn"); //  edit phone popup

  // Profile picture tab
  const pictureTabButtons = document.querySelectorAll(".pic-btn");
  const pictureTabContent = document.querySelectorAll(".pic-tab");

  if (!pictureTabButtons.length || !pictureTabContent.length) return;

  pictureTabButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Toggle active state on buttons
      pictureTabButtons.forEach(el => el.classList.remove("active"));
      btn.classList.add("active");

      // Show selected tab and hide others
      pictureTabContent.forEach((tab, i) => {
        tab.style.display = i === index ? "block" : "none";
      });
    });
  });

  // Initialize first tab as active
  pictureTabButtons[0].classList.add("active");
  pictureTabContent.forEach((tab, i) => {
    tab.style.display = i === 0 ? "block" : "none";
  });

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



  // login popup open
  const loginBtn = document.getElementById("login-btn");
  const authPopup = document.getElementById("auth-popup");
  const closeBtn = document.getElementById("close-auth");
  const authBoxes = document.querySelectorAll(".auth-box");

  if (!loginBtn || !authPopup || !closeBtn) return;

  const showPopup = () => {
    document.body.style.overflowY = "hidden";
    authPopup.classList.add("show");
  };

  const hidePopup = () => {
    document.body.style.overflowY = "auto";
    authPopup.classList.remove("show");
    authBoxes.forEach((box, i) => box.style.display = i === 0 ? "block" : "none");
    authPopup.querySelectorAll("form").forEach(f => f.reset());
  };

  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    showPopup();
  });

  closeBtn.addEventListener("click", hidePopup);

  // click outside popup will close
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-header")) {
      responsiveMenu.classList.remove("active");
      menuBg.style.display = "none";
      document.body.style.overflowY = "auto"
    }
  });

  // Login register tab switch form
  const loginRegisterButtons = document.querySelectorAll(".auth-btn");
  const authForms = document.querySelectorAll(".auth-form");
  if (!loginRegisterButtons.length || !authForms.length) return;

  const hideAllForms = () => {
    authForms.forEach(form => form.classList.add("hidden"));
  };

  const deactivateAllButtons = () => {
    loginRegisterButtons.forEach(btn => btn.classList.remove("active"));
  };

  loginRegisterButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      deactivateAllButtons();
      btn.classList.add("active");

      hideAllForms();
      if (authForms[index]) {
        authForms[index].classList.remove("hidden");
      }
    });
  });

  // Switch auth forms
  const buttons = [
    { trigger: "#forgot-password-btn", show: "#forgot-box", hide: "#login-box", reset: "#login-form" },
    { trigger: "#forgot-back-btn", show: "#login-box", hide: "#forgot-box", reset: "#forgot-form" },
    { trigger: "#send-verification-btn", show: "#verification-box", hide: "#forgot-box" },
    { trigger: "#verification-back-btn", show: "#login-box", hide: "#verification-box", reset: "#verification-form" },
    { trigger: "#password-create-btn", show: "#password-box", hide: "#verification-box" },
    { trigger: "#password-back-btn", show: "#login-box", hide: "#password-box", reset: "#password-form" }
  ];

  buttons.forEach(({ trigger, show, hide, reset }) => {
    const btn = document.querySelector(trigger);
    if (!btn) return;

    btn.addEventListener("click", () => {
      switchAuthPopup(show, hide, reset);
    });
  });

  function switchAuthPopup(show, hide, reset) {
    const showEl = document.querySelector(show);
    const hideEl = document.querySelector(hide);
    const formEl = reset ? document.querySelector(reset) : null;

    if (showEl) showEl.style.display = "block";
    if (hideEl) hideEl.style.display = "none";
    if (formEl) formEl.reset();
  }

  // Otp inputs auto type
  let otpInputs = document.querySelectorAll(".otp-inputs input");
  if (!otpInputs.length) return;

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      // Replace string to integer
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(-1);
      // Move next input
      if (e.target.value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
      // Back input
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          otpInputs[index - 1].focus();
        }
      })
    })
    // When user paste otp then automatic handle
    otpInputs[0].addEventListener("paste", (e) => {
      e.preventDefault();
      const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // find otp in number
      pasteData.split("").forEach((char, i) => {
        if (i < otpInputs.length) {
          otpInputs[i].value = char;
        }
      });

      // If copy input text more then 4 text it will be short
      if (pasteData.length >= otpInputs.length) {
        otpInputs[otpInputs.length - 1].focus();
      }
    })
  });

});

// Read more and read less
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  if (!readMoreButtons.length) return;

  readMoreButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      let wrapper = this.closest(".read-more-wrapper");
      if (!wrapper) return;

      let paragraph = wrapper.querySelector("p");
      paragraph.classList.toggle("read");

      this.innerText = this.innerText === "Read more" ? "Read less" : "Read more";
    })
  })
})

