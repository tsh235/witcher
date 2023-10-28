import getData from "./getData.js";

const getCard = function(dataCard) {
  const li = document.createElement('li');
  li.classList.add('card');
  switch (this) {
    case 'video':
      li.classList.add('card--video')
      li.innerHTML = `
        <a class="card__link tube" href="${dataCard.link}">
          <figure>
            <img class="card__video-img" src="${dataCard.preview}" alt="${dataCard.description}" width="285" height="146">
            <figcaption>${dataCard.description}</figcaption>
          </figure>
        </a>
      `;
    break;  

    case 'photo':
      li.classList.add('card--img')
      li.innerHTML = `
        <img class="card__photo-img" src="${dataCard.link}" alt="${dataCard.description}" width="255" height="206">
      `;
    break;

    case 'goods':
      li.classList.add('card--product')
      li.innerHTML = `
        <article class="product">
          <img class="product__img" src="${dataCard.picture}" alt="${dataCard.name}"  width="285" height="176">
          <h2 class="product__title">${dataCard.name}</h2>
          <div class="product__wrapper-buy">
            <p class="product__price">${dataCard.price}₽</p>
            <button class="product__btn-buy" aria-label="Добавить в корзину">
              <svg class="product__btn-icon">
                <use xlink:href="#add" />
              </svg>
            </button>
          </div>
        </article>
      `;
    break;

    default: 
      li.innerHTML = 'Нет данных'
  };

  return li;
};

const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll('.tabs__content');

  const type = tabsContent[i].dataset.base;
  
  const data = await getData(`db/${type}.json`) 
  
  const listElem = data.map(getCard, type);

  tabsContent[i].textContent = '';

  tabsContent[i].append(...listElem);

};

export default renderTabs;