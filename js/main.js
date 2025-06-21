// Main JavaScript for Fokus Kosova Website

// Global Variables
let clientsCount = 1250;
let productsCount = 8500;
let yearsCount = 8;
let satisfactionCount = 98;

// Services Data
const services = [
    {
        icon: "fas fa-star",
        title: "Premium Quality",
        description: "We source only the finest materials from trusted manufacturers"
    },
    {
        icon: "fas fa-shipping-fast",
        title: "Fast Delivery",
        description: "Quick and reliable shipping across Kosovo and beyond"
    },
    {
        icon: "fas fa-headset",
        title: "Expert Support",
        description: "Professional guidance for all your upholstery needs"
    },
    {
        icon: "fas fa-leaf",
        title: "Eco-Friendly",
        description: "Sustainable materials and responsible manufacturing"
    },
    {
        icon: "fas fa-certificate",
        title: "Certified Products",
        description: "All our products meet international quality standards"
    },
    {
        icon: "fas fa-cogs",
        title: "Custom Solutions",
        description: "Tailored upholstery solutions for your unique needs"
    }
];

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fokus Kosova website loaded successfully!');
    
    initializeStatistics();
    addEventListeners();
    animateCounters();
    addScrollEffects();
    setActiveNavigation();
});

// Initialize statistics
function initializeStatistics() {
    console.log('Statistics initialized:', {
        clients: clientsCount,
        products: productsCount,
        years: yearsCount,
        satisfaction: satisfactionCount
    });
}

// Animate counters
function animateCounters() {
    const counters = [
        { element: 'clientsCount', target: clientsCount, suffix: '' },
        { element: 'productsCount', target: productsCount, suffix: '' },
        { element: 'yearsCount', target: yearsCount, suffix: '' },
        { element: 'satisfactionCount', target: satisfactionCount, suffix: '%' }
    ];
    
    counters.forEach(counter => {
        const element = document.getElementById(counter.element);
        if (element) {
            animateCounter(element, 0, counter.target, 2000, counter.suffix);
        }
    });
}

// Animate a single counter
function animateCounter(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Add event listeners
function addEventListeners() {
    // Form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });
    
    // Button clicks
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    
    // Input changes
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('change', handleInputChange);
        input.addEventListener('input', handleInputChange);
    });
}

// Handle form submissions
function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formType = form.getAttribute('data-form-type') || 'contact';
    
    console.log('Form submitted:', formType);
    
    if (validateForm(formData, formType)) {
        showLoadingMessage(form, 'Processing...');
        
        setTimeout(() => {
            hideLoadingMessage(form);
            showSuccessMessage(form, 'Message sent successfully! We will contact you soon.');
            form.reset();
            
            // Close modal if exists
            const modal = form.closest('.modal');
            if (modal) {
                const bootstrapModal = bootstrap.Modal.getInstance(modal);
                if (bootstrapModal) {
                    setTimeout(() => bootstrapModal.hide(), 2000);
                }
            }
        }, 2000);
    } else {
        showErrorMessage(form, 'Please fill in all required fields correctly.');
    }
}

// Validate form data
function validateForm(formData, formType) {
    // Check required fields
    for (let [key, value] of formData.entries()) {
        if (value.trim() === '') {
            return false;
        }
    }
    
    // Additional validation for contact/inquiry forms
    if (formType === 'contact' || formType === 'inquiry') {
        const email = formData.get('email');
        const phone = formData.get('phone');
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            return false;
        }
        
        // Phone validation (if provided)
        if (phone && phone.length < 8) {
            return false;
        }
    }
    
    return true;
}

// Handle button clicks
function handleButtonClick(event) {
    const button = event.target;
    const action = button.getAttribute('data-action') || button.textContent.toLowerCase();
    
    console.log('Button clicked:', action);
    
    switch (action) {
        case 'our services':
        case 'explore our services':
            showServicesModal();
            break;
        case 'contact us':
            contactUs();
            break;
        case 'view collection':
            showProductModal('all');
            break;
        case 'view fabrics':
            showProductModal('fabrics');
            break;
        case 'view mechanisms':
            showProductModal('mechanisms');
            break;
        case 'view components':
            showProductModal('components');
            break;
    }
}

// Handle input changes
function handleInputChange(event) {
    const input = event.target;
    const value = input.value;
    
    // Email validation
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    }
    
    // Phone validation
    if (input.type === 'tel') {
        if (value && value.length < 8) {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    }
    
    // Character counter for textareas
    if (input.tagName === 'TEXTAREA') {
        const maxLength = input.getAttribute('maxlength');
        if (maxLength) {
            const remaining = maxLength - value.length;
            const counter = input.parentNode.querySelector('.char-counter');
            if (counter) {
                counter.textContent = `${remaining} characters remaining`;
            }
        }
    }
}

// Show services modal
function showServicesModal() {
    console.log('Showing services modal...');
    
    const modal = createServicesModal();
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Create services modal
function createServicesModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'servicesModal';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-cogs me-2"></i>Our Services
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-4">
                        ${services.map(service => `
                            <div class="col-md-6">
                                <div class="card border-0 shadow-sm h-100">
                                    <div class="card-body text-center p-4">
                                        <i class="${service.icon} fa-3x text-warning mb-3"></i>
                                        <h6 class="card-title">${service.title}</h6>
                                        <p class="card-text">${service.description}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="text-center mt-4">
                        <button class="btn btn-warning btn-lg" onclick="showContactModal()">
                            <i class="fas fa-envelope me-2"></i>Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Contact us function
function contactUs() {
    console.log('Contacting us...');
    window.location.href = 'contact.html';
}

// Show product modal
function showProductModal(category) {
    console.log('Showing product modal for:', category);
    
    const modal = createProductModal(category);
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Create product modal
function createProductModal(category) {
    const productData = {
        fabrics: {
            name: "Premium Fabrics",
            description: "Luxurious materials for furniture and upholstery with various textures and colors.",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "€15-50/m²"
        },
        mechanisms: {
            name: "Sofa Mechanisms",
            description: "High-quality sofa mechanisms for smooth operation and durability.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "€25-150"
        },
        components: {
            name: "Chair Components",
            description: "Premium plywood and support systems for comfortable and durable seating.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            price: "€10-80"
        }
    };
    
    const productsToShow = category === 'all' ? Object.values(productData) : [productData[category]];
    const categoryTitle = category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1);
    
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'productModal';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-box me-2"></i>${categoryTitle} Collection
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-4">
                        ${productsToShow.map(product => `
                            <div class="col-md-6">
                                <div class="card border-0 shadow-sm">
                                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                                    <div class="card-body text-center">
                                        <h6 class="card-title">${product.name}</h6>
                                        <p class="card-text">${product.description}</p>
                                        <p class="text-warning fw-bold">${product.price}</p>
                                        <button class="btn btn-outline-dark btn-sm" onclick="inquireProduct('${product.name}')">
                                            Inquire Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Inquire about product
function inquireProduct(productName) {
    console.log('Inquiring about:', productName);
    
    // Close product modal
    const productModal = document.getElementById('productModal');
    if (productModal) {
        const bootstrapModal = bootstrap.Modal.getInstance(productModal);
        bootstrapModal.hide();
    }
    
    // Show inquiry form
    showInquiryForm(productName);
}

// Show inquiry form
function showInquiryForm(productName) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'inquiryModal';
    
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-envelope me-2"></i>Inquire About ${productName}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="inquiryForm" data-form-type="inquiry">
                        <div class="mb-3">
                            <label class="form-label">Name *</label>
                            <input type="text" class="form-control" name="name" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email *</label>
                            <input type="email" class="form-control" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone</label>
                            <input type="tel" class="form-control" name="phone">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message *</label>
                            <textarea class="form-control" name="message" rows="4" required maxlength="500"></textarea>
                            <small class="text-muted char-counter">500 characters remaining</small>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning">
                                <i class="fas fa-paper-plane me-2"></i>Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Show contact modal
function showContactModal() {
    console.log('Showing contact modal...');
    
    const modal = createContactModal();
    document.body.appendChild(modal);
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Create contact modal
function createContactModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'contactModal';
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-envelope me-2"></i>Contact Us
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form id="contactForm" data-form-type="contact">
                                <div class="mb-3">
                                    <label class="form-label">Name *</label>
                                    <input type="text" class="form-control" name="name" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email *</label>
                                    <input type="email" class="form-control" name="email" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input type="tel" class="form-control" name="phone">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Subject *</label>
                                    <select class="form-control" name="subject" required>
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="quote">Request Quote</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Message *</label>
                                    <textarea class="form-control" name="message" rows="4" required maxlength="1000"></textarea>
                                    <small class="text-muted char-counter">1000 characters remaining</small>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-warning btn-lg">
                                        <i class="fas fa-paper-plane me-2"></i>Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-info">
                                <h5 class="mb-4">Get in Touch</h5>
                                <div class="mb-4">
                                    <i class="fas fa-map-marker-alt fa-2x text-warning mb-2"></i>
                                    <h6>Address</h6>
                                    <p class="text-muted">Kosovo, Ferizaj, 70000</p>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-phone fa-2x text-warning mb-2"></i>
                                    <h6>Phone</h6>
                                    <p class="text-muted">+383 49 117 333<br>+383 45 808 801</p>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-envelope fa-2x text-warning mb-2"></i>
                                    <h6>Email</h6>
                                    <p class="text-muted">fokus.ferizaj@gmail.com</p>
                                </div>
                                <div class="mb-4">
                                    <i class="fas fa-clock fa-2x text-warning mb-2"></i>
                                    <h6>Business Hours</h6>
                                    <p class="text-muted">Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

// Set active navigation
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Show loading message
function showLoadingMessage(form, message) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = `<span class="loading"></span> ${message}`;
        submitBtn.disabled = true;
    }
}

// Hide loading message
function hideLoadingMessage(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = 'Submit';
        submitBtn.disabled = false;
    }
}

// Show success message
function showSuccessMessage(form, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
    
    form.parentNode.insertBefore(successDiv, form.nextSibling);
    
    setTimeout(() => successDiv.remove(), 5000);
}

// Show error message
function showErrorMessage(form, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
    
    form.parentNode.insertBefore(errorDiv, form.nextSibling);
    
    setTimeout(() => errorDiv.remove(), 5000);
}

// Add scroll effects
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .service-icon').forEach(el => {
        observer.observe(el);
    });
}

// Export functions for use in other files
window.FokusKosova = {
    showServicesModal,
    contactUs,
    showProductModal
}; 