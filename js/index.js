import burgerMenu from "./burger.js";
import renderTabs from "./renderTabs.js";
import tabs from "./tabs.js";

burgerMenu({
  selectorMenu: '.nav__list',
  openMenuSelector: 'nav__list--active',
});

tabs({
  selectorTabsBtns: '.tabs__btn',
  activeClassBtn: 'tabs__btn--active',
  selectorTabsElem: '.tabs__item',
  activeClassTabsElem: 'tabs__item--active',
  callback: renderTabs,
});

renderTabs();