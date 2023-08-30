'use strict';

function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact-container');

  const contactHeading = document.createElement('h3');
  contactHeading.classList.add('contact-heading');
  contactHeading.textContent = 'Contact Us';

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('phone-number');
  phoneNumber.textContent = '800-123-4567 📞';

  const address = document.createElement('p');
  address.classList.add('address');
  address.textContent = `450 S Glendora Avenue in West Covina, California, USA 📍`;

  const map = document.createElement('iframe');
  map.classList.add('map');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4658.0540176303!2d-117.9255173622177!3d34.066134806370684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d7d5429152b3%3A0xf42c1962d42c56de!2s450%20S%20Glendora%20Ave%2C%20West%20Covina%2C%20CA%2091790!5e0!3m2!1sen!2sus!4v1693256588398!5m2!1sen!2sus';
  map.style = 'border:0;';
  map.allowFullscreen = '';
  map.loading = 'lazy';
  map.referrerPolicy = 'no-referrer-when-downgrade';

  contact.append(contactHeading, phoneNumber, address, map);

  return contact;
}

function generateContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default generateContact;
