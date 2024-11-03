const resources = [
    {
        id: 1,
        title: "Frontend Development",
        description: "To learn frontend, follow this roadmap",
        extendedContent: `
            This roadmap covers everything you need to know about frontend development. 
            You'll start by learning HTML and CSS, which are the building blocks of any website. 
            Then, you'll dive into JavaScript, the language that adds interactivity to web pages.
            
            After getting comfortable with the basics, the roadmap introduces modern JavaScript frameworks 
            like React, Vue, or Angular, which are essential for building dynamic, single-page applications (SPAs). 
            You'll also learn about CSS preprocessors (e.g., SASS), build tools (e.g., Webpack), 
            and front-end performance optimization techniques.
            
            Advanced topics include state management (e.g., Redux), accessibility, responsive design, 
            and progressive web apps (PWA). By the end of this roadmap, you'll be able to design and develop 
            complex, user-friendly, and responsive web interfaces.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            prerequisites: [
                "Basic computer skills and familiarity with web browsers",
                "Understanding of how the internet works",
                "Text editor or IDE (VS Code recommended)",
                "Problem-solving aptitude",
                "Design sense and attention to detail"
            ],
            outcomes: [
                "Build responsive and interactive websites from scratch",
                "Master HTML5, CSS3, and modern JavaScript",
                "Create single-page applications using React",
                "Implement modern UI/UX design principles",
                "Optimize website performance and accessibility",
                "Handle state management in complex applications",
                "Deploy and maintain web applications"
            ],
            sections: [
                {
                    title: "Web Fundamentals",
                    content: "Master the core technologies of web development: HTML5 for structure, CSS3 for styling, and JavaScript for interactivity. Learn about semantic markup, responsive design principles, and modern ECMAScript features."
                },
                {
                    title: "Modern Frameworks & Tools",
                    content: "Explore popular frontend frameworks like React, along with essential development tools including Git, npm, and webpack. Learn component-based architecture and state management solutions."
                },
                {
                    title: "UI/UX & Best Practices",
                    content: "Apply modern design principles, implement responsive layouts, and ensure accessibility. Learn about CSS preprocessors, design systems, and cross-browser compatibility."
                },
                {
                    title: "Performance & Optimization",
                    content: "Master performance optimization techniques, implement PWA features, and learn about SEO best practices. Understand caching, lazy loading, and modern build optimization strategies."
                },
                {
                    title: "Professional Development",
                    content: "Work on real-world projects, learn debugging techniques, and understand deployment processes. Practice code reviews, testing, and continuous integration/deployment (CI/CD)."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "Responsive Navigation Bar",
                    code: `<!-- HTML Structure -->
        <nav class="navbar">
            <div class="brand">Brand</div>
            <button class="nav-toggle">
                <span class="hamburger"></span>
            </button>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
        /* CSS Styles */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background-color: #333;
            color: white;
        }
        
        .nav-menu {
            display: flex;
            gap: 1rem;
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                width: 100%;
                position: absolute;
                top: 100%;
                left: 0;
                background-color: #333;
            }
            
            .nav-menu.active {
                display: flex;
                flex-direction: column;
            }
        }
        
        // JavaScript Functionality
        document.querySelector('.nav-toggle').addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.toggle('active');
        });`,
                    explanation: "A responsive navigation bar implementation using HTML, CSS, and JavaScript. Features a mobile-friendly hamburger menu, flexbox layout, and media queries for responsive design."
                },
                {
                    title: "Modern Card Component with React",
                    code: `import React from 'react';
        
        const Card = ({ title, description, imageUrl, tags }) => {
            return (
                <div className="card">
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="card-image" 
                    />
                    <div className="card-content">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-description">{description}</p>
                        <div className="card-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };
        
        // CSS Styles (using styled-components or CSS modules)
        .card {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }
        
        .card:hover {
            transform: translateY(-4px);
        }
        
        .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .card-content {
            padding: 1.5rem;
        }
        
        .card-tags {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .tag {
            padding: 0.25rem 0.75rem;
            background-color: #f0f0f0;
            border-radius: 16px;
            font-size: 0.875rem;
        }`,
                    explanation: "A reusable React card component showcasing modern component design patterns, CSS-in-JS styling, and responsive image handling."
                },
                {
                    title: "State Management with React Hooks",
                    code: `import React, { useState, useEffect } from 'react';
        
        const TodoApp = () => {
            const [todos, setTodos] = useState([]);
            const [inputValue, setInputValue] = useState('');
            const [filter, setFilter] = useState('all');
        
            useEffect(() => {
                const savedTodos = localStorage.getItem('todos');
                if (savedTodos) {
                    setTodos(JSON.parse(savedTodos));
                }
            }, []);
        
            useEffect(() => {
                localStorage.setItem('todos', JSON.stringify(todos));
            }, [todos]);
        
            const addTodo = (e) => {
                e.preventDefault();
                if (!inputValue.trim()) return;
                
                setTodos([
                    ...todos,
                    {
                        id: Date.now(),
                        text: inputValue,
                        completed: false
                    }
                ]);
                setInputValue('');
            };
        
            const toggleTodo = (id) => {
                setTodos(todos.map(todo =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ));
            };
        
            const filteredTodos = todos.filter(todo => {
                if (filter === 'active') return !todo.completed;
                if (filter === 'completed') return todo.completed;
                return true;
            });
        
            return (
                <div className="todo-app">
                    <form onSubmit={addTodo}>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add todo..."
                        />
                    </form>
                    
                    <div className="filters">
                        <button onClick={() => setFilter('all')}>All</button>
                        <button onClick={() => setFilter('active')}>Active</button>
                        <button onClick={() => setFilter('completed')}>Completed</button>
                    </div>
        
                    <ul className="todo-list">
                        {filteredTodos.map(todo => (
                            <li
                                key={todo.id}
                                onClick={() => toggleTodo(todo.id)}
                                className={todo.completed ? 'completed' : ''}
                            >
                                {todo.text}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        };`,
                    explanation: "A Todo application demonstrating React Hooks usage, including useState for state management, useEffect for side effects, and local storage integration. Shows proper component organization and event handling."
                }
            ],
        
            roadmap: [
                {
                    title: "1. HTML & CSS Fundamentals",
                    description: "Master the building blocks of web development",
                    topics: [
                        "HTML5 semantic elements and structure",
                        "CSS selectors and specificity",
                        "Flexbox and Grid layouts",
                        "Responsive design principles",
                        "CSS animations and transitions",
                        "CSS preprocessors (SASS/SCSS)",
                        "CSS methodologies (BEM, OOCSS)"
                    ]
                },
                {
                    title: "2. JavaScript Essentials",
                    description: "Learn modern JavaScript and ES6+ features",
                    topics: [
                        "Variables, data types, and functions",
                        "DOM manipulation and events",
                        "Promises and async/await",
                        "ES6+ features and modules",
                        "Error handling and debugging",
                        "Local storage and cookies",
                        "API integration and fetch"
                    ]
                },
                {
                    title: "3. React Development",
                    description: "Build modern web applications with React",
                    topics: [
                        "Components and JSX",
                        "State and Props management",
                        "Hooks and lifecycle methods",
                        "Context API and Redux",
                        "React Router for navigation",
                        "Performance optimization",
                        "Testing with Jest and RTL"
                    ]
                },
                {
                    title: "4. Build Tools & Deployment",
                    description: "Master modern development workflow",
                    topics: [
                        "Git version control",
                        "Package managers (npm/yarn)",
                        "Webpack and bundling",
                        "Babel and transpilation",
                        "CI/CD pipelines",
                        "Docker basics",
                        "Cloud deployment (Vercel, Netlify)"
                    ]
                },
                {
                    title: "5. Advanced Concepts",
                    description: "Polish your skills with advanced topics",
                    topics: [
                        "Progressive Web Apps (PWA)",
                        "Web accessibility (a11y)",
                        "SEO optimization",
                        "Performance monitoring",
                        "Security best practices",
                        "GraphQL basics",
                        "Micro-frontends"
                    ]
                }
            ],
            resources: {
                documentation: [
                    {
                        title: "MDN Web Docs",
                        url: "https://developer.mozilla.org/",
                        description: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript",
                        type: "Official Documentation"
                    },
                    {
                        title: "React Documentation",
                        url: "https://react.dev/",
                        description: "Official React documentation with guides, API references, and best practices",
                        type: "Framework Documentation"
                    },
                    {
                        title: "CSS-Tricks",
                        url: "https://css-tricks.com/",
                        description: "In-depth articles and tutorials about CSS and frontend development",
                        type: "Resource Collection"
                    },
                    {
                        title: "Web.dev",
                        url: "https://web.dev/",
                        description: "Google's resource for modern web development guidance",
                        type: "Learning Platform"
                    }
                ],
                tutorials: [
                    {
                        title: "freeCodeCamp",
                        url: "https://www.freecodecamp.org/",
                        description: "Interactive coding tutorials covering the entire frontend development stack",
                        type: "Interactive Course"
                    },
                    {
                        title: "Frontend Masters",
                        url: "https://frontendmasters.com/",
                        description: "Expert-led video courses on frontend technologies and frameworks",
                        type: "Video Course Platform"
                    },
                    {
                        title: "JavaScript30",
                        url: "https://javascript30.com/",
                        description: "30 Day Vanilla JS Coding Challenge",
                        type: "Practice Course"
                    },
                    {
                        title: "Scrimba",
                        url: "https://scrimba.com/",
                        description: "Interactive screencasts for learning frontend development",
                        type: "Interactive Platform"
                    }
                ],
                videos: [
                    {
                        title: "Traversy Media",
                        url: "https://www.youtube.com/c/TraversyMedia",
                        description: "Practical project-based web development tutorials",
                        platform: "YouTube"
                    },
                    {
                        title: "Net Ninja",
                        url: "https://www.youtube.com/c/TheNetNinja",
                        description: "Comprehensive frontend development tutorial series",
                        platform: "YouTube"
                    },
                    {
                        title: "Fireship",
                        url: "https://www.youtube.com/c/Fireship",
                        description: "Quick, modern web development tutorials and tips",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "Eloquent JavaScript",
                        author: "Marijn Haverbeke",
                        description: "A comprehensive guide to JavaScript programming",
                        level: "Intermediate"
                    },
                    {
                        title: "CSS in Depth",
                        author: "Keith J. Grant",
                        description: "Advanced CSS concepts and modern techniques",
                        level: "Advanced"
                    },
                    {
                        title: "React Up and Running",
                        author: "Stoyan Stefanov",
                        description: "Building web applications with React and modern tools",
                        level: "Intermediate"
                    }
                ],
                practice: [
                    {
                        title: "Frontend Mentor",
                        url: "https://www.frontendmentor.io/",
                        description: "Real-world frontend challenges with professional designs",
                        type: "Challenge Platform"
                    },
                    {
                        title: "CodePen",
                        url: "https://codepen.io/",
                        description: "Social development environment for frontend projects",
                        type: "Practice Platform"
                    },
                    {
                        title: "CSS Battle",
                        url: "https://cssbattle.dev/",
                        description: "CSS coding challenges to test your skills",
                        type: "Challenge Platform"
                    }
                ]
            },
        
            practice: {
                beginnerExercises: [
                    {
                        title: "Responsive Product Card",
                        difficulty: "Easy",
                        description: "Create a responsive product card component with image, title, price, and buy button. Implement hover effects and ensure mobile compatibility.",
                        hints: [
                            "Use CSS Flexbox or Grid for layout",
                            "Implement responsive images",
                            "Add smooth hover transitions",
                            "Consider mobile-first approach"
                        ],
                        solution: {
                            code: `<!-- HTML -->
        <div class="product-card">
            <img src="product-image.jpg" alt="Product" class="product-image">
            <div class="product-info">
                <h2 class="product-title">Product Name</h2>
                <p class="product-price">$99.99</p>
                <button class="buy-button">Add to Cart</button>
            </div>
        </div>
        
        /* CSS */
        .product-card {
            max-width: 300px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
        }
        
        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .product-info {
            padding: 1rem;
        }
        
        .product-title {
            margin: 0;
            font-size: 1.25rem;
            color: #333;
        }
        
        .product-price {
            color: #0066cc;
            font-weight: bold;
            margin: 0.5rem 0;
        }
        
        .buy-button {
            width: 100%;
            padding: 0.75rem;
            background-color: #0066cc;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        
        .buy-button:hover {
            background-color: #0052a3;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .product-card {
                max-width: 100%;
            }
        }`,
                            explanation: "This solution demonstrates key frontend concepts including responsive design, CSS transitions, hover effects, and mobile optimization. The component uses flexbox for layout, maintains proper spacing, and includes interactive elements."
                        }
                    },
                    {
                        title: "Navigation Menu",
                        difficulty: "Easy",
                        description: "Build a responsive navigation menu that collapses into a hamburger menu on mobile devices.",
                        hints: [
                            "Use media queries for responsiveness",
                            "Implement hamburger menu icon",
                            "Add smooth transition for menu toggle",
                            "Ensure accessibility with ARIA attributes"
                        ],
                        solution: {
                        code:
                         `<!-- HTML -->
                        <nav class="navbar">
                            <div class="nav-brand">Brand Logo</div>
                            <button class="nav-toggle" aria-label="Toggle navigation"\naria-expanded="false">
                                <span class="hamburger"></span>
                            </button>
                            <div class="nav-menu">
                                <ul class="nav-links">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        
                        /* CSS */
                        .navbar {
                            background: #ffffff;
                            padding: 1rem 2rem;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        
                        .nav-brand {
                            font-size: 1.5rem;
                            font-weight: bold;
                            color: #333;
                        }
                        
                        .nav-links {
                            display: flex;
                            list-style: none;
                            margin: 0;
                            padding: 0;
                            gap: 2rem;
                        }
                        
                        .nav-links a {
                            color: #333;
                            text-decoration: none;
                            font-weight: 500;
                            transition: color 0.3s ease;
                        }
                        
                        .nav-links a:hover {
                            color: #0066cc;
                        }
                        
                        .nav-toggle {
                            display: none;
                            background: none;
                            border: none;
                            cursor: pointer;
                            padding: 0.5rem;
                        }
                        
                        .hamburger {
                            display: block;
                            position: relative;
                            width: 24px;
                            height: 2px;
                            background: #333;
                            transition: all 0.3s ease-in-out;
                        }
                        
                        .hamburger::before,
                        .hamburger::after {
                            content: '';
                            position: absolute;
                            width: 24px;
                            height: 2px;
                            background: #333;
                            transition: all 0.3s ease-in-out;
                        }
                        
                        .hamburger::before {
                            transform: translateY(-8px);
                        }
                        
                        .hamburger::after {
                            transform: translateY(8px);
                        }
                        
                        /* Hamburger Animation */
                        .nav-toggle.active .hamburger {
                            background: transparent;
                        }
                        
                        .nav-toggle.active .hamburger::before {
                            transform: rotate(45deg);
                        }
                        
                        .nav-toggle.active .hamburger::after {
                            transform: rotate(-45deg);
                        }
                        
                        /* Mobile Responsive */
                        @media screen and (max-width: 768px) {
                            .nav-toggle {
                                display: block;
                            }
                        
                            .nav-menu {
                                position: absolute;
                                top: 100%;
                                left: 0;
                                right: 0;
                                background: #ffffff;
                                padding: 1rem;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                                transform: translateY(-100%);
                                opacity: 0;
                                visibility: hidden;
                                transition: all 0.3s ease-in-out;
                            }
                        
                            .nav-menu.active {
                                transform: translateY(0);
                                opacity: 1;
                                visibility: visible;
                            }
                        
                            .nav-links {
                                flex-direction: column;
                                gap: 1rem;
                                text-align: center;
                            }
                        }
                        
                        // JavaScript
                        const navToggle = document.querySelector('.nav-toggle');
                        const navMenu = document.querySelector('.nav-menu');
                        
                        navToggle.addEventListener('click', () => {
                            const isExpanded = navToggle.getAttribute('aria-expanded') \n === 'true';
                            navToggle.setAttribute('aria-expanded', !isExpanded);
                            navToggle.classList.toggle('active');
                            navMenu.classList.toggle('active');
                        });
                        
                        // Close menu when clicking outside
                        document.addEventListener('click', (e) => {
                            if (!navMenu.contains(e.target) && \n!navToggle.contains(e.target)) {
                                navToggle.setAttribute('aria-expanded', 'false');
                                navToggle.classList.remove('active');
                                navMenu.classList.remove('active');
                            }
                        });`,
                            explanation: "This solution implements a responsive navigation menu with several key features:\n\n" +
                                "1. Accessibility:\n" +
                                "   - ARIA attributes for screen readers\n" +
                                "   - Semantic HTML structure\n" +
                                "   - Keyboard navigation support\n\n" +
                                "2. Responsive Design:\n" +
                                "   - Mobile-first approach\n" +
                                "   - Smooth transitions\n" +
                                "   - Hamburger menu animation\n\n" +
                                "3. User Experience:\n" +
                                "   - Smooth animations\n" +
                                "   - Click outside to close\n" +
                                "   - Visual feedback on interactions\n\n" +
                                "4. Performance:\n" +
                                "   - CSS transforms for animations\n" +
                                "   - Efficient event handling\n" +
                                "   - No layout shifts"
                        }
                    }
                    

                ],
                intermediateExercises: [
                    {
                        title: "Dynamic Form Validation",
                        difficulty: "Medium",
                        description: "Create a form with real-time validation for email, password strength, and matching password confirmation.",
                        hints: [
                            "Use regular expressions for validation",
                            "Implement real-time feedback",
                            "Handle form submission properly",
                            "Show appropriate error messages"
                        ],
                        solution: {
                            code: `<!-- HTML -->
<form id="registrationForm" class="registration-form" novalidate>
    <div class="form-group">
        <label for="email">Email</label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            required
            autocomplete="email"
        >
        <span class="error-message" data-error="email"></span>
    </div>

    <div class="form-group">
        <label for="password">Password</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            required
            autocomplete="new-password"
        >
        <div class="password-strength">
            <div class="strength-bar"></div>
        </div>
        <ul class="password-requirements">
            <li data-requirement="length">At least 8 characters</li>
            <li data-requirement="uppercase">One uppercase letter</li>
            <li data-requirement="lowercase">One lowercase letter</li>
            <li data-requirement="number">One number</li>
            <li data-requirement="special">One special character</li>
        </ul>
        <span class="error-message" data-error="password"></span>
    </div>

    <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            required
            autocomplete="new-password"
        >
        <span class="error-message" data-error="confirmPassword"></span>
    </div>

    <button type="submit" class="submit-button" disabled>Register</button>
</form>

/* CSS */
.registration-form {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

input:focus {
    outline: none;
    border-color: #0066cc;
}

input.valid {
    border-color: #28a745;
}

input.invalid {
    border-color: #dc3545;
}

.error-message {
    display: block;
    margin-top: 0.5rem;
    color: #dc3545;
    font-size: 0.875rem;
    min-height: 1.25rem;
}

.password-strength {
    margin-top: 0.5rem;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    overflow: hidden;
}

.strength-bar {
    height: 100%;
    width: 0;
    background: #dc3545;
    transition: all 0.3s ease;
}

.strength-bar.weak { width: 33.33%; background: #dc3545; }
.strength-bar.medium { width: 66.66%; background: #ffc107; }
.strength-bar.strong { width: 100%; background: #28a745; }

.password-requirements {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    font-size: 0.875rem;
}

.password-requirements li {
    color: #666;
    margin-bottom: 0.25rem;
    padding-left: 1.5rem;
    position: relative;
}

.password-requirements li::before {
    content: '×';
    position: absolute;
    left: 0;
    color: #dc3545;
}

.password-requirements li.valid::before {
    content: '✓';
    color: #28a745;
}

.submit-button {
    width: 100%;
    padding: 0.75rem;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.submit-button:hover:not(:disabled) {
    background: #0052a3;
}
    // JavaScript
const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitButton = form.querySelector('.submit-button');

const validators = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    password: {
        requirements: {
            length: {
                regex: /.{8,}/,
                message: 'At least 8 characters'
            },
            uppercase: {
                regex: /[A-Z]/,
                message: 'One uppercase letter'
            },
            lowercase: {
                regex: /[a-z]/,
                message: 'One lowercase letter'
            },
            number: {
                regex: /[0-9]/,
                message: 'One number'
            },
            special: {
                regex: /[!@#$%^&*]/,
                message: 'One special character'
            }
        }
    }
};
function validateEmail() {
    const email = emailInput.value;
    const errorElement = document.querySelector('[data-error="email"]');
    
    if (!email) {
        showError(emailInput, errorElement, 'Email is required');
        return false;
    }
    
    if (!validators.email.regex.test(email)) {
        showError(emailInput, errorElement, validators.email.message);
        return false;
    }
    
    showSuccess(emailInput, errorElement);
    return true;
}

function validatePassword() {
    const password = passwordInput.value;
    const errorElement = document.querySelector('[data-error="password"]');
    const requirements = validators.password.requirements;
    let strength = 0;
    let isValid = true;
    
    // Check each requirement
    Object.entries(requirements).forEach(([key, requirement]) => {
        if (requirement.regex.test(password)) {
            element.classList.add('valid');
            strength++;
        } else {
            element.classList.remove('valid');
            isValid = false;
        }
    });
    
    // Update strength bar
    const strengthBar = document.querySelector('.strength-bar');
    strengthBar.className = 'strength-bar';
    if (strength > 3) strengthBar.classList.add('strong');
    else if (strength > 2) strengthBar.classList.add('medium');
    else strengthBar.classList.add('weak');
    
    if (!isValid) {
        showError(passwordInput, errorElement, 'Please meet all password requirements');
        return false;
    }
    
    showSuccess(passwordInput, errorElement);
    return true;
}

function validateConfirmPassword() {
    const confirmPassword = confirmPasswordInput.value;
    const errorElement = document.querySelector('[data-error="confirmPassword"]');
    
    if (confirmPassword !== passwordInput.value) {
        showError(confirmPasswordInput, errorElement, 'Passwords do not match');
        return false;
    }
    
    showSuccess(confirmPasswordInput, errorElement);
    return true;
}

function showError(input, errorElement, message) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorElement.textContent = '';
}

function validateForm() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    submitButton.disabled = !(isEmailValid && isPasswordValid && isConfirmPasswordValid);
}

// Event Listeners
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitButton.disabled) {
        // Handle form submission
        console.log('Form submitted successfully');
    }
        });`,
        explanation: "This form validation solution includes several advanced features:\n\n" +
        "1. Real-time Validation:\n" +
        "   - Immediate feedback on input\n" +
        "   - Password strength indicator\n" +
        "   - Visual requirement checklist\n\n" +
        "2. Security Features:\n" +
        "   - Strong password requirements\n" +
        "   - Proper password confirmation\n" +
        "   - Input sanitization\n\n" +
        "3. User Experience:\n" +
        "   - Clear error messages\n" +
        "   - Visual feedback\n" +
        "   - Disabled submit until valid\n\n" +
        "4. Accessibility:\n" +
        "   - ARIA attributes\n" +
        "   - Proper form labeling\n" +
        "   - Keyboard navigation support"

                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "Infinite Scroll Gallery",
                        difficulty: "Hard",
                        description: "Build an infinite-scrolling image gallery with lazy loading and masonry layout.",
                        hints: [
                            "Implement Intersection Observer",
                            "Handle image loading efficiently",
                            "Manage state for loaded images",
                            "Optimize performance"
                        ],
                        solution: {
                            code: `<!-- HTML -->
<div class="gallery-container">
    <div class="masonry-grid" id="gallery">
        <!-- Images will be dynamically added here -->
    </div>
    <div class="loading-spinner" id="loader">
        <div class="spinner"></div>
    </div>
</div>

/* CSS */
.gallery-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.masonry-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    grid-auto-flow: dense;
}

.image-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    background: #f0f0f0;
    transition: transform 0.3s ease;
}

.image-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.image-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

.image-item.loading {
    min-height: 200px;
}

.image-item.loading img {
    opacity: 0;
}

.loading-spinner {
    display: flex;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.loading-spinner.visible {
    opacity: 1;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .masonry-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 15px;
    }
}

// JavaScript
class InfiniteGallery {
    constructor(options) {
        this.options = {
            container: '#gallery',
            loader: '#loader',
            batchSize: 10,
            threshold: 0.5,
            ...options
        };

        this.page = 1;
        this.loading = false;
        this.hasMore = true;
        this.imageCache = new Map();

        this.init();
    }

    init() {
        this.container = document.querySelector(this.options.container);
        this.loader = document.querySelector(this.options.loader);
        
        // Set up Intersection Observer for infinite scroll
        this.setupIntersectionObserver();
        
        // Set up image lazy loading
        this.setupLazyLoading();
        
        // Load initial batch
        this.loadImages();
    }

    setupIntersectionObserver() {
        this.scrollObserver = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && !this.loading && this.hasMore) {
                this.loadImages();
            }
        }, {
            threshold: this.options.threshold
        });

        this.scrollObserver.observe(this.loader);
    }

    setupLazyLoading() {
        this.imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.imageObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
    }

    async loadImages() {
        try {
            this.loading = true;
            this.loader.classList.add('visible');

            // Simulated API call - replace with your actual API endpoint
            const images = await this.fetchImages(this.page, this.options.batchSize);
            
            if (images.length < this.options.batchSize) {
                this.hasMore = false;
            }

            this.appendImages(images);
            this.page++;
            
        } catch (error) {
            console.error('Error loading images:', error);
        } finally {
            this.loading = false;
            this.loader.classList.remove('visible');
        }
    }

    async fetchImages(page, limit) {
        // Replace with your actual API call
        const response = await fetch(
            \`https://api.yourservice.com/images?page=\${page}&limit=\${limit}\`
        );
        return await response.json();
    }

    appendImages(images) {
        images.forEach(imageData => {
            const item = this.createImageElement(imageData);
            this.container.appendChild(item);
            this.imageObserver.observe(item.querySelector('img'));
        });

        // Optional: Trigger masonry layout recalculation if using a masonry library
        if (this.options.onLayoutComplete) {
            this.options.onLayoutComplete();
        }
    }

    createImageElement(imageData) {
        const item = document.createElement('div');
        item.className = 'image-item loading';
        
        const img = document.createElement('img');
        img.dataset.src = imageData.url;
        img.alt = imageData.description || '';
        
        // Optional: Add additional metadata
        if (imageData.title) {
            const title = document.createElement('div');
            title.className = 'image-title';
            title.textContent = imageData.title;
            item.appendChild(title);
        }

        item.appendChild(img);
        return item;
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (!src) return;

        // Check cache first
        if (this.imageCache.has(src)) {
            this.applyImage(img, this.imageCache.get(src));
            return;
        }

        // Load and cache image
        const tempImage = new Image();
        tempImage.onload = () => {
            this.imageCache.set(src, src);
            this.applyImage(img, src);
        };
        tempImage.src = src;
    }

    applyImage(img, src) {
        img.src = src;
        img.removeAttribute('data-src');
        img.parentElement.classList.remove('loading');
    }

    // Optional: Method to manually trigger a refresh
    refresh() {
        this.page = 1;
        this.hasMore = true;
        this.container.innerHTML = '';
        this.loadImages();
    }

    // Cleanup method
    destroy() {
        this.scrollObserver.disconnect();
        this.imageObserver.disconnect();
        this.imageCache.clear();
    }
}

// Usage Example
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new InfiniteGallery({
        container: '#gallery',
        loader: '#loader',
        batchSize: 12,
        onLayoutComplete: () => {
            // Optional: Integrate with masonry library if needed
            // masonryInstance.layout();
        }
    });

    // Optional: Add error handling
    window.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.parentElement.classList.add('error');
        }
    });
});`,
    explanation: "This advanced implementation includes several key features:\n\n" +
        "1. Performance Optimization:\n" +
        "   - Image lazy loading using Intersection Observer\n" +
        "   - Image caching mechanism\n" +
        "   - Efficient DOM manipulation\n" +
        "   - Debounced scroll handling\n\n" +
        "2. User Experience:\n" +
        "   - Smooth loading animations\n" +
        "   - Loading indicators\n" +
        "   - Error handling\n" +
        "   - Responsive design\n\n" +
        "3. Technical Features:\n" +
        "   - CSS Grid masonry layout\n" +
        "   - Intersection Observer for infinite scroll\n" +
        "   - Image preloading\n" +
        "   - Memory management\n\n" +
        "4. Code Organization:\n" +
        "   - Class-based architecture\n" +
        "   - Configurable options\n" +
        "   - Clean separation of concerns\n" +
        "   - Extensible design"
                        }
                    }
                ]
            }
        }
    },
    {
        id: 2,
        title: "Backend Development",
        description: "To learn backend, follow this roadmap",
        extendedContent: `
            Backend development focuses on server-side logic, databases, and application architecture.
            You'll start by learning the basics of HTTP, web servers, and databases (both SQL and NoSQL).
            
            This roadmap will guide you through setting up servers using different backend languages 
            such as Node.js, Python (Django/Flask), Java (Spring), or Ruby on Rails. You'll also explore 
            RESTful API development, authentication methods (e.g., JWT, OAuth), and database interactions using ORM libraries.
            
            As you advance, you'll learn about cloud deployment, scaling applications, 
            microservices architecture, and best practices for security, testing, and performance optimization.
            Mastering backend development will enable you to build efficient, scalable, and secure web applications.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            prerequisites: [
                "Basic understanding of programming concepts",
                "Familiarity with command line interface",
                "Knowledge of web fundamentals (HTTP, APIs)",
                "Basic understanding of databases",
                "Problem-solving and analytical thinking skills"
            ],
            outcomes: [
                "Design and build RESTful APIs",
                "Implement secure authentication and authorization",
                "Work with both SQL and NoSQL databases",
                "Deploy and manage web applications",
                "Implement microservices architecture",
                "Handle server-side performance optimization",
                "Manage application security and testing"
            ],
            sections: [
                {
                    title: "Server-Side Fundamentals",
                    content: "Master core backend concepts including HTTP protocols, API design, server architecture, and database management. Learn about request-response cycles, middleware, and server-side rendering."
                },
                {
                    title: "Database & ORM",
                    content: "Explore different database systems (SQL/NoSQL), learn database design principles, and master ORM frameworks for efficient data manipulation. Understand transactions, indexing, and query optimization."
                },
                {
                    title: "Authentication & Security",
                    content: "Implement secure user authentication, handle authorization, manage sessions, and protect against common security vulnerabilities. Learn about encryption, JWT, OAuth, and security best practices."
                },
                {
                    title: "API Development",
                    content: "Design and build RESTful APIs, handle data validation, implement error handling, and manage API documentation. Learn about API versioning, rate limiting, and caching strategies."
                },
                {
                    title: "Deployment & DevOps",
                    content: "Master deployment processes, set up CI/CD pipelines, implement monitoring solutions, and manage application scaling. Learn about containerization, cloud services, and infrastructure management."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "Basic Express.js Server",
                    code: `const express = require('express');
        const app = express();
        const port = 3000;
        
        // Middleware for parsing JSON bodies
        app.use(express.json());
        
        // Basic route handler
        app.get('/', (req, res) => {
            res.json({ message: 'Welcome to the API' });
        });
        
        // Route with path parameters
        app.get('/users/:id', (req, res) => {
            const userId = req.params.id;
            res.json({ message: \`Fetching user \${userId}\` });
        });
        
        // POST route with request body
        app.post('/users', (req, res) => {
            const userData = req.body;
            // Validate user data
            if (!userData.name || !userData.email) {
                return res.status(400).json({ 
                    error: 'Name and email are required' 
                });
            }
            res.status(201).json({
                message: 'User created successfully',
                user: userData
            });
        });
        
        // Error handling middleware
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ 
                error: 'Something went wrong!' 
            });
        });
        
        app.listen(port, () => {
            console.log(\`Server running at http://localhost:\${port}\`);
        });`,
                    explanation: "A basic Express.js server implementation showcasing route handling, middleware usage, parameter parsing, and error handling. Demonstrates RESTful API concepts and HTTP methods."
                },
                {
                    title: "Database Integration with MongoDB",
                    code: `const mongoose = require('mongoose');
        const express = require('express');
        const app = express();
        
        // MongoDB connection
        mongoose.connect('mongodb://localhost/myapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        // User Schema
        const userSchema = new mongoose.Schema({
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            age: Number,
            createdAt: { type: Date, default: Date.now }
        });
        
        const User = mongoose.model('User', userSchema);
        
        // Create user
        app.post('/users', async (req, res) => {
            try {
                const user = new User(req.body);
                await user.save();
                res.status(201).json(user);
            } catch (error) {
                if (error.code === 11000) { // Duplicate key error
                    res.status(400).json({ 
                        error: 'Email already exists' 
                    });
                } else {
                    res.status(500).json({ 
                        error: 'Error creating user' 
                    });
                }
            }
        });
        
        // Get all users with pagination
        app.get('/users', async (req, res) => {
            try {
                const page = parseInt(req.query.page) || 1;
                const limit = parseInt(req.query.limit) || 10;
                const skip = (page - 1) * limit;
                
                const users = await User.find()
                    .skip(skip)
                    .limit(limit)
                    .select('-__v');
                    
                const total = await User.countDocuments();
                
                res.json({
                    users,
                    totalPages: Math.ceil(total / limit),
                    currentPage: page
                });
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error fetching users' 
                });
            }
        });`,
                    explanation: "Demonstrates MongoDB integration with Mongoose ORM, including schema definition, CRUD operations, error handling, and pagination implementation."
                },
                {
                    title: "JWT Authentication Middleware",
                    code: `const jwt = require('jsonwebtoken');
        const bcrypt = require('bcrypt');
        const SECRET_KEY = 'your-secret-key';
        
        // User login
        async function login(req, res) {
            const { email, password } = req.body;
            
            try {
                // Find user by email
                const user = await User.findOne({ email });
                if (!user) {
                    return res.status(401).json({ 
                        error: 'Invalid credentials' 
                    });
                }
                
                // Verify password
                const validPassword = await bcrypt.compare(
                    password, 
                    user.password
                );
                if (!validPassword) {
                    return res.status(401).json({ 
                        error: 'Invalid credentials' 
                    });
                }
                
                // Generate JWT
                const token = jwt.sign(
                    { userId: user._id }, 
                    SECRET_KEY, 
                    { expiresIn: '24h' }
                );
                
                res.json({ token });
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error during login' 
                });
            }
        }
        
        // Authentication middleware
        function authenticate(req, res, next) {
            try {
                const token = req.headers.authorization?.split(' ')[1];
                if (!token) {
                    return res.status(401).json({ 
                        error: 'Authentication required' 
                    });
                }
                
                const decoded = jwt.verify(token, SECRET_KEY);
                req.userId = decoded.userId;
                next();
            } catch (error) {
                res.status(401).json({ 
                    error: 'Invalid token' 
                });
            }
        }
        
        // Protected route example
        app.get('/profile', authenticate, async (req, res) => {
            try {
                const user = await User.findById(req.userId)
                    .select('-password');
                res.json(user);
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error fetching profile' 
                });
            }
        });`,
                    explanation: "Implementation of JWT-based authentication with middleware, including user login, token generation, and protected route access."
                },
                {
                    title: "API Rate Limiting and Caching",
                    code: `const rateLimit = require('express-rate-limit');
        const redis = require('redis');
        const { promisify } = require('util');
        
        // Redis client setup
        const redisClient = redis.createClient();
        const getAsync = promisify(redisClient.get).bind(redisClient);
        const setAsync = promisify(redisClient.set).bind(redisClient);
        
        // Rate limiting middleware
        const apiLimiter = rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100, // limit each IP to 100 requests per windowMs
            message: {
                error: 'Too many requests, please try again later.'
            }
        });
        
        // Caching middleware
        const cacheMiddleware = (duration) => async (req, res, next) => {
            const key = \`cache:\${req.originalUrl}\`;
            
            try {
                const cachedResponse = await getAsync(key);
                if (cachedResponse) {
                    return res.json(JSON.parse(cachedResponse));
                }
                
                // Modify res.json to cache the response
                const originalJson = res.json;
                res.json = async (body) => {
                    await setAsync(key, JSON.stringify(body), 'EX', duration);
                    return originalJson.call(res, body);
                };
                
                next();
            } catch (error) {
                next(error);
            }
        };
        
        // Example usage
        app.get('/popular-posts',
            apiLimiter,
            cacheMiddleware(300), // Cache for 5 minutes
            async (req, res) => {
                try {
                    const posts = await Post.find()
                        .sort({ views: -1 })
                        .limit(10);
                    res.json(posts);
                } catch (error) {
                    res.status(500).json({ 
                        error: 'Error fetching posts' 
                    });
                }
            }
        );`,
                    explanation: "Shows implementation of API rate limiting and Redis-based response caching to improve API performance and prevent abuse."
                }
            ],
            
            roadmap: [
                {
                    title: "1. Backend Fundamentals",
                    description: "Master the core concepts of backend development",
                    topics: [
                        "HTTP/HTTPS protocols and methods",
                        "RESTful API principles",
                        "Server architecture patterns",
                        "Request-Response lifecycle",
                        "Middleware concepts",
                        "Error handling strategies",
                        "API security basics"
                    ]
                },
                {
                    title: "2. Databases & Data Modeling",
                    description: "Learn database management and data modeling techniques",
                    topics: [
                        "SQL databases (PostgreSQL/MySQL)",
                        "NoSQL databases (MongoDB/Redis)",
                        "Database design principles",
                        "ORM/ODM frameworks",
                        "Data normalization",
                        "Indexing and optimization",
                        "Database transactions"
                    ]
                },
                {
                    title: "3. Authentication & Security",
                    description: "Implement secure authentication and authorization",
                    topics: [
                        "User authentication methods",
                        "JSON Web Tokens (JWT)",
                        "OAuth 2.0 and OpenID Connect",
                        "Password hashing and salting",
                        "Security best practices",
                        "Cross-Site Scripting (XSS) prevention",
                        "SQL injection prevention"
                    ]
                },
                {
                    title: "4. Advanced Backend Concepts",
                    description: "Master advanced backend development techniques",
                    topics: [
                        "Microservices architecture",
                        "Message queues (RabbitMQ/Redis)",
                        "WebSockets and real-time data",
                        "Caching strategies",
                        "API documentation (Swagger/OpenAPI)",
                        "Logging and monitoring",
                        "Performance optimization"
                    ]
                },
                {
                    title: "5. DevOps & Deployment",
                    description: "Learn deployment and operations management",
                    topics: [
                        "Container orchestration (Docker/Kubernetes)",
                        "CI/CD pipelines",
                        "Cloud platforms (AWS/GCP/Azure)",
                        "Server monitoring and logging",
                        "Load balancing",
                        "Scalability patterns",
                        "Infrastructure as Code"
                    ]
                }
            ],
        
        resources: {
            documentation: [
                {
                    title: "Node.js Documentation",
                    url: "https://nodejs.org/docs/",
                    description: "Official Node.js documentation and API reference guide",
                    type: "Official Documentation"
                },
                {
                    title: "Express.js Guide",
                    url: "https://expressjs.com/",
                    description: "Comprehensive guide for Express.js framework",
                    type: "Framework Documentation"
                },
                {
                    title: "MongoDB Manual",
                    url: "https://docs.mongodb.com/manual/",
                    description: "Complete MongoDB documentation with tutorials and best practices",
                    type: "Database Documentation"
                },
                {
                    title: "PostgreSQL Documentation",
                    url: "https://www.postgresql.org/docs/",
                    description: "Official PostgreSQL database documentation and tutorials",
                    type: "Database Documentation"
                },
                {
                    title: "Docker Documentation",
                    url: "https://docs.docker.com/",
                    description: "Official Docker documentation for containerization",
                    type: "DevOps Documentation"
                }
            ],
            tutorials: [
                {
                    title: "Node.js Backend Masterclass",
                    url: "https://www.udemy.com/course/nodejs-api-masterclass/",
                    description: "Complete Node.js backend development course with real-world projects",
                    type: "Video Course"
                },
                {
                    title: "Learn SQL and Database Design",
                    url: "https://www.codecademy.com/learn/learn-sql",
                    description: "Interactive SQL course covering database fundamentals",
                    type: "Interactive Course"
                },
                {
                    title: "Backend Development with Python and Django",
                    url: "https://www.djangoproject.com/start/",
                    description: "Official Django tutorial for building web applications",
                    type: "Framework Tutorial"
                },
                {
                    title: "Microservices with Node.js",
                    url: "https://www.youtube.com/watch?v=XUSHH0E-7zk",
                    description: "Practical guide to building microservices architecture",
                    type: "Video Series"
                },
                {
                    title: "AWS for Backend Developers",
                    url: "https://aws.amazon.com/getting-started/hands-on/",
                    description: "Hands-on tutorials for AWS services and cloud deployment",
                    type: "Cloud Platform Tutorial"
                }
            ],
            videos: [
                {
                    title: "Traversy Media Backend Series",
                    url: "https://www.youtube.com/c/TraversyMedia",
                    description: "Practical backend development tutorials and project builds",
                    platform: "YouTube"
                },
                {
                    title: "The Net Ninja Backend Tutorials",
                    url: "https://www.youtube.com/c/TheNetNinja",
                    description: "In-depth tutorials on various backend technologies",
                    platform: "YouTube"
                },
                {
                    title: "freeCodeCamp Backend Development",
                    url: "https://www.youtube.com/c/Freecodecamp",
                    description: "Comprehensive backend development courses and tutorials",
                    platform: "YouTube"
                },
                {
                    title: "Hussein Nasser Database Engineering",
                    url: "https://www.youtube.com/c/HusseinNasser-software-engineering",
                    description: "Deep dives into database engineering and system design",
                    platform: "YouTube"
                }
            ],
            books: [
                {
                    title: "Node.js Design Patterns",
                    author: "Mario Casciaro & Luciano Mammino",
                    description: "Comprehensive guide to Node.js application design and patterns",
                    level: "Intermediate to Advanced"
                },
                {
                    title: "Designing Data-Intensive Applications",
                    author: "Martin Kleppmann",
                    description: "Deep dive into database systems and distributed architecture",
                    level: "Advanced"
                },
                {
                    title: "Clean Architecture",
                    author: "Robert C. Martin",
                    description: "Principles of software architecture and clean code practices",
                    level: "Intermediate to Advanced"
                },
                {
                    title: "Database Design for Mere Mortals",
                    author: "Michael J. Hernandez",
                    description: "Practical guide to relational database design",
                    level: "Beginner to Intermediate"
                },
                {
                    title: "Web Scalability for Startup Engineers",
                    author: "Artur Ejsmont",
                    description: "Scalable architecture design for web applications",
                    level: "Intermediate"
                }
            ],
            practice: [
                {
                    title: "Backend Development Projects on GitHub",
                    url: "https://github.com/topics/backend",
                    description: "Open source backend projects for learning and contribution",
                    type: "Project Repository"
                },
                {
                    title: "HackerRank Backend Challenges",
                    url: "https://www.hackerrank.com/domains/databases",
                    description: "Practice problems for SQL and database concepts",
                    type: "Practice Platform"
                },
                {
                    title: "MongoDB University",
                    url: "https://university.mongodb.com/",
                    description: "Free courses and certifications for MongoDB",
                    type: "Learning Platform"
                },
                {
                    title: "Exercism Backend Track",
                    url: "https://exercism.io/tracks/javascript",
                    description: "Mentored code practice and feedback",
                    type: "Practice Platform"
                },
                {
                    title: "PostgreSQL Exercises",
                    url: "https://pgexercises.com/",
                    description: "Interactive PostgreSQL tutorial and exercises",
                    type: "Practice Platform"
                },
                {
                    title: "API Design Challenges",
                    url: "https://github.com/public-apis/public-apis",
                    description: "Collection of public APIs for practice integration",
                    type: "API Practice"
                }
            ]
        },
        practice: {
            beginnerExercises: [
                {
                    title: "Basic REST API Server",
                    difficulty: "Easy",
                    description: "Create a simple REST API server with CRUD operations for a todo list using Express.js and in-memory storage.",
                    hints: [
                        "Use Express.js router for organizing routes",
                        "Implement proper HTTP status codes",
                        "Add input validation",
                        "Use middleware for error handling"
                    ],
                    solution: {
                        code: `const express = require('express');
        const app = express();
        const port = 3000;
        
        // Middleware
        app.use(express.json());
        
        // In-memory storage
        let todos = [];
        let nextId = 1;
        
        // Error handler middleware
        const errorHandler = (err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({ error: 'Something went wrong!' });
        };
        
        // GET all todos
        app.get('/todos', (req, res) => {
            res.json(todos);
        });
        
        // GET single todo
        app.get('/todos/:id', (req, res) => {
            const todo = todos.find(t => t.id === parseInt(req.params.id));
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            res.json(todo);
        });
        
        // POST new todo
        app.post('/todos', (req, res) => {
            const { title } = req.body;
            if (!title) {
                return res.status(400).json({ error: 'Title is required' });
            }
        
            const todo = {
                id: nextId++,
                title,
                completed: false,
                createdAt: new Date()
            };
        
            todos.push(todo);
            res.status(201).json(todo);
        });
        
        // PUT update todo
        app.put('/todos/:id', (req, res) => {
            const { title, completed } = req.body;
            const todo = todos.find(t => t.id === parseInt(req.params.id));
            
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
        
            todo.title = title || todo.title;
            todo.completed = completed !== undefined ? completed : todo.completed;
            
            res.json(todo);
        });
        
        // DELETE todo
        app.delete('/todos/:id', (req, res) => {
            const index = todos.findIndex(t => t.id === parseInt(req.params.id));
            
            if (index === -1) {
                return res.status(404).json({ error: 'Todo not found' });
            }
        
            todos.splice(index, 1);
            res.status(204).send();
        });
        
        app.use(errorHandler);
        
        app.listen(port, () => {
            console.log(\`Server running at http://localhost:\${port}\`);
        });`,
                        explanation: "This solution demonstrates a basic REST API implementation with the following features:\n\n" +
                            "1. CRUD Operations:\n" +
                            "   - GET /todos - List all todos\n" +
                            "   - GET /todos/:id - Get single todo\n" +
                            "   - POST /todos - Create new todo\n" +
                            "   - PUT /todos/:id - Update todo\n" +
                            "   - DELETE /todos/:id - Delete todo\n\n" +
                            "2. Best Practices:\n" +
                            "   - Proper HTTP status codes\n" +
                            "   - Error handling middleware\n" +
                            "   - Input validation\n" +
                            "   - RESTful routing conventions\n\n" +
                            "3. Code Organization:\n" +
                            "   - Middleware setup\n" +
                            "   - Route handlers\n" +
                            "   - In-memory data storage"
                    }
                },
                {
                    title: "Database Connection and Basic CRUD",
                    difficulty: "Easy",
                    description: "Implement basic CRUD operations using MongoDB and Mongoose for a user management system.",
                    hints: [
                        "Set up MongoDB connection with proper error handling",
                        "Create a User schema with validation",
                        "Implement async/await for database operations",
                        "Add basic error handling for database operations"
                    ],
                    solution: {
                        code: `const mongoose = require('mongoose');
        const express = require('express');
        const app = express();
        
        // MongoDB Connection
        mongoose.connect('mongodb://localhost/userdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log('Connected to MongoDB');
        }).catch(err => {
            console.error('MongoDB connection error:', err);
            process.exit(1);
        });
        
        // User Schema
        const userSchema = new mongoose.Schema({
            username: {
                type: String,
                required: [true, 'Username is required'],
                unique: true,
                trim: true,
                minlength: [3, 'Username must be at least 3 characters']
            },
            email: {
                type: String,
                required: [true, 'Email is required'],
                unique: true,
                lowercase: true,
                match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
            },
            age: {
                type: Number,
                min: [0, 'Age cannot be negative']
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        });
        
        const User = mongoose.model('User', userSchema);
        
        // Middleware
        app.use(express.json());
        
        // Create User
        app.post('/users', async (req, res) => {
            try {
                const user = new User(req.body);
                await user.save();
                res.status(201).json(user);
            } catch (error) {
                if (error.code === 11000) {
                    res.status(400).json({ 
                        error: 'Username or email already exists' 
                    });
                } else {
                    res.status(400).json({ 
                        error: error.message 
                    });
                }
            }
        });
        
        // Get All Users
        app.get('/users', async (req, res) => {
            try {
                const users = await User.find()
                    .select('-__v')
                    .sort({ createdAt: -1 });
                res.json(users);
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error fetching users' 
                });
            }
        });
        
        // Get User by ID
        app.get('/users/:id', async (req, res) => {
            try {
                const user = await User.findById(req.params.id)
                    .select('-__v');
                if (!user) {
                    return res.status(404).json({ 
                        error: 'User not found' 
                    });
                }
                res.json(user);
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error fetching user' 
                });
            }
        });
        
        // Update User
        app.put('/users/:id', async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { 
                        new: true, 
                        runValidators: true 
                    }
                );
                if (!user) {
                    return res.status(404).json({ 
                        error: 'User not found' 
                    });
                }
                res.json(user);
            } catch (error) {
                res.status(400).json({ 
                    error: error.message 
                });
            }
        });
        
        // Delete User
        app.delete('/users/:id', async (req, res) => {
            try {
                const user = await User.findByIdAndDelete(req.params.id);
                if (!user) {
                    return res.status(404).json({ 
                        error: 'User not found' 
                    });
                }
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error deleting user' 
                });
            }
        });
        
        const port = 3000;
        app.listen(port, () => {
            console.log(\`Server running at http://localhost:\${port}\`);
        });`,
                        explanation: "This solution demonstrates MongoDB integration with the following features:\n\n" +
                            "1. Database Setup:\n" +
                            "   - MongoDB connection with error handling\n" +
                            "   - Mongoose schema with validation\n" +
                            "   - Data model definition\n\n" +
                            "2. CRUD Operations:\n" +
                            "   - Create: POST /users\n" +
                            "   - Read: GET /users and GET /users/:id\n" +
                            "   - Update: PUT /users/:id\n" +
                            "   - Delete: DELETE /users/:id\n\n" +
                            "3. Best Practices:\n" +
                            "   - Async/await usage\n" +
                            "   - Error handling\n" +
                            "   - Input validation\n" +
                            "   - Proper status codes"
                    }
                }
            ],
            intermediateExercises: [
                {
                    title: "Authentication System",
                    difficulty: "Medium",
                    description: "Implement a complete authentication system with JWT, password hashing, and protected routes.",
                    hints: [
                        "Use bcrypt for password hashing",
                        "Implement JWT for authentication",
                        "Create middleware for route protection",
                        "Add refresh token functionality"
                    ],
                    solution: {
                        code: `const express = require('express');
        const jwt = require('jsonwebtoken');
        const bcrypt = require('bcrypt');
        const mongoose = require('mongoose');
        
        const app = express();
        app.use(express.json());
        
        // Environment variables (should be in .env file)
        const JWT_SECRET = 'your-secret-key';
        const JWT_REFRESH_SECRET = 'your-refresh-secret';
        const SALT_ROUNDS = 10;
        
        // User Schema
        const userSchema = new mongoose.Schema({
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true
            },
            password: {
                type: String,
                required: true,
                minlength: 6
            },
            refreshTokens: [String]
        });
        
        // Hash password before saving
        userSchema.pre('save', async function(next) {
            if (this.isModified('password')) {
                this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
            }
            next();
        });
        
        const User = mongoose.model('User', userSchema);
        
        // Generate tokens
        function generateTokens(userId) {
            const accessToken = jwt.sign(
                { userId }, 
                JWT_SECRET, 
                { expiresIn: '15m' }
            );
            
            const refreshToken = jwt.sign(
                { userId }, 
                JWT_REFRESH_SECRET, 
                { expiresIn: '7d' }
            );
            
            return { accessToken, refreshToken };
        }
        
        // Authentication middleware
        const authenticate = async (req, res, next) => {
            try {
                const authHeader = req.headers.authorization;
                if (!authHeader) {
                    return res.status(401).json({ 
                        error: 'No token provided' 
                    });
                }
        
                const token = authHeader.split(' ')[1];
                const decoded = jwt.verify(token, JWT_SECRET);
                req.userId = decoded.userId;
                next();
            } catch (error) {
                if (error.name === 'TokenExpiredError') {
                    return res.status(401).json({ 
                        error: 'Token expired' 
                    });
                }
                res.status(401).json({ 
                    error: 'Invalid token' 
                });
            }
        };
        
        // Register user
        app.post('/auth/register', async (req, res) => {
            try {
                const { email, password } = req.body;
                
                // Check if user exists
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ 
                        error: 'Email already registered' 
                    });
                }
        
                // Create new user
                const user = new User({ email, password });
                await user.save();
        
                // Generate tokens
                const { accessToken, refreshToken } = generateTokens(user._id);
                
                // Save refresh token
                user.refreshTokens.push(refreshToken);
                await user.save();
        
                res.status(201).json({ accessToken, refreshToken });
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error registering user' 
                });
            }
        });
        
        // Login user
        app.post('/auth/login', async (req, res) => {
            try {
                const { email, password } = req.body;
        
                // Find user
                const user = await User.findOne({ email });
                if (!user) {
                    return res.status(401).json({ 
                        error: 'Invalid credentials' 
                    });
                }
        
                // Check password
                const validPassword = await bcrypt.compare(
                    password, 
                    user.password
                );
                if (!validPassword) {
                    return res.status(401).json({ 
                        error: 'Invalid credentials' 
                    });
                }
        
                // Generate tokens
                const { accessToken, refreshToken } = generateTokens(user._id);
                
                // Save refresh token
                user.refreshTokens.push(refreshToken);
                await user.save();
        
                res.json({ accessToken, refreshToken });
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error logging in' 
                });
            }
        });
        
        // Refresh token
        app.post('/auth/refresh-token', async (req, res) => {
            try {
                const { refreshToken } = req.body;
                if (!refreshToken) {
                    return res.status(401).json({ 
                        error: 'Refresh token required' 
                    });
                }
        
                // Verify refresh token
                const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
                
                // Find user and check if refresh token exists
                const user = await User.findById(decoded.userId);
                if (!user || !user.refreshTokens.includes(refreshToken)) {
                    return res.status(401).json({ 
                        error: 'Invalid refresh token' 
                    });
                }
        
                // Generate new tokens
                const newTokens = generateTokens(user._id);
                
                // Update refresh tokens
                user.refreshTokens = user.refreshTokens.filter(
                    t => t !== refreshToken
                );
                user.refreshTokens.push(newTokens.refreshToken);
                await user.save();
        
                res.json(newTokens);
            } catch (error) {
                res.status(401).json({ 
                    error: 'Invalid refresh token' 
                });
            }
        });
        
        // Logout
        app.post('/auth/logout', authenticate, async (req, res) => {
            try {
                const { refreshToken } = req.body;
                
                // Remove refresh token
                const user = await User.findById(req.userId);
                user.refreshTokens = user.refreshTokens.filter(
                    t => t !== refreshToken
                );
                await user.save();
        
                res.status(204).send();
            } catch (error) {
                res.status(500).json({ 
                    error: 'Error logging out' 
                });
            }
        });
        
        // Protected route example
        app.get('/protected', authenticate, (req, res) => {
            res.json({ 
                message: 'Access granted to protected resource' 
            });
        });`,
        explanation: "This authentication system implements:\n\n" +
        "1. Security Features:\n" +
        "   - Password hashing with bcrypt\n" +
        "   - JWT-based authentication\n" +
        "   - Refresh token rotation\n" +
        "   - Secure password storage\n" +
        "   - Token blacklisting on logout\n\n" +
        "2. Authentication Flow:\n" +
        "   - User registration with validation\n" +
        "   - User login with credentials\n" +
        "   - Access token generation and validation\n" +
        "   - Refresh token mechanism\n" +
        "   - Secure logout process\n\n" +
        "3. Best Practices:\n" +
        "   - Environment variable usage\n" +
        "   - Middleware for route protection\n" +
        "   - Error handling\n" +
        "   - Token expiration\n" +
        "   - MongoDB integration\n\n" +
        "4. Advanced Features:\n" +
        "   - Multiple device support\n" +
        "   - Token refresh mechanism\n" +
        "   - Session management\n" +
        "   - Concurrent login handling\n\n" +
        "5. API Endpoints:\n" +
        "   - POST /auth/register - New user registration\n" +
        "   - POST /auth/login - User login\n" +
        "   - POST /auth/refresh-token - Token refresh\n" +
        "   - POST /auth/logout - User logout\n" +
        "   - GET /protected - Protected route example"
                }
           }
        ],
        advancedExercises: [
            {
                title: "Real-time Chat System with Microservices",
                difficulty: "Hard",
                description: "Implement a scalable real-time chat system using Socket.IO, Redis for pub/sub, and MongoDB for message persistence. Include features like user presence, message delivery status, and chat rooms.",
                hints: [
                    "Use Socket.IO for real-time communication",
                    "Implement Redis for message broker and caching",
                    "Use MongoDB for message persistence",
                    "Handle user presence and disconnections",
                    "Implement message delivery acknowledgments",
                    "Add room-based chat functionality",
                    "Include error handling and reconnection logic"
                ],
                solution: {
                    code: `const express = require('express');
        const http = require('http');
        const socketIO = require('socket.io');
        const mongoose = require('mongoose');
        const Redis = require('ioredis');
        const { promisify } = require('util');
        
        // Initialize Express app and Socket.IO
        const app = express();
        const server = http.createServer(app);
        const io = socketIO(server);
        
        // Redis clients for pub/sub
        const publisher = new Redis();
        const subscriber = new Redis();
        
        // MongoDB connection
        mongoose.connect('mongodb://localhost/chat', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        // Message Schema
        const messageSchema = new mongoose.Schema({
            room: { type: String, required: true },
            sender: { type: String, required: true },
            content: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
            delivered: { type: Boolean, default: false },
            read: { type: Boolean, default: false }
        });
        
        const Message = mongoose.model('Message', messageSchema);
        
        // Room Schema
        const roomSchema = new mongoose.Schema({
            name: { type: String, required: true },
            participants: [String],
            type: { type: String, enum: ['private', 'group'], default: 'private' },
            created: { type: Date, default: Date.now }
        });
        
        const Room = mongoose.model('Room', roomSchema);
        
        // User presence tracking
        const userPresence = new Map();
        
        // Socket.IO middleware for authentication
        io.use(async (socket, next) => {
            const token = socket.handshake.auth.token;
            try {
                // Verify user token (implement your auth logic here)
                socket.userId = 'user-' + Math.random().toString(36).substr(2, 9);
                next();
            } catch (error) {
                next(new Error('Authentication error'));
            }
        });
        
        // Handle socket connections
        io.on('connection', (socket) => {
            console.log(\`User connected: \${socket.userId}\`);
            
            // Update user presence
            userPresence.set(socket.userId, {
                online: true,
                lastSeen: new Date(),
                socketId: socket.id
            });
            
            // Broadcast user presence to all clients
            io.emit('presence', {
                userId: socket.userId,
                online: true
            });
        
            // Join a chat room
            socket.on('join-room', async ({ roomId }) => {
                try {
                    const room = await Room.findById(roomId);
                    if (!room) {
                        socket.emit('error', { message: 'Room not found' });
                        return;
                    }
        
                    socket.join(roomId);
                    
                    // Get recent messages
                    const messages = await Message.find({ room: roomId })
                        .sort('-timestamp')
                        .limit(50);
                    
                    socket.emit('room-history', messages);
                    
                    // Notify room participants
                    socket.to(roomId).emit('user-joined', {
                        userId: socket.userId,
                        timestamp: new Date()
                    });
                } catch (error) {
                    socket.emit('error', { message: 'Error joining room' });
                }
            });
        
            // Handle new message
            socket.on('send-message', async (data) => {
                try {
                    const { roomId, content } = data;
                    
                    // Create and save message
                    const message = new Message({
                        room: roomId,
                        sender: socket.userId,
                        content,
                        timestamp: new Date()
                    });
                    await message.save();
        
                    // Publish message to Redis
                    const messageData = {
                        id: message._id,
                        room: roomId,
                        sender: socket.userId,
                        content,
                        timestamp: message.timestamp
                    };
                    
                    await publisher.publish(
                        'chat_messages', 
                        JSON.stringify(messageData)
                    );
        
                    // Send acknowledgment to sender
                    socket.emit('message-sent', {
                        messageId: message._id,
                        timestamp: message.timestamp
                    });
        
                    // Broadcast to room participants
                    socket.to(roomId).emit('new-message', messageData);
                } catch (error) {
                    socket.emit('error', { message: 'Error sending message' });
                }
            });
        
            // Handle message delivery status
            socket.on('message-delivered', async ({ messageId }) => {
                try {
                    await Message.findByIdAndUpdate(messageId, {
                        delivered: true,
                        deliveredAt: new Date()
                    });
        
                    // Notify message sender
                    const message = await Message.findById(messageId);
                    io.to(message.sender).emit('delivery-status', {
                        messageId,
                        status: 'delivered'
                    });
                } catch (error) {
                    socket.emit('error', { message: 'Error updating delivery status' });
                }
            });
        
            // Handle message read status
            socket.on('message-read', async ({ messageId }) => {
                try {
                    await Message.findByIdAndUpdate(messageId, {
                        read: true,
                        readAt: new Date()
                    });
        
                    // Notify message sender
                    const message = await Message.findById(messageId);
                    io.to(message.sender).emit('read-status', {
                        messageId,
                        status: 'read'
                    });
                } catch (error) {
                    socket.emit('error', { message: 'Error updating read status' });
                }
            });
        
            // Handle typing indicators
            socket.on('typing', ({ roomId }) => {
                socket.to(roomId).emit('user-typing', {
                    userId: socket.userId,
                    timestamp: new Date()
                });
            });
        
            // Handle disconnection
            socket.on('disconnect', () => {
                userPresence.set(socket.userId, {
                    online: false,
                    lastSeen: new Date()
                });
        
                // Broadcast user offline status
                io.emit('presence', {
                    userId: socket.userId,
                    online: false,
                    lastSeen: new Date()
                });
            });
        });
        
        // Subscribe to Redis messages
        subscriber.subscribe('chat_messages');
        subscriber.on('message', (channel, message) => {
            if (channel === 'chat_messages') {
                const messageData = JSON.parse(message);
                // Handle message broadcast to relevant clients
                io.to(messageData.room).emit('new-message', messageData);
            }
        });
        
        // Error handling
        process.on('unhandledRejection', (error) => {
            console.error('Unhandled promise rejection:', error);
        });
        
        // Start server
        const PORT = process.env.PORT || 3000;
        server.listen(PORT, () => {
            console.log(\`Server running on port \${PORT}\`);
        });`,
                    explanation: "This advanced chat system implementation demonstrates:\n\n" +
                        "1. Real-time Features:\n" +
                        "   - WebSocket communication using Socket.IO\n" +
                        "   - User presence tracking\n" +
                        "   - Typing indicators\n" +
                        "   - Message delivery/read receipts\n" +
                        "   - Room-based chat functionality\n\n" +
                        "2. Scalability Solutions:\n" +
                        "   - Redis pub/sub for message broadcasting\n" +
                        "   - MongoDB for message persistence\n" +
                        "   - User presence management\n" +
                        "   - Efficient message delivery\n\n" +
                        "3. Advanced Concepts:\n" +
                        "   - Event-driven architecture\n" +
                        "   - Message acknowledgment system\n" +
                        "   - Error handling and recovery\n" +
                        "   - Connection state management\n\n" +
                        "4. Best Practices:\n" +
                        "   - Authentication middleware\n" +
                        "   - Database schema design\n" +
                        "   - Real-time event handling\n" +
                        "   - Error broadcasting\n\n" +
                        "5. Performance Optimizations:\n" +
                        "   - Message caching\n" +
                        "   - Efficient room management\n" +
                        "   - Optimized database queries\n" +
                        "   - Connection pooling"
                }
            }
        ]
        }
    }
    },

    {
        id: 3,
        title: "UI/UX Development",
        description: "To learn UX design, follow this roadmap",
        extendedContent: `
            User Experience (UX) and User Interface (UI) design are crucial for creating products that users find intuitive and enjoyable.
            This roadmap will help you understand the principles of UX design, such as user research, personas, 
            wireframing, prototyping, and user testing.
            
            You'll also dive into UI design, learning about visual hierarchy, color theory, typography, and modern design tools 
            like Figma, Sketch, or Adobe XD. The goal is to master the skills required to create aesthetically pleasing 
            and user-friendly interfaces.
            
            Furthermore, this roadmap includes information on accessibility (ensuring your designs are usable for everyone) 
            and the latest trends in UI/UX, including motion design, micro-interactions, and adaptive design for multiple devices.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            prerequisites: [
                "Basic understanding of design principles",
                "Familiarity with basic graphic design tools",
                "Good eye for aesthetics and attention to detail",
                "Understanding of human psychology basics",
                "Basic knowledge of HTML/CSS (helpful but not required)",
                "Critical thinking and problem-solving skills"
            ],
            outcomes: [
                "Conduct effective user research and create user personas",
                "Design intuitive and user-friendly interfaces",
                "Create wireframes, prototypes, and mockups",
                "Master modern design tools (Figma, Sketch, Adobe XD)",
                "Implement accessibility best practices",
                "Develop responsive and adaptive designs",
                "Create effective user flows and information architecture",
                "Execute usability testing and iterate designs",
                "Apply design systems and component libraries",
                "Understand and implement design thinking methodology"
            ],
            sections: [
                {
                    title: "UX Research & Strategy",
                    content: "Learn fundamental UX research methods including user interviews, surveys, usability testing, and analytics. Master creating user personas, journey maps, and conducting competitive analysis. Understand how to translate research insights into actionable design strategies."
                },
                {
                    title: "UI Design Fundamentals",
                    content: "Master core UI design principles including typography, color theory, layout design, and visual hierarchy. Learn about design systems, component libraries, and creating consistent, scalable interfaces. Understand grid systems and responsive design principles."
                },
                {
                    title: "Design Process & Tools",
                    content: "Learn the end-to-end design process from ideation to final deliverables. Master industry-standard tools like Figma, Sketch, and Adobe XD. Understand wireframing, prototyping, and creating interactive designs. Learn version control and design collaboration best practices."
                },
                {
                    title: "Interaction & Motion Design",
                    content: "Explore advanced interaction design patterns, micro-interactions, and animation principles. Learn to create meaningful transitions and feedback mechanisms. Understand how to enhance user experience through motion while maintaining usability and performance."
                },
                {
                    title: "Accessibility & Best Practices",
                    content: "Learn how to design inclusive interfaces that work for all users. Master WCAG guidelines and accessibility standards. Understand how to conduct accessibility audits and implement improvements. Learn about performance optimization and cross-platform compatibility."
                },
                {
                    title: "Professional Practice",
                    content: "Develop skills in presenting and defending design decisions, conducting design reviews, and working with stakeholders. Learn about design documentation, handoff processes, and collaboration with developers. Understand design ethics and industry best practices."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "User Persona Creation",
                    code: `// User Persona Template
        {
            "persona": {
                "name": "Sarah Chen",
                "age": 28,
                "occupation": "Digital Marketing Manager",
                "location": "Urban area, San Francisco",
                
                "background": {
                    "education": "Bachelor's in Marketing",
                    "family": "Single, lives with roommate",
                    "lifestyle": "Tech-savvy, busy professional",
                    "personality": ["Organized", "Goal-oriented", "Early adopter"]
                },
                
                "goals": [
                    "Streamline workflow and increase productivity",
                    "Stay updated with industry trends",
                    "Maintain work-life balance"
                ],
                
                "painPoints": [
                    "Too many tools and platforms to manage",
                    "Difficulty tracking project progress",
                    "Limited time for learning new tools"
                ],
                
                "behaviors": {
                    "technology": "Power user of productivity apps",
                    "socialMedia": "Active on LinkedIn and Twitter",
                    "shopping": "Researches thoroughly before purchasing",
                    "workStyle": "Prefers mobile-first solutions"
                },
                
                "preferences": {
                    "devices": ["Smartphone", "Laptop", "Tablet"],
                    "apps": ["Slack", "Trello", "Google Suite"],
                    "communication": "Quick, visual information"
                }
            }
        }`,
                    explanation: "A structured user persona template demonstrating how to organize and document user research findings. This helps in creating user-centered designs by understanding target users' needs, behaviors, and preferences."
                },
                {
                    title: "Wireframe Component Library",
                    code: `<!-- Low-fidelity Wireframe Components -->
        <div class="wireframe-library">
            <!-- Header Component -->
            <header class="component">
                <div class="logo-placeholder"></div>
                <nav class="nav-placeholder">
                    <div class="nav-item"></div>
                    <div class="nav-item"></div>
                    <div class="nav-item"></div>
                </nav>
                <div class="cta-button"></div>
            </header>
        
            <!-- Card Component -->
            <div class="card-component">
                <div class="image-placeholder"></div>
                <div class="content">
                    <div class="title-placeholder"></div>
                    <div class="text-placeholder"></div>
                    <div class="button-placeholder"></div>
                </div>
            </div>
        
            <!-- Form Component -->
            <form class="form-component">
                <div class="input-group">
                    <div class="label"></div>
                    <div class="input"></div>
                </div>
                <div class="input-group">
                    <div class="label"></div>
                    <div class="textarea"></div>
                </div>
                <div class="button-group">
                    <div class="submit-button"></div>
                </div>
            </form>
        </div>
        
        <style>
        /* Wireframe Styles */
        .wireframe-library {
            background: #f5f5f5;
            padding: 20px;
            font-family: sans-serif;
        }
        
        .component {
            background: #fff;
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
        }
        
        /* Placeholder Styles */
        .logo-placeholder {
            width: 100px;
            height: 40px;
            background: #ddd;
        }
        
        .nav-item {
            width: 60px;
            height: 20px;
            background: #ddd;
            margin: 0 10px;
        }
        
        .image-placeholder {
            width: 100%;
            height: 200px;
            background: #ddd;
        }
        
        .title-placeholder {
            width: 80%;
            height: 24px;
            background: #ddd;
            margin: 10px 0;
        }
        
        .text-placeholder {
            width: 100%;
            height: 60px;
            background: #ddd;
        }
        
        .input, .textarea {
            width: 100%;
            height: 40px;
            background: #ddd;
            margin: 5px 0;
        }
        
        .textarea {
            height: 100px;
        }
        
        .button-placeholder {
            width: 120px;
            height: 40px;
            background: #ddd;
            margin-top: 15px;
        }
        </style>`,
                    explanation: "A basic wireframe component library showcasing common UI elements in their simplest form. This helps in rapid prototyping and maintaining consistency across designs."
                },
                {
                    title: "Color System Definition",
                    code: `// Design System - Color Tokens
        const colorSystem = {
            // Primary Brand Colors
            primary: {
                main: '#2196F3',
                light: '#64B5F6',
                dark: '#1976D2',
                contrast: '#FFFFFF'
            },
            
            // Secondary Brand Colors
            secondary: {
                main: '#FF4081',
                light: '#FF80AB',
                dark: '#F50057',
                contrast: '#FFFFFF'
            },
            
            // Neutral Colors
            neutral: {
                100: '#FFFFFF',
                200: '#F5F5F5',
                300: '#E0E0E0',
                400: '#BDBDBD',
                500: '#9E9E9E',
                600: '#757575',
                700: '#616161',
                800: '#424242',
                900: '#212121'
            },
            
            // Semantic Colors
            semantic: {
                success: {
                    light: '#81C784',
                    main: '#4CAF50',
                    dark: '#388E3C'
                },
                warning: {
                    light: '#FFB74D',
                    main: '#FF9800',
                    dark: '#F57C00'
                },
                error: {
                    light: '#E57373',
                    main: '#F44336',
                    dark: '#D32F2F'
                },
                info: {
                    light: '#64B5F6',
                    main: '#2196F3',
                    dark: '#1976D2'
                }
            },
            
            // Special Purpose Colors
            surface: {
                background: '#FFFFFF',
                paper: '#F5F5F5',
                overlay: 'rgba(0, 0, 0, 0.5)'
            },
            
            // Typography Colors
            text: {
                primary: 'rgba(0, 0, 0, 0.87)',
                secondary: 'rgba(0, 0, 0, 0.6)',
                disabled: 'rgba(0, 0, 0, 0.38)',
                hint: 'rgba(0, 0, 0, 0.38)'
            }
        };
        
        // Color Accessibility Functions
        const colorUtils = {
            // Check contrast ratio
            getContrastRatio: (foreground, background) => {
                // Implementation of WCAG contrast ratio calculation
                // Returns value between 1 and 21
                return calculateContrastRatio(foreground, background);
            },
            
            // Get accessible text color
            getAccessibleTextColor: (backgroundColor) => {
                const contrast = getContrastRatio(backgroundColor, '#FFFFFF');
                return contrast >= 4.5 ? '#FFFFFF' : '#000000';
            },
            
            // Generate color variations
            generateColorShades: (baseColor) => {
                // Implementation of color shade generation
                // Returns lighter and darker variations
                return {
                    lighter: adjustLightness(baseColor, 0.2),
                    darker: adjustLightness(baseColor, -0.2)
                };
            }
        };
        
        // Usage Example
        const buttonStyles = {
            primary: {
                background: colorSystem.primary.main,
                color: colorSystem.primary.contrast,
                hover: colorSystem.primary.dark
            },
            secondary: {
                background: colorSystem.secondary.main,
                color: colorSystem.secondary.contrast,
                hover: colorSystem.secondary.dark
            }
        };`,
                    explanation: "A comprehensive color system definition that includes brand colors, semantic colors, and accessibility utilities. This ensures consistent color usage across the application while maintaining accessibility standards."
                },
                {
                    title: "Interactive Prototype Setup",
                    code: `// Figma-like Prototype Interaction Model
        const prototypeInteractions = {
            screens: [
                {
                    id: "home",
                    elements: [
                        {
                            id: "login-button",
                            type: "button",
                            interactions: [
                                {
                                    trigger: "click",
                                    animation: {
                                        type: "smart-animate",
                                        duration: 300,
                                        easing: "ease-in-out"
                                    },
                                    destination: "login-screen"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "login-screen",
                    elements: [
                        {
                            id: "form-submit",
                            type: "button",
                            interactions: [
                                {
                                    trigger: "click",
                                    conditions: [
                                        {
                                            type: "form-valid",
                                            destination: "dashboard",
                                            animation: {
                                                type: "slide-left",
                                                duration: 400
                                            }
                                        },
                                        {
                                            type: "form-invalid",
                                            actions: [
                                                {
                                                    type: "show-error",
                                                    target: "error-message"
                                                },
                                                {
                                                    type: "shake-animation",
                                                    target: "form-container"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            
            globalInteractions: {
                gestures: {
                    "swipe-left": {
                        trigger: "gesture",
                        condition: "navigation-enabled",
                        action: "navigate-forward"
                    },
                    "swipe-right": {
                        trigger: "gesture",
                        condition: "navigation-enabled",
                        action: "navigate-back"
                    }
                },
                transitions: {
                    default: {
                        type: "fade",
                        duration: 300,
                        easing: "ease-in-out"
                    }
                }
            },
            
            animations: {
                "slide-left": {
                    keyframes: [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-100%)" }
                    ],
                    options: {
                        duration: 300,
                        easing: "ease-in-out",
                        fill: "forwards"
                    }
                },
                "shake": {
                    keyframes: [
                        { transform: "translateX(0)" },
                        { transform: "translateX(-10px)" },
                        { transform: "translateX(10px)" },
                        { transform: "translateX(-10px)" },
                        { transform: "translateX(10px)" },
                        { transform: "translateX(0)" }
                    ],
                    options: {
                        duration: 500,
                        easing: "ease-in-out"
                    }
                }
            }
        };
        
        // Interaction Controller
        class PrototypeController {
            constructor(config) {
                this.config = config;
                this.currentScreen = config.screens[0];
                this.history = [];
            }
            
            handleInteraction(elementId, eventType) {
                const element = this.findElement(elementId);
                if (!element) return;
                
                const interaction = element.interactions.find(
                    i => i.trigger === eventType
                );
                
                if (interaction) {
                    this.executeInteraction(interaction);
                }
            }
            
            executeInteraction(interaction) {
                if (interaction.conditions) {
                    // Handle conditional interactions
                    const condition = interaction.conditions.find(
                        c => this.evaluateCondition(c)
                    );
                    if (condition) {
                        this.executeActions(condition.actions);
                    }
                } else {
                    // Direct interaction
                    this.navigate(interaction.destination, interaction.animation);
                }
            }
            
            navigate(screenId, animation) {
                const nextScreen = this.config.screens.find(s => s.id === screenId);
                if (nextScreen) {
                    this.history.push(this.currentScreen);
                    this.animateTransition(this.currentScreen, nextScreen, animation);
                    this.currentScreen = nextScreen;
                }
            }
        }`,
                    explanation: "A prototype interaction system similar to what you might find in design tools like Figma. It demonstrates how to structure interactive prototypes with complex animations, conditions, and state management."
                }
            ],
        
            roadmap: [
                {
                    title: "1. UX Research & Design Thinking",
                    description: "Master the fundamentals of user research and design thinking methodology",
                    topics: [
                        "User Research Methods and Tools",
                        "Creating User Personas and Journey Maps",
                        "Design Thinking Process",
                        "Competitive Analysis",
                        "User Psychology and Behavior",
                        "Research Documentation",
                        "Stakeholder Interviews"
                    ]
                },
                {
                    title: "2. UI Design Fundamentals",
                    description: "Learn core visual design principles and UI design fundamentals",
                    topics: [
                        "Typography and Color Theory",
                        "Layout and Grid Systems",
                        "Visual Hierarchy",
                        "Gestalt Principles",
                        "Responsive Design",
                        "Design Systems",
                        "Icon and Illustration Design"
                    ]
                },
                {
                    title: "3. Wireframing & Prototyping",
                    description: "Develop skills in creating wireframes and interactive prototypes",
                    topics: [
                        "Low-fidelity Wireframing",
                        "High-fidelity Mockups",
                        "Interactive Prototyping",
                        "User Flows and Sitemaps",
                        "Information Architecture",
                        "Navigation Patterns",
                        "Mobile-first Design"
                    ]
                },
                {
                    title: "4. Design Tools & Software",
                    description: "Master industry-standard design and prototyping tools",
                    topics: [
                        "Figma Advanced Techniques",
                        "Sketch Workflow",
                        "Adobe XD Prototyping",
                        "Version Control for Designers",
                        "Design Handoff Tools",
                        "Collaboration Platforms",
                        "Asset Management"
                    ]
                },
                {
                    title: "5. Interaction & Motion Design",
                    description: "Learn to create engaging interactions and animations",
                    topics: [
                        "Micro-interactions",
                        "Animation Principles",
                        "Gesture-based Interfaces",
                        "State Transitions",
                        "Loading States and Feedback",
                        "Motion Design Tools",
                        "Performance Considerations"
                    ]
                },
                {
                    title: "6. Accessibility & Best Practices",
                    description: "Ensure designs are accessible and follow industry standards",
                    topics: [
                        "WCAG Guidelines",
                        "Inclusive Design Principles",
                        "Color Contrast and Typography",
                        "Screen Reader Optimization",
                        "Keyboard Navigation",
                        "Cross-platform Testing",
                        "Documentation Standards"
                    ]
                }
            ],
            resources: {
                documentation: [
                    {
                        title: "Material Design Guidelines",
                        url: "https://material.io/design",
                        description: "Comprehensive design system guidelines by Google covering principles, patterns, and best practices",
                        type: "Design System Documentation"
                    },
                    {
                        title: "Apple Human Interface Guidelines",
                        url: "https://developer.apple.com/design/human-interface-guidelines/",
                        description: "Detailed guidelines for designing iOS and macOS applications",
                        type: "Design System Documentation"
                    },
                    {
                        title: "Nielsen Norman Group",
                        url: "https://www.nngroup.com/articles/",
                        description: "Research-based UX guidance and articles from industry experts",
                        type: "Research Articles"
                    },
                    {
                        title: "Interaction Design Foundation",
                        url: "https://www.interaction-design.org/literature",
                        description: "Comprehensive collection of UX design articles and literature",
                        type: "Educational Resource"
                    },
                    {
                        title: "WCAG Guidelines",
                        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                        description: "Web Content Accessibility Guidelines - standards for accessible design",
                        type: "Accessibility Standards"
                    }
                ],
                tutorials: [
                    {
                        title: "Figma Learning Resources",
                        url: "https://www.figma.com/resources/learn-design/",
                        description: "Official tutorials and guides for mastering Figma",
                        type: "Tool Tutorial"
                    },
                    {
                        title: "Google UX Design Professional Certificate",
                        url: "https://www.coursera.org/professional-certificates/google-ux-design",
                        description: "Comprehensive UX design course covering the entire design process",
                        type: "Online Course"
                    },
                    {
                        title: "Design Better by InVision",
                        url: "https://www.designbetter.co/",
                        description: "Collection of books, podcasts, and tutorials about product design",
                        type: "Learning Platform"
                    },
                    {
                        title: "UI Design Daily",
                        url: "https://uidesigndaily.com/",
                        description: "Daily UI design examples and tutorials for practice",
                        type: "Design Inspiration"
                    },
                    {
                        title: "Shift Nudge Interface Design Course",
                        url: "https://shiftnudge.com/",
                        description: "Advanced interface design course focused on visual design skills",
                        type: "Online Course"
                    }
                ],
                videos: [
                    {
                        title: "Figma YouTube Channel",
                        url: "https://www.youtube.com/c/Figmadesign",
                        description: "Official Figma tutorials and design process videos",
                        platform: "YouTube"
                    },
                    {
                        title: "AJ&Smart",
                        url: "https://www.youtube.com/c/AJSmart",
                        description: "Design sprints and UX design process videos",
                        platform: "YouTube"
                    },
                    {
                        title: "Jesse Showalter",
                        url: "https://www.youtube.com/c/JesseShowalter",
                        description: "UI/UX design tutorials and industry insights",
                        platform: "YouTube"
                    },
                    {
                        title: "Flux Academy",
                        url: "https://www.youtube.com/c/FluxWithRanSegall",
                        description: "Web design and UI/UX career guidance",
                        platform: "YouTube"
                    },
                    {
                        title: "Design Course",
                        url: "https://www.youtube.com/c/DesignCourse",
                        description: "Modern web design and UI/UX tutorials",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "Don't Make Me Think",
                        author: "Steve Krug",
                        description: "Classic guide to web usability and user-centered design",
                        level: "Beginner"
                    },
                    {
                        title: "The Design of Everyday Things",
                        author: "Don Norman",
                        description: "Fundamental principles of design and human psychology",
                        level: "Beginner to Intermediate"
                    },
                    {
                        title: "100 Things Every Designer Needs to Know About People",
                        author: "Susan Weinschenk",
                        description: "Psychology principles applied to design",
                        level: "Intermediate"
                    },
                    {
                        title: "Grid Systems in Graphic Design",
                        author: "Josef Müller-Brockmann",
                        description: "Comprehensive guide to grid systems and layout design",
                        level: "Advanced"
                    },
                    {
                        title: "Thinking with Type",
                        author: "Ellen Lupton",
                        description: "Critical guide for designers about typography",
                        level: "Intermediate"
                    }
                ],
                tools: [
                    {
                        title: "Figma",
                        url: "https://www.figma.com",
                        description: "Collaborative interface design and prototyping tool",
                        type: "Design Tool",
                        category: "Essential"
                    },
                    {
                        title: "Maze",
                        url: "https://maze.design",
                        description: "User testing and design validation platform",
                        type: "Testing Tool",
                        category: "Research"
                    },
                    {
                        title: "Coolors",
                        url: "https://coolors.co",
                        description: "Color scheme generator and palette tool",
                        type: "Color Tool",
                        category: "Utility"
                    },
                    {
                        title: "Principle",
                        url: "https://principleformac.com",
                        description: "Advanced animation and interaction design tool",
                        type: "Animation Tool",
                        category: "Advanced"
                    },
                    {
                        title: "Whimsical",
                        url: "https://whimsical.com",
                        description: "Flowcharts, wireframes, and mind mapping tool",
                        type: "Planning Tool",
                        category: "Planning"
                    }
                ],
                communities: [
                    {
                        title: "Dribbble",
                        url: "https://dribbble.com",
                        description: "Design inspiration and community platform",
                        type: "Design Community"
                    },
                    {
                        title: "Behance",
                        url: "https://www.behance.net",
                        description: "Portfolio showcase and design inspiration",
                        type: "Portfolio Platform"
                    },
                    {
                        title: "Design System Slack Community",
                        url: "https://design.systems/slack",
                        description: "Community for design system discussions",
                        type: "Slack Community"
                    },
                    {
                        title: "UX Design Discord",
                        url: "https://discord.gg/uxdesign",
                        description: "Active Discord community for UX designers",
                        type: "Discord Community"
                    },
                    {
                        title: "ADPList",
                        url: "https://adplist.org",
                        description: "Mentorship platform for designers",
                        type: "Mentorship Platform"
                    }
                ]
            },
            practice: {
                beginnerExercises: [
                    {
                        title: "User Persona Creation",
                        difficulty: "Easy",
                        description: "Create a detailed user persona for a mobile banking app targeting young professionals.",
                        hints: [
                            "Research demographic data for target audience",
                            "Include goals, pain points, and behaviors",
                            "Add realistic personal details and background",
                            "Consider daily technology usage patterns"
                        ],
                        solution: {
                            code: `
                    "persona": {
                        "name": "Alex Rivera",
                        "age": 29,
                        "occupation": "Software Developer",
                    
                    "demographics": {
                        "location": "Urban area",
                        "income": "$85,000/year",
                        "education": "Bachelor's in Computer Science",
                        "livingStatus": "Rents apartment, lives with partner"
                    },
                    
                    "goals": [
                        "Easily track daily expenses",
                        "Save money for a house down payment",
                        "Manage multiple investment accounts",
                        "Quick and secure payment transfers"
                    ],
                    
                    "painPoints": [
                        "Complex banking interfaces",
                        "Slow transaction processing",
                        "Difficulty tracking spending categories",
                        "Security concerns with mobile banking"
                    ],
                    
                    "behaviors": {
                        "technology": "Early adopter, uses multiple fintech apps",
                        "banking": "Primarily mobile banking, rarely visits branches",
                        "spending": "Regular online shopping, subscription services",
                        "saving": "Automatic monthly savings, investment apps"
                    },
                    
                    "scenarios": [
                        "Sending rent payment to roommate",
                        "Checking expenses while shopping",
                        "Setting up automatic bill payments",
                        "Transferring money between accounts"
                    ]`,
                            explanation: "This user persona example demonstrates key elements including:\n" +
                                "1. Demographic details that help visualize the user\n" +
                                "2. Specific goals and pain points related to the product\n" +
                                "3. Realistic behaviors and usage patterns\n" +
                                "4. Practical scenarios for feature validation\n" +
                                "5. Details that inform design decisions"
                        }
                    },
                    {
                        title: "Color Scheme Design",
                        difficulty: "Easy",
                        description: "Create a comprehensive color scheme for a fitness tracking app, including primary, secondary, and semantic colors.",
                        hints: [
                            "Consider accessibility and contrast ratios",
                            "Include different shades for each primary color",
                            "Define semantic colors for success/error states",
                            "Create dark mode variations"
                        ],
                        solution: {
                            code: `const colorSystem = {
                light: {
                    primary: {
                        main: '#2196F3',
                        light: '#64B5F6',
                        dark: '#1976D2',
                        contrast: '#FFFFFF'
                    },
                    secondary: {
                        main: '#FF4081',
                        light: '#FF80AB',
                        dark: '#F50057',
                        contrast: '#FFFFFF'
                    },
                    semantic: {
                        success: '#4CAF50',
                        warning: '#FFC107',
                        error: '#F44336',
                        info: '#2196F3'
                    },
                    background: {
                        primary: '#FFFFFF',
                        secondary: '#F5F5F5',
                        tertiary: '#EEEEEE'
                    },
                    text: {
                        primary: '#212121',
                        secondary: '#757575',
                        disabled: '#BDBDBD'
                    }
                },
                dark: {
                    primary: {
                        main: '#90CAF9',
                        light: '#BBE0FB',
                        dark: '#5B9BD5',
                        contrast: '#000000'
                    },
                    secondary: {
                        main: '#FF80AB',
                        light: '#FFB2DD',
                        dark: '#C94F7C',
                        contrast: '#000000'
                    },
                    semantic: {
                        success: '#81C784',
                        warning: '#FFD54F',
                        error: '#E57373',
                        info: '#64B5F6'
                    },
                    background: {
                        primary: '#121212',
                        secondary: '#1E1E1E',
                        tertiary: '#2C2C2C'
                    },
                    text: {
                        primary: '#FFFFFF',
                        secondary: '#B0B0B0',
                        disabled: '#707070'
                    }
                }
            };`,
                            explanation: "This color system solution includes:\n" +
                                "1. Complete light and dark mode variations\n" +
                                "2. Semantic colors for different states\n" +
                                "3. Hierarchical text colors\n" +
                                "4. Multiple background variations\n" +
                                "5. Proper contrast ratios for accessibility"
                        }
                    },
                    {
                        title: "Basic Wireframe Layout",
                        difficulty: "Easy",
                        description: "Create a low-fidelity wireframe for a blog post page including header, navigation, content area, and sidebar.",
                        hints: [
                            "Focus on content hierarchy",
                            "Consider responsive breakpoints",
                            "Include navigation patterns",
                            "Plan for different content lengths"
                        ],
                        solution: {
                            code: `<!-- HTML Structure for Wireframe -->
            <div class="wireframe-container">
                <header class="header">
                    <div class="logo"></div>
                    <nav class="navigation">
                        <div class="nav-item"></div>
                        <div class="nav-item"></div>
                        <div class="nav-item"></div>
                    </nav>
                </header>
            
                <main class="content">
                    <article class="blog-post">
                        <div class="title-block">
                            <div class="category"></div>
                            <div class="headline"></div>
                            <div class="meta-info"></div>
                        </div>
                        
                        <div class="featured-image"></div>
                        
                        <div class="content-blocks">
                            <div class="text-block"></div>
                            <div class="text-block"></div>
                            <div class="quote-block"></div>
                            <div class="text-block"></div>
                        </div>
                    </article>
            
                    <aside class="sidebar">
                        <div class="widget">
                            <div class="widget-title"></div>
                            <div class="widget-content"></div>
                        </div>
                        <div class="widget">
                            <div class="widget-title"></div>
                            <div class="widget-content"></div>
                        </div>
                    </aside>
                </main>
            
                <footer class="footer">
                    <div class="footer-content"></div>
                </footer>
            </div>
            
            <style>
            /* Wireframe Styles */
            .wireframe-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            
            .header {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 20px;
                padding: 20px 0;
                border-bottom: 2px solid #ddd;
            }
            
            .logo {
                width: 120px;
                height: 40px;
                background: #ddd;
            }
            
            .navigation {
                display: flex;
                gap: 20px;
                align-items: center;
                justify-content: flex-end;
            }
            
            .nav-item {
                width: 60px;
                height: 20px;
                background: #ddd;
            }
            
            .content {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 40px;
                margin: 40px 0;
            }
            
            .blog-post {
                display: flex;
                flex-direction: column;
                gap: 30px;
            }
            
            .title-block {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            .category {
                width: 80px;
                height: 24px;
                background: #ddd;
            }
            
            .headline {
                height: 48px;
                background: #ddd;
            }
            
            .meta-info {
                height: 20px;
                background: #ddd;
                width: 60%;
            }
            
            .featured-image {
                width: 100%;
                height: 400px;
                background: #ddd;
            }
            
            .content-blocks {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            
            .text-block {
                height: 100px;
                background: #ddd;
            }
            
            .quote-block {
                height: 120px;
                background: #eee;
                margin: 20px 40px;
            }
            
            .sidebar {
                display: flex;
                flex-direction: column;
                gap: 30px;
            }
            
            .widget {
                background: #f5f5f5;
                padding: 20px;
            }
            
            .widget-title {
                height: 24px;
                background: #ddd;
                margin-bottom: 15px;
            }
            
            .widget-content {
                height: 150px;
                background: #ddd;
            }
            
            @media (max-width: 768px) {
                .content {
                    grid-template-columns: 1fr;
                }
                
                .featured-image {
                    height: 300px;
                }
            }
            </style>`,
                            explanation: "This wireframe solution demonstrates:\n" +
                                "1. Clear visual hierarchy and content structure\n" +
                                "2. Responsive layout using CSS Grid\n" +
                                "3. Proper spacing and proportions\n" +
                                "4. Mobile-friendly considerations\n" +
                                "5. Placeholder elements for dynamic content"
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Interactive Prototype",
                        difficulty: "Medium",
                        description: "Create an interactive prototype for a mobile app onboarding flow with animations and micro-interactions.",
                        hints: [
                            "Plan the onboarding steps flow",
                            "Design meaningful transitions",
                            "Include progress indication",
                            "Add skip and back options"
                        ],
                        solution: {
                            code: `Onboarding Flow Configuration
            const onboardingConfig = {
                screens: [
                    {
                        id: "welcome",
                        title: "Welcome to AppName",
                        subtitle: "Start your journey with us",
                        animation: {
                            type: "fade-up",
                            duration: 600,
                            elements: ["title", "subtitle", "image"]
                        },
                        actions: {
                            primary: {
                                text: "Get Started",
                                action: "next-screen"
                            }
                        }
                    },
                    {
                        id: "feature-1",
                        title: "Track Your Progress",
                        subtitle: "See your improvements over time",
                        animation: {
                            type: "slide-left",
                            duration: 400,
                            elements: ["image", "content"]
                        },
                        actions: {
                            primary: {
                                text: "Next",
                                action: "next-screen"
                            },
                            secondary: {
                                text: "Back",
                                action: "previous-screen"
                            }
                        }
                    },
                    {
                        id: "feature-2",
                        title: "Set Your Goals",
                        subtitle: "Achieve more with goal tracking",
                        animation: {
                            type: "slide-left",
                            duration: 400,
                            elements: ["image", "content"]
                        },
                        actions: {
                            primary: {
                                text: "Next",
                                action: "next-screen"
                            },
                            secondary: {
                                text: "Back",
                                action: "previous-screen"
                            }
                        }
                    },
                    {
                        id: "setup",
                        title: "Quick Setup",
                        subtitle: "Let's personalize your experience",
                        animation: {
                            type: "fade-up",
                            duration: 600,
                            elements: ["form-elements"]
                        },
                        actions: {
                            primary: {
                                text: "Complete Setup",
                                action: "finish-onboarding"
                            },
                            secondary: {
                                text: "Back",
                                action: "previous-screen"
                            }
                        }
                    }
                ],
                
                animations: {
                    "fade-up": {
                        keyframes: [
                            { opacity: 0, transform: "translateY(20px)" },
                            { opacity: 1, transform: "translateY(0)" }
                        ],
                        options: {
                            duration: 600,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards"
                        }
                    },
                    "slide-left": {
                        keyframes: [
                            { transform: "translateX(100%)" },
                            { transform: "translateX(0)" }
                        ],
                        options: {
                            duration: 400,
                            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                            fill: "forwards"
                        }
                    }
                },
                
                transitions: {
                    default: {
                        type: "fade",
                        duration: 300,
                        easing: "ease-in-out"
                    },
                    navigation: {
                        forward: {
                            type: "slide-left",
                            duration: 400,
                            easing: "ease-in-out"
                        },
                        backward: {
                            type: "slide-right",
                            duration: 400,
                            easing: "ease-in-out"
                        }
                    }
                },
                
                progressBar: {
                    type: "dots",
                    animation: true,
                    showLabels: false
                }
            };
            
            class OnboardingController {
                constructor(config) {
                    this.config = config;
                    this.currentScreen = 0;
                    this.init();
                }
                
                init() {
                    this.setupEventListeners();
                    this.renderScreen(this.currentScreen);
                    this.updateProgress();
                }
                
                setupEventListeners() {
                    document.addEventListener('click', (e) => {
                        if (e.target.matches('.action-button')) {
                            const action = e.target.dataset.action;
                            this.handleAction(action);
                        }
                    });
                    
                    // Gesture handling
                    let touchStartX = 0;
                    document.addEventListener('touchstart', (e) => {
                        touchStartX = e.touches[0].clientX;
                    });
                    
                    document.addEventListener('touchend', (e) => {
                        const touchEndX = e.changedTouches[0].clientX;
                        const diff = touchStartX - touchEndX;
                        
                        if (Math.abs(diff) > 50) {
                            if (diff > 0) this.nextScreen();
                            else this.previousScreen();
                        }
                    });
                }
                
                handleAction(action) {
                    switch(action) {
                        case 'next-screen':
                            this.nextScreen();
                            break;
                        case 'previous-screen':
                            this.previousScreen();
                            break;
                        case 'finish-onboarding':
                            this.completeOnboarding();
                            break;
                    }
                }
                
                async renderScreen(index) {
                    const screen = this.config.screens[index];
                    const container = document.querySelector('.screen-container');
                    
                    // Prepare new screen content
                    const content = this.createScreenContent(screen);
                    
                    // Animate out current content
                    await this.animateScreenTransition('out');
                    
                    // Update DOM
                    container.innerHTML = content;
                    
                    // Animate in new content
                    await this.animateScreenTransition('in');
                    
                    // Trigger screen-specific animations
                    this.triggerScreenAnimations(screen);
                }
                
                async animateScreenTransition(direction) {
                    const screen = document.querySelector('.screen-content');
                    const animation = direction === 'out' ? 
                        { opacity: [1, 0] } : 
                        { opacity: [0, 1] };
                        
                    await screen.animate(animation, {
                        duration: 300,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    }).finished;
                }
                
                triggerScreenAnimations(screen) {
       screen.animation.elements.forEach((elementId, index) => {
           const element = document.getElementById(elementId);
           if (!element) return;

           const delay = index * 150; // Stagger animations
           const animation = this.config.animations[screen.animation.type];
           
           element.animate(animation.keyframes, {
               ...animation.options,
               delay
           });
       });
   }
   
   updateProgress() {
       const progress = document.querySelector('.progress-indicator');
       const totalScreens = this.config.screens.length;
       const currentProgress = ((this.currentScreen + 1) / totalScreens) * 100;
       } 
   }
   
   async nextScreen() {
       if (this.currentScreen < this.config.screens.length - 1) {
           const transition = this.config.transitions.navigation.forward;
           await this.animateTransition(transition);
           this.currentScreen++;
           await this.renderScreen(this.currentScreen);
           this.updateProgress();
       }
   }
   
   async previousScreen() {
       if (this.currentScreen > 0) {
           const transition = this.config.transitions.navigation.backward;
           await this.animateTransition(transition);
           this.currentScreen--;
           await this.renderScreen(this.currentScreen);
           this.updateProgress();
       }
   }
   
   async animateTransition(transition) {
       const container = document.querySelector('.screen-container');
       await container.animate(
           this.getTransitionKeyframes(transition.type),
           {
               duration: transition.duration,
               easing: transition.easing,
               fill: 'forwards'
           }
       ).finished;
   }
   
   getTransitionKeyframes(type) {
       switch(type) {
           case 'slide-left':
               return [
                   { transform: 'translateX(0)' },
                   { transform: 'translateX(-100%)' }
               ];
           case 'slide-right':
               return [
                   { transform: 'translateX(0)' },
                   { transform: 'translateX(100%)' }
               ];
           default:
               return [
                   { opacity: 1 },
                   { opacity: 0 }
               ];
       }
   }
   
   completeOnboarding() {
       // Save onboarding completion status
       localStorage.setItem('onboarding_completed', 'true');
       
       // Trigger completion callback if provided
       if (this.config.onComplete) {
           this.config.onComplete();
       }
       
       // Navigate to main app
       window.location.href = '/dashboard';
   }
}`,
               explanation: "This interactive prototype solution demonstrates:\n" +
                   "1. Comprehensive screen management and transitions\n" +
                   "2. Configurable animations and micro-interactions\n" +
                   "3. Progress tracking and navigation controls\n" +
                   "4. Touch gesture support for mobile\n" +
                   "5. Clean architecture with separation of concerns\n" +
                   "6. Extensible configuration system\n" +
                   "7. Error handling and state management"
           }
       }
   ],
   advancedExercises: [
       {
           title: "Design System Creation",
           difficulty: "Hard",
           description: "Create a comprehensive design system including components, tokens, documentation, and usage guidelines.",
           hints: [
               "Define clear design principles",
               "Create reusable components",
               "Document accessibility guidelines",
               "Include interactive examples",
               "Create implementation guides"
           ],
           solution: {
               code: `// Design System Definition
const designSystem = {
   // Design Tokens
   tokens: {
       colors: {
           primary: {
               50: '#E3F2FD',
               100: '#BBDEFB',
               200: '#90CAF9',
               300: '#64B5F6',
               400: '#42A5F5',
               500: '#2196F3',
               600: '#1E88E5',
               700: '#1976D2',
               800: '#1565C0',
               900: '#0D47A1'
           },
           // ... other color scales
           
           semantic: {
               success: '#4CAF50',
               warning: '#FFC107',
               error: '#F44336',
               info: '#2196F3'
           }
       },
       
       typography: {
           fontFamilies: {
               heading: "'Inter', sans-serif",
               body: "'Inter', sans-serif",
               mono: "'Fira Code', monospace"
           },
           
           fontSizes: {
               xs: '0.75rem',    // 12px
               sm: '0.875rem',   // 14px
               base: '1rem',     // 16px
               lg: '1.125rem',   // 18px
               xl: '1.25rem',    // 20px
               '2xl': '1.5rem',  // 24px
               '3xl': '1.875rem',// 30px
               '4xl': '2.25rem', // 36px
               '5xl': '3rem'     // 48px
           },
           
           lineHeights: {
               tight: '1.25',
               base: '1.5',
               relaxed: '1.75'
           },
           
           fontWeights: {
               normal: '400',
               medium: '500',
               semibold: '600',
               bold: '700'
           }
       },
       
       spacing: {
           px: '1px',
           0: '0',
           1: '0.25rem',
           2: '0.5rem',
           3: '0.75rem',
           4: '1rem',
           5: '1.25rem',
           6: '1.5rem',
           8: '2rem',
           10: '2.5rem',
           12: '3rem',
           16: '4rem',
           20: '5rem',
           24: '6rem',
           32: '8rem'
       },
       
       breakpoints: {
           sm: '640px',
           md: '768px',
           lg: '1024px',
           xl: '1280px',
           '2xl': '1536px'
       },
       
       shadows: {
           sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
           base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
           md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
           lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
           xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
           '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
           inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
       },
       
       animation: {
           durations: {
               fast: '150ms',
               base: '300ms',
               slow: '450ms',
               slower: '600ms'
           },
           
           easings: {
               ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
               easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
               easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
               easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
           }
       }
   },
   
   // Component Definitions
   components: {
       Button: {
           variants: {
               primary: {
                   base: {
                       background: 'tokens.colors.primary.500',
                       color: 'white',
                       padding: 'tokens.spacing.3 tokens.spacing.6',
                       borderRadius: 'tokens.spacing.2',
                       fontWeight: 'tokens.typography.fontWeights.medium'
                   },
                   hover: {
                       background: 'tokens.colors.primary.600'
                   },
                   active: {
                       background: 'tokens.colors.primary.700'
                   },
                   disabled: {
                       background: 'tokens.colors.primary.200',
                       cursor: 'not-allowed'
                   }
               },
               secondary: {
                   base: {
                       background: 'transparent',
                       color: 'tokens.colors.primary.500',
                       border: '1px solid tokens.colors.primary.500',
                       padding: 'tokens.spacing.3 tokens.spacing.6',
                       borderRadius: 'tokens.spacing.2',
                       fontWeight: 'tokens.typography.fontWeights.medium'
                   },
                   hover: {
                       background: 'tokens.colors.primary.50'
                   },
                   active: {
                       background: 'tokens.colors.primary.100'
                   },
                   disabled: {
                       borderColor: 'tokens.colors.primary.200',
                       color: 'tokens.colors.primary.200',
                       cursor: 'not-allowed'
                   }
               }
           },
           
           sizes: {
               sm: {
                   fontSize: 'tokens.typography.fontSizes.sm',
                   padding: 'tokens.spacing.2 tokens.spacing.4'
               },
               md: {
                   fontSize: 'tokens.typography.fontSizes.base',
                   padding: 'tokens.spacing.3 tokens.spacing.6'
               },
               lg: {
                   fontSize: 'tokens.typography.fontSizes.lg',
                   padding: 'tokens.spacing.4 tokens.spacing.8'
               }
           }
       },
       
       Input: {
           variants: {
               outline: {
                   base: {
                       border: '1px solid tokens.colors.gray.300',
                       borderRadius: 'tokens.spacing.2',
                       padding: 'tokens.spacing.3',
                       fontSize: 'tokens.typography.fontSizes.base'
                   },
                   focus: {
                       borderColor: 'tokens.colors.primary.500',
                       boxShadow: '0 0 0 1px tokens.colors.primary.500'
                   },
                   error: {
                       borderColor: 'tokens.colors.semantic.error',
                       boxShadow: '0 0 0 1px tokens.colors.semantic.error'
                   }
               }
           }
       }
       // ... other component definitions
   },
   
   // Pattern Library
   patterns: {
       forms: {
           login: {
               layout: 'stack',
               spacing: 'tokens.spacing.6',
               components: ['Input', 'Input', 'Button'],
               validation: true
           },
           search: {
               layout: 'inline',
               spacing: 'tokens.spacing.3',
               components: ['Input', 'Button']
           }
       },
       
       navigation: {
           header: {
               layout: 'flex',
               spacing: 'tokens.spacing.4',
               components: ['Logo', 'NavLinks', 'Button']
           }
       }
   },
   
   // Documentation
   documentation: {
       principles: [
           {
               title: "Consistency",
               description: "Use consistent patterns and components throughout the system"
           },
           {
               title: "Accessibility",
               description: "Ensure all components meet WCAG 2.1 AA standards"
           },
           {
               title: "Flexibility",
               description: "Components should be adaptable to different contexts"
           }
       ],
       
       usage: {
           Button: {
               description: "Buttons trigger actions or navigate to new pages",
               guidelines: [
                   "Use primary buttons for main actions",
                   "Limit buttons per section",
                   "Use clear, action-oriented labels"
               ],
               examples: [
                   {
                       title: "Primary Action",
                       code: '<Button variant="primary">Save Changes</Button>'
                   }
               ]
           }
       }
   }
};`,
               explanation: "This design system solution includes:\n" +
                   "1. Comprehensive token system for colors, typography, spacing\n" +
                   "2. Detailed component definitions with variants and states\n" +
                   "3. Common UI patterns and layouts\n" +
                   "4. Extensive documentation and usage guidelines\n" +
                   "5. Accessibility considerations\n" +
                   "6. Animation and interaction definitions\n" +
                   "7. Responsive design tokens\n" +
                   "8. Component composition patterns"
           }
       }
   ]
}
            }
    },
    {
        id: 4,
        title: "C++ Learning Track",
        description: "To learn C++, follow this roadmap",
        extendedContent: `
            C++ is a powerful, high-performance programming language commonly used for systems programming, game development, 
            and competitive programming. This roadmap will start with the basics of C++, including syntax, loops, functions, 
            and data structures.
            
            You'll then move into object-oriented programming (OOP), covering key concepts like classes, inheritance, 
            polymorphism, and templates. The roadmap also introduces advanced topics such as memory management, 
            pointers, and file handling.
            
            In the final stages, you'll explore algorithms, data structures like trees, graphs, and dynamic programming, 
            which are crucial for competitive programming and technical interviews. This comprehensive roadmap will help 
            you master C++ and build robust, high-performance applications.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            trackInfo: {
                title: "C++ Learning Track",
                description: "To learn C++, follow this roadmap",
                extendedContent: `C++ is a powerful, high-performance programming language commonly used for systems programming, game development, 
                    and competitive programming. This roadmap will start with the basics of C++, including syntax, loops, functions, 
                    and data structures.`,
                prerequisites: [
                    "Basic understanding of computer programming",
                    "Familiarity with any programming language",
                    "Understanding of basic mathematics",
                    "Problem-solving aptitude"
                ],
                outcomes: [
                    "Master C++ fundamentals and syntax",
                    "Object-oriented programming expertise",
                    "Memory management and pointers",
                    "STL and template programming",
                    "System programming capabilities"
                ],
                sections: [
                    {
                        title: "Fundamentals",
                        content: "Learn C++ syntax, data types, control structures, and basic I/O operations"
                    },
                    {
                        title: "Object-Oriented Programming",
                        content: "Master classes, objects, inheritance, polymorphism, and encapsulation"
                    },
                    {
                        title: "Advanced Concepts",
                        content: "Explore templates, STL, memory management, and file handling"
                    }
                ]
            }
        },
        content: {
            examples: [
                {
                    title: "Hello World",
                    code: `#include <iostream>
        using namespace std;
        
        int main() {
            cout << "Hello World!";
            return 0;
        }`,
                    explanation: "The classic first program that displays 'Hello World' to the console."
                },
                {
                    title: "Variables and Data Types",
                    code: `#include <iostream>
        using namespace std;
        
        int main() {
            // Integer types
            int age = 25;
            
            // Floating point types
            double price = 99.99;
            
            // Character type
            char grade = 'A';
            
            // Boolean type
            bool isStudent = true;
            
            // String (text) type
            string name = "John Doe";
            
            cout << "Name: " << name << endl;
            cout << "Age: " << age << endl;
            cout << "Price: $" << price << endl;
            cout << "Grade: " << grade << endl;
            cout << "Is Student: " << isStudent << endl;
            
            return 0;
        }`,
                    explanation: "Demonstrates the basic data types in C++ including integers, floating-point numbers, characters, booleans, and strings."
                },
                {
                    title: "Basic Input/Output",
                    code: `#include <iostream>
        using namespace std;
        
        int main() {
            string name;
            int age;
            
            cout << "Enter your name: ";
            getline(cin, name);
            
            cout << "Enter your age: ";
            cin >> age;
            
            cout << "Hello " << name << "!" << endl;
            cout << "You are " << age << " years old." << endl;
            
            return 0;
        }`,
                    explanation: "Shows how to get input from users and display output using cin and cout."
                },
                {
                    title: "Control Structures",
                    code: `#include <iostream>
        using namespace std;
        
        int main() {
            int number;
            cout << "Enter a number: ";
            cin >> number;
            
            // If-else statement
            if (number > 0) {
                cout << "Number is positive" << endl;
            } else if (number < 0) {
                cout << "Number is negative" << endl;
            } else {
                cout << "Number is zero" << endl;
            }
            
            // For loop
            cout << "Counting to " << number << ": ";
            for(int i = 1; i <= number; i++) {
                cout << i << " ";
            }
            cout << endl;
            
            return 0;
        }`,
                    explanation: "Demonstrates if-else conditions and for loops in C++."
                },
                {
                    title: "Functions",
                    code: `#include <iostream>
        using namespace std;
        
        // Function to calculate square
        int square(int x) {
            return x * x;
        }
        
        // Function to check if number is even
        bool isEven(int x) {
            return x % 2 == 0;
        }
        
        int main() {
            int num = 5;
            
            cout << num << " squared is: " << square(num) << endl;
            
            if(isEven(num)) {
                cout << num << " is even" << endl;
            } else {
                cout << num << " is odd" << endl;
            }
            
            return 0;
        }`,
                    explanation: "Shows how to create and use functions in C++. Includes examples of different return types and parameters."
                }
            ],
        
            
            //roadmap section
            roadmap: [
                {
                    title: "1. C++ Fundamentals",
                    topics: [
                        "Basic syntax and structure",
                        "Variables and data types",
                        "Operators and expressions",
                        "Input/Output operations",
                        "Control structures (if, switch, loops)",
                        "Arrays and strings",
                        "Functions and parameters"
                    ],
                    description: "Master the core concepts of C++ programming and basic syntax."
                },
                {
                    title: "2. Object-Oriented Programming",
                    topics: [
                        "Classes and objects",
                        "Constructors and destructors",
                        "Access specifiers",
                        "Inheritance and polymorphism",
                        "Virtual functions",
                        "Abstract classes",
                        "Operator overloading"
                    ],
                    description: "Learn how to write object-oriented code and understand OOP principles in C++."
                },
                {
                    title: "3. Memory Management & Pointers",
                    topics: [
                        "Understanding memory allocation",
                        "Pointers and references",
                        "Dynamic memory allocation",
                        "Memory leaks and prevention",
                        "Smart pointers",
                        "Stack vs Heap",
                        "Resource management"
                    ],
                    description: "Master C++'s memory management features and understand pointer manipulation."
                },
                {
                    title: "4. Standard Template Library (STL)",
                    topics: [
                        "Containers (vector, list, map)",
                        "Iterators",
                        "Algorithms",
                        "String manipulation",
                        "Templates basics",
                        "Function objects",
                        "STL utility classes"
                    ],
                    description: "Explore the powerful features of the C++ Standard Template Library."
                },
                {
                    title: "5. Advanced C++ Concepts",
                    topics: [
                        "Exception handling",
                        "File handling",
                        "Template meta-programming",
                        "Lambda expressions",
                        "Move semantics",
                        "Perfect forwarding",
                        "RAII principle"
                    ],
                    description: "Dive into advanced C++ features and modern C++ concepts."
                }
            ],
        
            //resources section
            resources: {
                documentation: [
                    {
                        title: "CPlusPlus.com",
                        url: "http://www.cplusplus.com/doc/tutorial/",
                        description: "Complete C++ language tutorial and reference",
                        type: "Official Documentation"
                    },
                    {
                        title: "C++ Reference",
                        url: "https://en.cppreference.com/",
                        description: "Comprehensive C++ language reference",
                        type: "Reference"
                    }
                ],
                tutorials: [
                    {
                        title: "Learn C++",
                        url: "https://www.learncpp.com/",
                        description: "Free, comprehensive C++ course for beginners",
                        type: "Tutorial Series"
                    },
                    {
                        title: "GeeksforGeeks C++",
                        url: "https://www.geeksforgeeks.org/c-plus-plus/",
                        description: "Large collection of C++ tutorials and practice problems",
                        type: "Tutorial Platform"
                    }
                ],
                videos: [
                    {
                        title: "C++ Programming Course",
                        url: "https://www.youtube.com/watch?v=8jLOx1hD3_o",
                        description: "Beginner to Advanced C++ Programming Course by freeCodeCamp",
                        platform: "YouTube"
                    },
                    {
                        title: "The Cherno C++ Series",
                        url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
                        description: "In-depth C++ tutorial series covering advanced topics",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "A Tour of C++",
                        author: "Bjarne Stroustrup",
                        description: "Concise introduction to C++ by its creator",
                        level: "Intermediate"
                    },
                    {
                        title: "C++ Primer",
                        author: "Stanley Lippman",
                        description: "Comprehensive introduction to C++ programming",
                        level: "Beginner"
                    }
                ],
                practice: [
                    {
                        title: "LeetCode",
                        url: "https://leetcode.com/",
                        description: "Platform for practicing coding problems, many in C++",
                        type: "Practice Platform"
                    },
                    {
                        title: "HackerRank C++",
                        url: "https://www.hackerrank.com/domains/cpp",
                        description: "C++-specific practice problems and tutorials",
                        type: "Practice Platform"
                    }
                ]
            },
        
        
            //practice section
            practice: {
                beginnerExercises: [
                    {
                        title: "Hello World Program",
                        difficulty: "Easy",
                        description: "Create a program that prints 'Hello, World!' to the console.",
                        hints: [
                            "Use cout to print",
                            "Remember to include iostream"
                        ],
                        solution: {
                            code: `#include <iostream>
        using namespace std;
        
        int main() {
            cout << "Hello, World!" << endl;
            return 0;
        }`,
                            explanation: "This is the classic Hello World program in C++. We include the iostream header for input/output operations and use cout to print to the console."
                        }
                    },
                    {
                        title: "Calculator",
                        difficulty: "Easy",
                        description: "Create a simple calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division).",
                        hints: [
                            "Use switch-case for operations",
                            "Handle division by zero",
                            "Use floating-point numbers for accurate division"
                        ],
                        solution: {
                            code: `#include <iostream>
        using namespace std;
        
        int main() {
            double num1, num2;
            char operation;
            
            cout << "Enter first number: ";
            cin >> num1;
            
            cout << "Enter operation (+, -, *, /): ";
            cin >> operation;
            
            cout << "Enter second number: ";
            cin >> num2;
            
            switch(operation) {
                case '+':
                    cout << num1 << " + " << num2 << " = " << num1 + num2 << endl;
                    break;
                case '-':
                    cout << num1 << " - " << num2 << " = " << num1 - num2 << endl;
                    break;
                case '*':
                    cout << num1 << " * " << num2 << " = " << num1 * num2 << endl;
                    break;
                case '/':
                    if(num2 != 0)
                        cout << num1 << " / " << num2 << " = " << num1 / num2 << endl;
                    else
                        cout << "Error: Division by zero!" << endl;
                    break;
                default:
                    cout << "Invalid operation!" << endl;
            }
            return 0;
        }`,
                            explanation: "This calculator handles basic arithmetic operations using a switch-case structure. It includes input validation and division by zero checking."
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Student Grade Manager",
                        difficulty: "Medium",
                        description: "Create a program to manage student grades using classes. Include features for adding students, recording grades, and calculating averages.",
                        hints: [
                            "Use classes to represent students",
                            "Implement vector to store grades",
                            "Create methods for grade calculations"
                        ],
                        solution: {
                            code: `#include <iostream>
        #include <vector>
        #include <string>
        using namespace std;
        
        class Student {
        private:
            string name;
            vector<double> grades;
        
        public:
            Student(string n) : name(n) {}
        
            void addGrade(double grade) {
                if(grade >= 0 && grade <= 100) {
                    grades.push_back(grade);
                }
            }
        
            double getAverage() const {
                if(grades.empty()) return 0.0;
                double sum = 0;
                for(double grade : grades) {
                    sum += grade;
                }
                return sum / grades.size();
            }
        
            void displayInfo() const {
                cout << "Student: " << name << endl;
                cout << "Grades: ";
                for(double grade : grades) {
                    cout << grade << " ";
                }
                cout << "\nAverage: " << getAverage() << endl;
            }
        };
        
        int main() {
            vector<Student> students;
            
            // Example usage
            Student s1("John Doe");
            s1.addGrade(85.5);
            s1.addGrade(92.0);
            s1.addGrade(88.5);
            s1.displayInfo();
        
            return 0;
        }`,
                            explanation: "This implementation uses a Student class to manage individual student data. It uses vectors to store grades and includes methods for adding grades and calculating averages."
                        }
                    },
                    {
                        title: "Bank Account System",
                        difficulty: "Medium",
                        description: "Implement a banking system with features for deposit, withdrawal, and balance inquiry using OOP concepts.",
                        hints: [
                            "Use class to represent account",
                            "Implement proper error handling",
                            "Use private members for data protection"
                        ],
                        solution: {
                            code: `#include <iostream>
        #include <string>
        using namespace std;
        
        class BankAccount {
        private:
            string accountNumber;
            string accountHolder;
            double balance;
        
        public:
            BankAccount(string number, string holder, double initialBalance = 0.0)
                : accountNumber(number), accountHolder(holder), balance(initialBalance) {}
        
            void deposit(double amount) {
                if(amount > 0) {
                    balance += amount;
                    cout << "Deposited: $" << amount << endl;
                } else {
                    cout << "Invalid deposit amount" << endl;
                }
            }
        
            void withdraw(double amount) {
                if(amount > 0 && amount <= balance) {
                    balance -= amount;
                    cout << "Withdrawn: $" << amount << endl;
                } else {
                    cout << "Invalid withdrawal amount or insufficient funds" << endl;
                }
            }
        
            void displayBalance() const {
                cout << "Account Holder: " << accountHolder << endl;
                cout << "Account Number: " << accountNumber << endl;
                cout << "Current Balance: $" << balance << endl;
            }
        };
        
        int main() {
            BankAccount account("1234567890", "John Doe", 1000.0);
            
            account.displayBalance();
            account.deposit(500.0);
            account.withdraw(200.0);
            account.displayBalance();
        
            return 0;
        }`,
                            explanation: "This bank account system demonstrates encapsulation by keeping the balance private and providing public methods for transactions. It includes error checking for invalid operations."
                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "Library Management System",
                        difficulty: "Hard",
                        description: "Create a complete library management system with features for book tracking, member management, and borrowing system.",
                        hints: [
                            "Use multiple classes",
                            "Implement inheritance",
                            "Use STL containers",
                            "Add file handling for persistence"
                        ],
                        solution: {
                            code: `#include <iostream>
        #include <vector>
        #include <string>
        #include <map>
        using namespace std;
        
        class Book {
        private:
            string isbn;
            string title;
            string author;
            bool available;
        
        public:
            Book(string i, string t, string a)
                : isbn(i), title(t), author(a), available(true) {}
        
            string getIsbn() const { return isbn; }
            bool isAvailable() const { return available; }
            void setAvailable(bool status) { available = status; }
        
            void displayInfo() const {
                cout << "ISBN: " << isbn << endl
                     << "Title: " << title << endl
                     << "Author: " << author << endl
                     << "Status: " << (available ? "Available" : "Borrowed") << endl;
            }
        };
        
        class Member {
        private:
            int id;
            string name;
            vector<string> borrowedBooks; // stores ISBNs
        
        public:
            Member(int i, string n) : id(i), name(n) {}
        
            void borrowBook(string isbn) {
                borrowedBooks.push_back(isbn);
            }
        
            void returnBook(string isbn) {
                auto it = find(borrowedBooks.begin(), borrowedBooks.end(), isbn);
                if(it != borrowedBooks.end()) {
                    borrowedBooks.erase(it);
                }
            }
        
            void displayInfo() const {
                cout << "Member ID: " << id << endl
                     << "Name: " << name << endl
                     << "Books borrowed: " << borrowedBooks.size() << endl;
            }
        };
        
        class Library {
        private:
            map<string, Book> books;
            map<int, Member> members;
        
        public:
            void addBook(const Book& book) {
                books[book.getIsbn()] = book;
            }
        
            void addMember(const Member& member) {
                members[member.getId()] = member;
            }
        
            bool borrowBook(int memberId, string isbn) {
                if(books[isbn].isAvailable()) {
                    books[isbn].setAvailable(false);
                    members[memberId].borrowBook(isbn);
                    return true;
                }
                return false;
            }
        
            void returnBook(int memberId, string isbn) {
                books[isbn].setAvailable(true);
                members[memberId].returnBook(isbn);
            }
        
            void displayAllBooks() const {
                for(const auto& pair : books) {
                    pair.second.displayInfo();
                    cout << "---------------" << endl;
                }
            }
        };
        
        int main() {
            Library library;
        
            // Example usage
            Book b1("123", "C++ Programming", "John Doe");
            Member m1(1, "Alice Smith");
        
            library.addBook(b1);
            library.addMember(m1);
        
            library.borrowBook(1, "123");
            library.displayAllBooks();
        
            return 0;
        }`,
                            explanation: "This comprehensive library system demonstrates advanced OOP concepts including multiple classes, STL containers, and complex object relationships. It includes book and member management with borrowing functionality."
                        }
                    },
                    {
                        title: "Custom String Class",
                        difficulty: "Hard",
                        description: "Implement your own string class with basic string operations and operator overloading.",
                        hints: [
                            "Implement dynamic memory allocation",
                            "Override common operators",
                            "Handle memory management properly",
                            "Implement copy constructor and assignment operator"
                        ],
                        solution: {
                            code: `#include <iostream>
        #include <cstring>
        using namespace std;
        
        class MyString {
        private:
            char* str;
            size_t length;
        
            void cleanup() {
                delete[] str;
                str = nullptr;
                length = 0;
            }
        
        public:
            // Constructor
            MyString(const char* s = "") {
                length = strlen(s);
                str = new char[length + 1];
                strcpy(str, s);
            }
        
            // Copy constructor
            MyString(const MyString& other) {
                length = other.length;
                str = new char[length + 1];
                strcpy(str, other.str);
            }
        
            // Destructor
            ~MyString() {
                cleanup();
            }
        
            // Assignment operator
            MyString& operator=(const MyString& other) {
                if(this != &other) {
                    cleanup();
                    length = other.length;
                    str = new char[length + 1];
                    strcpy(str, other.str);
                }
                return *this;
            }
        
            // Addition operator
            MyString operator+(const MyString& other) const {
                char* newStr = new char[length + other.length + 1];
                strcpy(newStr, str);
                strcat(newStr, other.str);
                MyString result(newStr);
                delete[] newStr;
                return result;
            }
        
            // Equality operator
            bool operator==(const MyString& other) const {
                return strcmp(str, other.str) == 0;
            }
        
            // Subscript operator
            char& operator[](size_t index) {
                if(index >= length) {
                    throw out_of_range("Index out of bounds");
                }
                return str[index];
            }
        
            // Length getter
            size_t size() const { return length; }
        
            // Stream output operator
            friend ostream& operator<<(ostream& os, const MyString& s) {
                os << s.str;
                return os;
            }
        };
        
        int main() {
            MyString s1("Hello ");
            MyString s2("World!");
            MyString s3 = s1 + s2;
        
            cout << s3 << endl;
            cout << "Length: " << s3.size() << endl;
            cout << "Character at index 1: " << s3[1] << endl;
        
            return 0;
        }`,
                            explanation: "This custom string class implementation shows advanced C++ concepts including operator overloading, memory management, copy construction, and proper resource handling."
                        }
                    }
                ],
                challengeProblems: [
                    {
                        title: "Memory Pool Allocator",
                        difficulty: "Expert",
                        description: "Implement a custom memory pool allocator for efficient memory management.",
                        hints: [
                            "Use placement new",
                            "Implement memory recycling",
                            "Handle fragmentation",
                            "Optimize for performance"
                        ],
                        solution: {
                            code: `#include <iostream>
        #include <vector>
        using namespace std;
        
        class MemoryPool {
        private:
            struct Block {
                Block* next;
            };
        
            void* pool;
            Block* freeList;
            size_t blockSize;
            size_t poolSize;
        
        public:
            MemoryPool(size_t block_size, size_t pool_blocks) 
                : blockSize(block_size), poolSize(block_size * pool_blocks) {
                
                // Allocate pool
                pool = operator new(poolSize);
                freeList = nullptr;
        
                // Initialize free list
                char* current = static_cast<char*>(pool);
                for(size_t i = 0; i < pool_blocks; ++i) {
                    Block* block = reinterpret_cast<Block*>(current);
                    block->next = freeList;
                    freeList = block;
                    current += blockSize;
                }
            }
        
            ~MemoryPool() {
                operator delete(pool);
            }
        
            void* allocate() {
                if(!freeList) return nullptr;
        
                Block* block = freeList;
                freeList = block->next;
                return block;
            }
        
            void deallocate(void* ptr) {
                if(!ptr) return;
        
                Block* block = static_cast<Block*>(ptr);
                block->next = freeList;
                freeList = block;
            }
        };
        
        // Example usage with a custom class
        class MyObject {
            int data[100];  // Some data
        public:
            MyObject() {
                for(int i = 0; i < 100; ++i) data[i] = i;
            }
        
            static void* operator new(size_t size, MemoryPool& pool) {
                return pool.allocate();
            }
        
            static void operator delete(void* ptr, MemoryPool& pool) {
                pool.deallocate(ptr);
            }
        };
        
        int main() {
            // Create a memory pool for MyObject instances
            MemoryPool pool(sizeof(MyObject), 100);
        
            // Allocate objects
            vector<MyObject*> objects;
            for(int i = 0; i < 10; ++i) {
                MyObject* obj = new(pool) MyObject();
                objects.push_back(obj);
            }
        
            // Deallocate objects
            for(MyObject* obj : objects) {
                obj->~MyObject();
                operator delete(obj, pool);
            }
        
            return 0;
        }`,
                            explanation: "This memory pool allocator demonstrates advanced memory management techniques. It pre-allocates a pool of memory and manages it efficiently, reducing allocation overhead and fragmentation."
                        }
                    }
                ]
            }
        }
    },
    {
        id: 5,
        title: "DSA Learning Track",
        description: "To learn DSA, follow this roadmap",
        extendedContent: `
            Data Structures and Algorithms (DSA) are essential for solving complex problems efficiently. This roadmap covers 
            fundamental data structures like arrays, linked lists, stacks, queues, hashmaps, and trees. You'll also dive 
            into algorithms such as sorting, searching, dynamic programming, and graph algorithms.
            
            As you progress, you'll learn how to analyze algorithm efficiency using Big O notation and develop an understanding 
            of time and space complexity. This track is perfect for preparing for technical interviews and competitive programming.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",

        trackInfo: {
            trackInfo: {
                title: "DSA Learning Track",
                description: "To learn DSA, follow this roadmap",
                extendedContent: `Data Structures and Algorithms (DSA) are essential for solving complex problems efficiently. This roadmap covers 
                    fundamental data structures like arrays, linked lists, stacks, queues, hashmaps, and trees.`,
                prerequisites: [
                    "Good understanding of at least one programming language",
                    "Basic mathematics and logic",
                    "Problem-solving skills",
                    "Understanding of time complexity basics"
                ],
                outcomes: [
                    "Master fundamental data structures",
                    "Implement and analyze algorithms",
                    "Solve complex programming problems",
                    "Optimize code for performance",
                    "Handle technical interviews effectively"
                ],
                sections: [
                    {
                        title: "Data Structures",
                        content: "Learn about arrays, linked lists, stacks, queues, trees, and graphs"
                    },
                    {
                        title: "Algorithms",
                        content: "Master searching, sorting, dynamic programming, and graph algorithms"
                    },
                    {
                        title: "Problem Solving",
                        content: "Practice with real-world problems and optimization techniques"
                    }
                ]
            }
        },
        content: {
            examples: [
                {
                    title: "Array Operations",
                    code: `// Example of basic array operations
        int arr[] = {1, 2, 3, 4, 5};
        int n = sizeof(arr) / sizeof(arr[0]);
        
        // Accessing elements
        cout << "First element: " << arr[0] << endl;
        
        // Linear search
        for(int i = 0; i < n; i++) {
            if(arr[i] == 3) {
                cout << "Found 3 at index " << i << endl;
                break;
            }
        }`,
                    explanation: "Basic array operations including initialization, accessing elements, and linear search implementation."
                },
                {
                    title: "Linked List Implementation",
                    code: `struct Node {
            int data;
            Node* next;
            Node(int val) : data(val), next(nullptr) {}
        };
        
        class LinkedList {
            Node* head;
        public:
            LinkedList() : head(nullptr) {}
            
            void insert(int val) {
                Node* newNode = new Node(val);
                if(!head) {
                    head = newNode;
                    return;
                }
                newNode->next = head;
                head = newNode;
            }
        };`,
                    explanation: "Implementation of a basic singly linked list with insertion operation."
                },
                {
                    title: "Stack Implementation",
                    code: `template <typename T>
        class Stack {
            vector<T> items;
            
        public:
            void push(T item) {
                items.push_back(item);
            }
            
            T pop() {
                if (isEmpty()) {
                    throw runtime_error("Stack is empty");
                }
                T item = items.back();
                items.pop_back();
                return item;
            }
            
            T peek() const {
                if (isEmpty()) {
                    throw runtime_error("Stack is empty");
                }
                return items.back();
            }
            
            bool isEmpty() const {
                return items.empty();
            }
            
            size_t size() const {
                return items.size();
            }
        };
        
        // Example usage:
        int main() {
            Stack<int> stack;
            
            // Push elements
            stack.push(1);
            stack.push(2);
            stack.push(3);
            
            // Pop and print elements
            while (!stack.isEmpty()) {
                cout << stack.pop() << " "; // Outputs: 3 2 1
            }
            
            return 0;
        }`,
                    explanation: "This example demonstrates a generic stack implementation using a vector. It includes all basic stack operations: push, pop, peek, isEmpty, and size. The stack follows LIFO (Last-In-First-Out) principle and includes proper error handling for empty stack operations."
                },
                {
                    title: "Binary Search Implementation",
                    code: `// Iterative Binary Search
        int binarySearch(vector<int>& arr, int target) {
            int left = 0;
            int right = arr.size() - 1;
            
            while (left <= right) {
                int mid = left + (right - left) / 2;  // Prevents integer overflow
                
                if (arr[mid] == target) {
                    return mid;  // Found the target
                }
                
                if (arr[mid] < target) {
                    left = mid + 1;  // Target is in the right half
                } else {
                    right = mid - 1;  // Target is in the left half
                }
            }
            
            return -1;  // Target not found
        }
        
        // Recursive Binary Search
        int binarySearchRecursive(vector<int>& arr, int target, int left, int right) {
            if (left > right) {
                return -1;  // Base case: target not found
            }
            
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;  // Found the target
            }
            
            if (arr[mid] < target) {
                // Search right half
                return binarySearchRecursive(arr, target, mid + 1, right);
            } else {
                // Search left half
                return binarySearchRecursive(arr, target, left, mid - 1);
            }
        }
        
        // Example usage:
        int main() {
            vector<int> arr = {1, 3, 5, 7, 9, 11, 13, 15};
            int target = 7;
            
            // Using iterative method
            int iterativeResult = binarySearch(arr, target);
            cout << "Iterative Result: " << iterativeResult << endl;
            
            // Using recursive method
            int recursiveResult = binarySearchRecursive(arr, target, 0, arr.size() - 1);
            cout << "Recursive Result: " << recursiveResult << endl;
            
            return 0;
        }`,
                    explanation: "This example shows both iterative and recursive implementations of binary search. Binary search is an efficient algorithm for finding an element in a sorted array with O(log n) time complexity. The code includes detailed comments explaining each step and demonstrates proper handling of array bounds and target comparison."
                },
                {
                    title: "Graph Representation and BFS Traversal",
                    code: `#include <queue>
        #include <vector>
        #include <unordered_map>
        
        class Graph {
            unordered_map<int, vector<int>> adjacencyList;
            
        public:
            // Add an edge to the graph
            void addEdge(int from, int to) {
                adjacencyList[from].push_back(to);
                adjacencyList[to].push_back(from); // For undirected graph
            }
            
            // Breadth-First Search traversal
            void BFS(int startVertex) {
                // Keep track of visited vertices
                unordered_map<int, bool> visited;
                
                // Create a queue for BFS
                queue<int> q;
                
                // Mark the start vertex as visited and enqueue it
                visited[startVertex] = true;
                q.push(startVertex);
                
                cout << "BFS starting from vertex " << startVertex << ": ";
                
                while (!q.empty()) {
                    // Dequeue a vertex and print it
                    int vertex = q.front();
                    cout << vertex << " ";
                    q.pop();
                    
                    // Get all adjacent vertices
                    // If an adjacent hasn't been visited, mark it visited
                    // and enqueue it
                    for (int adjacent : adjacencyList[vertex]) {
                        if (!visited[adjacent]) {
                            visited[adjacent] = true;
                            q.push(adjacent);
                        }
                    }
                }
                cout << endl;
            }
            
            // Print the graph structure
            void printGraph() {
                for (const auto& pair : adjacencyList) {
                    cout << "Vertex " << pair.first << " -> ";
                    for (int adjacent : pair.second) {
                        cout << adjacent << " ";
                    }
                    cout << endl;
                }
            }
        };
        
        int main() {
            Graph g;
            
            // Add edges to create a sample graph
            g.addEdge(0, 1);
            g.addEdge(0, 2);
            g.addEdge(1, 2);
            g.addEdge(2, 3);
            g.addEdge(3, 4);
            g.addEdge(4, 0);
            
            cout << "Graph structure:" << endl;
            g.printGraph();
            
            cout << "\nPerforming BFS traversal:" << endl;
            g.BFS(0);
            
            return 0;
        }`,
                    explanation: "This example demonstrates graph representation using an adjacency list and implements Breadth-First Search (BFS) traversal. The code shows how to create an undirected graph, add edges, and traverse it using BFS. The implementation uses STL containers (unordered_map, vector, queue) for efficient operations. BFS is crucial for shortest path algorithms in unweighted graphs and level-order traversals."
                }
            ],
            roadmap: [
                {
                    title: "1. Basic Data Structures",
                    description: "Master fundamental data structures and their operations",
                    topics: [
                        "Arrays and Dynamic Arrays",
                        "Linked Lists (Singly & Doubly)",
                        "Stacks and their applications",
                        "Queues and Priority Queues",
                        "Hash Tables and Collision Resolution",
                        "Trees (Binary & BST)",
                        "Heaps"
                    ]
                },
                {
                    title: "2. Basic Algorithms",
                    description: "Learn essential algorithmic techniques and analysis",
                    topics: [
                        "Time & Space Complexity",
                        "Searching Algorithms",
                        "Sorting Algorithms",
                        "Recursion Fundamentals",
                        "Two Pointer Technique",
                        "Sliding Window",
                        "Basic Problem Solving"
                    ]
                },
                {
                    title: "3. Advanced Data Structures",
                    description: "Explore complex data structures and their use cases",
                    topics: [
                        "AVL Trees",
                        "Red-Black Trees",
                        "B-Trees",
                        "Graphs Representation",
                        "Disjoint Sets",
                        "Trie",
                        "Segment Trees"
                    ]
                },
                {
                    title: "4. Advanced Algorithms",
                    description: "Master advanced algorithmic paradigms",
                    topics: [
                        "Dynamic Programming",
                        "Greedy Algorithms",
                        "Graph Algorithms",
                        "Backtracking",
                        "String Algorithms",
                        "Bit Manipulation",
                        "Advanced Problem Solving"
                    ]
                }
            ],
            resources: {
                documentation: [
                    {
                        title: "GeeksforGeeks DSA",
                        url: "https://www.geeksforgeeks.org/data-structures/",
                        description: "Comprehensive DSA tutorial and practice platform",
                        type: "Tutorial Platform"
                    },
                    {
                        title: "CP Algorithms",
                        url: "https://cp-algorithms.com/",
                        description: "Advanced algorithms and data structures",
                        type: "Reference"
                    }
                ],
                tutorials: [
                    {
                        title: "Introduction to Algorithms",
                        url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
                        description: "MIT OpenCourseWare's algorithm course",
                        type: "Course"
                    },
                    {
                        title: "Data Structures Easy to Advanced",
                        url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
                        description: "Comprehensive DSA course by William Fiset",
                        type: "Video Course"
                    }
                ],
                videos: [
                    {
                        title: "Abdul Bari Algorithms",
                        url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
                        description: "In-depth algorithms course",
                        platform: "YouTube"
                    },
                    {
                        title: "mycodeschool DSA",
                        url: "https://www.youtube.com/user/mycodeschool",
                        description: "Data structures and algorithms explained",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "Introduction to Algorithms (CLRS)",
                        author: "Cormen, Leiserson, Rivest, Stein",
                        description: "The most comprehensive algorithms book",
                        level: "Advanced"
                    },
                    {
                        title: "Competitive Programming 3",
                        author: "Steven Halim",
                        description: "Essential for competitive programming",
                        level: "Intermediate"
                    }
                ],
                practice: [
                    {
                        title: "LeetCode",
                        url: "https://leetcode.com/",
                        description: "Platform for practicing DSA problems",
                        type: "Practice Platform"
                    },
                    {
                        title: "Codeforces",
                        url: "https://codeforces.com/",
                        description: "Competitive programming platform",
                        type: "Competition Platform"
                    }
                ]
            },
            practice: {
                beginnerExercises: [
                    {
                        title: "Array Reversal",
                        difficulty: "Easy",
                        description: "Write a function to reverse an array in-place.",
                        hints: [
                            "Use two pointers approach",
                            "Think about swapping elements",
                            "Consider array length (odd vs even)"
                        ],
                        solution: {
                            code: `void reverseArray(int arr[], int n) {
            int start = 0, end = n - 1;
            while (start < end) {
                // Swap elements
                int temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        }`,
                            explanation: "This solution uses the two-pointer technique. We maintain two pointers, one at the start and one at the end of the array. We swap the elements at these positions and move the pointers towards the center until they meet."
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Binary Search Tree Implementation",
                        difficulty: "Medium",
                        description: "Implement a binary search tree with insert and search operations.",
                        hints: [
                            "Define a Node structure first",
                            "Handle the empty tree case",
                            "Remember BST properties",
                            "Use recursion for insertion"
                        ],
                        solution: {
                            code: `struct Node {
            int data;
            Node *left, *right;
            Node(int val) : data(val), left(nullptr), right(nullptr) {}
        };
        
        class BST {
            Node* root;
            
            Node* insertRec(Node* root, int val) {
                if (!root) return new Node(val);
                
                if (val < root->data)
                    root->left = insertRec(root->left, val);
                else if (val > root->data)
                    root->right = insertRec(root->right, val);
                    
                return root;
            }
            
        public:
            BST() : root(nullptr) {}
            
            void insert(int val) {
                root = insertRec(root, val);
            }
        };`,
                            explanation: "This implementation includes a Node structure and a BST class. The insert operation maintains the BST property where left child is smaller and right child is larger than the parent."
                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "Graph DFS Implementation",
                        difficulty: "Hard",
                        description: "Implement Depth First Search for a graph represented as an adjacency list.",
                        hints: [
                            "Use recursion for DFS",
                            "Keep track of visited nodes",
                            "Consider disconnected components",
                            "Think about base cases"
                        ],
                        solution: {
                            code: `class Graph {
            int V;
            vector<vector<int>> adj;
            
            void DFSUtil(int v, vector<bool>& visited) {
                visited[v] = true;
                cout << v << " ";
                
                for(int u : adj[v]) {
                    if(!visited[u])
                        DFSUtil(u, visited);
                }
            }
            
        public:
            Graph(int v) : V(v) {
                adj.resize(V);
            }
            
            void addEdge(int v, int u) {
                adj[v].push_back(u);
                adj[u].push_back(v);
            }
            
            void DFS() {
                vector<bool> visited(V, false);
                for(int v = 0; v < V; v++) {
                    if(!visited[v])
                        DFSUtil(v, visited);
                }
            }
        };`,
                            explanation: "This implementation uses adjacency list representation and recursion to perform DFS. It handles disconnected components and uses a visited array to prevent cycles."
                        }
                    }
                ]
            }
        }
    },
    {
        id: 6,
        title: "Competitive Programming",
        description: "To learn CP, follow this roadmap",
        extendedContent: `
            Competitive programming challenges you to solve complex problems under time constraints. 
            This roadmap introduces you to platforms like Codeforces, LeetCode, and HackerRank, where you can practice algorithmic problems.
            
            You'll learn important concepts like greedy algorithms, dynamic programming, graph theory, number theory, 
            and more. With a focus on efficiency, this track will prepare you for coding competitions and technical interviews.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",

        trackInfo: {
            title: "Competitive Programming Track",
            description: "Master competitive programming techniques",
            extendedContent: `Competitive programming challenges you to solve complex problems under time constraints. 
                This roadmap introduces you to platforms like Codeforces, LeetCode, and HackerRank, where you can practice 
                algorithmic problems. You'll learn important concepts like greedy algorithms, dynamic programming, graph theory,
                number theory, and more. With a focus on efficiency, this track will prepare you for coding competitions
                and technical interviews.`,
            prerequisites: [
                "Strong foundation in a programming language (preferably C++)",
                "Basic knowledge of data structures and algorithms",
                "Understanding of time and space complexity",
                "Familiarity with mathematics and logic",
                "Problem-solving aptitude and analytical thinking"
            ],
            outcomes: [
                "Solve complex algorithmic problems efficiently",
                "Master competitive programming contest strategies",
                "Implement advanced algorithms and data structures",
                "Optimize code for performance and accuracy",
                "Handle time constraints effectively",
                "Debug complex code under pressure",
                "Tackle technical interview challenges"
            ],
            sections: [
                {
                    title: "Contest Preparation",
                    content: "Learn the essentials of competitive programming, including fast I/O, contest templates, and time management strategies."
                },
                {
                    title: "Problem Solving Techniques",
                    content: "Master various algorithmic paradigms like greedy algorithms, divide and conquer, and dynamic programming."
                },
                {
                    title: "Advanced Data Structures",
                    content: "Implement and utilize complex data structures like segment trees, Fenwick trees, and persistent data structures."
                },
                {
                    title: "Graph Algorithms",
                    content: "Learn advanced graph algorithms, network flows, and tree-based problem solving techniques."
                },
                {
                    title: "Practice and Contests",
                    content: "Participate in online contests, virtual competitions, and solve diverse programming challenges."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "Fast I/O Template",
                    code: `#include <bits/stdc++.h>
        using namespace std;
        
        void fastIO() {
            ios_base::sync_with_stdio(false);
            cin.tie(NULL);
            cout.tie(NULL);
        }
        
        int main() {
            fastIO();
            
            int t;
            cin >> t;
            
            while(t--) {
                int n;
                cin >> n;
                vector<int> arr(n);
                
                for(int i = 0; i < n; i++) {
                    cin >> arr[i];
                }
                
                // Solution code here
                cout << "Result\\n";
            }
            return 0;
        }`,
                    explanation: "Standard CP template optimized for fast input/output operations. Essential for time-sensitive competitive problems."
                },
                {
                    title: "Next Greater Element",
                    code: `vector<int> findNextGreater(vector<int>& arr) {
            int n = arr.size();
            vector<int> result(n, -1);
            stack<int> st;  // Stack to store indices
            
            // Process all elements from right to left
            for(int i = n-1; i >= 0; i--) {
                // Remove elements smaller than current
                while(!st.empty() && arr[st.top()] <= arr[i]) {
                    st.pop();
                }
                
                // If stack not empty, top has next greater
                if(!st.empty()) {
                    result[i] = arr[st.top()];
                }
                
                // Push current element's index
                st.push(i);
            }
            
            return result;
        }`,
                    explanation: "Stack-based solution to find the next greater element for every array element. Demonstrates monotonic stack technique commonly used in CP."
                },
                {
                    title: "Matrix Exponentiation",
                    code: `const int MOD = 1e9 + 7;
        
        struct Matrix {
            vector<vector<long long>> mat;
            int n;
            
            Matrix(int _n) : n(_n) {
                mat.resize(n, vector<long long>(n, 0));
            }
            
            Matrix operator*(const Matrix& other) const {
                Matrix result(n);
                for(int i = 0; i < n; i++) {
                    for(int j = 0; j < n; j++) {
                        for(int k = 0; k < n; k++) {
                            result.mat[i][j] += mat[i][k] * other.mat[k][j];
                            result.mat[i][j] %= MOD;
                        }
                    }
                }
                return result;
            }
        };
        
        Matrix power(Matrix base, long long exp) {
            Matrix result(base.n);
            // Initialize result as identity matrix
            for(int i = 0; i < base.n; i++)
                result.mat[i][i] = 1;
                
            while(exp > 0) {
                if(exp & 1)
                    result = result * base;
                base = base * base;
                exp >>= 1;
            }
            return result;
        }`,
                    explanation: "Implementation of matrix exponentiation for solving linear recurrence problems efficiently. Common technique in dynamic programming optimization."
                },
                {
                    title: "Segment Tree with Lazy Propagation",
                    code: `class SegmentTree {
            vector<long long> tree, lazy;
            int n;
            
            void propagate(int node, int start, int end) {
                if(lazy[node] != 0) {
                    tree[node] += (end - start + 1) * lazy[node];
                    if(start != end) {
                        lazy[2*node+1] += lazy[node];
                        lazy[2*node+2] += lazy[node];
                    }
                    lazy[node] = 0;
                }
            }
            
            void updateRange(int node, int start, int end, int l, int r, long long val) {
                propagate(node, start, end);
                
                if(start > end || start > r || end < l)
                    return;
                    
                if(start >= l && end <= r) {
                    tree[node] += (end - start + 1) * val;
                    if(start != end) {
                        lazy[2*node+1] += val;
                        lazy[2*node+2] += val;
                    }
                    return;
                }
                
                int mid = (start + end) / 2;
                updateRange(2*node+1, start, mid, l, r, val);
                updateRange(2*node+2, mid+1, end, l, r, val);
                
                tree[node] = tree[2*node+1] + tree[2*node+2];
            }
            
            long long queryRange(int node, int start, int end, int l, int r) {
                if(start > end || start > r || end < l)
                    return 0;
                    
                propagate(node, start, end);
                
                if(start >= l && end <= r)
                    return tree[node];
                    
                int mid = (start + end) / 2;
                return queryRange(2*node+1, start, mid, l, r) +
                       queryRange(2*node+2, mid+1, end, l, r);
            }
            
        public:
            SegmentTree(int size) {
                n = size;
                tree.resize(4 * n);
                lazy.resize(4 * n);
            }
            
            void update(int l, int r, long long val) {
                updateRange(0, 0, n-1, l, r, val);
            }
            
            long long query(int l, int r) {
                return queryRange(0, 0, n-1, l, r);
            }
        };`,
                    explanation: "Advanced implementation of Segment Tree with lazy propagation for efficient range updates and queries. Essential for problems involving range operations."
                }
            ],
        
            roadmap: [
                {
                    title: "1. Programming Fundamentals",
                    description: "Master the essential programming concepts and optimization techniques.",
                    topics: [
                        "C++ STL mastery (vectors, maps, sets)",
                        "Time complexity analysis",
                        "Space complexity optimization",
                        "Input/Output optimization",
                        "Bit manipulation",
                        "Memory management",
                        "Template programming"
                    ]
                },
                {
                    title: "2. Basic Algorithms",
                    description: "Learn fundamental algorithms and their implementations.",
                    topics: [
                        "Binary search and its variations",
                        "Two pointers technique",
                        "Sliding window",
                        "Prefix and suffix arrays",
                        "Greedy algorithms",
                        "Complete search",
                        "Basic number theory"
                    ]
                },
                {
                    title: "3. Data Structures",
                    description: "Master essential data structures for competitive programming.",
                    topics: [
                        "Advanced array techniques",
                        "Stack and queue variations",
                        "Segment trees and BIT",
                        "Disjoint set union (DSU)",
                        "Sparse table",
                        "Trie and its variations",
                        "Custom data structures"
                    ]
                },
                {
                    title: "4. Dynamic Programming",
                    description: "Learn dynamic programming patterns and optimization.",
                    topics: [
                        "Classical DP problems",
                        "State optimization",
                        "Bitmasking DP",
                        "Tree DP",
                        "Digit DP",
                        "Probability DP",
                        "DP optimization techniques"
                    ]
                },
                {
                    title: "5. Graph Algorithms",
                    description: "Study graph theory and advanced algorithms.",
                    topics: [
                        "Graph traversal techniques",
                        "Shortest paths algorithms",
                        "Minimum spanning trees",
                        "Network flow",
                        "Bipartite matching",
                        "Strongly connected components",
                        "Advanced graph concepts"
                    ]
                }
            ],
        
            resources: {
                documentation: [
                    {
                        title: "CP-Algorithms",
                        url: "https://cp-algorithms.com/",
                        description: "Comprehensive collection of competitive programming algorithms and techniques",
                        type: "Algorithm Reference"
                    },
                    {
                        title: "USACO Guide",
                        url: "https://usaco.guide/",
                        description: "Structured competitive programming curriculum with practice problems",
                        type: "Learning Path"
                    },
                    {
                        title: "Codeforces Blog",
                        url: "https://codeforces.com/blog/entry/13529",
                        description: "Collection of tutorials and resources for competitive programming",
                        type: "Resource Collection"
                    }
                ],
                tutorials: [
                    {
                        title: "Codeforces EDU",
                        url: "https://codeforces.com/edu/courses",
                        description: "Interactive courses on algorithms and data structures",
                        type: "Interactive Course"
                    },
                    {
                        title: "AtCoder Educational DP Contest",
                        url: "https://atcoder.jp/contests/dp",
                        description: "Comprehensive dynamic programming practice problems",
                        type: "Practice Contest"
                    },
                    {
                        title: "USACO Training",
                        url: "https://train.usaco.org/",
                        description: "Structured training program for competitive programming",
                        type: "Training Program"
                    }
                ],
                videos: [
                    {
                        title: "Errichto CP Course",
                        url: "https://www.youtube.com/c/Errichto",
                        description: "Advanced competitive programming tutorials and contest solutions",
                        platform: "YouTube"
                    },
                    {
                        title: "William Lin",
                        url: "https://www.youtube.com/channel/UCKuDLsO0Wwef53qdHPjbU2Q",
                        description: "Expert competitive programmer sharing techniques and solutions",
                        platform: "YouTube"
                    },
                    {
                        title: "Colin Galen",
                        url: "https://www.youtube.com/c/ColinGalen",
                        description: "In-depth explanations of advanced CP concepts",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "Competitive Programming 4",
                        author: "Steven Halim & Felix Halim",
                        description: "Comprehensive guide covering all aspects of competitive programming",
                        level: "Advanced"
                    },
                    {
                        title: "Guide to Competitive Programming",
                        author: "Antti Laaksonen",
                        description: "Learning and improving techniques for algorithmic problem solving",
                        level: "Intermediate"
                    },
                    {
                        title: "Principles of Algorithmic Problem Solving",
                        author: "Johan Sannemo",
                        description: "Systematic approach to solving algorithmic problems",
                        level: "Intermediate"
                    }
                ],
                practice: [
                    {
                        title: "Codeforces",
                        url: "https://codeforces.com/",
                        description: "Regular contests and extensive problem archive",
                        type: "Contest Platform"
                    },
                    {
                        title: "AtCoder",
                        url: "https://atcoder.jp/",
                        description: "High-quality algorithmic contests",
                        type: "Contest Platform"
                    },
                    {
                        title: "CSES Problem Set",
                        url: "https://cses.fi/problemset/",
                        description: "Comprehensive problem set covering all important topics",
                        type: "Problem Archive"
                    }
                ]
            },
        
            practice: {
                beginnerExercises: [
                    {
                        title: "Maximum Subarray Sum",
                        difficulty: "Easy",
                        description: "Find the contiguous subarray with the largest sum.",
                        hints: [
                            "Consider Kadane's algorithm",
                            "Handle the case of all negative numbers",
                            "Think about maintaining current and overall maximum sum"
                        ],
                        solution: {
                            code: `long long maxSubarraySum(vector<int>& arr) {
            long long currSum = 0;
            long long maxSum = LLONG_MIN;
            
            for(int num : arr) {
                currSum = max((long long)num, currSum + num);
                maxSum = max(maxSum, currSum);
            }
            
            return maxSum;
        }`,
                            explanation: "Uses Kadane's algorithm to find the maximum subarray sum in O(n) time. Maintains both current sum and maximum sum encountered so far."
                        }
                    },
                    {
                        title: "GCD Calculation",
                        difficulty: "Easy",
                        description: "Implement efficient GCD calculation using Euclidean algorithm.",
                        hints: [
                            "Use the modulo operator",
                            "Remember base case",
                            "Consider recursive vs iterative approach"
                        ],
                        solution: {
                            code: `int gcd(int a, int b) {
            while(b) {
                a %= b;
                swap(a, b);
            }
            return a;
        }`,
                            explanation: "Implements iterative Euclidean algorithm for GCD calculation. Efficient method with logarithmic time complexity."
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Longest Increasing Subsequence",
                        difficulty: "Medium",
                        description: "Find the length of the longest strictly increasing subsequence.",
                        hints: [
                            "Consider using binary search",
                            "Maintain a dynamic array",
                            "Think about patience sorting"
                        ],
                        solution: {
                            code: `int lengthOfLIS(vector<int>& nums) {
            vector<int> dp;
            
            for(int num : nums) {
                auto it = lower_bound(dp.begin(), dp.end(), num);
                if(it == dp.end())
                    dp.push_back(num);
                else
                    *it = num;
            }
            
            return dp.size();
        }`,
                            explanation: "Uses binary search to build the longest increasing subsequence. Time complexity: O(n log n)."
                        }
                    },
                    {
                        title: "Modular Exponentiation",
                        difficulty: "Medium",
                        description: "Calculate (base^exponent) % modulo efficiently.",
                        hints: [
                            "Use binary exponentiation",
                            "Handle overflow cases",
                            "Think about the properties of modular arithmetic"
                        ],
                        solution: {
                            code: `long long modPow(long long base, long long exp, long long mod) {
            long long result = 1;
            base %= mod;
            
            while(exp > 0) {
                if(exp & 1)
                    result = (result * base) % mod;
                base = (base * base) % mod;
                exp >>= 1;
            }
            
            return result;
        }`,
                            explanation: "Implements binary exponentiation with modular arithmetic. Efficiently computes large powers without overflow."
                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "Centroid Decomposition",
                        difficulty: "Hard",
                        description: "Implement centroid decomposition on a tree. The centroid decomposition is a technique where we recursively partition a tree into smaller components by removing centroids, which helps in solving various tree-related problems efficiently.",
                        hints: [
                            "Calculate subtree sizes using DFS",
                            "Find and remove centroids recursively",
                            "Maintain decomposition tree",
                            "Consider using adjacency list representation",
                            "Handle visited/removed nodes carefully"
                        ],
                        solution: {
                            code: `class CentroidDecomp {
                    vector<vector<int>> adj;      // Adjacency list representation of tree
                    vector<bool> removed;         // Track removed centroids
                    vector<int> subtree;          // Store subtree sizes
                    vector<int> centroid_parent;  // Store centroid decomposition tree
                    int n;                        // Number of nodes
                
                    // Calculate size of subtree rooted at v
                    int getSize(int v, int p = -1) {
                        subtree[v] = 1;
                        for(int u : adj[v]) {
                            if(u != p && !removed[u]) {
                                subtree[v] += getSize(u, v);
                            }
                        }
                        return subtree[v];
                    }
                
                    // Find centroid of tree rooted at v with given size
                    int getCentroid(int v, int p, int size) {
                        for(int u : adj[v]) {
                            if(u != p && !removed[u] && subtree[u] > size/2) {
                                return getCentroid(u, v, size);
                            }
                        }
                        return v;
                    }
                
                    // Recursively decompose the tree
                    void decompose(int v, int p = -1) {
                        // Get size of current tree
                        int size = getSize(v);
                        
                        // Find centroid of current tree
                        int centroid = getCentroid(v, -1, size);
                        
                        // Mark current centroid as removed
                        removed[centroid] = true;
                        
                        // Set parent in centroid tree
                        centroid_parent[centroid] = p;
                        
                        // Recursively decompose remaining components
                        for(int u : adj[centroid]) {
                            if(!removed[u]) {
                                decompose(u, centroid);
                            }
                        }
                    }
                
                public:
                    // Initialize data structures
                    CentroidDecomp(int _n) : n(_n) {
                        adj.resize(n);
                        removed.resize(n, false);
                        subtree.resize(n);
                        centroid_parent.resize(n, -1);
                    }
                
                    // Add undirected edge to tree
                    void addEdge(int u, int v) {
                        adj[u].push_back(v);
                        adj[v].push_back(u);
                    }
                
                    // Build centroid decomposition
                    void build() {
                        decompose(0);
                    }
                
                    // Get centroid parent of a node
                    int getCentroidParent(int v) {
                        return centroid_parent[v];
                    }
                
                    // Example usage for distance queries
                    vector<vector<pair<int, int>>> centroid_paths;
                    
                    void preprocess() {
                        centroid_paths.resize(n);
                        for(int v = 0; v < n; v++) {
                            int curr = v;
                            int dist = 0;
                            while(curr != -1) {
                                centroid_paths[v].push_back({curr, dist});
                                curr = centroid_parent[curr];
                                dist++;
                            }
                        }
                    }
                
                    // Find distance between two nodes using centroid decomposition
                    int getDistance(int u, int v) {
                        int lca = -1;
                        int u_idx = 0, v_idx = 0;
                        
                        while(u_idx < centroid_paths[u].size() && 
                              v_idx < centroid_paths[v].size()) {
                            if(centroid_paths[u][u_idx].first == 
                               centroid_paths[v][v_idx].first) {
                                lca = centroid_paths[u][u_idx].first;
                                break;
                            }
                            if(centroid_paths[u][u_idx].second < 
                               centroid_paths[v][v_idx].second) {
                                u_idx++;
                            } else {
                                v_idx++;
                            }
                        }
                        
                        return centroid_paths[u][u_idx].second + 
                               centroid_paths[v][v_idx].second;
                    }
                };
                
                // Example usage
                int main() {
                    int n = 5;  // Number of nodes
                    CentroidDecomp cd(n);
                    
                    // Add edges to create a tree
                    cd.addEdge(0, 1);
                    cd.addEdge(1, 2);
                    cd.addEdge(1, 3);
                    cd.addEdge(3, 4);
                    
                    // Build centroid decomposition
                    cd.build();
                    
                    // Preprocess for distance queries
                    cd.preprocess();
                    
                    // Find distance between nodes
                    cout << cd.getDistance(0, 4) << "\\n";
                    
                    return 0;
                }`,
                            explanation: "The Centroid Decomposition implementation provides several key functionalities:\\n\\n" +
                "1. Tree Construction:\\n" +
                "   - Uses adjacency list representation\\n" +
                "   - Supports adding undirected edges\\n" +
                "   - Maintains parent-child relationships\\n\\n" +
                "2. Core Decomposition Process:\\n" +
                "   - getSize(): Calculates subtree sizes using DFS\\n" +
                "   - getCentroid(): Finds the centroid of current component\\n" +
                "   - decompose(): Recursively builds the centroid tree\\n\\n" +
                "3. Distance Queries:\\n" +
                "   - Preprocesses paths to all centroids for each node\\n" +
                "   - Efficiently finds distances between any two nodes\\n" +
                "   - Uses centroid tree properties for optimization\\n\\n" +
                "Time Complexities:\\n" +
                "- Building decomposition: O(N log N)\\n" +
                "- Distance queries: O(log N)\\n" +
                "- Preprocessing: O(N log N)\\n\\n" +
                "The implementation is particularly useful for:\\n" +
                "- Path queries on trees\\n" +
                "- Distance calculations\\n" +
                "- Tree center problems\\n" +
                "- Subtree queries\\n\\n" +
                "Common applications include solving problems involving:\\n" +
                "- Tree distances\\n" +
                "- Path updates\\n" +
                "- Subtree modifications\\n" +
                "- Tree diameter queries"
            }
        }
        ]
        }
        }
    },
];

export default resources;
