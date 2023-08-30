'use strict';

function createHome() {
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');

  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-container');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Good Burger';

  const slogan = document.createElement('p');
  slogan.classList.add('hero-text');
  slogan.textContent = ` "Welcome to Good Burger, home of the Good Burger! Can I take your
  order?"`;

  heroContainer.append(restaurantName, slogan);
  heroSection.append(heroContainer);
  heroSection.append(createAbout());
  heroSection.append(createInfo());

  return heroSection;
}

function createAbout() {
  const aboutSection = document.createElement('div');
  aboutSection.classList.add('about-section');

  const aboutHeading = document.createElement('div');
  aboutHeading.classList.add('about-heading');
  aboutHeading.textContent = 'About Us';

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const paragraphOne = document.createElement('p');
  paragraphOne.classList.add('about-text');
  paragraphOne.textContent = `Welcome to our website! We're excited to bring you a restaurant
  page inspired by the iconic "Good Burger" film from 1997,
  originally featured on Nickelodeon. Our website is a fun and
  creative project that pays homage to the movie. Food items here
  are not being sold.`;

  const paragraphTwo = document.createElement('p');
  paragraphTwo.classList.add('about-text');
  paragraphTwo.textContent = `So go ahead and explore our demo website – enjoy the playful nods
  to the film. Thank you for joining us on this nostalgic journey
  inspired by "Good Burger"!`;

  aboutContainer.append(paragraphOne, paragraphTwo);
  aboutSection.append(aboutHeading, aboutContainer);

  return aboutSection;
}

function createInfo() {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('restaurant-info');

  const hours = document.createElement('div');
  hours.classList.add('hours');

  const headingHours = document.createElement('h3');
  headingHours.textContent = 'Hours';

  const monday = document.createElement('p');
  monday.classList.add('monday');
  monday.textContent = 'Monday: 6am - 6pm';

  const tuesday = document.createElement('p');
  tuesday.classList.add('tuesday');
  tuesday.textContent = 'Tuesday: 6am - 6pm';

  const wednesday = document.createElement('p');
  wednesday.classList.add('wednesday');
  wednesday.textContent = 'Wednesday: 6am - 6pm';

  const thursday = document.createElement('p');
  thursday.classList.add('thursday');
  thursday.textContent = 'Thursday: 6am - 10pm';

  const friday = document.createElement('p');
  friday.classList.add('friday');
  friday.textContent = 'Friday: 6am - 10pm';

  const saturday = document.createElement('p');
  saturday.classList.add('saturday');
  saturday.textContent = 'Saturday: 8am - 10pm';

  const sunday = document.createElement('p');
  sunday.classList.add('sunday');
  sunday.textContent = 'Sunday: 8am - 8pm';

  const location = document.createElement('div');
  location.classList.add('location');

  const locationAddress = document.createElement('h3');
  locationAddress.classList.add('location-address');
  locationAddress.textContent =
    '450 S Glendora Avenue in West Covina, California, USA';

  hours.append(
    headingHours,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  );
  location.appendChild(locationAddress);
  infoContainer.append(hours, location);

  return infoContainer;
}

function generateHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default generateHome;
