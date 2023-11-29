export function ScrollToTop() {
  // eslint-disable-next-line no-undef
  window &&
    // eslint-disable-next-line no-undef
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}

export function ScrollToBottom() {
  // eslint-disable-next-line no-undef
  window &&
    // eslint-disable-next-line no-undef
    window.scroll({
      // eslint-disable-next-line no-undef
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
}
