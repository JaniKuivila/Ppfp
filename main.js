

const faders = document.querySelectorAll('.fade-in-target');

const appearOptions = {
    threshold: 0.4
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/*function removeSplash() {
    const splash = document.getElementById('splash');
    if (splash) {
        splash.style.transition = 'opacity 1.0s ease';
        splash.style.opacity = '0';
        setTimeout(() => splash.remove(), 1000);
    }
}

window.addEventListener('scroll', removeSplash, { once: true });
window.addEventListener('touchstart', removeSplash, { once: true });*/
