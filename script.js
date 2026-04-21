// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop the page from reloading
    
    const formData = new FormData(this);
    const button = this.querySelector('button');
    const originalText = button.innerText;
    
    // UI Feedback: Show user something is happening
    button.innerText = "Sending...";
    button.disabled = true;

    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you! Your ministry inquiry has been sent.');
            contactForm.reset();
        } else {
            alert('Oops! There was a problem sending your message. Please try again.');
        }
    } catch (error) {
        alert('Error: Could not connect to the mail server.');
    } finally {
        button.innerText = originalText;
        button.disabled = false;
    }
});
// Scroll Animation Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.style.color = "#8892b0"; // Highlight color
        } else {
            link.style.color = "#ffffff";
        }
    });
});