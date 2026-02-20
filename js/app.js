// Data
const stats = [
    { icon: '🎓', value: '15,000+', label: 'Students Trained' },
    { icon: '🎯', value: '94%', label: 'Placement Rate' },
    { icon: '🏆', value: '12+', label: 'Years of Excellence' },
    { icon: '🏢', value: '200+', label: 'Hiring Partners' }
];

const services = [
    { icon: '🎓', title: 'Technical Training', description: 'Industry-aligned curriculum designed by experts with hands-on projects and real-world scenarios.' },
    { icon: '🎯', title: 'Placement Assistance', description: 'Dedicated placement cell with 200+ hiring partners for guaranteed interview opportunities.' },
    { icon: '💼', title: 'Industry Projects', description: 'Work on live projects from partner companies to build a portfolio that stands out.' },
    { icon: '🏢', title: 'Internship Programs', description: 'Paid internship opportunities with stipends at leading tech companies.' },
    { icon: '👥', title: 'Corporate Training', description: 'Customized upskilling programs for enterprises looking to enhance team capabilities.' },
    { icon: '🚀', title: 'Career Guidance', description: 'One-on-one mentorship and career counseling from industry veterans.' }
];

const courses = [
    {
        icon: '💻',
        title: 'Software Development',
        duration: '6 Months',
        tools: ['Java', 'Python', 'C++', 'Git', 'DSA'],
        outcomes: ['Software Engineer', 'Backend Developer', 'System Architect'],
        description: 'Master core programming concepts, data structures, and software design patterns.'
    },
    {
        icon: '🌐',
        title: 'Web Development',
        duration: '4 Months',
        tools: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js'],
        outcomes: ['Full Stack Developer', 'Frontend Engineer', 'Web Architect'],
        description: 'Build modern, responsive web applications from frontend to backend.'
    },
    {
        icon: '🤖',
        title: 'AI / ML',
        duration: '6 Months',
        tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
        outcomes: ['ML Engineer', 'AI Developer', 'Data Scientist'],
        description: 'Deep dive into machine learning algorithms, neural networks, and AI systems.'
    },
    {
        icon: '📊',
        title: 'Data Science',
        duration: '5 Months',
        tools: ['Python', 'R', 'SQL', 'Tableau', 'Power BI'],
        outcomes: ['Data Analyst', 'Data Engineer', 'Business Analyst'],
        description: 'Extract insights from complex datasets and drive data-informed decisions.'
    },
    {
        icon: '🔒',
        title: 'Cybersecurity',
        duration: '4 Months',
        tools: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP'],
        outcomes: ['Security Analyst', 'Penetration Tester', 'SOC Analyst'],
        description: 'Learn ethical hacking, threat analysis, and security best practices.'
    },
    {
        icon: '☁️',
        title: 'Cloud & DevOps',
        duration: '4 Months',
        tools: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
        outcomes: ['DevOps Engineer', 'Cloud Architect', 'SRE'],
        description: 'Master cloud infrastructure, CI/CD pipelines, and container orchestration.'
    }
];

const companies = [
    'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix',
    'NVIDIA', 'Uber', 'Stripe', 'Adobe', 'Salesforce', 'Oracle'
];

const testimonials = [
    {
        name: 'Rahul Sharma',
        course: 'Full Stack Development',
        company: 'Google',
        role: 'Software Engineer',
        quote: 'The hands-on approach and real-world projects prepared me perfectly for my role at Google. The mentors here are exceptional.'
    },
    {
        name: 'Priya Patel',
        course: 'Data Science',
        company: 'Microsoft',
        role: 'Data Scientist',
        quote: 'From zero coding knowledge to landing my dream job - this institute made it possible. The curriculum is top-notch.'
    },
    {
        name: 'Amit Kumar',
        course: 'Cybersecurity',
        company: 'Amazon',
        role: 'Security Engineer',
        quote: 'The practical labs and ethical hacking exercises gave me skills that directly translated to my current role.'
    },
    {
        name: 'Sneha Reddy',
        course: 'AI/ML',
        company: 'NVIDIA',
        role: 'ML Engineer',
        quote: 'The deep learning projects and GPU lab access here are unmatched. I was job-ready from day one.'
    }
    {
        name: 'omkar dharwadkar',
        course: 'web',
        company: 'ntg',
        role: 'web engineer',
        quote: 'The deep learning projects and GPU lab access here are unmatched. I was job-ready from day one.'
    }
    {
        name: 'xyx fellow',
        course: 'web',
        company: 'ntg',
        role: 'web engineer',
        quote: 'The deep learning projects and GPU lab access here are unmatched. I was job-ready from day one.'
    }


];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderStats();
    renderServices();
    renderCourses();
    renderCompanies();
    renderTestimonials();
    initContactForm();
    initScrollAnimations();
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Render Stats
function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-card-icon">${stat.icon}</div>
            <div class="stat-card-value">${stat.value}</div>
            <div class="stat-card-label">${stat.label}</div>
        </div>
    `).join('');
}

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

// Render Courses
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = courses.map((course, index) => `
        <div class="course-card" onclick="openCourseModal(${index})">
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <div class="course-badge">Offline</div>
            </div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-duration">
                <span>⏱️</span>
                <span>${course.duration}</span>
            </div>
            <div class="course-tools">
                ${course.tools.slice(0, 3).map(tool => `
                    <span class="tool-tag">${tool}</span>
                `).join('')}
                ${course.tools.length > 3 ? `<span class="tool-tag">+${course.tools.length - 3}</span>` : ''}
            </div>
            <div class="course-outcomes">
                <div class="outcomes-label">Career Paths:</div>
                <div class="outcomes-text">${course.outcomes.slice(0, 2).join(' • ')}</div>
            </div>
        </div>
    `).join('');
}

// Course Modal
function openCourseModal(index) {
    const course = courses[index];
    const modal = document.getElementById('courseModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
            <div style="font-size: 48px;">${course.icon}</div>
            <div>
                <h2 style="font-size: 1.5rem; margin-bottom: 8px;">${course.title}</h2>
                <p style="color: var(--text-secondary);">${course.duration}</p>
            </div>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 24px; line-height: 1.6;">${course.description}</p>
        <div style="margin-bottom: 24px;">
            <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 12px;">Tools & Technologies</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${course.tools.map(tool => `
                    <span style="padding: 6px 12px; background: rgba(255,255,255,0.1); border-radius: 9999px; font-size: 0.875rem;">${tool}</span>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 32px;">
            <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 12px;">Career Outcomes</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${course.outcomes.map(outcome => `
                    <span style="padding: 6px 12px; border: 1px solid rgba(255,255,255,0.2); border-radius: 9999px; font-size: 0.875rem; color: var(--text-primary);">${outcome}</span>
                `).join('')}
            </div>
        </div>
        <div style="display: flex; gap: 16px;">
            <button class="btn btn-primary" style="flex: 1;">Enroll Now</button>
            <button class="btn btn-secondary">Download Syllabus</button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close Modal
document.getElementById('modalClose')?.addEventListener('click', () => {
    document.getElementById('courseModal').classList.remove('active');
});

document.querySelector('.modal-overlay')?.addEventListener('click', () => {
    document.getElementById('courseModal').classList.remove('active');
});

// Render Companies
function renderCompanies() {
    const companiesGrid = document.getElementById('companiesGrid');
    companiesGrid.innerHTML = companies.map(company => `
        <div class="company-item">${company}</div>
    `).join('');
}

// Render Testimonials
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <div class="testimonial-avatar"></div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p class="testimonial-role">${testimonial.role} at ${testimonial.company}</p>
                </div>
            </div>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
        </div>
    `).join('');
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            course: form.course.value,
            message: form.message.value
        };
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                alert('Thank you! We will contact you soon.');
                form.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}
