export default class Scroll {
  #supportPageOffset;
  #isCSS1Compat;

  constructor() {
    this.#supportPageOffset = window.pageYOffset !== undefined;
    this.#isCSS1Compat = document.compatMode || "" === "CSS1Compat";
  }

  getScrollPosition() {
    return this.#supportPageOffset
      ? window.pageYOffset
      : this.#isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  }
}
