
  document.addEventListener("DOMContentLoaded", function () {
    const mapping = {
      "#children-category-btn": "#children-categoery-main",
      "#literature-category-btn": "#literature-category-main",
      "#trip-and-guide-category-btn": "#trip-and-guide-category-main",
      "#stationary-category-btn": "#stationary-category-main",
      "#psychological-category-btn": "#psychological-category-main",
      "#healt-category-btn": "#healt-category-main",
      "#history-category-btn": "#history-category-main",
    };

    // Hover işlemleri
    Object.entries(mapping).forEach(([buttonSelector, sectionSelector]) => {
      const button = document.querySelector(buttonSelector);
      const section = document.querySelector(sectionSelector);

      if (button && section) {
        button.addEventListener("mouseenter", () => {
          document.querySelectorAll(".section-category").forEach((el) => {
            el.classList.remove("active");
          });
          section.classList.add("active");
        });

        section.addEventListener("mouseenter", () => {
          section.classList.add("active");
        });

        section.addEventListener("mouseleave", () => {
          section.classList.remove("active");
        });
      }
    });

    // Menü toggle
    const headerTopMenu = document.querySelector(".header-top-menu-area");
    const detailMenu = document.querySelector(".header-detail-menu-wrapper");

    if (headerTopMenu && detailMenu) {
      headerTopMenu.addEventListener("click", function (e) {
        e.stopPropagation();
        detailMenu.style.display = "flex";
      });

      detailMenu.addEventListener("click", function (e) {
        e.stopPropagation();
      });

      document.addEventListener("click", function () {
        detailMenu.style.display = "none";
      });
    }
  });

