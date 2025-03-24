// Function to create random stars in the background
function generateStars() {
    const starField = document.createElement('div');
    starField.classList.add('star-field');
    document.body.appendChild(starField);
    
    const numStars = 150; // Adjust the number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Set random sizes and positions for each star
        const size = Math.random() * 3 + 1; // Random size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`; // Random position in vertical direction
        star.style.left = `${Math.random() * 100}vw`; // Random position in horizontal direction
        star.style.animationDuration = `${Math.random() * 1 + 1.5}s`; // Random twinkling speed
        star.style.animationDelay = `${Math.random() * 2}s`; // Random delay for the twinkle effect

        // Append the star to the star field
        starField.appendChild(star);
    }
}

// Call the function to generate stars
generateStars();


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.classList.remove('active');
                section.classList.add('section-effect');
            });

            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons
    const educationButton = document.getElementById('toggle-education');
    const skillsButton = document.getElementById('toggle-skills');
    const contactButton = document.getElementById('toggle-contact');

    // Select all sections
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');

    // Toggle visibility of the education section
    educationButton.addEventListener('click', function () {
        educationSection.classList.toggle('visible');
    });

    // Toggle visibility of the skills section
    skillsButton.addEventListener('click', function () {
        skillsSection.classList.toggle('visible');
    });

    // Toggle visibility of the contact section
    contactButton.addEventListener('click', function () {
        contactSection.classList.toggle('visible');
    });
});







function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Update the active class for navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked navbar link
    const activeLink = document.querySelector(`.navbar a[onclick="showSection('${sectionId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}