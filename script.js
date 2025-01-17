document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const slideInterval = 5000; // Change slide every 5 seconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize slider interval
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer);
            showSlide(index);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // Form submission handling
    const applicationForm = document.getElementById('applicationForm');
    const findBtn = document.getElementById('findBtn');

    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            title: document.getElementById('title').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            dob: document.getElementById('dob').value,
            country: document.getElementById('country').value,
            state: document.getElementById('state').value
        };

        // Validate form data
        if (validateForm(formData)) {
            // Simulate form submission
            alert('Application submitted successfully!');
            applicationForm.reset();
        }
    });

    // Search functionality
    findBtn.addEventListener('click', function() {
        const what = document.getElementById('what').value;
        const where = document.getElementById('where').value;
        
        if (what || where) {
            alert(`Searching for: ${what} in ${where}`);
        } else {
            alert('Please enter search criteria');
        }
    });

    // Form validation function
    function validateForm(data) {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Phone validation
        const phoneRegex = /^\+?[\d\s-]{8,}$/;
        if (!phoneRegex.test(data.phone)) {
            alert('Please enter a valid phone number');
            return false;
        }

        // Check if all fields are filled
        for (let key in data) {
            if (!data[key]) {
                alert('Please fill in all fields');
                return false;
            }
        }

        return true;
    }
});
