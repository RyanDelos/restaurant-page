(() => {
  'use strict';
  const e = function () {
    const e = document.getElementById('main');
    (e.textContent = ''),
      e.appendChild(
        (function () {
          const e = document.createElement('section');
          e.classList.add('hero-section');
          const t = document.createElement('div');
          t.classList.add('hero-container');
          const n = document.createElement('h1');
          n.classList.add('restaurant-name'), (n.textContent = 'Good Burger');
          const o = document.createElement('p');
          return (
            o.classList.add('hero-text'),
            (o.textContent =
              ' "Welcome to Good Burger, home of the Good Burger! Can I take your\n  order?"'),
            t.append(n, o),
            e.append(t),
            e.append(
              (function () {
                const e = document.createElement('div');
                e.classList.add('about-section');
                const t = document.createElement('div');
                t.classList.add('about-heading'), (t.textContent = 'About Us');
                const n = document.createElement('div');
                n.classList.add('about-container');
                const o = document.createElement('p');
                o.classList.add('about-text'),
                  (o.textContent =
                    'Welcome to our website! We\'re excited to bring you a restaurant\n  page inspired by the iconic "Good Burger" film from 1997,\n  originally featured on Nickelodeon. Our website is a fun and\n  creative project that pays homage to the movie. Food items here\n  are not being sold.');
                const a = document.createElement('p');
                return (
                  a.classList.add('about-text'),
                  (a.textContent =
                    'So go ahead and explore our demo website – enjoy the playful nods\n  to the film. Thank you for joining us on this nostalgic journey\n  inspired by "Good Burger"!'),
                  n.append(o, a),
                  e.append(t, n),
                  e
                );
              })()
            ),
            e.append(
              (function () {
                const e = document.createElement('div');
                e.classList.add('restaurant-info');
                const t = document.createElement('div');
                t.classList.add('hours');
                const n = document.createElement('h3');
                n.textContent = 'Hours';
                const o = document.createElement('p');
                o.classList.add('monday'),
                  (o.textContent = 'Monday: 6am - 6pm');
                const a = document.createElement('p');
                a.classList.add('tuesday'),
                  (a.textContent = 'Tuesday: 6am - 6pm');
                const d = document.createElement('p');
                d.classList.add('wednesday'),
                  (d.textContent = 'Wednesday: 6am - 6pm');
                const s = document.createElement('p');
                s.classList.add('thursday'),
                  (s.textContent = 'Thursday: 6am - 10pm');
                const c = document.createElement('p');
                c.classList.add('friday'),
                  (c.textContent = 'Friday: 6am - 10pm');
                const i = document.createElement('p');
                i.classList.add('saturday'),
                  (i.textContent = 'Saturday: 8am - 10pm');
                const l = document.createElement('p');
                l.classList.add('sunday'),
                  (l.textContent = 'Sunday: 8am - 8pm');
                const r = document.createElement('div');
                r.classList.add('location');
                const m = document.createElement('h3');
                return (
                  m.classList.add('location-address'),
                  (m.textContent =
                    '450 S Glendora Avenue in West Covina, California, USA'),
                  t.append(n, l, o, a, d, s, c, i),
                  r.appendChild(m),
                  e.append(t, r),
                  e
                );
              })()
            ),
            e
          );
        })()
      );
  };
  function t(e, t, n, o, a) {
    const d = document.createElement('div');
    d.classList.add('menu-category');
    const s = document.createElement('h3');
    s.classList.add('food-name'), (s.textContent = e);
    const c = document.createElement('p');
    c.classList.add('food-item'), (c.textContent = t);
    const i = document.createElement('p');
    i.classList.add('food-item'), (i.textContent = n);
    const l = document.createElement('p');
    l.classList.add('food-item'), (l.textContent = o);
    const r = document.createElement('p');
    return (
      r.classList.add('food-item'),
      (r.textContent = a),
      d.append(s, c, i, l, r),
      d
    );
  }
  function n() {
    const n = document.createElement('header');
    n.classList.add('header');
    const a = document.createElement('div');
    a.classList.add('logo');
    const d = document.createElement('img');
    return (
      d.classList.add('logo-img'),
      (d.src = '../src/img/good-burger-logo2-copy.png'),
      (d.alt = 'Good Burger logo'),
      a.appendChild(d),
      n.append(
        a,
        (function () {
          const n = document.createElement('nav');
          n.classList.add('navigation');
          const a = document.createElement('ul');
          a.classList.add('nav-list');
          const d = document.createElement('li');
          d.classList.add('nav-button'),
            (d.textContent = 'Home'),
            d.addEventListener('click', (t) => {
              console.log('clicked'),
                t.target.classList.contains('active') || (o(d), e());
            });
          const s = document.createElement('li');
          s.classList.add('nav-button'),
            (s.textContent = 'Menu'),
            s.addEventListener('click', (e) => {
              console.log('clicked'),
                e.target.classList.contains('active') ||
                  (o(s),
                  (function () {
                    const e = document.getElementById('main');
                    (e.textContent = ''),
                      e.appendChild(
                        (function () {
                          const e = document.createElement('div');
                          return (
                            e.classList.add('menu'),
                            e.appendChild(
                              t(
                                'Lunch-Dinner 🍔',
                                'Good Burger',
                                'Beyond Good Burger',
                                'Good Wich',
                                'Good Chunks'
                              )
                            ),
                            e.appendChild(
                              t(
                                'Sides 🍟',
                                'Good Fries',
                                'Good Pickles',
                                'Good Rings',
                                'Good Salad'
                              )
                            ),
                            e.appendChild(
                              t(
                                'Desserts 🍨',
                                'Good Shakes',
                                'Good Pies',
                                'Good Cookies'
                              )
                            ),
                            e.appendChild(
                              t(
                                'Drinks 🥤',
                                'Good Soda',
                                'Good Coffee',
                                'Good Water'
                              )
                            ),
                            e.appendChild(
                              t(
                                'Rotating Specials 🍹',
                                'Frozen Cocktails',
                                'Draft Cocktails',
                                'Beer',
                                'Wine'
                              )
                            ),
                            e
                          );
                        })()
                      );
                  })());
            });
          const c = document.createElement('li');
          return (
            c.classList.add('nav-button'),
            (c.textContent = 'Contact'),
            c.addEventListener('click', (e) => {
              console.log('clicked'),
                o(c),
                (function () {
                  const e = document.getElementById('main');
                  (e.textContent = ''),
                    e.appendChild(
                      (function () {
                        const e = document.createElement('div');
                        e.classList.add('contact-container');
                        const t = document.createElement('h3');
                        t.classList.add('contact-heading'),
                          (t.textContent = 'Contact Us');
                        const n = document.createElement('p');
                        n.classList.add('phone-number'),
                          (n.textContent = '800-123-4567 📞');
                        const o = document.createElement('p');
                        o.classList.add('address'),
                          (o.textContent =
                            '450 S Glendora Avenue in West Covina, California, USA 📍');
                        const a = document.createElement('iframe');
                        return (
                          a.classList.add('map'),
                          (a.src =
                            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4658.0540176303!2d-117.9255173622177!3d34.066134806370684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d7d5429152b3%3A0xf42c1962d42c56de!2s450%20S%20Glendora%20Ave%2C%20West%20Covina%2C%20CA%2091790!5e0!3m2!1sen!2sus!4v1693256588398!5m2!1sen!2sus'),
                          (a.style = 'border:0;'),
                          (a.allowFullscreen = ''),
                          (a.loading = 'lazy'),
                          (a.referrerPolicy = 'no-referrer-when-downgrade'),
                          e.append(t, n, o, a),
                          e
                        );
                      })()
                    );
                })();
            }),
            a.append(d, s, c),
            n.appendChild(a),
            n
          );
        })()
      ),
      n
    );
  }
  function o(e) {
    document.querySelectorAll('.nav-button').forEach((e) => {
      e !== this && e.classList.remove('active');
    }),
      e.classList.add('active');
  }
  document.getElementById('content').append(
    n(),
    (function () {
      const e = document.createElement('main');
      return e.classList.add('main'), e.setAttribute('id', 'main'), e;
    })(),
    (function () {
      const e = document.createElement('footer');
      e.classList.add('footer');
      const t = document.createElement('p');
      t.classList.add('developed-by'), (t.textContent = 'Ryan Delos Santos');
      const n = document.createElement('p');
      n.classList.add('copyright'),
        (n.textContent = `© ${new Date().getFullYear()}`);
      const o = document.createElement('div');
      o.classList.add('socials');
      const a = document.createElement('a');
      (a.href = 'https://github.com/RyanDelos'), (a.target = 'blank');
      const d = document.createElement('i');
      d.classList.add('fab'), d.classList.add('fa-github');
      const s = document.createElement('a');
      (s.href = 'https://www.linkedin.com/in/ryan-ds/'), (s.target = 'blank');
      const c = document.createElement('i');
      return (
        c.classList.add('fab'),
        c.classList.add('fa-linkedin'),
        a.appendChild(d),
        s.appendChild(c),
        o.append(a, s),
        e.append(t, n, o),
        e
      );
    })()
  ),
    e();
})();
