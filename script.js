// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.querySelector('header').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });

    // Course filter functionality
    if (document.querySelector('.courses-grid')) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                const courses = document.querySelectorAll('.course-card');
                
                courses.forEach(course => {
                    if (filter === 'all' || course.dataset.level === filter) {
                        course.style.display = 'flex';
                    } else {
                        course.style.display = 'none';
                    }
                });
            });
        });
    }

    // Testimonial slider (removed Raj Sharma and Priya Patel)
    if (document.querySelector('.testimonial-card')) {
        let currentTestimonial = 0;
        const testimonials = []; // No testimonials for now

        function updateTestimonial() {
            if (testimonials.length === 0) return;
            const testimonial = testimonials[currentTestimonial];
            document.querySelector('.testimonial-card p').textContent = testimonial.quote;
            document.querySelector('.student-info h4').textContent = testimonial.name;
            document.querySelector('.student-info span').textContent = testimonial.role;
        }

        if (testimonials.length > 0) {
            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                updateTestimonial();
            }, 5000);
        }
    }
});

// Form validation for all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (isValid) {
            this.submit();
        }
    });
});