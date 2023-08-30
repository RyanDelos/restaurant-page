'use strict';

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createFoodItem(
      'Lunch-Dinner 🍔',
      'Good Burger',
      'Beyond Good Burger',
      'Good Wich',
      'Good Chunks'
    )
  );

  menu.appendChild(
    createFoodItem(
      'Sides 🍟',
      'Good Fries',
      'Good Pickles',
      'Good Rings',
      'Good Salad'
    )
  );

  menu.appendChild(
    createFoodItem('Desserts 🍨', 'Good Shakes', 'Good Pies', 'Good Cookies')
  );

  menu.appendChild(
    createFoodItem('Drinks 🥤', 'Good Soda', 'Good Coffee', 'Good Water')
  );

  menu.appendChild(
    createFoodItem(
      'Rotating Specials 🍹',
      'Frozen Cocktails',
      'Draft Cocktails',
      'Beer',
      'Wine'
    )
  );

  return menu;
}

function createFoodItem(name, itemOne, itemTwo, itemThree, itemFour) {
  const menuCategory = document.createElement('div');
  menuCategory.classList.add('menu-category');

  const foodName = document.createElement('h3');
  foodName.classList.add('food-name');
  foodName.textContent = name;

  const foodItemOne = document.createElement('p');
  foodItemOne.classList.add('food-item');
  foodItemOne.textContent = itemOne;

  const foodItemTwo = document.createElement('p');
  foodItemTwo.classList.add('food-item');
  foodItemTwo.textContent = itemTwo;

  const foodItemThree = document.createElement('p');
  foodItemThree.classList.add('food-item');
  foodItemThree.textContent = itemThree;

  const foodItemFour = document.createElement('p');
  foodItemFour.classList.add('food-item');
  foodItemFour.textContent = itemFour;

  menuCategory.append(
    foodName,
    foodItemOne,
    foodItemTwo,
    foodItemThree,
    foodItemFour
  );

  return menuCategory;
}

function generateMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default generateMenu;
