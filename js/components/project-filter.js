    /*
      ============================================================
      PROJECT FILTER (FR-2)
      ============================================================
      How it works:
      1. Every filter button has data-filter="all|serious|for-fun|incomplete"
      2. Every project card has data-tag="serious|for-fun|incomplete"
      3. On click: compare data-filter with data-tag; toggle .card-hidden
    */

    /**
     * filterProjects - show/hide cards based on the selected category.
     * @param {string} selectedFilter - value from the clicked button's data-filter
     */


function filterProjects(selectedFilter) {
  const cards = document.querySelectorAll("#projects-grid .project-card");
  cards.forEach(function (card) {
    const cardTag = card.dataset.tag;
    const shouldShow = selectedFilter === "all" || cardTag === selectedFilter;
    card.classList.toggle("card-hidden", !shouldShow);
  });
}

/**
 * initProjectFilters - wire up click listeners and show all cards on load.
 */
function initProjectFilters() {
  const filterGroup = document.getElementById("filter-group");
  const filterButtons = filterGroup.querySelectorAll(".filter-btn");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove active state from all buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove("filter-active");
      });
      // Mark this button active
      button.classList.add("filter-active");
      // Apply filter
      filterProjects(button.dataset.filter);
    });
  });

  // Default: show all cards
  filterProjects("all");
}

initProjectFilters();
