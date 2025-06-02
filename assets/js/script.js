// Script for Sidebar Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle for mobile
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    
    if (openSidebarBtn && closeSidebarBtn && sidebar) {
        openSidebarBtn.addEventListener('click', function() {
            sidebar.classList.add('show');
        });
        
        closeSidebarBtn.addEventListener('click', function() {
            sidebar.classList.remove('show');
        });
    }
    
    // Password visibility toggle
    const togglePasswordBtns = document.querySelectorAll('[id^="toggle"]');
    
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('bi-eye');
                icon.classList.add('bi-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('bi-eye-slash');
                icon.classList.add('bi-eye');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if this is not a dropdown toggle
            if (!this.classList.contains('dropdown-toggle')) {
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    e.preventDefault();
                    
                    window.scrollTo({
                        top: target.offsetTop - 72, // Adjust for fixed navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNav');
        
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
    
    // Letter type selection in form-pengajuan.html
    const letterTypeCards = document.querySelectorAll('.letter-type-card');
    
    letterTypeCards.forEach(card => {
        const btn = card.querySelector('.btn');
        
        if (btn) {
            btn.addEventListener('click', function() {
                letterTypeCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        }
    });
    
    // Initialize tooltips everywhere
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
    
    // Handle conditional form fields (e.g., other purpose in SKCK form)
    const purposeSelect = document.getElementById('skckPurpose');
    const otherPurposeField = document.getElementById('skckOtherPurpose');
    
    if (purposeSelect && otherPurposeField) {
        purposeSelect.addEventListener('change', function() {
            if (this.value === 'other') {
                otherPurposeField.required = true;
                otherPurposeField.parentElement.style.display = 'block';
            } else {
                otherPurposeField.required = false;
                otherPurposeField.parentElement.style.display = 'none';
            }
        });
    }
});