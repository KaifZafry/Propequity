
    // Sticky nav shadow
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    });

    // Hamburger
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('open');
    });

    // Buy/Rent Toggle
    function toggleType(type) {
      document.getElementById('togBuy').classList.toggle('active', type === 'buy');
      document.getElementById('togRent').classList.toggle('active', type === 'rent');
    }

    // Scroll fade-up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Favourite toggle
    document.querySelectorAll('.prop-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const icon = btn.querySelector('i');
        icon.style.color = icon.style.color === 'rgb(229, 62, 62)' ? '#ccc' : '#e53e3e';
      });
    });
 