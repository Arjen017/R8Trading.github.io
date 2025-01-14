document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const sectionId = this.getAttribute('data-section-id');
            
            // Hide all sections
            sections.forEach(section => section.style.display = 'none');
            
            // Show the targeted section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Optional: Update active link styles
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Show the first section by default
    document.getElementById('carouselSection').style.display = 'block';
});
