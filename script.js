document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    nav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click', ()=>nav.classList.remove('open'));
    });

    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 860) nav.classList.remove('open');
    });
  }

  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // Typing effect for name
  (function(){
    const el = document.querySelector('.typing-name');
    if(!el) return;
    const text = el.dataset.text || el.textContent.trim();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){
      el.textContent = text;
      el.classList.add('typing-done');
      return;
    }
    el.textContent = '';
    let idx = 0;
    function step(){
      if(idx <= text.length){
        el.textContent = text.slice(0, idx);
        idx += 1;
        setTimeout(step, idx < text.length ? 55 : 0);
      } else {
        el.classList.add('typing-done');
      }
    }
    setTimeout(step, 250);
  })();

  // Reveal-on-scroll
  try{
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!prefersReduced){
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },{threshold:0.12});
      document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
    }
  }catch(e){
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
  }

  // Morph blob manager
  (function(){
    const svg = document.getElementById('morph-svg');
    const grad1 = document.getElementById('morphStop1');
    const grad2 = document.getElementById('morphStop2');
    const grad3 = document.getElementById('morphStop3');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const savedMorph = localStorage.getItem('pw_morph');
    const morphEnabled = savedMorph !== 'off' && !prefersReduced;
    if(!svg) return;
    if(!morphEnabled) svg.classList.add('morph-hidden');

    function placeSVGAt(rect, color1, color2, size){
      if(!morphEnabled) return;
      const w = size || 360;
      const cx = Math.round(rect.left + rect.width * 0.72);
      const cy = Math.round(rect.top + rect.height * 0.18);
      svg.style.width = w + 'px';
      svg.style.height = w + 'px';
      svg.style.left = (cx - w/2) + 'px';
      svg.style.top = (cy - w/2) + 'px';
      if(grad1) grad1.setAttribute('stop-color', color1);
      if(grad2) grad2.setAttribute('stop-color', color2);
      if(grad3) grad3.setAttribute('stop-color', 'transparent');

      const m1 = document.getElementById('m1');
      const m2 = document.getElementById('m2');
      const m3 = document.getElementById('m3');
      try{
        if(m1) { m1.setAttribute('r', Math.round(w * 0.34)); m1.setAttribute('cx', Math.round(w*0.33)); m1.setAttribute('cy', Math.round(w*0.33)); }
        if(m2) { m2.setAttribute('r', Math.round(w * 0.28)); m2.setAttribute('cx', Math.round(w*0.64)); m2.setAttribute('cy', Math.round(w*0.24)); }
        if(m3) { m3.setAttribute('r', Math.round(w * 0.26)); m3.setAttribute('cx', Math.round(w*0.5)); m3.setAttribute('cy', Math.round(w*0.6)); }
      }catch(e){}
    }

    try{
      const sections = document.querySelectorAll('section');
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            const s = entry.target;
            const cs = getComputedStyle(document.documentElement);
            const c1 = s.dataset.morphColor1 || cs.getPropertyValue('--accent').trim() || '#5ef3c8';
            const c2 = s.dataset.morphColor2 || cs.getPropertyValue('--accent-2').trim() || '#6d8bff';
            const size = parseInt(s.dataset.morphSize || 360, 10);
            placeSVGAt(entry.boundingClientRect, c1, c2, size);
          }
        });
      },{threshold:0.12});
      sections.forEach(s=>obs.observe(s));

      document.querySelectorAll('.site-nav a').forEach(a=>{
        a.addEventListener('click', ()=>{
          const target = document.querySelector(a.getAttribute('href'));
          if(target){
            const rect = target.getBoundingClientRect();
            const cs = getComputedStyle(document.documentElement);
            const c1 = target.dataset.morphColor1 || cs.getPropertyValue('--accent').trim();
            const c2 = target.dataset.morphColor2 || cs.getPropertyValue('--accent-2').trim();
            const size = parseInt(target.dataset.morphSize || 360, 10);
            placeSVGAt(rect, c1, c2, size);
          }
        });
      });
    }catch(e){}

    setTimeout(()=>{
      const first = document.querySelector('section');
      if(first){
        const cs = getComputedStyle(document.documentElement);
        placeSVGAt(
          first.getBoundingClientRect(),
          first.dataset.morphColor1 || cs.getPropertyValue('--accent').trim(),
          first.dataset.morphColor2 || cs.getPropertyValue('--accent-2').trim(),
          parseInt(first.dataset.morphSize || 360, 10)
        );
      }
    }, 300);
  })();
});
