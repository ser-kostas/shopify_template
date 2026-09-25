/**
 * Shopify Store Template
 * Global Theme JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initQuantitySelectors();
  initProductCards();
});


/**
 * Mobile Navigation
 */
function initMobileMenu() {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      isOpen ? "false" : "true"
    );
  });
}


/**
 * Product Quantity Selectors
 */
function initQuantitySelectors() {
  const quantitySelectors = document.querySelectorAll(
    "[data-quantity-selector]"
  );

  quantitySelectors.forEach((selector) => {
    const input = selector.querySelector(
      "[data-quantity-input]"
    );

    const decreaseButton = selector.querySelector(
      "[data-quantity-decrease]"
    );

    const increaseButton = selector.querySelector(
      "[data-quantity-increase]"
    );

    if (!input) {
      return;
    }

    decreaseButton?.addEventListener("click", () => {
      const currentValue = parseInt(input.value, 10) || 1;

      if (currentValue > 1) {
        input.value = currentValue - 1;
        input.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      }
    });

    increaseButton?.addEventListener("click", () => {
      const currentValue = parseInt(input.value, 10) || 1;
      const maxValue = parseInt(input.max, 10);

      if (!maxValue || currentValue < maxValue) {
        input.value = currentValue + 1;
        input.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      }
    });
  });
}


/**
 * Product Cards
 *
 * Reserved for small interactions such as
 * image swapping, quick add, etc.
 */
function initProductCards() {
  const productCards = document.querySelectorAll(
    "[data-product-card]"
  );

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("is-hovered");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-hovered");
    });
  });
}