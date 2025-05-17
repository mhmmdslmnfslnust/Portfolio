export const handleKeyboardNavigation = (e, callback) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    callback(e);
  }
};

export const defaultFocusableElements = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const trapFocus = (container, event) => {
  const focusableElements = container.querySelectorAll(defaultFocusableElements);
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      event.preventDefault();
    }
  }
};

export const setFocus = (element) => {
  if (element) {
    element.focus();
    if (element.tagName.toLowerCase() === 'input') {
      element.select();
    }
  }
};
