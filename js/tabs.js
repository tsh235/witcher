const tabs = option => {
  const {
    selectorTabsBtns,
    activeClassBtn,
    selectorTabsElem,
    activeClassTabsElem,
    callback = () => {},
  } = option;

  const tabsBtns = document.querySelectorAll(selectorTabsBtns);
  const tabsElems = document.querySelectorAll(selectorTabsElem);

  tabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (tabsBtns[i] === btn) {
          tabsBtns[i].classList.add(activeClassBtn);
          tabsElems[i].classList.add(activeClassTabsElem);
          callback(i);
        } else {
          tabsBtns[i].classList.remove(activeClassBtn);
          tabsElems[i].classList.remove(activeClassTabsElem);
        }
      }
    });
  });
};

export default tabs;