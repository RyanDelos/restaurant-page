'use strict';

import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

function createHeader() {
  // Header Section
  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const logoImage = document.createElement('img');
  logoImage.classList.add('logo-img');
  logoImage.src = '../dist/imgs/logo-img.png';
  logoImage.alt = 'Good Burger logo';

  logo.appendChild(logoImage);
  header.append(logo, createNav());

  return header;
}

function createNav() {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation');

  const navList = document.createElement('ul');
  navList.classList.add('nav-list');

  const homeButton = document.createElement('li');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    console.log('clicked');
    if (e.target.classList.contains('active')) return;
    setActiveButton(homeButton);
    homePage();
  });

  const menuButton = document.createElement('li');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', (e) => {
    console.log('clicked');
    if (e.target.classList.contains('active')) return;
    setActiveButton(menuButton);
    menuPage();
  });

  const contactButton = document.createElement('li');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', (e) => {
    console.log('clicked');
    setActiveButton(contactButton);
    contactPage();
  });

  navList.append(homeButton, menuButton, contactButton);
  navigation.appendChild(navList);

  return navigation;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const developedBy = document.createElement('p');
  developedBy.classList.add('developed-by');
  developedBy.textContent = 'Ryan Delos Santos';

  const copyright = document.createElement('p');
  copyright.classList.add('copyright');
  copyright.textContent = `© ${new Date().getFullYear()}`;

  const socials = document.createElement('div');
  socials.classList.add('socials');

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/RyanDelos';
  githubLink.target = 'blank';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://www.linkedin.com/in/ryan-ds/';
  linkedinLink.target = 'blank';

  const linkedinIcon = document.createElement('i');
  linkedinIcon.classList.add('fab');
  linkedinIcon.classList.add('fa-linkedin');

  githubLink.appendChild(githubIcon);
  linkedinLink.appendChild(linkedinIcon);
  socials.append(githubLink, linkedinLink);

  footer.append(developedBy, copyright, socials);

  return footer;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.nav-button');

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function generateWebsite() {
  const webContent = document.getElementById('content');

  webContent.append(createHeader(), createMain(), createFooter());

  homePage();
}

export default generateWebsite;
