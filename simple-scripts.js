// TO DO: Insert any additional interactivity if needed (like form validations, animations, etc.)

// Example: Scroll to sections smoothly
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
