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