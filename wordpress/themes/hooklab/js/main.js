(function () {
  'use strict';

  /* ── Burger menu ── */
  const burger = document.getElementById('nav-burger');
  const mob    = document.getElementById('nav-mob');
  const bOpen  = document.getElementById('burger-open');
  const bClose = document.getElementById('burger-close');

  if (burger && mob) {
    burger.addEventListener('click', function () {
      const isOpen = mob.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen);
      bOpen.style.display  = isOpen ? 'none'  : 'block';
      bClose.style.display = isOpen ? 'block' : 'none';
    });

    // Close on anchor click
    mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mob.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        bOpen.style.display  = 'block';
        bClose.style.display = 'none';
      });
    });
  }

  /* ── Scroll Reveal ── */
  const srEls = document.querySelectorAll('.sr');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    srEls.forEach(function (el) { io.observe(el); });
  } else {
    srEls.forEach(function (el) { el.classList.add('vis'); });
  }

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    const btn    = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* ── Contact Form (AJAX) ── */
  const form    = document.getElementById('hl-contact-form');
  const success = document.getElementById('ct-success');
  const wrap    = document.getElementById('ct-form-wrap');
  const errEl   = document.getElementById('ct-error');
  const submit  = document.getElementById('ct-submit');

  if (form && typeof hlAjax !== 'undefined') {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset error
      if (errEl) { errEl.style.display = 'none'; errEl.textContent = ''; }

      // Validate
      const name   = form.querySelector('[name="name"]').value.trim();
      const phone  = form.querySelector('[name="phone"]').value.trim();
      const metier = form.querySelector('[name="metier"]').value.trim();
      const ville  = form.querySelector('[name="ville"]').value.trim();

      if (!name || !phone || !metier || !ville) {
        if (errEl) { errEl.textContent = 'Veuillez remplir tous les champs.'; errEl.style.display = 'block'; }
        return;
      }

      // Loading state
      if (submit) {
        submit.classList.add('loading');
        submit.innerHTML = '<div class="spinner"></div>&nbsp;Envoi en cours…';
      }

      // Build FormData
      const data = new FormData();
      data.append('action', 'hl_contact');
      data.append('nonce',  hlAjax.nonce);
      data.append('name',   name);
      data.append('phone',  phone);
      data.append('metier', metier);
      data.append('ville',  ville);

      fetch(hlAjax.url, { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            if (wrap)    { wrap.classList.add('hide'); }
            if (success) { success.classList.add('show'); }
          } else {
            var msg = (res.data && res.data.message) ? res.data.message : 'Erreur lors de l\'envoi.';
            if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; }
            if (submit) {
              submit.classList.remove('loading');
              submit.innerHTML = 'RÉSERVER MON AUDIT GRATUIT';
            }
          }
        })
        .catch(function () {
          if (errEl) { errEl.textContent = 'Erreur réseau. Veuillez réessayer.'; errEl.style.display = 'block'; }
          if (submit) {
            submit.classList.remove('loading');
            submit.innerHTML = 'RÉSERVER MON AUDIT GRATUIT';
          }
        });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id  = a.getAttribute('href').slice(1);
      const el  = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
