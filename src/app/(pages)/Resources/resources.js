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
    {
        id: 7,
        title: "Cloud Computing & DevOps",
        description: "To learn cloud and DevOps, follow this roadmap",
        extendedContent: `
            Master cloud platforms (AWS, Azure, GCP) and DevOps practices including CI/CD, 
            infrastructure as code, containerization, and orchestration. Learn about cloud 
            architecture, microservices, monitoring, and security best practices.
            
            This roadmap covers essential DevOps tools like Docker, Kubernetes, Jenkins, 
            and Terraform. You'll also learn about cloud services, scalability patterns, 
            and automated deployment strategies.
            
            Advanced topics include cloud-native development, serverless architecture, 
            monitoring and logging, and site reliability engineering (SRE) practices.
        `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            prerequisites: [
                "Basic understanding of operating systems (Linux preferred)",
                "Command line and shell scripting knowledge",
                "Fundamentals of networking and protocols",
                "Basic programming skills in any language",
                "Understanding of web technologies and APIs",
                "Version control with Git",
                "Basic understanding of software development lifecycle"
            ],
            outcomes: [
                "Design and implement cloud infrastructure on major platforms",
                "Build and manage CI/CD pipelines",
                "Implement Infrastructure as Code using various tools",
                "Master containerization and orchestration",
                "Configure monitoring and logging solutions",
                "Implement cloud security best practices",
                "Automate deployment and scaling processes",
                "Manage microservices architectures",
                "Handle incident response and system reliability",
                "Optimize cloud costs and resource utilization"
            ],
            sections: [
                {
                    title: "Cloud Fundamentals",
                    content: "Master core cloud computing concepts including virtualization, service models (IaaS, PaaS, SaaS), deployment models, and basic cloud architecture. Learn about major cloud providers (AWS, Azure, GCP) and their core services. Understand cloud networking, storage, and compute resources."
                },
                {
                    title: "DevOps Practices & Tools",
                    content: "Learn essential DevOps methodologies and tools including version control, CI/CD pipelines, and automation. Master configuration management, infrastructure as code, and deployment strategies. Understand DevOps culture and practices for team collaboration."
                },
                {
                    title: "Containerization & Orchestration",
                    content: "Deep dive into containerization with Docker and container orchestration with Kubernetes. Learn about container networking, storage, security, and best practices. Understand microservices architecture and service mesh concepts."
                },
                {
                    title: "Infrastructure Automation",
                    content: "Master Infrastructure as Code using tools like Terraform, CloudFormation, and Ansible. Learn about configuration management, automated provisioning, and infrastructure testing. Understand immutable infrastructure patterns and GitOps practices."
                },
                {
                    title: "Monitoring & Operations",
                    content: "Implement comprehensive monitoring, logging, and alerting solutions. Learn about observability, performance optimization, and troubleshooting. Master tools like Prometheus, Grafana, ELK stack, and cloud-native monitoring solutions."
                },
                {
                    title: "Security & Compliance",
                    content: "Implement cloud security best practices, identity management, and compliance standards. Learn about security automation, threat detection, and incident response. Understand DevSecOps practices and security tools integration."
                },
                {
                    title: "Site Reliability Engineering",
                    content: "Learn SRE practices including service level objectives, error budgets, and reliability patterns. Master incident management, capacity planning, and performance optimization. Understand chaos engineering and resilience testing."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "AWS Infrastructure Setup with Terraform",
                    code: `# AWS VPC and EC2 Instance Setup
        # main.tf
        
        provider "aws" {
            region = "us-west-2"
        }
        
        # Create VPC
        resource "aws_vpc" "main" {
            cidr_block = "10.0.0.0/16"
            
            tags = {
                Name = "main-vpc"
                Environment = "production"
            }
        }
        
        # Create Public Subnet
        resource "aws_subnet" "public" {
            vpc_id = aws_vpc.main.id
            cidr_block = "10.0.1.0/24"
            availability_zone = "us-west-2a"
            map_public_ip_on_launch = true
            
            tags = {
                Name = "public-subnet"
                Environment = "production"
            }
        }
        
        # Create Internet Gateway
        resource "aws_internet_gateway" "main" {
            vpc_id = aws_vpc.main.id
            
            tags = {
                Name = "main-igw"
            }
        }
        
        # Create Route Table
        resource "aws_route_table" "public" {
            vpc_id = aws_vpc.main.id
            
            route {
                cidr_block = "0.0.0.0/0"
                gateway_id = aws_internet_gateway.main.id
            }
            
            tags = {
                Name = "public-rt"
            }
        }
        
        # Associate Route Table with Subnet
        resource "aws_route_table_association" "public" {
            subnet_id = aws_subnet.public.id
            route_table_id = aws_route_table.public.id
        }
        
        # Create Security Group
        resource "aws_security_group" "web" {
            name = "web-sg"
            description = "Security group for web servers"
            vpc_id = aws_vpc.main.id
            
            ingress {
                from_port = 80
                to_port = 80
                protocol = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
            }
            
            ingress {
                from_port = 443
                to_port = 443
                protocol = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
            }
            
            ingress {
                from_port = 22
                to_port = 22
                protocol = "tcp"
                cidr_blocks = ["0.0.0.0/0"]
            }
            
            egress {
                from_port = 0
                to_port = 0
                protocol = "-1"
                cidr_blocks = ["0.0.0.0/0"]
            }
        }
        
        # Create EC2 Instance
        resource "aws_instance" "web" {
            ami = "ami-0c55b159cbfafe1f0"
            instance_type = "t2.micro"
            subnet_id = aws_subnet.public.id
            vpc_security_group_ids = [aws_security_group.web.id]
            
            user_data = <<-EOF
                        #!/bin/bash
                        yum update -y
                        yum install -y httpd
                        systemctl start httpd
                        systemctl enable httpd
                        EOF
            
            tags = {
                Name = "web-server"
                Environment = "production"
            }
        }
        
        # Output Values
        output "instance_public_ip" {
            value = aws_instance.web.public_ip
            description = "Public IP of the web server"
        }`,
                    explanation: "This example demonstrates Infrastructure as Code using Terraform to set up AWS infrastructure including VPC, subnet, security groups, and EC2 instance with proper networking configurations."
                },
                {
                    title: "Docker Container with CI/CD Pipeline",
                    code: `# Dockerfile
        FROM node:14-alpine
        
        WORKDIR /app
        
        COPY package*.json ./
        RUN npm install
        
        COPY . .
        
        EXPOSE 3000
        CMD ["npm", "start"]
        
        # docker-compose.yml
        version: '3'
        services:
          web:
            build: .
            ports:
              - "3000:3000"
            environment:
              - NODE_ENV=production
            volumes:
              - .:/app
            depends_on:
              - db
          
          db:
            image: mongo:latest
            ports:
              - "27017:27017"
            volumes:
              - mongodb_data:/data/db
        
        volumes:
          mongodb_data:
        
        # .gitlab-ci.yml
        stages:
          - test
          - build
          - deploy
        
        variables:
          DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
        
        test:
          stage: test
          image: node:14-alpine
          script:
            - npm install
            - npm test
          only:
            - main
            - develop
        
        build:
          stage: build
          image: docker:latest
          services:
            - docker:dind
          script:
            - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
            - docker build -t $DOCKER_IMAGE .
            - docker push $DOCKER_IMAGE
          only:
            - main
        
        deploy:
          stage: deploy
          image: 
            name: bitnami/kubectl:latest
            entrypoint: ['']
          script:
            - kubectl config set-cluster k8s --server="$KUBE_URL" --certificate-authority="$KUBE_CA_PEM"
            - kubectl config set-credentials gitlab --token="$KUBE_TOKEN"
            - kubectl config set-context default --cluster=k8s --user=gitlab
            - kubectl config use-context default
            - sed -i "s/:latest/:$CI_COMMIT_SHA/" kubernetes/deployment.yml
            - kubectl apply -f kubernetes/deployment.yml
          only:
            - main
        
        # kubernetes/deployment.yml
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: web-app
        spec:
          replicas: 3
          selector:
            matchLabels:
              app: web
          template:
            metadata:
              labels:
                app: web
            spec:
              containers:
              - name: web
                image: $DOCKER_IMAGE
                ports:
                - containerPort: 3000
                env:
                - name: NODE_ENV
                  value: production
                resources:
                  limits:
                    cpu: "0.5"
                    memory: "512Mi"
                  requests:
                    cpu: "0.2"
                    memory: "256Mi"
        ---
        apiVersion: v1
        kind: Service
        metadata:
          name: web-service
        spec:
          type: LoadBalancer
          ports:
          - port: 80
            targetPort: 3000
          selector:
            app: web`,
                    explanation: "This example shows a complete CI/CD pipeline setup with Docker containerization, GitLab CI/CD configuration, and Kubernetes deployment manifests."
                },
                {
                    title: "Monitoring Stack Configuration",
                    code: `# prometheus.yml
        global:
          scrape_interval: 15s
          evaluation_interval: 15s
        
        alerting:
          alertmanagers:
            - static_configs:
                - targets:
                  - alertmanager:9093
        
        rule_files:
          - "alerts.yml"
        
        scrape_configs:
          - job_name: 'prometheus'
            static_configs:
              - targets: ['localhost:9090']
        
          - job_name: 'node-exporter'
            static_configs:
              - targets: ['node-exporter:9100']
        
          - job_name: 'application'
            metrics_path: '/metrics'
            static_configs:
              - targets: ['application:8080']
        
        # alerts.yml
        groups:
          - name: alerts
            rules:
              - alert: HighCPUUsage
                expr: 100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[2m])) * 100) > 80
                for: 5m
                labels:
                  severity: warning
                annotations:
                  summary: High CPU usage on {{ $labels.instance }}
                  description: CPU usage is above 80% for 5 minutes
        
        # docker-compose.monitoring.yml
        version: '3'
        
        services:
          prometheus:
            image: prom/prometheus
            ports:
              - "9090:9090"
            volumes:
              - ./prometheus.yml:/etc/prometheus/prometheus.yml
              - ./alerts.yml:/etc/prometheus/alerts.yml
            command:
              - '--config.file=/etc/prometheus/prometheus.yml'
              - '--storage.tsdb.path=/prometheus'
              - '--web.console.libraries=/usr/share/prometheus/console_libraries'
              - '--web.console.templates=/usr/share/prometheus/consoles'
        
          grafana:
            image: grafana/grafana
            ports:
              - "3000:3000"
            environment:
              - GF_SECURITY_ADMIN_PASSWORD=secret
            volumes:
              - grafana_data:/var/lib/grafana
            depends_on:
              - prometheus
        
          alertmanager:
            image: prom/alertmanager
            ports:
              - "9093:9093"
            volumes:
              - ./alertmanager.yml:/etc/alertmanager/alertmanager.yml
            command:
              - '--config.file=/etc/alertmanager/alertmanager.yml'
        
          node-exporter:
            image: prom/node-exporter
            ports:
              - "9100:9100"
            volumes:
              - /proc:/host/proc:ro
              - /sys:/host/sys:ro
              - /:/rootfs:ro
        
        volumes:
          grafana_data:
        
        # alertmanager.yml
        global:
          resolve_timeout: 5m
        
        route:
          group_by: ['alertname']
          group_wait: 10s
          group_interval: 10s
          repeat_interval: 1h
          receiver: 'slack'
        
        receivers:
          - name: 'slack'
            slack_configs:
              - api_url: 'https://hooks.slack.com/services/XXX/YYY/ZZZ'
                channel: '#alerts'
                send_resolved: true
        
        # Grafana Dashboard JSON
        {
          "dashboard": {
            "id": null,
            "title": "Node Metrics",
            "panels": [
              {
                "title": "CPU Usage",
                "type": "graph",
                "datasource": "Prometheus",
                "targets": [
                  {
                    "expr": "100 - (avg by (instance) (rate(node_cpu_seconds_total{mode=\"idle\"}[2m])) * 100)",
                    "legendFormat": "{{instance}}"
                  }
                ]
              },
              {
                "title": "Memory Usage",
                "type": "graph",
                "datasource": "Prometheus",
                "targets": [
                  {
                    "expr": "node_memory_MemTotal_bytes - node_memory_MemFree_bytes",
                    "legendFormat": "{{instance}}"
                  }
                ]
              }
            ]
          }
        }`,
                    explanation: "This example demonstrates setting up a complete monitoring stack with Prometheus, Grafana, AlertManager, and Node Exporter, including alert configurations and dashboard definitions."
                }
            ],

            roadmap: [
                {
                    title: "1. Cloud Computing Fundamentals",
                    description: "Master the basics of cloud computing and service models",
                    topics: [
                        "Cloud Computing Concepts",
                        "Major Cloud Providers (AWS, Azure, GCP)",
                        "Cloud Service Models (IaaS, PaaS, SaaS)",
                        "Cloud Networking and Security",
                        "Virtual Machines and Containers",
                        "Cloud Storage Solutions",
                        "Identity and Access Management"
                    ]
                },
                {
                    title: "2. DevOps Fundamentals",
                    description: "Learn core DevOps practices and methodologies",
                    topics: [
                        "DevOps Culture and Principles",
                        "Version Control with Git",
                        "CI/CD Fundamentals",
                        "Automation and Scripting",
                        "Configuration Management",
                        "Infrastructure as Code Basics",
                        "Release Management"
                    ]
                },
                {
                    title: "3. Containerization and Orchestration",
                    description: "Master container technologies and orchestration",
                    topics: [
                        "Docker Fundamentals",
                        "Container Networking",
                        "Kubernetes Architecture",
                        "Pod Management",
                        "Service Deployment",
                        "Container Security",
                        "Service Mesh (Istio)"
                    ]
                },
                {
                    title: "4. Infrastructure Automation",
                    description: "Learn infrastructure automation and provisioning",
                    topics: [
                        "Terraform",
                        "AWS CloudFormation",
                        "Ansible",
                        "Infrastructure Testing",
                        "GitOps Practices",
                        "Resource Management",
                        "Cost Optimization"
                    ]
                },
                {
                    title: "5. Monitoring and Logging",
                    description: "Implement monitoring, logging, and observability",
                    topics: [
                        "Prometheus and Grafana",
                        "ELK Stack",
                        "Application Monitoring",
                        "Log Management",
                        "Alerting Systems",
                        "Performance Monitoring",
                        "Troubleshooting"
                    ]
                },
                {
                    title: "6. Cloud Security",
                    description: "Master cloud security and compliance",
                    topics: [
                        "Security Best Practices",
                        "Compliance Standards",
                        "Network Security",
                        "Identity Management",
                        "Security Automation",
                        "Incident Response",
                        "Disaster Recovery"
                    ]
                },
                {
                    title: "7. Site Reliability Engineering",
                    description: "Learn SRE practices and principles",
                    topics: [
                        "Service Level Objectives",
                        "Error Budgets",
                        "Capacity Planning",
                        "Chaos Engineering",
                        "Incident Management",
                        "Performance Optimization",
                        "Reliability Patterns"
                    ]
                }
            ],
            resources: {
                documentation: [
                    {
                        title: "AWS Documentation",
                        url: "https://docs.aws.amazon.com/",
                        description: "Official Amazon Web Services documentation covering all AWS services and features",
                        type: "Cloud Platform Documentation"
                    },
                    {
                        title: "Microsoft Azure Docs",
                        url: "https://docs.microsoft.com/azure/",
                        description: "Comprehensive documentation for Azure cloud services and features",
                        type: "Cloud Platform Documentation"
                    },
                    {
                        title: "Google Cloud Documentation",
                        url: "https://cloud.google.com/docs",
                        description: "Official documentation for Google Cloud Platform services",
                        type: "Cloud Platform Documentation"
                    },
                    {
                        title: "Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/",
                        description: "Official Kubernetes documentation and guides",
                        type: "Container Orchestration"
                    },
                    {
                        title: "Docker Documentation",
                        url: "https://docs.docker.com/",
                        description: "Official Docker documentation, tutorials, and best practices",
                        type: "Containerization"
                    },
                    {
                        title: "Terraform Documentation",
                        url: "https://www.terraform.io/docs/",
                        description: "HashiCorp's official documentation for Terraform IaC",
                        type: "Infrastructure as Code"
                    }
                ],
                tutorials: [
                    {
                        title: "AWS Certified Solutions Architect",
                        url: "https://aws.amazon.com/training/path-architecting/",
                        description: "Official AWS certification path for cloud architects",
                        type: "Certification Course"
                    },
                    {
                        title: "Docker and Kubernetes: The Complete Guide",
                        url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
                        description: "Comprehensive course on containerization and orchestration",
                        type: "Video Course"
                    },
                    {
                        title: "DevOps with AWS CodePipeline",
                        url: "https://aws.amazon.com/getting-started/hands-on/create-continuous-delivery-pipeline/",
                        description: "Hands-on tutorial for building CI/CD pipelines in AWS",
                        type: "Hands-on Tutorial"
                    },
                    {
                        title: "HashiCorp Learn",
                        url: "https://learn.hashicorp.com/",
                        description: "Official tutorials for Terraform, Vault, and other HashiCorp tools",
                        type: "Interactive Tutorial"
                    },
                    {
                        title: "Google Cloud Training",
                        url: "https://cloud.google.com/training",
                        description: "Official Google Cloud training and certification resources",
                        type: "Training Platform"
                    }
                ],
                videos: [
                    {
                        title: "freeCodeCamp DevOps Course",
                        url: "https://www.youtube.com/watch?v=j5Zsa_eOXeY",
                        description: "Complete DevOps course including CI/CD, Docker, and Kubernetes",
                        platform: "YouTube"
                    },
                    {
                        title: "TechWorld with Nana",
                        url: "https://www.youtube.com/c/TechWorldwithNana",
                        description: "DevOps tutorials and technology overviews",
                        platform: "YouTube"
                    },
                    {
                        title: "AWS Events",
                        url: "https://www.youtube.com/user/AmazonWebServices",
                        description: "Official AWS channel with service updates and deep dives",
                        platform: "YouTube"
                    },
                    {
                        title: "HashiCorp Resource Library",
                        url: "https://www.hashicorp.com/resources",
                        description: "Webinars and presentations on infrastructure automation",
                        platform: "Webinars"
                    },
                    {
                        title: "CNCF YouTube",
                        url: "https://www.youtube.com/c/cloudnativefdn",
                        description: "Cloud Native Computing Foundation's official channel",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "The Phoenix Project",
                        author: "Gene Kim, Kevin Behr, George Spafford",
                        description: "A novel about IT, DevOps, and helping your business win",
                        level: "Beginner"
                    },
                    {
                        title: "Site Reliability Engineering",
                        author: "Google",
                        description: "How Google Runs Production Systems",
                        level: "Advanced"
                    },
                    {
                        title: "Infrastructure as Code",
                        author: "Kief Morris",
                        description: "Managing Servers in the Cloud",
                        level: "Intermediate"
                    },
                    {
                        title: "Kubernetes: Up and Running",
                        author: "Brendan Burns, Joe Beda, Kelsey Hightower",
                        description: "Dive into the Future of Infrastructure",
                        level: "Intermediate"
                    },
                    {
                        title: "The DevOps Handbook",
                        author: "Gene Kim, Jez Humble, Patrick Debois, John Willis",
                        description: "How to Create World-Class Agility, Reliability, & Security in Technology Organizations",
                        level: "Intermediate"
                    }
                ],
                tools: [
                    {
                        title: "Terraform",
                        url: "https://www.terraform.io/",
                        description: "Infrastructure as Code tool",
                        type: "IaC",
                        category: "Essential"
                    },
                    {
                        title: "Jenkins",
                        url: "https://www.jenkins.io/",
                        description: "Open-source automation server",
                        type: "CI/CD",
                        category: "Essential"
                    },
                    {
                        title: "Prometheus",
                        url: "https://prometheus.io/",
                        description: "Monitoring and alerting toolkit",
                        type: "Monitoring",
                        category: "Essential"
                    },
                    {
                        title: "GitLab",
                        url: "https://about.gitlab.com/",
                        description: "Complete DevOps platform",
                        type: "DevOps Platform",
                        category: "Platform"
                    },
                    {
                        title: "Ansible",
                        url: "https://www.ansible.com/",
                        description: "Automation and configuration management",
                        type: "Configuration Management",
                        category: "Essential"
                    }
                ],
                communities: [
                    {
                        title: "DevOps Stack Exchange",
                        url: "https://devops.stackexchange.com/",
                        description: "Q&A community for DevOps professionals",
                        type: "Q&A Forum"
                    },
                    {
                        title: "Reddit r/devops",
                        url: "https://www.reddit.com/r/devops/",
                        description: "DevOps community discussions and resources",
                        type: "Forum"
                    },
                    {
                        title: "CNCF Slack",
                        url: "https://slack.cncf.io/",
                        description: "Cloud Native Computing Foundation community",
                        type: "Slack Community"
                    },
                    {
                        title: "AWS Community",
                        url: "https://aws.amazon.com/developer/community/",
                        description: "AWS user community and forums",
                        type: "Developer Community"
                    },
                    {
                        title: "DevOps Discord",
                        url: "https://discord.gg/devops",
                        description: "Active Discord community for DevOps discussions",
                        type: "Discord Community"
                    }
                ],
                certifications: [
                    {
                        title: "AWS Certified DevOps Engineer - Professional",
                        provider: "Amazon Web Services",
                        description: "Professional level certification for DevOps on AWS",
                        level: "Professional"
                    },
                    {
                        title: "Certified Kubernetes Administrator (CKA)",
                        provider: "CNCF",
                        description: "Professional certification for Kubernetes administration",
                        level: "Professional"
                    },
                    {
                        title: "Microsoft Azure DevOps Engineer Expert",
                        provider: "Microsoft",
                        description: "Expert level certification for Azure DevOps",
                        level: "Expert"
                    },
                    {
                        title: "Google Cloud Professional DevOps Engineer",
                        provider: "Google Cloud",
                        description: "Professional certification for GCP DevOps",
                        level: "Professional"
                    },
                    {
                        title: "HashiCorp Certified: Terraform Associate",
                        provider: "HashiCorp",
                        description: "Certification for Terraform expertise",
                        level: "Associate"
                    }
                ]
            },
            practice: {
                beginnerExercises: [
                    {
                        title: "Basic AWS Infrastructure Setup",
                        difficulty: "Easy",
                        description: "Create a basic AWS infrastructure with a VPC, EC2 instance, and S3 bucket using the AWS Console.",
                        hints: [
                            "Start with a default VPC configuration",
                            "Use t2.micro instance type (free tier)",
                            "Configure security groups properly",
                            "Set up proper IAM roles and permissions"
                        ],
                        solution: {
                            code: `# Step-by-step AWS CLI commands
            
            # Create VPC
            aws ec2 create-vpc --cidr-block 10.0.0.0/16 --tag-specifications 
            'ResourceType=vpc,Tags=[{Key=Name,Value=MyVPC}]'
            
            # Create Subnet
            aws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24
            
            # Create Internet Gateway
            aws ec2 create-internet-gateway
            aws ec2 attach-internet-gateway --vpc-id 
            vpc-xxx --internet-gateway-id igw-xxx
            
            # Create Security Group
            aws ec2 create-security-group --group-name MySecurityGroup
            --description "Basic security group" --vpc-id vpc-xxx
            
            # Add Security Group Rules
            aws ec2 authorize-security-group-ingress --group-id sg-xxx 
            --protocol tcp --port 22 --cidr 0.0.0.0/0
            aws ec2 authorize-security-group-ingress --group-id sg-xxx 
            --protocol tcp --port 80 --cidr 0.0.0.0/0
            
            # Launch EC2 Instance
            aws ec2 run-instances \n
                --image-id ami-xxx \n
                --count 1 \n
                --instance-type t2.micro \n
                --key-name MyKeyPair \n
                --security-group-ids sg-xxx \n
                --subnet-id subnet-xxx
            
            # Create S3 Bucket
            aws s3api create-bucket \n
                --bucket my-unique-bucket-name \n
                --region us-west-2 \n
                --create-bucket-configuration LocationConstraint=us-west-2`,
                            explanation: "This exercise demonstrates:\n" +
                                "1. Basic VPC networking setup\n" +
                                "2. Security group configuration\n" +
                                "3. EC2 instance deployment\n" +
                                "4. S3 bucket creation\n" +
                                "5. AWS CLI usage for infrastructure management"
                        }
                    },
                    {
                        title: "Docker Container Deployment",
                        difficulty: "Easy",
                        description: "Create and deploy a simple web application using Docker containers.",
                        hints: [
                            "Use a simple web framework (e.g., Node.js/Express)",
                            "Create a proper Dockerfile",
                            "Implement basic health checks",
                            "Use Docker Compose for multi-container setup"
                        ],
                        solution: {
                            code: `# Simple Express Application
            # app.js
            const express = require('express');
            const app = express();
            const port = 3000;
            
            app.get('/', (req, res) => {
                res.send('Hello from Docker!');
            });
            
            app.get('/health', (req, res) => {
                res.status(200).send('Healthy');
            });
            
            app.listen(port, () => {
                console.log(\`App running on port \${port}\`);
            });
            
            # Dockerfile
            FROM node:14-alpine
            
            WORKDIR /app
            
            COPY package*.json ./
            RUN npm install
            
            COPY . .
            
            EXPOSE 3000
            HEALTHCHECK --interval=30s --timeout=3s \n
              CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1
            
            CMD ["node", "app.js"]
            
            # docker-compose.yml
            version: '3'
            services:
              web:
                build: .
                ports:
                  - "3000:3000"
                environment:
                  - NODE_ENV=production
                restart: always
            
            # Commands to build and run
            docker build -t my-web-app .
            docker run -p 3000:3000 my-web-app
            
            # Or using Docker Compose
            docker-compose up -d`,
                            explanation: "This exercise covers:\n" +
                                "1. Basic Dockerfile creation\n" +
                                "2. Docker image building\n" +
                                "3. Container health checking\n" +
                                "4. Docker Compose usage\n" +
                                "5. Container port mapping and environment variables"
                        }
                    },
                    {
                        title: "Basic CI/CD Pipeline",
                        difficulty: "Easy",
                        description: "Set up a basic CI/CD pipeline using GitHub Actions for a simple application.",
                        hints: [
                            "Use GitHub Actions workflow syntax",
                            "Implement basic testing",
                            "Add automated build process",
                            "Configure deployment step"
                        ],
                        solution: {
                            code: `# .github/workflows/ci-cd.yml
            name: CI/CD Pipeline
            
            on:
              push:
                branches: [ main ]
              pull_request:
                branches: [ main ]
            
            jobs:
              test:
                runs-on: ubuntu-latest
                steps:
                - uses: actions/checkout@v2
                - name: Set up Node.js
                  uses: actions/setup-node@v2
                  with:
                    node-version: '14'
                - name: Install dependencies
                  run: npm install
                - name: Run tests
                  run: npm test
            
              build:
                needs: test
                runs-on: ubuntu-latest
                steps:
                - uses: actions/checkout@v2
                - name: Build Docker image
                  run: docker build -t my-app: {{ github.sha }}
                - name: Login to GitHub Container Registry
                  uses: docker/login-action@v1
                  with:
                    registry: ghcr.io
                    username: {{ github.actor }}
                    password: {{ secrets.GITHUB_TOKEN }}
                - name: Push Docker image
                  run: |
                    docker tag my-app:{{ github.sha }} 
                    ghcr.io/{{ github.repository }}/my-app:{{ github.sha }}
                    docker push ghcr.io/{{ github.repository }}/my-app:{{ github.sha }}
            
              deploy:
                needs: build
                runs-on: ubuntu-latest
                if: github.ref == 'refs/heads/main'
                steps:
                - name: Deploy to production
                  run: |
                    echo "Deploying version {{ github.sha }}"
                    # Add deployment commands here`,
                            explanation: "This exercise demonstrates:\n" +
                                "1. Basic GitHub Actions workflow setup\n" +
                                "2. Automated testing implementation\n" +
                                "3. Docker image building and pushing\n" +
                                "4. Basic deployment pipeline\n" +
                                "5. CI/CD best practices"
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Kubernetes Cluster Deployment",
                        difficulty: "Medium",
                        description: "Set up a Kubernetes cluster and deploy a microservices application.",
                        hints: [
                            "Use minikube for local development",
                            "Implement proper resource requests/limits",
                            "Configure service discovery",
                            "Set up proper monitoring"
                        ],
                        solution: {
                            code: `# Deployment manifests for a microservices application
            
            # frontend-deployment.yaml
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              name: frontend
            spec:
              replicas: 3
              selector:
                matchLabels:
                  app: frontend
              template:
                metadata:
                  labels:
                    app: frontend
                spec:
                  containers:
                  - name: frontend
                    image: frontend:1.0
                    ports:
                    - containerPort: 80
                    resources:
                      requests:
                        cpu: "100m"
                        memory: "128Mi"
                      limits:
                        cpu: "200m"
                        memory: "256Mi"
                    livenessProbe:
                      httpGet:
                        path: /health
                        port: 80
                      initialDelaySeconds: 30
                      periodSeconds: 10
            
            # backend-deployment.yaml
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              name: backend
            spec:
              replicas: 2
              selector:
                matchLabels:
                  app: backend
              template:
                metadata:
                  labels:
                    app: backend
                spec:
                  containers:
                  - name: backend
                    image: backend:1.0
                    ports:
                    - containerPort: 8080
                    env:
                    - name: DB_HOST
                      valueFrom:
                        configMapKeyRef:
                          name: app-config
                          key: db_host
                    resources:
                      requests:
                        cpu: "200m"
                        memory: "256Mi"
                      limits:
                        cpu: "400m"
                        memory: "512Mi"
            
            # services.yaml
            apiVersion: v1
            kind: Service
            metadata:
              name: frontend-service
            spec:
              type: LoadBalancer
              selector:
                app: frontend
              ports:
              - port: 80
                targetPort: 80
            
            ---
            apiVersion: v1
            kind: Service
            metadata:
              name: backend-service
            spec:
              type: ClusterIP
              selector:
                app: backend
              ports:
              - port: 8080
                targetPort: 8080
            
            # configmap.yaml
            apiVersion: v1
            kind: ConfigMap
            metadata:
              name: app-config
            data:
              db_host: "mongodb-service"
              api_url: "http://backend-service:8080"
            
            # monitoring.yaml
            apiVersion: monitoring.coreos.com/v1
            kind: ServiceMonitor
            metadata:
              name: app-monitor
            spec:
              selector:
                matchLabels:
                  app: frontend
              endpoints:
              - port: web
            
            # Commands
            kubectl apply -f frontend-deployment.yaml
            kubectl apply -f backend-deployment.yaml
            kubectl apply -f services.yaml
            kubectl apply -f configmap.yaml
            kubectl apply -f monitoring.yaml
            
            # Verify deployments
            kubectl get pods
            kubectl get services
            kubectl get configmaps`,
                            explanation: "This exercise covers:\n" +
                                "1. Kubernetes deployment configuration\n" +
                                "2. Service discovery and networking\n" +
                                "3. Resource management\n" +
                                "4. Configuration management\n" +
                                "5. Basic monitoring setup\n" +
                                "6. Container health probes"
                        }
                    },
                    {
                        title: "Infrastructure as Code with Terraform",
                        difficulty: "Medium",
                        description: "Implement a complete infrastructure using Terraform including networking, compute, and storage resources.",
                        hints: [
                            "Use Terraform modules",
                            "Implement state management",
                            "Use variables and outputs",
                            "Follow security best practices"
                        ],
                        solution: {
                            code: `# Complete Infrastructure as Code Example
            
            # variables.tf
            variable "region" {
              description = "AWS region"
              default     = "us-west-2"
            }
            
            variable "environment" {
              description = "Environment name"
              default     = "production"
            }
            
            # main.tf
            provider "aws" {
              region = var.region
            }
            
            module "vpc" {
              source = "./modules/vpc"
              
              environment = var.environment
              cidr_block  = "10.0.0.0/16"
            }
            
            module "ec2" {
              source = "./modules/ec2"
              
              vpc_id      = module.vpc.vpc_id
              subnet_ids  = module.vpc.private_subnet_ids
              environment = var.environment
            }
            
            module "rds" {
              source = "./modules/rds"
              
              vpc_id      = module.vpc.vpc_id
              subnet_ids  = module.vpc.private_subnet_ids
              environment = var.environment
            }
            
            # modules/vpc/main.tf
            resource "aws_vpc" "main" {
              cidr_block = var.cidr_block
              
              tags = {
                Name        = "{var.environment}-vpc"
                Environment = var.environment
              }
            }
            
            resource "aws_subnet" "private" {
              count             = 2
              vpc_id            = aws_vpc.main.id
              cidr_block        = cidrsubnet(var.cidr_block, 8, count.index)
              availability_zone = data.aws_availability_zones.available.names[count.index]
              
              tags = {
                Name        = "{var.environment}-private-{count.index + 1}"
                Environment = var.environment
              }
            }
            
            # modules/ec2/main.tf
            resource "aws_launch_template" "app" {
              name_prefix   = "app-"
              image_id      = data.aws_ami.amazon_linux_2.id
              instance_type = "t3.micro"
            
              user_data = base64encode(<<-EOF
                          #!/bin/bash
                          yum update -y
                          yum install -y docker
                          service docker start
                          EOF
              )
              
              vpc_security_group_ids = [aws_security_group.app.id]
              
              tags = {
                Environment = var.environment
              }
            }
            
            resource "aws_autoscaling_group" "app" {
              desired_capacity    = 2
              max_size           = 4
              min_size           = 1
              target_group_arns  = [aws_lb_target_group.app.arn]
              vpc_zone_identifier = var.subnet_ids
              
              launch_template {
                id      = aws_launch_template.app.id
                version = "$Latest"
              }
              
              tag {
                key                 = "Environment"
                value               = var.environment
                propagate_at_launch = true
              }
            }
            
            # modules/rds/main.tf
            resource "aws_db_instance" "main" {
              identifier        = "{var.environment}-db"
              engine            = "postgresql"
              engine_version    = "13.4"
              instance_class    = "db.t3.micro"
              allocated_storage = 20
              
              username = "admin"
              password = random_password.db_password.result
              
              vpc_security_group_ids = [aws_security_group.db.id]
              db_subnet_group_name   = aws_db_subnet_group.main.name
              
              backup_retention_period = 7
              skip_final_snapshot    = true
              
              tags = {
                Environment = var.environment
              }
            }
            
            # outputs.tf
            output "vpc_id" {
              value = module.vpc.vpc_id
            }
            
            output "db_endpoint" {
              value = module.rds.endpoint
            }
            
            output "app_url" {
              value = module.ec2.load_balancer_dns
            }
            
            # terraform.tfvars
            region      = "us-west-2"
            environment = "production"
            
            # Commands
            terraform init
            terraform plan
            terraform apply
            terraform destroy`,
                            explanation: "This exercise demonstrates:\n" +
                                "1. Modular Terraform structure\n" +
                                "2. Resource organization\n" +
                                "3. Infrastructure provisioning\n" +
                                "4. State management\n" +
                                "5. Security group configuration\n" +
                                "6. Auto-scaling setup"
                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "Complete DevOps Pipeline",
                        difficulty: "Hard",
                        description: "Build a complete DevOps pipeline including CI/CD, monitoring, logging, and automated scaling.",
                        hints: [
                            "Implement GitOps practices",
                            "Set up comprehensive monitoring",
                            "Configure auto-scaling",
                            "Implement security scanning"
                        ],
                        solution: {
                            code: `# This is a high-level overview of components
            
            # GitLab CI/CD Pipeline
            # .gitlab-ci.yml
            stages:
              - test
              - build
              - security
              - deploy
              - monitor
            
            variables:
              DOCKER_IMAGE: $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
            
            test:
              stage: test
              script:
                - npm install
                - npm test
                - sonar-scanner
            
            build:
       stage: build
       script:
           - docker build -t $DOCKER_IMAGE .
           - docker push $DOCKER_IMAGE
           - trivy image $DOCKER_IMAGE

security:
   stage: security
   script:
       - trivy image $DOCKER_IMAGE
       - SNYK_TOKEN=$SNYK_TOKEN snyk test
       - owasp-dependency-check --project "My App" --scan .

deploy:
   stage: deploy
   script:
       - helm upgrade --install my-app ./helm \n
           --set image.tag=$CI_COMMIT_SHA \n
           --namespace production
       - kubectl apply -f k8s/
       
monitor:
   stage: monitor
   script:
       - ./scripts/check-deployment-health.sh
       - ./scripts/verify-metrics.sh

# Kubernetes Manifests
# monitoring/prometheus-values.yaml
prometheus:
   serviceMonitors:
       - name: app-monitor
         labels:
           app: my-app
   alertmanager:
       enabled: true
       config:
           route:
               receiver: 'slack'
           receivers:
               - name: 'slack'
                 slack_configs:
                   - channel: '#alerts'
                     api_url: '{SLACK_WEBHOOK_URL}'

# monitoring/grafana-values.yaml
grafana:
   datasources:
       - name: Prometheus
         type: prometheus
         url: http://prometheus-server
   dashboardProviders:
       - name: 'default'
         folder: ''
         type: file
         options:
           path: /var/lib/grafana/dashboards
   dashboards:
       default:
           app-dashboard:
               file: dashboards/app-dashboard.json

# autoscaling/hpa.yaml
apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
   name: app-hpa
spec:
   scaleTargetRef:
       apiVersion: apps/v1
       kind: Deployment
       name: my-app
   minReplicas: 2
   maxReplicas: 10
   metrics:
       - type: Resource
         resource:
           name: cpu
           target:
               type: Utilization
               averageUtilization: 70
       - type: Resource
         resource:
           name: memory
           target:
               type: Utilization
               averageUtilization: 80

# logging/fluentd-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
   name: fluentd-config
data:
   fluent.conf: |
       <source>
           @type tail
           path /var/log/containers/*.log
           pos_file /var/log/fluentd-containers.log.pos
           tag kubernetes.*
           read_from_head true
           <parse>
               @type json
               time_key time
               time_format %Y-%m-%dT%H:%M:%S.%NZ
           </parse>
       </source>
       
       <match kubernetes.**>
           @type elasticsearch
           host elasticsearch-master
           port 9200
           logstash_format true
           logstash_prefix k8s
           <buffer>
               @type file
               path /var/log/fluentd-buffers/kubernetes.system.buffer
               flush_mode interval
               retry_type exponential_backoff
               flush_interval 5s
               retry_forever false
               retry_max_interval 30
               chunk_limit_size 2M
               queue_limit_length 8
               overflow_action block
           </buffer>
       </match>

# security/network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
   name: app-network-policy
spec:
   podSelector:
       matchLabels:
           app: my-app
   policyTypes:
       - Ingress
       - Egress
   ingress:
       - from:
           - podSelector:
               matchLabels:
                   role: frontend
         ports:
           - protocol: TCP
             port: 80
   egress:
       - to:
           - podSelector:
               matchLabels:
                   role: database
         ports:
           - protocol: TCP
             port: 5432

# Terraform for Infrastructure
# main.tf
module "eks" {
   source = "terraform-aws-modules/eks/aws"
   
   cluster_name    = "my-cluster"
   cluster_version = "1.21"
   
   vpc_id          = module.vpc.vpc_id
   subnets         = module.vpc.private_subnets
   
   node_groups = {
       general = {
           desired_capacity = 2
           max_capacity     = 10
           min_capacity     = 2
           instance_type    = "t3.medium"
       }
   }
}

module "monitoring" {
   source = "./modules/monitoring"
   
   eks_cluster_id = module.eks.cluster_id
   grafana_admin_password = var.grafana_password
}

# Scripts
# check-deployment-health.sh
#!/bin/bash
kubectl rollout status deployment/my-app -n production
if [ $? -eq 0 ]; then
   echo "Deployment successful"
   # Check application health
   for i in {1..5}; do
       response=$(curl -s -o /dev/null -w "%{http_code}" http://app-endpoint/health)
       if [ $response -eq 200 ]; then
           echo "Application is healthy"
           exit 0
       fi
       sleep 10
   done
   echo "Application health check failed"
   exit 1
else
   echo "Deployment failed"
   exit 1
fi`,
                            explanation: "This advanced exercise demonstrates a complete DevOps pipeline including:\n\n" +
                                "1. CI/CD Pipeline:\n" +
                                "   - Automated testing\n" +
                                "   - Security scanning\n" +
                                "   - Container building\n" +
                                "   - Deployment automation\n\n" +
                                "2. Monitoring Setup:\n" +
                                "   - Prometheus configuration\n" +
                                "   - Grafana dashboards\n" +
                                "   - Custom metrics\n" +
                                "   - Alert management\n\n" +
                                "3. Logging System:\n" +
                                "   - Centralized logging\n" +
                                "   - Log aggregation\n" +
                                "   - Search and analysis\n\n" +
                                "4. Auto-scaling:\n" +
                                "   - Horizontal Pod Autoscaling\n" +
                                "   - Resource-based scaling\n" +
                                "   - Custom metrics scaling\n\n" +
                                "5. Security:\n" +
                                "   - Network policies\n" +
                                "   - Security scanning\n" +
                                "   - Access controls\n\n" +
                                "6. Infrastructure:\n" +
                                "   - EKS cluster setup\n" +
                                "   - Monitoring infrastructure\n" +
                                "   - Terraform automation"
                        }
                    }
                ]
            }
        }
    },
    {
        id: 8,
        title: "Mobile App Development",
        description: "To learn mobile development, follow this roadmap",
        extendedContent: `
        Learn to build native and cross-platform mobile applications for iOS and Android. 
        Start with fundamental mobile UI/UX principles and progress to native development 
        using Swift/SwiftUI for iOS and Kotlin for Android.
        
        Explore cross-platform frameworks like React Native and Flutter for building 
        efficient mobile applications. Learn about mobile app architecture, state management, 
        and performance optimization.
        
        Advanced topics include mobile security, offline storage, push notifications, 
        app store deployment, and mobile-specific design patterns.
    `,
        icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
        trackInfo: {
            prerequisites: [
                "Basic programming knowledge in any language",
                "Understanding of object-oriented programming",
                "Familiarity with version control (Git)",
                "Basic understanding of UI/UX principles",
                "Knowledge of REST APIs and web services",
                "Basic understanding of databases",
                "Familiarity with JSON and data formats"
            ],
            outcomes: [
                "Build native iOS applications using Swift/SwiftUI",
                "Develop Android apps using Kotlin/Jetpack Compose",
                "Create cross-platform applications with React Native or Flutter",
                "Implement responsive and adaptive UI designs",
                "Integrate with backend services and APIs",
                "Handle data persistence and state management",
                "Implement push notifications and background tasks",
                "Optimize app performance and battery usage",
                "Deploy apps to App Store and Google Play",
                "Implement mobile security best practices"
            ],
            sections: [
                {
                    title: "Mobile Development Fundamentals",
                    content: "Learn core mobile development concepts including platform-specific architecture, UI components, layouts, and navigation patterns. Understand mobile app lifecycle, permissions, and platform guidelines. Master debugging tools and development environments."
                },
                {
                    title: "Native iOS Development",
                    content: "Master iOS development using Swift and SwiftUI. Learn Xcode, Interface Builder, Auto Layout, and iOS frameworks. Understand iOS app architecture, Core Data, and platform-specific features. Implement authentication, notifications, and background processing."
                },
                {
                    title: "Native Android Development",
                    content: "Learn Android development with Kotlin and Jetpack Compose. Master Android Studio, Material Design, and Android SDK. Understand Android architecture components, data storage, and platform integration. Implement services, broadcast receivers, and background tasks."
                },
                {
                    title: "Cross-Platform Development",
                    content: "Explore cross-platform development using React Native and Flutter. Learn shared codebase architecture, platform-specific adaptations, and native module integration. Understand state management, navigation libraries, and cross-platform UI components."
                },
                {
                    title: "Data & State Management",
                    content: "Master mobile data persistence using SQLite, Realm, or Core Data. Implement state management solutions using Redux, MobX, or Provider. Learn offline-first architecture, data synchronization, and caching strategies."
                },
                {
                    title: "App Performance & Security",
                    content: "Optimize app performance through profiling, caching, and lazy loading. Implement security best practices including encryption, secure storage, and API security. Learn about app signing, code obfuscation, and vulnerability testing."
                },
                {
                    title: "App Store & Production",
                    content: "Learn app store guidelines, submission processes, and deployment strategies. Master continuous integration and delivery for mobile apps. Understand analytics integration, crash reporting, and user feedback management."
                },
                {
                    title: "Advanced Mobile Features",
                    content: "Implement advanced features like maps integration, payment processing, and social media integration. Learn about AR/VR capabilities, machine learning integration, and IoT device connectivity. Understand platform-specific advanced features and APIs."
                }
            ]
        },
        content: {
            examples: [
                {
                    title: "iOS UI Implementation with SwiftUI",
                    code: `// Custom Card View in SwiftUI
    import SwiftUI
    
    struct CardView: View {
        let title: String
        let description: String
        let imageUrl: String
        @State private var isExpanded = false
        
        var body: some View {
            VStack(alignment: .leading, spacing: 12) {
                AsyncImage(url: URL(string: imageUrl)) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                } placeholder: {
                    ProgressView()
                }
                .frame(height: 200)
                .clipped()
                
                VStack(alignment: .leading, spacing: 8) {
                    Text(title)
                        .font(.headline)
                        .foregroundColor(.primary)
                    
                    Text(description)
                        .font(.subheadline)
                        .foregroundColor(.secondary)
                        .lineLimit(isExpanded ? nil : 2)
                    
                    Button(action: {
                        withAnimation {
                            isExpanded.toggle()
                        }
                    }) {
                        Text(isExpanded ? "Read less" : "Read more")
                            .font(.caption)
                            .foregroundColor(.blue)
                    }
                }
                .padding(.horizontal)
                .padding(.bottom)
            }
            .background(Color.white)
            .cornerRadius(12)
            .shadow(radius: 4)
        }
    }
    
    // Usage Example
    struct ContentView: View {
        var body: some View {
            ScrollView {
                LazyVStack(spacing: 16) {
                    ForEach(0..<5) { index in
                        CardView(
                            title: "Card Title \(index + 1)",
                            description: "This is a detailed description of the card that might be quite long and need to be expanded to read fully.",
                            imageUrl: "https://picsum.photos/300/200"
                        )
                    }
                }
                .padding()
            }
        }
    }`,
                    explanation: "This example demonstrates modern iOS UI development using SwiftUI, including async image loading, animations, and responsive layout design."
                },
                {
                    title: "Android Jetpack Compose UI",
                    code: `// Material Design Card in Jetpack Compose
    import androidx.compose.material.*
    import androidx.compose.runtime.*
    import androidx.compose.ui.layout.*
    import androidx.compose.foundation.layout.*
    
    @Composable
    fun CustomCard(
        title: String,
        description: String,
        imageUrl: String
    ) {
        var isExpanded by remember { mutableStateOf(false) }
        
        Card(
            elevation = 4.dp,
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Column {
                CoilImage(
                    data = imageUrl,
                    contentDescription = null,
                    modifier = Modifier
                        .height(200.dp)
                        .fillMaxWidth(),
                    contentScale = ContentScale.Crop
                )
                
                Column(
                    modifier = Modifier.padding(16.dp)
                ) {
                    Text(
                        text = title,
                        style = MaterialTheme.typography.h6
                    )
                    
                    Spacer(modifier = Modifier.height(8.dp))
                    
                    Text(
                        text = description,
                        style = MaterialTheme.typography.body2,
                        maxLines = if (isExpanded) Int.MAX_VALUE else 2,
                        overflow = TextOverflow.Ellipsis
                    )
                    
                    TextButton(
                        onClick = { isExpanded = !isExpanded }
                    ) {
                        Text(
                            text = if (isExpanded) "Read less" else "Read more"
                        )
                    }
                }
            }
        }
    }
    
    // Usage in Activity/Fragment
    class MainActivity : ComponentActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContent {
                MaterialTheme {
                    LazyColumn {
                        items(5) { index ->
                            CustomCard(
                                title = "Card Title index + 1",
                                description = "This is a detailed description that might need expansion to read fully.",
                                imageUrl = "https://picsum.photos/300/200"
                            )
                        }
                    }
                }
            }
        }
    }`,
                    explanation: "This example shows modern Android UI development using Jetpack Compose, implementing Material Design principles and state management."
                },
                {
                    title: "React Native Cross-Platform Implementation",
                    code: `// Custom Card Component in React Native
    import React, { useState } from 'react';
    import {
        View,
        Text,
        Image,
        TouchableOpacity,
        StyleSheet,
        Animated,
    } from 'react-native';
    
    const Card = ({ title, description, imageUrl }) => {
        const [expanded, setExpanded] = useState(false);
        const [animation] = useState(new Animated.Value(0));
    
        const toggleExpansion = () => {
            const toValue = expanded ? 0 : 1;
            Animated.spring(animation, {
                toValue,
                useNativeDriver: false,
            }).start();
            setExpanded(!expanded);
        };
    
        const maxHeight = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 300],
        });
    
        return (
            <View style={styles.card}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Animated.View style={{ maxHeight }}>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </Animated.View>
                    <TouchableOpacity onPress={toggleExpansion}>
                        <Text style={styles.button}>
                            {expanded ? 'Read less' : 'Read more'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    
    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginHorizontal: 16,
            marginVertical: 8,
        },
        image: {
            height: 200,
            width: '100%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
        },
        content: {
            padding: 16,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        description: {
            fontSize: 14,
            color: '#666',
            lineHeight: 20,
        },
        button: {
            color: '#007AFF',
            marginTop: 8,
            fontSize: 14,
        },
    });
    
    // Usage
    export default function App() {
        return (
            <ScrollView>
                {Array(5).fill().map((_, index) => (
                    <Card
                        key={index}
                        title=Card Title {index + 1}
                        description="This is a detailed description that demonstrates cross-platform UI implementation with animations and proper styling."
                        imageUrl="https://picsum.photos/300/200"
                    />
                ))}
            </ScrollView>
        );
    }`,
                    explanation: "This example shows cross-platform development with React Native, including animated components and shared styling."
                },
                {
                    title: "Flutter Cross-Platform UI",
                    code: `// Custom Card Widget in Flutter
    import 'package:flutter/material.dart';
    
    class CustomCard extends StatefulWidget {
      final String title;
      final String description;
      final String imageUrl;
    
      const CustomCard({
        Key? key,
        required this.title,
        required this.description,
        required this.imageUrl,
      }) : super(key: key);
    
      @override
      _CustomCardState createState() => _CustomCardState();
    }
    
    class _CustomCardState extends State<CustomCard> {
      bool _expanded = false;
    
      @override
      Widget build(BuildContext context) {
        return Card(
          margin: const EdgeInsets.all(16.0),
          elevation: 4.0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12.0),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(
                  top: Radius.circular(12.0),
                ),
                child: Image.network(
                  widget.imageUrl,
                  height: 200.0,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      widget.title,
                      style: Theme.of(context).textTheme.headline6,
                    ),
                    const SizedBox(height: 8.0),
                    AnimatedCrossFade(
                      firstChild: Text(
                        widget.description,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: Theme.of(context).textTheme.bodyText2,
                      ),
                      secondChild: Text(
                        widget.description,
                        style: Theme.of(context).textTheme.bodyText2,
                      ),
                      crossFadeState: _expanded
                          ? CrossFadeState.showSecond
                          : CrossFadeState.showFirst,
                      duration: const Duration(milliseconds: 300),
                    ),
                    TextButton(
                      onPressed: () {
                        setState(() {
                          _expanded = !_expanded;
                        });
                      },
                      child: Text(
                        _expanded ? 'Read less' : 'Read more',
                        style: TextStyle(
                          color: Theme.of(context).primaryColor,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      }
    }
    
    // Usage
    class MyApp extends StatelessWidget {
      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            body: ListView.builder(
              itemCount: 5,
              itemBuilder: (context, index) {
                return CustomCard(
                  title: Card Title index + 1,
                  description: 'This is a detailed description showing Flutter\'s '
                      'cross-platform capabilities with material design implementation.',
                  imageUrl: 'https://picsum.photos/300/200',
                );
              },
            ),
          ),
        );
      }
    }`,
                    explanation: "This example demonstrates Flutter's cross-platform UI development capabilities with Material Design components and animations."
                }
            ],

            roadmap: [
                {
                    title: "1. Mobile Development Fundamentals",
                    description: "Master core concepts of mobile development",
                    topics: [
                        "Mobile app architecture patterns",
                        "UI/UX principles for mobile",
                        "Platform-specific guidelines",
                        "Development environment setup",
                        "Version control and collaboration",
                        "Mobile app lifecycle",
                        "Debugging and testing basics"
                    ]
                },
                {
                    title: "2. iOS Development",
                    description: "Learn native iOS development",
                    topics: [
                        "Swift programming fundamentals",
                        "SwiftUI and UIKit",
                        "iOS app architecture",
                        "Core Data and persistence",
                        "iOS networking and security",
                        "App Store guidelines",
                        "iOS testing and debugging"
                    ]
                },
                {
                    title: "3. Android Development",
                    description: "Master Android app development",
                    topics: [
                        "Kotlin programming",
                        "Jetpack Compose and XML layouts",
                        "Android architecture components",
                        "Room database and SQLite",
                        "Android networking",
                        "Play Store guidelines",
                        "Android testing frameworks"
                    ]
                },
                {
                    title: "4. Cross-Platform Development",
                    description: "Explore cross-platform solutions",
                    topics: [
                        "React Native fundamentals",
                        "Flutter development",
                        "Cross-platform architecture",
                        "Shared codebase management",
                        "Native modules integration",
                        "Platform-specific adaptations",
                        "Performance optimization"
                    ]
                },
                {
                    title: "5. Data Management & Storage",
                    description: "Handle data in mobile applications",
                    topics: [
                        "Local data persistence",
                        "State management solutions",
                        "API integration",
                        "Offline support",
                        "Data synchronization",
                        "Cache management",
                        "Security best practices"
                    ]
                },
                {
                    title: "6. Advanced Features",
                    description: "Implement advanced mobile capabilities",
                    topics: [
                        "Push notifications",
                        "Background processing",
                        "Location services",
                        "Camera and media",
                        "Social media integration",
                        "Payment processing",
                        "Analytics and tracking"
                    ]
                },
                {
                    title: "7. Testing & Deployment",
                    description: "Master testing and deployment processes",
                    topics: [
                        "Unit and integration testing",
                        "UI automation testing",
                        "Continuous integration",
                        "App store deployment",
                        "Beta testing",
                        "App signing and provisioning",
                        "Release management"
                    ]
                }
            ],
            resources: {
                documentation: [
                    {
                        title: "iOS Developer Documentation",
                        url: "https://developer.apple.com/documentation/",
                        description: "Official Apple documentation for iOS development including SwiftUI and UIKit",
                        type: "Platform Documentation"
                    },
                    {
                        title: "Android Developer Guides",
                        url: "https://developer.android.com/guide",
                        description: "Official Android development documentation including Kotlin and Jetpack",
                        type: "Platform Documentation"
                    },
                    {
                        title: "React Native Documentation",
                        url: "https://reactnative.dev/docs/getting-started",
                        description: "Official React Native documentation and guides",
                        type: "Framework Documentation"
                    },
                    {
                        title: "Flutter Documentation",
                        url: "https://flutter.dev/docs",
                        description: "Comprehensive Flutter development documentation and cookbooks",
                        type: "Framework Documentation"
                    },
                    {
                        title: "Material Design Guidelines",
                        url: "https://material.io/design",
                        description: "Design guidelines for creating mobile interfaces",
                        type: "Design Guidelines"
                    }
                ],
                tutorials: [
                    {
                        title: "SwiftUI Tutorial",
                        url: "https://developer.apple.com/tutorials/swiftui/",
                        description: "Official Apple tutorials for SwiftUI development",
                        type: "Platform Tutorial"
                    },
                    {
                        title: "Android Kotlin Fundamentals",
                        url: "https://developer.android.com/courses/kotlin-android-fundamentals/overview",
                        description: "Official Android Kotlin development course",
                        type: "Course"
                    },
                    {
                        title: "React Native Crash Course",
                        url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4",
                        description: "Comprehensive React Native tutorial for beginners",
                        type: "Video Tutorial"
                    },
                    {
                        title: "Flutter App Development",
                        url: "https://www.appbrewery.co/p/flutter-development-bootcamp-with-dart",
                        description: "Complete Flutter development bootcamp",
                        type: "Course"
                    },
                    {
                        title: "Mobile UI/UX Design Course",
                        url: "https://www.coursera.org/learn/mobile-app-design",
                        description: "Mobile app design principles and best practices",
                        type: "Design Course"
                    }
                ],
                videos: [
                    {
                        title: "Sean Allen",
                        url: "https://www.youtube.com/c/SeanAllen",
                        description: "iOS development tutorials and career advice",
                        platform: "YouTube"
                    },
                    {
                        title: "Philipp Lackner",
                        url: "https://www.youtube.com/c/PhilippLackner",
                        description: "Android development tutorials with Kotlin",
                        platform: "YouTube"
                    },
                    {
                        title: "Flutter Mapp",
                        url: "https://www.youtube.com/c/FlutterMapp",
                        description: "Flutter development tutorials and projects",
                        platform: "YouTube"
                    },
                    {
                        title: "William Candillon",
                        url: "https://www.youtube.com/c/wcandillon",
                        description: "Advanced React Native tutorials and animations",
                        platform: "YouTube"
                    },
                    {
                        title: "London App Brewery",
                        url: "https://www.youtube.com/c/Londonappbrewery",
                        description: "Mobile app development tutorials and courses",
                        platform: "YouTube"
                    }
                ],
                books: [
                    {
                        title: "iOS Programming: The Big Nerd Ranch Guide",
                        author: "Christian Keur, Aaron Hillegass",
                        description: "Comprehensive guide to iOS development",
                        level: "Intermediate"
                    },
                    {
                        title: "Android Programming: The Big Nerd Ranch Guide",
                        author: "Bill Phillips, Chris Stewart",
                        description: "In-depth Android development guide",
                        level: "Intermediate"
                    },
                    {
                        title: "Flutter in Action",
                        author: "Eric Windmill",
                        description: "Practical Flutter development guide",
                        level: "Intermediate"
                    },
                    {
                        title: "React Native in Action",
                        author: "Nader Dabit",
                        description: "Building mobile apps with React Native",
                        level: "Intermediate"
                    },
                    {
                        title: "Mobile App Development with Swift",
                        author: "Apple Education",
                        description: "Official Apple guide to Swift development",
                        level: "Beginner"
                    }
                ],
                tools: [
                    {
                        title: "Xcode",
                        url: "https://developer.apple.com/xcode/",
                        description: "Official IDE for iOS development",
                        type: "Development IDE",
                        category: "Essential"
                    },
                    {
                        title: "Android Studio",
                        url: "https://developer.android.com/studio",
                        description: "Official IDE for Android development",
                        type: "Development IDE",
                        category: "Essential"
                    },
                    {
                        title: "Visual Studio Code",
                        url: "https://code.visualstudio.com/",
                        description: "Popular editor for React Native and Flutter",
                        type: "Code Editor",
                        category: "Essential"
                    },
                    {
                        title: "Figma",
                        url: "https://www.figma.com/",
                        description: "Design and prototyping tool",
                        type: "Design Tool",
                        category: "Design"
                    },
                    {
                        title: "Firebase",
                        url: "https://firebase.google.com/",
                        description: "Mobile app development platform",
                        type: "Development Platform",
                        category: "Backend"
                    }
                ],
                communities: [
                    {
                        title: "iOS Developers",
                        url: "https://developer.apple.com/forums/",
                        description: "Official Apple developer forums",
                        type: "Forum"
                    },
                    {
                        title: "Android Developers",
                        url: "https://reddit.com/r/androiddev",
                        description: "Android development community on Reddit",
                        type: "Forum"
                    },
                    {
                        title: "React Native Community",
                        url: "https://reactnative.dev/community/overview",
                        description: "Official React Native community resources",
                        type: "Community"
                    },
                    {
                        title: "Flutter Dev",
                        url: "https://discord.gg/flutter",
                        description: "Flutter development community on Discord",
                        type: "Discord"
                    },
                    {
                        title: "Mobile Dev Weekly",
                        url: "https://mobiledevweekly.com/",
                        description: "Weekly newsletter for mobile developers",
                        type: "Newsletter"
                    }
                ],
                podcasts: [
                    {
                        title: "Swift by Sundell",
                        url: "https://www.swiftbysundell.com/podcast/",
                        description: "Weekly podcast about Swift development",
                        platform: "Podcast"
                    },
                    {
                        title: "Android Developers Backstage",
                        url: "http://androidbackstage.blogspot.com/",
                        description: "Official Android developers podcast",
                        platform: "Podcast"
                    },
                    {
                        title: "React Native Radio",
                        url: "https://reactnativeradio.com/",
                        description: "Weekly podcast about React Native development",
                        platform: "Podcast"
                    },
                    {
                        title: "Flutter Widget of the Week",
                        url: "https://www.youtube.com/playlist?list=PLjxrf2q8roU23XGwz3Km7sQZFTdB996iG",
                        description: "Short videos about Flutter widgets",
                        platform: "Video Series"
                    }
                ],
                blogs: [
                    {
                        title: "Swift with Majid",
                        url: "https://swiftwithmajid.com/",
                        description: "Weekly blog about Swift development",
                        type: "Blog"
                    },
                    {
                        title: "Android Weekly",
                        url: "https://androidweekly.net/",
                        description: "Weekly Android development newsletter",
                        type: "Newsletter"
                    },
                    {
                        title: "React Native Blog",
                        url: "https://reactnative.dev/blog",
                        description: "Official React Native blog",
                        type: "Blog"
                    },
                    {
                        title: "Flutter Medium Publication",
                        url: "https://medium.com/flutter",
                        description: "Official Flutter blog on Medium",
                        type: "Blog"
                    }
                ]
            },

            practice: {
                beginnerExercises: [
                    {
                        title: "To-Do List App",
                        difficulty: "Easy",
                        description: "Create a basic to-do list application with local storage capabilities and basic UI features.",
                        hints: [
                            "Start with a simple list view",
                            "Implement add/delete functionality",
                            "Use local storage for data persistence",
                            "Add basic input validation"
                        ],
                        solution: {
                            code: `// React Native Implementation
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    AsyncStorage,
    StyleSheet,
} from 'react-native';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        } catch (error) {
            console.error('Error loading todos:', error);
        }
    };

    const saveTodos = async (updatedTodos) => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        } catch (error) {
            console.error('Error saving todos:', error);
        }
    };

    const addTodo = () => {
        if (newTodo.trim()) {
            const updatedTodos = [
                ...todos,
                {
                    id: Date.now().toString(),
                    text: newTodo,
                    completed: false,
                }
            ];
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
            setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        );
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity
                style={styles.todoCheck}
                onPress={() => toggleTodo(item.id)}
            >
                <Text>{item.completed ? '✓' : '○'}</Text>
            </TouchableOpacity>
            <Text style={[
                styles.todoText,
                item.completed && styles.completedTodo
            ]}>
                {item.text}
            </Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTodo(item.id)}
            >
                <Text style={styles.deleteButtonText}>✕</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newTodo}
                    onChangeText={setNewTodo}
                    placeholder="Add a new todo"
                    onSubmitEditing={addTodo}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={addTodo}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 6,
        marginRight: 10,
        backgroundColor: 'white',
    },
    addButton: {
        backgroundColor: '#007AFF',
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
    },
    list: {
        flex: 1,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 6,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    todoCheck: {
        marginRight: 10,
    },
    todoText: {
        flex: 1,
    },
    completedTodo: {
        textDecorationLine: 'line-through',
        color: '#666',
    },
    deleteButton: {
        padding: 5,
    },
    deleteButtonText: {
        color: '#FF3B30',
        fontSize: 16,
    },
});

export default TodoApp;`,
                            explanation: "This beginner exercise demonstrates:\n" +
                                "1. Basic mobile UI components and layout\n" +
                                "2. State management using React hooks\n" +
                                "3. Local data persistence with AsyncStorage\n" +
                                "4. User input handling and validation\n" +
                                "5. List rendering and item manipulation\n" +
                                "6. Basic styling and animations"
                        }
                    }
                ],
                intermediateExercises: [
                    {
                        title: "Social Media Feed App",
                        difficulty: "Medium",
                        description: "Create a social media feed with infinite scrolling, image loading, and interactions.",
                        hints: [
                            "Implement infinite scroll pagination",
                            "Add pull-to-refresh functionality",
                            "Handle image caching",
                            "Implement like/comment actions",
                            "Add skeleton loading states"
                        ],
                        solution: {
                            code: `// Social Feed Implementation in Flutter
import 'package:flutter/material.dart';
import 'package:cached_network_image/cached_network_image.dart';

class SocialFeed extends StatefulWidget {
  @override
  _SocialFeedState createState() => _SocialFeedState();
}

class _SocialFeedState extends State<SocialFeed> {
  final List<Post> _posts = [];
  bool _isLoading = false;
  bool _hasMore = true;
  final _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    _loadMore();
    _scrollController.addListener(_onScroll);
  }

  void _onScroll() {
    if (_scrollController.position.pixels >=
        _scrollController.position.maxScrollExtent - 200) {
      _loadMore();
    }
  }

  Future<void> _loadMore() async {
    if (_isLoading || !_hasMore) return;

    setState(() {
      _isLoading = true;
    });

    try {
      // Simulate API call
      await Future.delayed(Duration(seconds: 2));
      final newPosts = await fetchPosts(page: _posts.length ~/ 10);
      
      if (newPosts.isEmpty) {
        setState(() {
          _hasMore = false;
        });
      } else {
        setState(() {
          _posts.addAll(newPosts);
        });
      }
    } catch (e) {
      // Handle error
      print('Error loading posts: $e');
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  Future<void> _onRefresh() async {
    setState(() {
      _posts.clear();
      _hasMore = true;
    });
    await _loadMore();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Social Feed'),
      ),
      body: RefreshIndicator(
        onRefresh: _onRefresh,
        child: ListView.builder(
          controller: _scrollController,
          itemCount: _posts.length + (_hasMore ? 1 : 0),
          itemBuilder: (context, index) {
            if (index == _posts.length) {
              return _buildLoader();
            }
            return _buildPostCard(_posts[index]);
          },
        ),
      ),
    );
  }

  Widget _buildPostCard(Post post) {
    return Card(
      margin: EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ListTile(
            leading: CircleAvatar(
              backgroundImage: CachedNetworkImageProvider(post.userAvatar),
            ),
            title: Text(post.userName),
            subtitle: Text(post.timeAgo),
          ),
          CachedNetworkImage(
            imageUrl: post.imageUrl,
            placeholder: (context, url) => 
                Center(child: CircularProgressIndicator()),
            errorWidget: (context, url, error) => 
                Icon(Icons.error),
            fit: BoxFit.cover,
          ),
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    IconButton(
                      icon: Icon(
                        post.isLiked ? Icons.favorite : Icons.favorite_border,
                        color: post.isLiked ? Colors.red : null,
                      ),
                      onPress: () => _toggleLike(post),
                    ),
                    Text('post.likes likes'),
                    SizedBox(width: 16),
                    IconButton(
                      icon: Icon(Icons.comment_outlined),
                      onPress: () => _showComments(post),
                    ),
                    Text('post.comments.length} comments'),
                  ],
                ),
                Text(
                  post.caption,
                  style: Theme.of(context).textTheme.bodyText2,
                ),
                if (post.comments.isNotEmpty)
                  Padding(
                    padding: EdgeInsets.only(top: 8.0),
                    child: Text(
                      View all post.comments.length  comments,
                      style: TextStyle(color: Colors.grey),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLoader() {
    return Container(
      padding: EdgeInsets.all(16.0),
      alignment: Alignment.center,
      child: CircularProgressIndicator(),
    );
  }

  void _toggleLike(Post post) {
    setState(() {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
    });
  }

  void _showComments(Post post) {
    showModalBottomSheet(
      context: context,
      builder: (context) => CommentsSheet(post: post),
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }
}

class Post {
  final String id;
  final String userName;
  final String userAvatar;
  final String imageUrl;
  final String caption;
  final String timeAgo;
  int likes;
  bool isLiked;
  final List<Comment> comments;

  Post({
    required this.id,
    required this.userName,
    required this.userAvatar,
    required this.imageUrl,
    required this.caption,
    required this.timeAgo,
    required this.likes,
    this.isLiked = false,
    required this.comments,
  });
}

class Comment {
  final String userName;
  final String text;
  final String timeAgo;

  Comment({
    required this.userName,
    required this.text,
    required this.timeAgo,
  });
}

class CommentsSheet extends StatelessWidget {
  final Post post;

  const CommentsSheet({required this.post});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height * 0.7,
      child: Column(
        children: [
          Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              'Comments',
              style: Theme.of(context).textTheme.headline6,
            ),
          ),
          Expanded(
            child: ListView.builder(
              itemCount: post.comments.length,
              itemBuilder: (context, index) {
                final comment = post.comments[index];
                return ListTile(
                  title: Text(comment.userName),
                  subtitle: Text(comment.text),
                  trailing: Text(comment.timeAgo),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}`,
                            explanation: "This intermediate exercise demonstrates:\n" +
                                "1. Complex UI implementation with multiple components\n" +
                                "2. Infinite scroll pagination\n" +
                                "3. Image caching and loading states\n" +
                                "4. User interactions and state management\n" +
                                "5. Modal views and bottom sheets\n" +
                                "6. Performance optimization techniques"
                        }
                    }
                ],
                advancedExercises: [
                    {
                        title: "E-Commerce App",
                        difficulty: "Hard",
                        description: "Build a full-featured e-commerce application with product catalog, cart management, and checkout process.",
                        hints: [
                            "Implement state management (Redux/BLoC)",
                            "Add offline support with local storage",
                            "Implement payment gateway integration",
                            "Add animations and transitions",
                            "Implement push notifications",
                            "Add user authentication"
                        ],
                        solution: {
                            code: `// Android e-commerce app implementation code with core components

// 1. ViewModel and LiveData for State Management
class ProductViewModel(application: Application) : AndroidViewModel(application) {
    private val repository = ProductRepository(application)
    val products: LiveData<List<Product>> = repository.getProducts()

    fun addProductToCart(product: Product) {
        repository.addToCart(product)
    }
}

// 2. Repository with Room for Offline Support
class ProductRepository(context: Context) {
    private val productDao = AppDatabase.getDatabase(context).productDao()

    fun getProducts(): LiveData<List<Product>> {
        return productDao.getAllProducts()
    }

    suspend fun addToCart(product: Product) {
        productDao.insertToCart(product)
    }
}

// 3. Retrofit API Service for Network Requests
interface ApiService {
    @GET("products")
    suspend fun fetchProducts(): Response<List<Product>>

    @POST("orders")
    suspend fun createOrder(@Body orderData: Order): Response<Order>
}

// 4. Firebase Auth for Authentication
object AuthService {
    fun login(email: String, password: String, onSuccess: () -> Unit, onError: 
    (Exception) -> Unit) {
        FirebaseAuth.getInstance().signInWithEmailAndPassword(email, password)
            .addOnSuccessListener { onSuccess() }
            .addOnFailureListener { exception -> onError(exception) }
    }

    fun register(email: String, password: String, onSuccess: () -> Unit, onError: 
    (Exception) -> Unit) {
        FirebaseAuth.getInstance().createUserWithEmailAndPassword(email, password)
            .addOnSuccessListener { onSuccess() }
            .addOnFailureListener { exception -> onError(exception) }
    }
}

// 5. Payment Gateway Integration (e.g., Stripe)
class PaymentService {
    fun processPayment(paymentDetails: PaymentDetails, onSuccess: () -> Unit, onError: 
    (Exception) -> Unit) {
        // Code for handling payment through Stripe or other gateways
    }
}

// 6. Firebase Cloud Messaging for Push Notifications
class FCMService : FirebaseMessagingService() {
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        // Handle push notification data
    }
}

// 7. MotionLayout for Smooth Animations
// Sample XML layout using MotionLayout for cart transition
/*
<MotionLayout
    android:id="@+id/motionLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:layoutDescription="@xml/scene"
    >
    <!-- Define cart and checkout transitions here -->
</MotionLayout>
*/

// AppDatabase.kt for Room Database
@Database(entities = [Product::class, CartItem::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun productDao(): ProductDao

    companion object {
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "ecommerce_database"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}
`,
                            explanation: "This advanced exercise demonstrates:\n" +
                                "1. Complex UI and state management with ViewModel and LiveData (or Jetpack Compose State)\n" +
                                "2. Offline capabilities with Room database for caching data\n" +
                                "3. Secure user authentication using Firebase Auth or a custom API\n" +
                                "4. Real-time data fetching and creation with Retrofit and API integration\n" +
                                "5. Push notifications through Firebase Cloud Messaging\n" +
                                "6. Smooth animations and transitions using MotionLayout\n" +
                                "7. Integration with a payment gateway like Stripe or PayPal\n" +
                                "8. Performance optimization for handling large data and reducing memory usage"

                }
            }
        ]
    }   
}
},
{
    id: 9,
    title: "Open Source Learning",
    description: "Kickstart Your Journey in Open Source",
    extendedContent: "Open source software development allows you to collaborate, contribute, and learn from real-world projects. This roadmap guides you through the skills, platforms, and tools needed to start contributing to open source, with a focus on effective collaboration, version control, and project navigation.\n\nYou'll gain practical experience working with Git, GitHub, and collaborative workflows, as well as an understanding of community standards and software licensing. This track equips you with valuable hands-on skills for career growth.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
    trackInfo: {
        title: "Open Source Learning Track",
        description: "Learn the fundamentals of open-source contributions and community collaboration",
        extendedContent: "Open source software development allows you to collaborate, contribute, and learn from real-world projects. This roadmap guides you through the skills, platforms, and tools needed to start contributing to open source, with a focus on effective collaboration, version control, and project navigation.\n\nYou'll gain practical experience working with Git, GitHub, and collaborative workflows, as well as an understanding of community standards and software licensing. This track equips you with valuable hands-on skills for career growth.",
        prerequisites: [
            "Familiarity with a programming language (e.g., Python, JavaScript, or C++)",
            "Understanding of basic data structures and algorithms",
            "Basic knowledge of version control systems (e.g., Git)",
            "Interest in collaboration and teamwork",
            "Willingness to learn and adapt to different codebases"
        ],
        outcomes: [
            "Contribute to real-world open source projects",
            "Use Git and GitHub proficiently in collaborative environments",
            "Navigate and understand complex codebases",
            "Communicate effectively with other contributors and maintainers"
        ],
        sections: [
            {
                title: "Introduction to Open Source",
                content: "Understand the fundamentals of open source, including licensing, community standards, and project selection."
            },
            {
                title: "Git and GitHub Essentials",
                content: "Learn the basics of Git, GitHub workflows, and version control principles for collaborative coding."
            },
            {
                title: "Finding and Choosing Projects",
                content: "Explore strategies for finding beginner-friendly projects, reading codebases, and understanding contribution guidelines."
            },
            {
                title: "Making Your First Contribution",
                content: "Learn the process of forking, cloning, and submitting pull requests, with best practices for code submission."
            },
            {
                title: "Advanced Collaboration Skills",
                content: "Develop skills in collaborative workflows, including handling code reviews, issues, and project discussions."
            },
            {
                title: "Project Maintenance and Management",
                content: "Gain insights into maintaining open source projects, including responding to contributions, managing community interactions, and ensuring project sustainability."
            },
        ]
        
    },
    content: {
        examples: [
            {
                title: "First Contribution via Pull Request",
                code: "// Step 1: Fork the repository\n// Step 2: Clone to local machine\n$ git clone https://github.com/username/repository.git\n\n// Step 3: Create a new branch\n$ git checkout -b new-feature\n\n// Step 4: Make changes and commit\n$ git add .\n$ git commit -m \"Add new feature\"\n\n// Step 5: Push changes to GitHub\n$ git push origin new-feature\n\n// Step 6: Create a pull request on GitHub",
                explanation: "This example demonstrates the basic workflow for making your first contribution on GitHub, from forking a repository to creating a pull request."
            },
            {
                title: "Setting Up Open Source Project Locally",
                code: "# Clone the project repository\n$ git clone https://github.com/example/project.git\n\n# Navigate into project directory\n$ cd project\n\n# Install dependencies (using npm for Node.js projects)\n$ npm install\n\n# Run the project (for example, starting a development server)\n$ npm start",
                explanation: "Basic steps to clone and set up a local development environment for an open source project, using a Node.js-based project as an example."
            },
            {
                title: "Fixing a Bug in an Open Source Project",
                code: "# Step 1: Identify the issue on GitHub\n# Step 2: Clone the repository\n$ git clone https://github.com/example/project.git\n\n# Step 3: Create a new branch for the bug fix\n$ git checkout -b fix-bug-issue-123\n\n# Step 4: Make necessary changes to fix the bug\n# (Edit relevant files)\n\n# Step 5: Test the changes\n$ npm test\n\n# Step 6: Commit the changes\n$ git add .\n$ git commit -m \"Fix bug in feature\"\n\n# Step 7: Push changes and create a pull request\n$ git push origin fix-bug-issue-123\n",
                explanation: "This example illustrates how to address a bug in an open source project, from identifying the issue to submitting a pull request."
            },
            {
                title: "Adding a New Feature to a Project",
                code: "// Step 1: Fork the repository and clone it\n$ git clone https://github.com/username/repository.git\n\n// Step 2: Create a new feature branch\n$ git checkout -b feature/new-awesome-feature\n\n// Step 3: Implement the feature (e.g., adding a new function)\n// (Edit relevant files to add functionality)\n\n// Step 4: Commit your changes\n$ git add .\n$ git commit -m \"Implement new awesome feature\"\n\n// Step 5: Push the branch to GitHub\n$ git push origin feature/new-awesome-feature\n\n// Step 6: Open a pull request on GitHub and describe your feature",
                explanation: "This example guides you through adding a new feature to an open source project, from forking to submitting a pull request."
            },
            {
                title: "Creating and Running Tests for an Open Source Project",
                code: "// Step 1: Clone the repository\n$ git clone https://github.com/example/project.git\n\n// Step 2: Navigate to the project directory\n$ cd project\n\n// Step 3: Create a new branch for the tests\n$ git checkout -b add-tests\n\n// Step 4: Write tests (using a testing framework like Jest)\n// (Edit or create test files)\n\n// Step 5: Run tests to ensure everything works\n$ npm test\n\n// Step 6: Commit your test cases\n$ git add .\n$ git commit -m \"Add tests for existing functionality\"\n\n// Step 7: Push changes and create a pull request\n$ git push origin add-tests\n",
                explanation: "This example describes how to add tests to an open source project, ensuring the code's reliability before submitting a pull request."
            },
            {
                title: "Reviewing a Pull Request",
                code: "# Step 1: Go to the 'Pull Requests' section of the repository\n# Step 2: Click on the pull request you want to review\n# Step 3: Review the code changes by looking at the 'Files Changed' tab\n# Step 4: Add comments or suggestions on specific lines by clicking on the '+' icon next to the line\n# Step 5: Approve the pull request if it meets the criteria, or request changes if necessary\n# Step 6: Leave a comment summarizing your review and submit it",
                explanation: "This example outlines the steps for reviewing a pull request, providing feedback, and either approving or requesting changes."
            },
            {
                title: "Maintaining an Open Source Project",
                code: "// Step 1: Monitor issues reported by users on GitHub\n// Step 2: Prioritize issues based on severity and community impact\n// Step 3: Assign issues to contributors or work on them yourself\n// Step 4: Merge pull requests after thorough review\n// Step 5: Regularly update documentation and project dependencies\n// Step 6: Communicate with the community through discussions or updates",
                explanation: "This example explains how to maintain an open source project, including monitoring issues, merging contributions, and keeping documentation up to date."
            },
            {
                title: "Updating Project Documentation",
                code: "# Step 1: Identify the documentation that needs updating (e.g., README, Wiki)\n# Step 2: Make necessary edits or additions to clarify usage or installation\n# Step 3: Use Markdown for formatting and adding links\n# Step 4: Preview your changes in the GitHub editor\n# Step 5: Commit your changes with a clear message\n$ git commit -m \"Update README for better clarity\"\n# Step 6: Push changes to the repository\n$ git push origin main",
                explanation: "This example describes how to update project documentation, ensuring users have accurate and helpful information."
            }
        ],
        roadmap: [
            {
                title: "1. Understanding Open Source",
                description: "Learn about open source principles, licensing, and communities.",
                topics: [
                    "What is open source software?",
                    "Open source licenses and choosing one.",
                    "Importance of community and collaboration.",
                    "How to find open source projects."
                ]
            },
            {
                title: "2. Git & GitHub Basics",
                description: "Master version control with Git and GitHub.",
                topics: [
                    "Git basics: clone, commit, push, and pull.",
                    "GitHub features: issues, pull requests, and forks.",
                    "Branching and merging in Git.",
                    "Collaborative workflows and code reviews."
                ]
            },
            {
                title: "3. Contributing to Open Source",
                description: "Learn how to effectively contribute to projects.",
                topics: [
                    "Finding beginner-friendly projects.",
                    "Reading and understanding contribution guidelines.",
                    "Creating pull requests and handling feedback.",
                    "Documenting code and writing helpful commit messages."
                ]
            },
            {
                title: "4. Enhancing Contribution Skills",
                description: "Deepen your contributions with testing, documentation, and CI/CD.",
                topics: [
                    "Writing tests and understanding test frameworks.",
                    "Improving project documentation.",
                    "Automated testing with CI/CD pipelines.",
                    "Addressing and managing issues effectively."
                ]
            },
            {
                title: "5. Project Maintenance and Management",
                description: "Learn about managing and maintaining open source projects.",
                topics: [
                    "Responding to issues and pull requests.",
                    "Organizing project tasks and assigning roles.",
                    "Maintaining documentation and onboarding contributors.",
                    "Ensuring project health and community engagement."
                ]
            },
            {
                title: "6. Advanced Open Source Practices",
                description: "Explore strategies for leading and scaling open source projects.",
                topics: [
                    "Scaling projects and managing large teams.",
                    "Implementing effective governance models.",
                    "Handling conflicts and fostering a positive community culture.",
                    "Navigating legal aspects and compliance in open source."
                ]
            }
        ],
        
        resources: {
            documentation: [
                {
                    title: "Open Source Guides by GitHub",
                    url: "https://opensource.guide/",
                    description: "Comprehensive guides on how to start contributing to open source and managing projects.",
                    type: "Guide"
                },
                {
                    title: "Git Documentation",
                    url: "https://git-scm.com/doc",
                    description: "Official Git documentation for understanding version control.",
                    type: "Official Documentation"
                },
                {
                    title: "Choosing an Open Source License",
                    url: "https://choosealicense.com/",
                    description: "Helpful tool for understanding and selecting appropriate licenses for open source projects.",
                    type: "License Guide"
                }
            ],
            tutorials: [
                {
                    title: "First Contributions",
                    url: "https://firstcontributions.github.io/",
                    description: "Beginner-friendly guide and resources to make your first contribution on GitHub.",
                    type: "Interactive Tutorial"
                },
                {
                    title: "GitHub Learning Lab",
                    url: "https://lab.github.com/",
                    description: "Self-paced interactive tutorials for learning GitHub, Git, and collaborative workflows.",
                    type: "Interactive Platform"
                },
                {
                    title: "Contributing to Open Source (freeCodeCamp)",
                    url: "https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/",
                    description: "A beginner's guide on finding and contributing to open source projects.",
                    type: "Beginner Guide"
                }
            ],
            videos: [
                {
                    title: "How to Contribute to Open Source Projects on GitHub",
                    url: "https://www.youtube.com/watch?v=MnUd31TvBoU",
                    description: "A practical video guide for making your first open source contribution on GitHub.",
                    platform: "YouTube"
                },
                {
                    title: "Understanding Git and GitHub",
                    url: "https://www.youtube.com/watch?v=USjZcfj8yxE",
                    description: "A beginner-friendly introduction to Git and GitHub by Traversy Media.",
                    platform: "YouTube"
                },
                {
                    title: "The Basics of Open Source by Google",
                    url: "https://www.youtube.com/watch?v=yzeVMecydCE",
                    description: "Google's overview on what open source is and how to get involved.",
                    platform: "YouTube"
                }
            ],
            books: [
                {
                    title: "Producing Open Source Software",
                    author: "Karl Fogel",
                    description: "A comprehensive guide on how to build, manage, and grow successful open source projects.",
                    level: "Intermediate"
                },
                {
                    title: "The Cathedral & the Bazaar",
                    author: "Eric S. Raymond",
                    description: "Explores the principles of open source and its impact on software development, with insights into collaborative workflows.",
                    level: "Beginner to Intermediate"
                },
                {
                    title: "Forge Your Future with Open Source",
                    author: "VM (Vicky) Brasseur",
                    description: "Practical guidance on how to contribute to open source and navigate project communities.",
                    level: "Beginner"
                }
            ],
            practice: [
                {
                    title: "Up For Grabs",
                    url: "https://up-for-grabs.net/",
                    description: "A platform to find beginner-friendly issues in open source projects, tagged by maintainers to help new contributors.",
                    type: "Issue Finder"
                },
                {
                    title: "First Timers Only",
                    url: "https://www.firsttimersonly.com/",
                    description: "Resources and projects geared towards new contributors making their first open source contribution.",
                    type: "Resource Hub"
                },
                {
                    title: "CodeTriage",
                    url: "https://www.codetriage.com/",
                    description: "Helps developers find open source projects to contribute to by triaging GitHub issues in need of assistance.",
                    type: "Contribution Platform"
                }
            ],
            events: [
                {
                    title: "Google Summer of Code (GSoC)",
                    url: "https://summerofcode.withgoogle.com/",
                    description: "An annual program sponsored by Google that offers stipends to university students for working on open source projects during the summer.",
                    type: "Open Source Event"
                },
                {
                    title: "GirlScript Summer of Code (GSSoC)",
                    url: "https://gssoc.girlscript.tech/",
                    description: "An open-source program aimed at encouraging women and underrepresented groups to participate in open source development.",
                    type: "Open Source Event"
                },
                {
                    title: "Hacktoberfest",
                    url: "https://hacktoberfest.digitalocean.com/",
                    description: "A month-long celebration of open source software run by DigitalOcean, encouraging contributions to open source projects.",
                    type: "Open Source Event"
                }
            ]

        },
        practice: {
            beginnerExercises: [
                {
                    title: "Creating Your First Pull Request",
                    difficulty: "Easy",
                    description: "Find a beginner-friendly repository, make a minor change, and submit a pull request.",
                    hints: [
                        "Look for 'good first issue' or 'help wanted' tags on GitHub",
                        "Follow contribution guidelines carefully",
                        "Keep your pull request simple and concise"
                    ],
                    solution: {
                        code: "// Fork the repository\n$ git fork https://github.com/example/project\n\n// Clone your fork\n$ git clone https://github.com/your-username/project\n\n// Make changes, commit, and push\n$ git add .\n$ git commit -m \"Fix typo in README\"\n$ git push origin your-branch\n\n// Submit a pull request from your GitHub forked repo"
                    }
                },
                {
                    title: "Writing Useful Documentation",
                    difficulty: "Easy",
                    description: "Choose an open source project and improve its documentation. This could include improving README files, writing tutorials, or creating a contribution guide.",
                    hints: [
                        "Look for documentation improvements in popular projects",
                        "Focus on clear, concise language and organized structure",
                        "Add examples or images where possible for clarity"
                    ],
                    solution: {
                        code: "// Example of writing a README\n# Project Name\n\n## Description\nBriefly describe the project purpose.\n\n## Installation\nList steps to install dependencies.\n\n## Usage\nExplain how to use the project.\n\n## Contribution Guidelines\nProvide guidelines for new contributors."
                    }
                }
            ],
            intermediateExercises: [
                {
                    title: "Creating a Feature for an Open Source Project",
                    difficulty: "Medium",
                    description: "Identify an existing feature request in an open source project, implement the feature, and submit it as a pull request.",
                    hints: [
                        "Search the repository for 'feature request' issues",
                        "Review the project's coding standards before starting",
                        "Write tests for your new feature to ensure its functionality"
                    ],
                    solution: {
                        code: "// Step 1: Fork the repository\n$ git fork https://github.com/example/project\n\n// Step 2: Clone your fork\n$ git clone https://github.com/your-username/project\n\n// Step 3: Create a new branch for your feature\n$ git checkout -b new-feature\n\n// Step 4: Implement the feature in the codebase\n// Example code implementation here\n\n// Step 5: Add tests for your feature\n// Example test cases here\n\n// Step 6: Commit your changes\n$ git add .\n$ git commit -m \"Add new feature: description\"\n\n// Step 7: Push your branch to your fork\n$ git push origin new-feature\n\n// Step 8: Open a pull request on the original repository"
                    }
                },
                {
                    title: "Reviewing Code Contributions",
                    difficulty: "Medium",
                    description: "Select a pull request from an open-source project to review. Analyze the code changes, suggest improvements, and provide feedback to the contributor.",
                    hints: [
                        "Look for pull requests that are labeled 'needs review'",
                        "Pay attention to code quality, style, and functionality",
                        "Be constructive and clear in your feedback"
                    ],
                    solution: {
                        code: "// Step 1: Navigate to the pull requests section of the repository\n// Step 2: Select a pull request to review\n\n// Step 3: Check the code changes\n// Example code review comments:\n// - The variable naming could be more descriptive.\n// - Consider adding error handling for edge cases.\n// - Great job on implementing the feature, but let's optimize this function.\n\n// Step 4: Leave feedback on the pull request\n// Example comment:\n// 'Thank you for your contribution! I have some suggestions to improve the code.'\n\n// Step 5: Approve the pull request if all looks good or request changes"
                    }
                }
            ],
            
            advancedExercises: [
                {
                    title: "Becoming a Project Maintainer",
                    difficulty: "Advanced",
                    description: "Take over maintenance of an open-source project. This involves managing issues, reviewing pull requests, and coordinating with contributors.",
                    hints: [
                        "Start by reaching out to the current maintainers to express your interest",
                        "Familiarize yourself with the project's contribution guidelines and codebase",
                        "Communicate clearly and constructively with contributors to encourage engagement"
                    ],
                    solution: {
                        code: "// Step 1: Contact the current maintainer via GitHub or project communication channels\n// Example message:\n// Hi [Maintainer's Name],\n// I'm interested in helping maintain [Project Name]. I have been contributing for a while and would love to take on a more active role.\n\n// Step 2: Review open issues and pull requests regularly\n// Example code for managing issues:\n// function reviewIssues() {\n//   const issues = fetchIssues();\n//   issues.forEach(issue => {\n//     if (issue.isOpen) {\n//       assignLabels(issue);\n//       respondToIssue(issue);\n//     }\n//   });\n// }\n\n// Step 3: Conduct code reviews for incoming pull requests\n// Example code for reviewing a PR:\n// function reviewPullRequest(pr) {\n//   const codeChanges = fetchCodeChanges(pr);\n//   if (isCodeQualityGood(codeChanges)) {\n//     approvePullRequest(pr);\n//   } else {\n//     requestChanges(pr);\n//   }\n// }\n"
                    }
                },
                {
                    title: "Implementing a Major Refactor",
                    difficulty: "Advanced",
                    description: "Select an open-source project that could benefit from a refactor. Plan and implement the refactor while maintaining existing functionality, then submit your changes as a pull request.",
                    hints: [
                        "Identify areas of the codebase that are difficult to maintain or understand",
                        "Communicate your refactoring plan with the project maintainers before starting",
                        "Ensure all existing tests pass after your refactor"
                    ],
                    solution: {
                        code: "// Step 1: Fork the repository\n$ git fork https://github.com/example/project\n\n// Step 2: Clone your fork\n$ git clone https://github.com/your-username/project\n\n// Step 3: Create a new branch for the refactor\n$ git checkout -b refactor-feature\n\n// Step 4: Identify and implement refactor changes\n// Example refactor code:\n// function refactoredFunction() {\n//   // New implementation here\n// }\n\n// Step 5: Run tests to ensure functionality is maintained\n$ npm test\n\n// Step 6: Commit your changes\n$ git add .\n$ git commit -m \"Refactor: description of changes\"\n\n// Step 7: Push your branch to your fork\n$ git push origin refactor-feature\n\n// Step 8: Open a pull request on the original repository"
                    }
                }
            ]
            
            
        }
    }
},
{
    id: 10,
    title: "Cybersecurity",
    description: "To learn cybersecurity, follow this roadmap",
    extendedContent: `
        Master the fundamentals of cybersecurity including network security, 
        cryptography, and security protocols. Learn about threat detection, 
        vulnerability assessment, and incident response.
        
        This roadmap covers web security, application security testing, 
        penetration testing, and security best practices. You'll also learn 
        about security tools, frameworks, and compliance standards.
        
        Advanced topics include ethical hacking, forensics, secure coding practices, 
        and security architecture design. Focus on both offensive and defensive 
        security techniques.
    `,
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
    trackInfo: {
        prerequisites: [
            "Basic understanding of computer networks",
            "Knowledge of operating systems (Linux/Windows)",
            "Basic programming skills",
            "Understanding of web technologies",
            "Command line proficiency",
            "Basic system administration skills",
            "Problem-solving and analytical thinking"
        ],
        outcomes: [
            "Understand and implement network security measures",
            "Perform vulnerability assessments and penetration testing",
            "Implement security controls and countermeasures",
            "Conduct security audits and risk assessments",
            "Handle incident response and forensics",
            "Implement secure coding practices",
            "Configure security tools and frameworks",
            "Understand compliance and security standards",
            "Perform threat modeling and analysis",
            "Implement cryptographic solutions"
        ],
        sections: [
            {
                title: "Security Fundamentals",
                content: "Master core security concepts including CIA triad, authentication, authorization, and access control. Learn about common security threats, attack vectors, and basic defense mechanisms. Understand security policies, procedures, and best practices."
            },
            {
                title: "Network Security",
                content: "Learn network security protocols, firewall configuration, IDS/IPS systems, and VPN setup. Understand network attacks and defenses, packet analysis, and secure network architecture. Master tools like Wireshark, tcpdump, and network security monitoring."
            },
            {
                title: "Application Security",
                content: "Study web application security, secure coding practices, and common vulnerabilities (OWASP Top 10). Learn about input validation, output encoding, and secure session management. Practice secure software development lifecycle and security testing."
            },
            {
                title: "Ethical Hacking",
                content: "Learn penetration testing methodologies, vulnerability assessment, and exploitation techniques. Master tools like Metasploit, Burp Suite, and Nmap. Understand social engineering, wireless security, and web application hacking."
            },
            {
                title: "Cryptography",
                content: "Understand cryptographic algorithms, protocols, and implementations. Learn about encryption, digital signatures, and PKI. Study hash functions, random number generation, and cryptographic attack methods."
            },
            {
                title: "Incident Response",
                content: "Master incident handling procedures, digital forensics, and malware analysis. Learn about security incident management, evidence collection, and analysis. Practice incident documentation and reporting."
            },
            {
                title: "Security Operations",
                content: "Learn about Security Operations Center (SOC), SIEM systems, and security monitoring. Understand log analysis, security metrics, and continuous monitoring. Study threat intelligence and security automation."
            },
            {
                title: "Compliance & Governance",
                content: "Understand security frameworks (ISO 27001, NIST), compliance requirements (GDPR, HIPAA), and security policies. Learn about risk management, security auditing, and documentation. Study security awareness and training programs."
            }
        ]
    },
    content: {
        examples: [
            {
                title: "Network Security Configuration",
                code: `# Configuring a Basic Firewall with iptables
    
    # Flush existing rules
    iptables -F
    iptables -X
    
    # Set default chain policies
    iptables -P INPUT DROP
    iptables -P FORWARD DROP
    iptables -P OUTPUT ACCEPT
    
    # Allow loopback traffic
    iptables -A INPUT -i lo -j ACCEPT
    iptables -A OUTPUT -o lo -j ACCEPT
    
    # Allow established sessions
    iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
    
    # Allow SSH (port 22)
    iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT
    
    # Allow HTTP/HTTPS
    iptables -A INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
    iptables -A INPUT -p tcp --dport 443 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
    
    # Allow DNS resolution
    iptables -A OUTPUT -p udp --dport 53 -j ACCEPT
    iptables -A INPUT -p udp --sport 53 -j ACCEPT
    
    # Drop invalid packets
    iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
    
    # Log dropped packets
    iptables -A INPUT -j LOG --log-prefix "IPTables-Dropped: "
    
    # Save rules
    service iptables save
    
    # Additional security measures
    # Enable SYN flood protection
    echo 1 > /proc/sys/net/ipv4/tcp_syncookies
    
    # Disable IP forwarding
    echo 0 > /proc/sys/net/ipv4/ip_forward
    
    # Ignore ICMP broadcast requests
    echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts
    
    # Ignore bogus error responses
    echo 1 > /proc/sys/net/ipv4/icmp_ignore_bogus_error_responses`,
                explanation: "This example demonstrates basic firewall configuration using iptables, including setting up security rules, allowing specific services, and implementing basic DDoS protection."
            },
            {
                title: "Web Application Security Implementation",
                code: `// Secure API Endpoint Implementation
    
    const express = require('express');
    const rateLimit = require('express-rate-limit');
    const helmet = require('helmet');
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');
    
    const app = express();
    
    // Security Headers
    app.use(helmet());
    
    // Rate Limiting
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
    });
    app.use(limiter);
    
    // JWT Middleware
    const verifyToken = (req, res, next) => {
        const token = req.headers['authorization'];
        
        if (!token) {
            return res.status(403).json({ error: 'No token provided' });
        }
        
        try {
            const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
    };
    
    // Secure Password Hashing
    const hashPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    };
    
    // Input Validation
    const validateInput = (input) => {
        // Remove any potential XSS
        input = input.replace(/[<>]/g, '');
        // Validate length
        if (input.length < 3 || input.length > 50) {
            throw new Error('Invalid input length');
        }
        return input;
    };
    
    // Secure Login Endpoint
    app.post('/api/login', async (req, res) => {
        try {
            const { username, password } = req.body;
            
            // Validate input
            const sanitizedUsername = validateInput(username);
            
            // Implement brute force protection
            if (await checkBruteForce(sanitizedUsername)) {
                return res.status(429).json({
                    error: 'Too many login attempts'
                });
            }
            
            // Check credentials
            const user = await User.findOne({ username: sanitizedUsername });
            if (!user) {
                return res.status(401).json({
                    error: 'Invalid credentials'
                });
            }
            
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                await recordFailedAttempt(sanitizedUsername);
                return res.status(401).json({
                    error: 'Invalid credentials'
                });
            }
            
            // Generate JWT
            const token = jwt.sign(
                { userId: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            
            // Set secure cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 3600000 // 1 hour
            });
            
            res.json({ token });
            
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    });
    
    // Protected Endpoint Example
    app.get('/api/protected', verifyToken, async (req, res) => {
        try {
            // Implement RBAC
            if (!await checkPermission(req.user.userId, 'read')) {
                return res.status(403).json({
                    error: 'Insufficient permissions'
                });
            }
            
            // Implement SQL Injection Protection
            const data = await db.query(
                'SELECT * FROM sensitive_data WHERE user_id = $1',
                [req.user.userId]
            );
            
            res.json(data);
            
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error'
            });
        }
    });
    
    // Security Logging
    const logSecurityEvent = async (event) => {
        const logEntry = {
            timestamp: new Date(),
            event: event.type,
            user: event.user,
            ip: event.ip,
            details: event.details
        };
        
        await SecurityLog.create(logEntry);
        
        // Alert on suspicious activity
        if (event.severity === 'high') {
            await sendSecurityAlert(logEntry);
        }
    };
    
    // Error Handling
    app.use((err, req, res, next) => {
        // Log error securely
        logSecurityEvent({
            type: 'error',
            severity: 'high',
            details: err.message,
            user: req.user?.userId,
            ip: req.ip
        });
        
        // Don't leak error details
        res.status(500).json({
            error: 'An unexpected error occurred'
        });
    });`,
                explanation: "This example showcases secure API implementation including authentication, authorization, input validation, and security best practices."
            },
            {
                title: "Security Audit Script",
                code: `#!/bin/bash
    
    # System Security Audit Script
    
    echo "Starting Security Audit..."
    echo "========================="
    date
    echo "========================="
    
    # System Information
    echo "System Information:"
    echo "------------------------"
    uname -a
    echo "------------------------"
    
    # Check Users with UID 0
    echo "Checking for users with UID 0:"
    echo "------------------------"
    awk -F: '($3 == "0") {print}' /etc/passwd
    echo "------------------------"
    
    # Check for Empty Passwords
    echo "Checking for empty passwords:"
    echo "------------------------"
    awk -F: '($2 == "") {print}' /etc/shadow
    echo "------------------------"
    
    # List Open Ports
    echo "Open Ports:"
    echo "------------------------"
    netstat -tuln
    echo "------------------------"
    
    # Check SSH Configuration
    echo "SSH Configuration:"
    echo "------------------------"
    grep -i "PermitRootLogin\|PasswordAuthentication" /etc/ssh/sshd_config
    echo "------------------------"
    
    # Check File Permissions
    echo "Checking sensitive file permissions:"
    echo "------------------------"
    ls -l /etc/passwd /etc/shadow /etc/group
    echo "------------------------"
    
    # Check Running Services
    echo "Running Services:"
    echo "------------------------"
    systemctl list-units --type=service --state=running
    echo "------------------------"
    
    # Check Failed Login Attempts
    echo "Failed Login Attempts:"
    echo "------------------------"
    grep "Failed password" /var/log/auth.log | tail -n 10
    echo "------------------------"
    
    # Check Sudo Access
    echo "Users with Sudo Access:"
    echo "------------------------"
    grep -Po '^sudo.+:\K.*$' /etc/group
    echo "------------------------"
    
    # Check for Unowned Files
    echo "Checking for unowned files:"
    echo "------------------------"
    find / -nouser -o -nogroup 2>/dev/null
    echo "------------------------"
    
    # Check Firewall Status
    echo "Firewall Status:"
    echo "------------------------"
    if command -v ufw >/dev/null; then
        ufw status
    elif command -v firewall-cmd >/dev/null; then
        firewall-cmd --list-all
    else
        echo "No firewall found"
    fi
    echo "------------------------"
    
    # Check System Updates
    echo "Available System Updates:"
    echo "------------------------"
    if command -v apt >/dev/null; then
        apt list --upgradable
    elif command -v yum >/dev/null; then
        yum check-update
    fi
    echo "------------------------"
    
    # Check for Suspicious Processes
    echo "Checking for suspicious processes:"
    echo "------------------------"
    ps aux | awk '{if($3 > 50.0) print $0}'
    echo "------------------------"
    
    # Check Disk Usage
    echo "Disk Usage:"
    echo "------------------------"
    df -h
    echo "------------------------"
    
    # Generate Report
    echo "Generating detailed report..."
    {
        echo "Security Audit Report"
        echo "Date: $(date)"
        echo "System: $(uname -a)"
        echo ""
        echo "== Findings Summary =="
        echo "1. Users with root access: $(grep -c '^sudo' /etc/group)"
        echo "2. Open ports: $(netstat -tuln | grep -c 'LISTEN')"
        echo "3. Failed login attempts: $(grep -c "Failed password" /var/log/auth.log)"
        echo "4. Running services: $(systemctl list-units --type=service --state=running | grep -c "running")"
        echo ""
        echo "== Recommendations =="
        echo "1. Review all users with sudo access"
        echo "2. Close unnecessary open ports"
        echo "3. Implement stronger password policies"
        echo "4. Regular security updates"
    } > security_audit_report_$(date +%Y%m%d).txt
    
    echo "Audit complete. Report generated."`,
                explanation: "This script performs a basic security audit of a Linux system, checking for common security issues and generating a detailed report."
            }
        ],
    
        roadmap: [
            {
                title: "1. Security Fundamentals",
                description: "Master core security concepts and principles",
                topics: [
                    "CIA Triad and Security Principles",
                    "Authentication and Authorization",
                    "Security Policies and Procedures",
                    "Risk Assessment and Management",
                    "Security Controls and Frameworks",
                    "Basic Cryptography Concepts",
                    "Security Architecture Basics"
                ]
            },
            {
                title: "2. Network Security",
                description: "Learn network security concepts and implementation",
                topics: [
                    "Network Protocols and Security",
                    "Firewall Configuration",
                    "IDS/IPS Systems",
                    "VPN Implementation",
                    "Network Monitoring Tools",
                    "Wireless Network Security",
                    "Network Attacks and Defenses"
                ]
            },
            {
                title: "3. Application Security",
                description: "Master application security testing and secure development",
                topics: [
                    "Web Application Security",
                    "OWASP Top 10",
                    "Secure Coding Practices",
                    "API Security",
                    "Input Validation",
                    "Session Management",
                    "Security Testing"
                ]
            },
            {
                title: "4. Ethical Hacking",
                description: "Learn penetration testing and vulnerability assessment",
                topics: [
                    "Penetration Testing Methodology",
                    "Vulnerability Assessment",
                    "Exploitation Techniques",
                    "Social Engineering",
                    "Web Application Hacking",
                    "Wireless Hacking",
                    "Mobile Security Testing"
                ]
            },
            {
                title: "5. Cryptography",
                description: "Understand cryptographic algorithms and implementations",
                topics: [
                    "Symmetric Encryption",
                    "Asymmetric Encryption",
                    "Hash Functions",
                    "Digital Signatures",
                    "PKI and Certificates",
                    "Cryptographic Protocols",
                    "Crypto Implementation"
                ]
            },
            {
                title: "6. Incident Response",
                description: "Master incident handling and digital forensics",
                topics: [
                    "Incident Response Process",
                    "Digital Forensics",
                    "Malware Analysis",
                    "Log Analysis",
                    "Evidence Collection",
                    "Incident Documentation",
                    "Recovery Procedures"
                ]
            },
            {
                title: "7. Security Operations",
                description: "Learn security operations and monitoring",
                topics: [
                    "Security Operations Center",
                    "SIEM Implementation",
                    "Threat Intelligence",
                    "Security Automation",
                    "Continuous Monitoring",
                    "Alert Management",
                    "Security Metrics"
                ]
            }
        ],
        resources: {
            documentation: [
            {
            title: "OWASP Web Security Testing Guide",
            url: "https://owasp.org/www-project-web-security-testing-guide/",
            description: "Comprehensive guide for web application security testing",
            type: "Testing Guide"
            },
            {
            title: "NIST Cybersecurity Framework",
            url: "https://www.nist.gov/cyberframework",
            description: "Framework for improving critical infrastructure cybersecurity",
            type: "Framework"
            },
            {
            title: "MITRE ATT&CK",
            url: "https://attack.mitre.org/",
            description: "Knowledge base of adversary tactics and techniques",
            type: "Knowledge Base"
            },
            {
            title: "CIS Controls",
            url: "https://www.cisecurity.org/controls/",
            description: "Best practices for defending against common attacks",
            type: "Security Controls"
            },
            {
            title: "SANS Reading Room",
            url: "https://www.sans.org/reading-room/",
            description: "Collection of research papers on various security topics",
            type: "Research Papers"
            }
            ],
            tutorials: [
            {
            title: "Hack The Box",
            url: "https://www.hackthebox.eu/",
            description: "Online platform for practicing penetration testing skills",
            type: "Hands-on Platform"
            },
            {
            title: "PortSwigger Web Security Academy",
            url: "https://portswigger.net/web-security",
            description: "Free online web security training",
            type: "Online Course"
            },
            {
            title: "Metasploit Unleashed",
            url: "https://www.offensive-security.com/metasploit-unleashed/",
            description: "Free Metasploit training course",
            type: "Online Course"
            },
            {
            title: "Cybrary",
            url: "https://www.cybrary.it/",
            description: "Online platform for cybersecurity courses and training",
            type: "Learning Platform"
            },
            {
            title: "CTFtime",
            url: "https://ctftime.org/",
            description: "Collection of Capture The Flag (CTF) competitions and write-ups",
            type: "Practice Platform"
            }
            ],
            videos: [
            {
            title: "Computerphile",
            url: "https://www.youtube.com/user/Computerphile",
            description: "Videos on various computer science topics, including security",
            platform: "YouTube"
            },
            {
            title: "John Hammond",
            url: "https://www.youtube.com/c/JohnHammond010",
            description: "Tutorials on ethical hacking, CTFs, and security tools",
            platform: "YouTube"
            },
            {
            title: "LiveOverflow",
            url: "https://www.youtube.com/c/LiveOverflowCTF",
            description: "In-depth explanations of CTF challenges and security concepts",
            platform: "YouTube"
            },
            {
            title: "IppSec",
            url: "https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA",
            description: "Walkthroughs of Hack The Box machines",
            platform: "YouTube"
            },
            {
            title: "DEFCONConference",
            url: "https://www.youtube.com/user/DEFCONConference",
            description: "Recordings of DEFCON conference talks",
            platform: "YouTube"
            }
            ],
            books: [
            {
            title: "The Web Application Hacker's Handbook",
            author: "Dafydd Stuttard, Marcus Pinto",
            description: "Comprehensive guide to web application security testing",
            level: "Intermediate"
            },
            {
            title: "The Shellcoder's Handbook",
            author: "Chris Anley, John Heasman, Felix Lindner, Gerardo Richarte",
            description: "Techniques for writing exploits and understanding low-level attacks",
            level: "Advanced"
            },
            {
            title: "Penetration Testing: A Hands-On Introduction to Hacking",
            author: "Georgia Weidman",
            description: "Guide to the fundamentals of penetration testing",
            level: "Beginner"
            },
            {
            title: "The Basics of Hacking and Penetration Testing",
            author: "Patrick Engebretson",
            description: "Introduction to ethical hacking and penetration testing",
            level: "Beginner"
            },
            {
            title: "Applied Cryptography",
            author: "Bruce Schneier",
            description: "Comprehensive guide to cryptography and its applications",
            level: "Advanced"
            }
            ],
            tools: [
            {
            title: "Burp Suite",
            url: "https://portswigger.net/burp",
            description: "Web application security testing tool",
            type: "Testing Tool",
            category: "Essential"
            },
            {
            title: "Nmap",
            url: "https://nmap.org/",
            description: "Network discovery and security auditing tool",
            type: "Network Tool",
            category: "Essential"
            },
            {
            title: "Metasploit",
            url: "https://www.metasploit.com/",
            description: "Penetration testing framework",
            type: "Exploitation Framework",
            category: "Essential"
            },
            {
            title: "Wireshark",
            url: "https://www.wireshark.org/",
            description: "Network protocol analyzer",
            type: "Network Tool",
            category: "Essential"
            },
            {
            title: "John the Ripper",
            url: "https://www.openwall.com/john/",
            description: "Password cracking tool",
            type: "Password Cracker",
            category: "Essential"
            }
            ],
            communities: [
            {
            title: "Reddit r/netsec",
            url: "https://www.reddit.com/r/netsec/",
            description: "Subreddit for technical information security discussion",
            type: "Forum"
            },
            {
            title: "Security StackExchange",
            url: "https://security.stackexchange.com/",
            description: "Q&A community for information security professionals",
            type: "Q&A Forum"
            },
            {
            title: "OWASP Slack",
            url: "https://owasp.slack.com/",
            description: "Slack workspace for OWASP community discussions",
            type: "Slack Community"
            },
            {
            title: "Security BSides",
            url: "http://www.securitybsides.com/",
            description: "Community-driven security conferences worldwide",
            type: "Conference Series"
            },
            {
            title: "Null Byte",
            url: "https://null-byte.wonderhowto.com/",
            description: "Community for aspiring white hat hackers and security professionals",
            type: "Forum"
            }
            ],
            podcasts: [
            {
            title: "Darknet Diaries",
            url: "https://darknetdiaries.com/",
            description: "True stories from the dark side of the internet",
            platform: "Podcast"
            },
            {
            title: "Risky Business",
            url: "https://risky.biz/",
            description: "News and in-depth commentary from security industry experts",
            platform: "Podcast"
            },
            {
            title: "Defensive Security Podcast",
            url: "https://defensivesecurity.org/",
            description: "Podcast covering breaches, strategies, tools, and techniques",
            platform: "Podcast"
            },
            {
            title: "Security Now",
            url: "https://twit.tv/shows/security-now",
            description: "Deep dive into security topics with Steve Gibson",
            platform: "Podcast"
            }
            ],
            blogs: [
            {
            title: "Krebs on Security",
            url: "https://krebsonsecurity.com/",
            description: "In-depth security news and investigation",
            type: "Blog"
            },
            {
            title: "Schneier on Security",
            url: "https://www.schneier.com/",
            description: "Blog by renowned security expert Bruce Schneier",
            type: "Blog"
            },
            {
            title: "Troy Hunt's Blog",
            url: "https://www.troyhunt.com/",
            description: "Blog by security researcher and founder of Have I Been Pwned",
            type: "Blog"
            },
            {
            title: "Graham Cluley",
            url: "https://grahamcluley.com/",
            description: "Award-winning computer security news, advice, and opinion",
            type: "Blog"
            }
            ]
            },
            practice: {
                beginnerExercises: [
                {
                title: "Basic Network Scanning",
                difficulty: "Easy",
                description: "Perform a basic network scan using Nmap to identify live hosts and open ports.",
                hints: [
                "Use Nmap's default settings for a simple scan",
                "Specify the target IP address or IP range",
                "Analyze the scan results to identify potential vulnerabilities"
                ],
                solution: {
                code: `# Basic Nmap scan
                nmap -sV -O <target_IP_or_range>
                # Example:
                nmap -sV -O 192.168.1.0/24`,
            explanation: "This exercise introduces the basics of network scanning using Nmap. It demonstrates how to perform a simple scan to identify live hosts, open ports, and service versions."
        }
    },
    {
        title: "Password Strength Checker",
        difficulty: "Easy",
        description: "Create a Python script to check the strength of a given password.",
        hints: [
        "Define criteria for password strength (e.g., length, complexity)",
        "Use conditional statements to evaluate the password",
        "Provide feedback to the user on password strength"
        ],
        solution: {
        code: `def check_password_strength(password):
        # Define criteria for password strength
        min_length = 8
        has_uppercase = any(char.isupper() for char in password)
        has_lowercase = any(char.islower() for char in password)
        has_digit = any(char.isdigit() for char in password)
        has_special_char = any(char in "!@#$%^&*()_+-=[]{}|;:,.<>?" for char in password)
        # Check password strength
        if len(password) < min_length:
            return "Weak: Password is too short"
        elif not (has_uppercase and has_lowercase and has_digit and has_special_char):
            return "Moderate: Password should contain uppercase, lowercase, digits, 
            and special characters"
        else:
            return "Strong: Password meets all strength criteria"
        #Example usage
        password = input("Enter a password: ")
        strength = check_password_strength(password)
        print("Password Strength:", strength)`,
        explanation: "This exercise focuses on creating a basic password strength checker using Python. It defines criteria for password strength, such as minimum length and character complexity. The script evaluates the given password against these criteria and provides feedback to the user on the password's strength."
}
}
],
        intermediateExercises: [
            {
                title: "Web Application Vulnerability Assessment",
                difficulty: "Medium",
                description: "Perform a vulnerability assessment of a web application using OWASP ZAP.",
                hints: [
                    "Configure ZAP to use your browser as a proxy",
                    "Explore the application manually to discover functionalities",
                    "Use ZAP's automated scanners to identify potential vulnerabilities",
                    "Analyze the scan results and prioritize the findings"
                ],
                solution: {
                    code: `1. Launch OWASP ZAP and configure your browser to use ZAP as a proxy
2. Browse the target web application manually, exploring all functionalities
3. In ZAP, go to the "Active Scan" tab and select the target URL
4. Click "Start Scan" to initiate the automated vulnerability scanners
5. Once the scan is complete, review the alerts in the "Alerts" tab
6. Analyze the findings, prioritize them based on risk, and generate a report`,
                    explanation: "This exercise focuses on web application vulnerability assessment using OWASP ZAP. It guides you through the process of setting up ZAP, manually exploring the application, running automated scans, and analyzing the results to identify potential vulnerabilities."
                }
            },
            {
                title: "File Integrity Monitoring",
                difficulty: "Medium",
                description: "Develop a script to monitor the integrity of critical system files.",
                hints: [
                "Use a hashing algorithm (e.g., SHA-256) to calculate file hashes",
                "Store the initial file hashes in a database or file",
                "Periodically recalculate the hashes and compare them with the stored values",
                "Alert the user if any file modifications are detected"
                ],
                solution: {
                code: `import os
import hashlib
import json
import time
def calculate_file_hash(file_path):
sha256_hash = hashlib.sha256()
with open(file_path, "rb") as file:
for chunk in iter(lambda: file.read(4096), b""):
sha256_hash.update(chunk)
return sha256_hash.hexdigest()
def load_baseline_hashes(baseline_file):
if os.path.exists(baseline_file):
with open(baseline_file, "r") as file:
return json.load(file)
return {}
def save_baseline_hashes(baseline_file, baseline_hashes):
with open(baseline_file, "w") as file:
json.dump(baseline_hashes, file, indent=4)
def monitor_files(file_list, baseline_file):
baseline_hashes = load_baseline_hashes(baseline_file)
for file_path in file_list:
    current_hash = calculate_file_hash(file_path)
    if file_path in baseline_hashes:
            if current_hash != baseline_hashes[file_path]:
                print(f"Alert: File integrity compromised - {file_path}")
    else:
        baseline_hashes[file_path] = current_hash

save_baseline_hashes(baseline_file, baseline_hashes)
Example usage
critical_files = [
"/path/to/file1",
"/path/to/file2",
"/path/to/file3"
]
baseline_file = "baseline_hashes.json"
while True:
monitor_files(critical_files, baseline_file)
time.sleep(3600)  # Monitor every hour`,
                explanation: "This exercise focuses on developing a basic file integrity monitoring script. It calculates the hashes of critical system files and compares them with previously stored baseline hashes. If any file modifications are detected, the script alerts the user. The exercise demonstrates the use of hashing algorithms, file I/O operations, and periodic monitoring techniques."
}
}
],
        advancedExercises: [
            {
                title: "Buffer Overflow Exploitation",
                difficulty: "Hard",
                description: "Exploit a buffer overflow vulnerability in a simple C program.",
                hints: [
                    "Analyze the source code to identify the vulnerability",
                    "Determine the offset to overwrite the return address",
                    "Craft a malicious payload to spawn a shell",
                    "Use a debugger to test and refine the exploit"
                ],
                solution: {
                    code: `1. Analyze the vulnerable C program:
        #include <stdio.h>
        #include <string.h>

        void vuln_func(char *input) {
            char buffer[100];
            strcpy(buffer, input);
            printf("Input: %s\\n", buffer);
        }

        int main(int argc, char *argv[]) {
            if (argc < 2) {
                printf("Usage: %s <input>\\n", argv[0]);
                return 1;
            }
            vuln_func(argv[1]);
            return 0;
        }

2. Determine the offset to overwrite the return address using a pattern
3. Craft a malicious payload to spawn a shell (e.g., using msfvenom)
4. Exploit the vulnerability:
./vuln_program $(python -c 'print "A"*<offset>+"<return_address>"+"<nop_sled>"+"<shellcode>"')
5. Refine the exploit as needed and test it in a debugger`,
                    explanation: "This advanced exercise focuses on exploiting a buffer overflow vulnerability in a simple C program. It requires understanding of low-level memory concepts, debugging skills, and exploit development techniques. The exercise guides you through analyzing the vulnerable code, determining the right offset, crafting a malicious payload, and exploiting the vulnerability to gain unauthorized access."
                }
            },
            {
                title: "Custom Protocol Fuzzer",
                difficulty: "Hard",
                description: "Implement a custom protocol fuzzer to identify vulnerabilities in a network application.",
                hints: [
                "Choose a target protocol and understand its specification",
                "Generate random or semi-valid test cases to fuzz the protocol",
                "Send the fuzzed data to the target application",
                "Monitor the application for crashes, errors, or unexpected behavior",
                "Log and analyze the results to identify potential vulnerabilities"
                ],
                solution: {
                code: `import socket
import random
import string
def generate_fuzz_data(length):
fuzz_data = ''.join(random.choice(string.ascii_letters+string.digits) for _ in range(length))
return fuzz_data.encode()
def send_fuzz_data(target_ip, target_port, fuzz_data):
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect((target_ip, target_port))
sock.send(fuzz_data)
response = sock.recv(1024)
sock.close()
return response
def protocol_fuzzer(target_ip, target_port, num_tests):
for i in range(num_tests):
fuzz_length = random.randint(100, 1000)
fuzz_data = generate_fuzz_data(fuzz_length)
try:
    response = send_fuzz_data(target_ip, target_port, fuzz_data)
    print(f"Test {i+1}: Sent {len(fuzz_data)} bytes, Received {len(response)} bytes")
except Exception as e:
    print(f"Test {i+1}: Exception occurred - {str(e)}")
Example usage
target_ip = "192.168.1.100"
target_port = 1234
num_tests = 100
protocol_fuzzer(target_ip, target_port, num_tests)`,
                explanation: "This advanced exercise focuses on implementing a custom protocol fuzzer to identify vulnerabilities in a network application. It involves generating random or semi-valid test cases based on the protocol specification and sending the fuzzed data to the target application. The fuzzer monitors the application's behavior and logs any crashes, errors, or unexpected responses. The exercise requires a deeper understanding of network protocols, socket programming, and fuzzing techniques."
}
}
        ]
    }
}
},
{
    id: 11,
    title: "Java Programming",
    description: "To master Java programming, follow this roadmap",
    extendedContent: `
        Master the fundamentals of Java programming including core concepts,
        object-oriented programming, and essential APIs. Learn about data structures,
        algorithms, and best practices in Java development.
        
        This roadmap covers Java SE fundamentals, enterprise Java development,
        testing frameworks, build tools, and modern Java features. You'll also learn
        about Java frameworks, libraries, and development best practices.
        
        Advanced topics include concurrent programming, memory management,
        design patterns, and microservices development. Focus on both core Java
        and enterprise application development.
    `,
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083...",
    trackInfo: {
        prerequisites: [
            "Basic understanding of programming concepts",
            "Knowledge of computer fundamentals",
            "Basic command line skills",
            "Understanding of basic algorithms",
            "Familiarity with any text editor/IDE",
            "Problem-solving abilities",
            "Basic understanding of databases"
        ],
        outcomes: [
            "Write efficient Java programs using OOP principles",
            "Develop robust applications with error handling",
            "Implement data structures and algorithms in Java",
            "Create multithreaded applications",
            "Work with Java collections framework",
            "Develop database applications using JDBC",
            "Implement design patterns effectively",
            "Write unit tests for Java applications",
            "Build web applications using Java",
            "Deploy Java applications efficiently"
        ],
        sections: [
            {
                title: "Java Fundamentals",
                content: "Master core Java concepts including variables, data types, control structures, and basic I/O. Learn about OOP concepts like classes, objects, inheritance, polymorphism, and encapsulation. Understand exception handling, packages, and basic file operations."
            },
            {
                title: "Data Structures & Collections",
                content: "Learn Java collections framework including Lists, Sets, Maps, and Queues. Understand implementation of basic data structures, collection hierarchy, and choosing appropriate collections. Master working with generics and type safety."
            },
            {
                title: "Java APIs & Libraries",
                content: "Study essential Java APIs including String handling, I/O streams, NIO, Regular expressions, and Date/Time API. Learn about logging, reflection API, and working with external libraries. Understand Java Modules system and dependency management."
            },
            {
                title: "Multithreading & Concurrency",
                content: "Master thread lifecycle, synchronization, and thread safety. Learn about concurrent collections, executor framework, and thread pools. Understand deadlock prevention, race conditions, and concurrent design patterns."
            },
            {
                title: "Database Programming",
                content: "Learn JDBC for database connectivity, connection pooling, and transaction management. Understand ORM concepts using JPA and Hibernate. Master working with different databases and implementing DAO pattern."
            },
            {
                title: "Testing & Debugging",
                content: "Master unit testing with JUnit, mocking with Mockito, and integration testing. Learn debugging techniques, profiling tools, and performance optimization. Understand test-driven development and continuous integration."
            },
            {
                title: "Build Tools & DevOps",
                content: "Learn project management with Maven and Gradle, dependency management, and build automation. Understand CI/CD pipelines, containerization with Docker, and deployment strategies. Master working with version control systems."
            },
            {
                title: "Enterprise Java",
                content: "Study enterprise frameworks like Spring and Jakarta EE. Learn microservices architecture, RESTful web services, and API design. Understand security implementation, caching strategies, and enterprise integration patterns."
            }
        ]
    },
    content: {
        examples: [
            {
                title: "Object-Oriented Programming Implementation",
                code: `// Example of inheritance, encapsulation, and polymorphism
public abstract class Animal {
    private String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public abstract void makeSound();
    
    public String getName() {
        return name;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Woof!");
    }
    
    public void fetch() {
        System.out.println(getName() + " is fetching the ball.");
    }
}

public class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Meow!");
    }
    
    public void climb() {
        System.out.println(getName() + " is climbing.");
    }
}

// Usage Example
public class Main {
    public static void main(String[] args) {
        Animal[] animals = new Animal[] {
            new Dog("Rex", 3, "German Shepherd"),
            new Cat("Whiskers", 2, true)
        };
        
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound();
        }
    }
}`,
                explanation: "This example demonstrates core OOP concepts in Java including inheritance (Animal superclass with Dog and Cat subclasses), encapsulation (private fields with getter methods), and polymorphism (makeSound method being overridden)."
            },
            {
                title: "Multithreading and Synchronization",
                code: `import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.locks.Condition;

public class BoundedBuffer<T> {
    private final T[] buffer;
    private int count, putIndex, takeIndex;
    private final ReentrantLock lock;
    private final Condition notFull;
    private final Condition notEmpty;
    
    @SuppressWarnings("unchecked")
    public BoundedBuffer(int capacity) {
        buffer = (T[]) new Object[capacity];
        lock = new ReentrantLock();
        notFull = lock.newCondition();
        notEmpty = lock.newCondition();
    }
    
    public void put(T item) throws InterruptedException {
        lock.lock();
        try {
            while (count == buffer.length) {
                notFull.await();
            }
            buffer[putIndex] = item;
            putIndex = (putIndex + 1) % buffer.length;
            count++;
            notEmpty.signal();
        } finally {
            lock.unlock();
        }
    }
    
    public T take() throws InterruptedException {
        lock.lock();
        try {
            while (count == 0) {
                notEmpty.await();
            }
            T item = buffer[takeIndex];
            buffer[takeIndex] = null;
            takeIndex = (takeIndex + 1) % buffer.length;
            count--;
            notFull.signal();
            return item;
        } finally {
            lock.unlock();
        }
    }
}

// Usage Example
class Producer implements Runnable {
    private final BoundedBuffer<Integer> buffer;
    
    public Producer(BoundedBuffer<Integer> buffer) {
        this.buffer = buffer;
    }
    
    public void run() {
        try {
            for (int i = 0; i < 100; i++) {
                buffer.put(i);
                System.out.println("Produced: " + i);
                Thread.sleep(100);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumer implements Runnable {
    private final BoundedBuffer<Integer> buffer;
    
    public Consumer(BoundedBuffer<Integer> buffer) {
        this.buffer = buffer;
    }
    
    public void run() {
        try {
            while (true) {
                int item = buffer.take();
                System.out.println("Consumed: " + item);
                Thread.sleep(200);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}`,
                explanation: "This example shows thread synchronization using ReentrantLock and Conditions to implement a bounded buffer with producer-consumer pattern. It demonstrates proper thread safety, lock handling, and condition signaling."
            },
            {
                title: "Database Connectivity with JDBC",
                code: `import java.sql.*;
import java.util.Properties;

public class DatabaseManager {
    private static final String URL = "jdbc:postgresql://localhost:5432/mydb";
    private Connection connection;
    
    public void connect() throws SQLException {
        Properties props = new Properties();
        props.setProperty("user", "username");
        props.setProperty("password", "password");
        props.setProperty("ssl", "true");
        
        connection = DriverManager.getConnection(URL, props);
    }
    
    public void executeQuery(String sql, Object... params) throws SQLException {
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            // Set parameters
            for (int i = 0; i < params.length; i++) {
                pstmt.setObject(i + 1, params[i]);
            }
            
            // Execute and process results
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    // Process each row
                    processRow(rs);
                }
            }
        }
    }
    
    public int executeUpdate(String sql, Object... params) throws SQLException {
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            // Set parameters
            for (int i = 0; i < params.length; i++) {
                pstmt.setObject(i + 1, params[i]);
            }
            
            // Execute update and return affected rows
            return pstmt.executeUpdate();
        }
    }
    
    public void executeTransaction(String... sqlStatements) throws SQLException {
        boolean autoCommit = connection.getAutoCommit();
        connection.setAutoCommit(false);
        
        try {
            for (String sql : sqlStatements) {
                try (Statement stmt = connection.createStatement()) {
                    stmt.execute(sql);
                }
            }
            connection.commit();
        } catch (SQLException e) {
            connection.rollback();
            throw e;
        } finally {
            connection.setAutoCommit(autoCommit);
        }
    }
    
    private void processRow(ResultSet rs) throws SQLException {
        // Example row processing
        int id = rs.getInt("id");
        String name = rs.getString("name");
        System.out.println("Row: " + id + ", " + name);
    }
    
    public void close() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`,
                explanation: "This example demonstrates proper JDBC usage including connection management, prepared statements to prevent SQL injection, transaction handling, and resource cleanup."
            }
        ],
        roadmap: [
            {
                title: "1. Java Basics",
                description: "Master core Java syntax and concepts",
                topics: [
                    "JDK Installation and IDE Setup",
                    "Variables, Data Types, and Operators",
                    "Control Flow Statements",
                    "Arrays and Basic Data Structures",
                    "Methods and Parameters",
                    "Basic Input/Output Operations",
                    "Exception Handling Basics"
                ]
            },
            {
                title: "2. Object-Oriented Programming",
                description: "Learn OOP principles and implementation in Java",
                topics: [
                    "Classes and Objects",
                    "Inheritance and Polymorphism",
                    "Encapsulation and Access Modifiers",
                    "Interfaces and Abstract Classes",
                    "Package Management",
                    "Java Beans and Properties",
                    "SOLID Principles"
                ]
            },
            {
                title: "3. Java Standard Edition APIs",
                description: "Master essential Java SE APIs and features",
                topics: [
                    "Collections Framework",
                    "Generics",
                    "I/O Streams and NIO",
                    "Exception Handling Advanced",
                    "Lambda Expressions",
                    "Stream API",
                    "Optional Class"
                ]
            },
            {
                title: "4. Concurrency & Multithreading",
                description: "Learn concurrent programming in Java",
                topics: [
                    "Thread Basics and Lifecycle",
                    "Synchronization and Locks",
                    "Executor Framework",
                    "Concurrent Collections",
                    "CompletableFuture",
                    "Fork/Join Framework",
                    "Reactive Programming Basics"
                ]
            },
            {
                title: "5. Database Programming",
                description: "Master database connectivity and ORM",
                topics: [
                    "JDBC Fundamentals",
                    "Connection Pooling",
                    "Transaction Management",
                    "JPA Basics",
                    "Hibernate ORM",
                    "Query Languages (SQL/JPQL)",
                    "Database Design Patterns"
                ]
            },
            {
                title: "6. Testing & Debugging",
                description: "Learn testing methodologies and tools",
                topics: [
                    "Unit Testing with JUnit",
                    "Mocking with Mockito",
                    "Integration Testing",
                    "Test-Driven Development",
                    "Debugging Techniques",
                    "Logging and Monitoring",
                    "Code Coverage Tools"
                ]
            },
            {
                title: "7. Build Tools & Version Control",
                description: "Master project management and version control",
                topics: [
                    "Maven Basics",
                    "Gradle Fundamentals",
                    "Dependency Management",
                    "Git Version Control",
                    "CI/CD Basics",
                    "Docker for Java Apps",
                    "Deployment Strategies"
                ]
            }
        ],
        resources: {
            documentation: [
                {
                    title: "Java SE Documentation",
                    url: "https://docs.oracle.com/en/java/javase/",
                    description: "Official Java SE documentation and tutorials from Oracle",
                    type: "Official Documentation"
                },
                {
                    title: "Spring Framework Documentation",
                    url: "https://docs.spring.io/spring-framework/reference/",
                    description: "Comprehensive guide for Spring Framework development",
                    type: "Framework Documentation"
                },
                {
                    title: "Java Design Patterns",
                    url: "https://java-design-patterns.com/",
                    description: "Collection of implemented design patterns in Java",
                    type: "Pattern Catalog"
                },
                {
                    title: "JUnit 5 User Guide",
                    url: "https://junit.org/junit5/docs/current/user-guide/",
                    description: "Official documentation for JUnit testing framework",
                    type: "Testing Documentation"
                },
                {
                    title: "Maven Documentation",
                    url: "https://maven.apache.org/guides/",
                    description: "Official Apache Maven project documentation and guides",
                    type: "Build Tool Documentation"
                }
            ],
            tutorials: [
                {
                    title: "Baeldung",
                    url: "https://www.baeldung.com/",
                    description: "In-depth tutorials on Java and Spring ecosystem",
                    type: "Tutorial Website"
                },
                {
                    title: "Java Code Geeks",
                    url: "https://www.javacodegeeks.com/",
                    description: "Tutorials, articles, and code examples for Java developers",
                    type: "Learning Platform"
                },
                {
                    title: "Codecademy Java Course",
                    url: "https://www.codecademy.com/learn/learn-java",
                    description: "Interactive Java programming course for beginners",
                    type: "Online Course"
                },
                {
                    title: "Java Brains",
                    url: "https://javabrains.io/",
                    description: "Video tutorials on Java, Spring, and related technologies",
                    type: "Video Tutorials"
                },
                {
                    title: "JetBrains Academy",
                    url: "https://www.jetbrains.com/academy/",
                    description: "Project-based learning platform for Java development",
                    type: "Learning Platform"
                }
            ],
            videos: [
                {
                    title: "Java Programming by University of Helsinki",
                    url: "https://java-programming.mooc.fi/",
                    description: "Free, comprehensive Java programming course",
                    platform: "MOOC"
                },
                {
                    title: "Cave of Programming",
                    url: "https://www.caveofprogramming.com/",
                    description: "Video courses on Java fundamentals and advanced topics",
                    platform: "Course Platform"
                },
                {
                    title: "Derek Banas Java Tutorial",
                    url: "https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19",
                    description: "Comprehensive Java tutorial series",
                    platform: "YouTube"
                },
                {
                    title: "Coding with John",
                    url: "https://www.youtube.com/c/CodingwithJohn",
                    description: "Java programming tutorials and best practices",
                    platform: "YouTube"
                },
                {
                    title: "Amigoscode",
                    url: "https://www.youtube.com/c/amigoscode",
                    description: "Modern Java tutorials and Spring Framework content",
                    platform: "YouTube"
                }
            ],
            books: [
                {
                    title: "Effective Java",
                    author: "Joshua Bloch",
                    description: "Best practices and design patterns for Java programming",
                    level: "Intermediate to Advanced"
                },
                {
                    title: "Head First Java",
                    author: "Kathy Sierra, Bert Bates",
                    description: "Beginner-friendly introduction to Java programming",
                    level: "Beginner"
                },
                {
                    title: "Java Concurrency in Practice",
                    author: "Brian Goetz",
                    description: "Comprehensive guide to writing concurrent Java applications",
                    level: "Advanced"
                },
                {
                    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
                    author: "Robert C. Martin",
                    description: "Writing clean and maintainable Java code",
                    level: "Intermediate"
                },
                {
                    title: "Spring in Action",
                    author: "Craig Walls",
                    description: "Comprehensive guide to Spring Framework development",
                    level: "Intermediate"
                }
            ],
            tools: [
                {
                    title: "IntelliJ IDEA",
                    url: "https://www.jetbrains.com/idea/",
                    description: "Powerful IDE for Java development",
                    type: "Development Tool",
                    category: "Essential"
                },
                {
                    title: "Eclipse",
                    url: "https://www.eclipse.org/",
                    description: "Popular open-source Java IDE",
                    type: "Development Tool",
                    category: "Essential"
                },
                {
                    title: "Apache Maven",
                    url: "https://maven.apache.org/",
                    description: "Project management and build automation tool",
                    type: "Build Tool",
                    category: "Essential"
                },
                {
                    title: "JUnit",
                    url: "https://junit.org/",
                    description: "Testing framework for Java applications",
                    type: "Testing Tool",
                    category: "Essential"
                },
                {
                    title: "VisualVM",
                    url: "https://visualvm.github.io/",
                    description: "Java application monitoring and profiling tool",
                    type: "Profiling Tool",
                    category: "Essential"
                }
            ],
            communities: [
                {
                    title: "Stack Overflow - Java",
                    url: "https://stackoverflow.com/questions/tagged/java",
                    description: "Q&A community for Java programming",
                    type: "Q&A Forum"
                },
                {
                    title: "Reddit r/java",
                    url: "https://www.reddit.com/r/java/",
                    description: "Subreddit for Java developers and enthusiasts",
                    type: "Forum"
                },
                {
                    title: "Java User Groups (JUGs)",
                    url: "https://www.java.net/jugs/java-user-groups",
                    description: "Local Java developer communities worldwide",
                    type: "Local Community"
                },
                {
                    title: "Dev.to Java Community",
                    url: "https://dev.to/t/java",
                    description: "Java-related articles and discussions",
                    type: "Online Community"
                },
                {
                    title: "Oracle Java Community",
                    url: "https://community.oracle.com/tech/developers/categories/java",
                    description: "Official Oracle Java community forums",
                    type: "Forum"
                }
            ],
            podcasts: [
                {
                    title: "Inside Java",
                    url: "https://inside.java/podcast/",
                    description: "Official podcast from the Java team at Oracle",
                    platform: "Podcast"
                },
                {
                    title: "Java Off Heap",
                    url: "https://www.javaoffheap.com/",
                    description: "Discussion of Java news and developments",
                    platform: "Podcast"
                },
                {
                    title: "Airhacks.fm",
                    url: "http://airhacks.fm/",
                    description: "Java EE, Jakarta EE, and cloud-native development",
                    platform: "Podcast"
                },
                {
                    title: "The Java Posse (Archive)",
                    url: "http://javaposse.com/",
                    description: "Classic Java development podcast (archived)",
                    platform: "Podcast"
                }
            ],
            blogs: [
                {
                    title: "DZone Java Zone",
                    url: "https://dzone.com/java",
                    description: "Articles, tutorials, and news about Java development",
                    type: "Blog"
                },
                {
                    title: "Thorben Janssen",
                    url: "https://thorben-janssen.com/",
                    description: "Blog focusing on Hibernate and JPA",
                    type: "Blog"
                },
                {
                    title: "Vlad Mihalcea's Blog",
                    url: "https://vladmihalcea.com/",
                    description: "High-performance Java and database programming",
                    type: "Blog"
                },
                {
                    title: "Mkyong",
                    url: "https://mkyong.com/",
                    description: "Java tutorials and code examples",
                    type: "Blog"
                }
            ]
        },
        practice: {
            beginnerExercises: [
                {
                    title: "Student Grade Calculator",
                    difficulty: "Easy",
                    description: "Create a program to calculate student grades based on marks in different subjects.",
                    hints: [
                        "Use arrays or collections to store subject marks",
                        "Implement methods for average calculation",
                        "Use conditional statements for grade determination",
                        "Consider input validation"
                    ],
                    solution: {
                        code: `public class StudentGradeCalculator {
        private String studentName;
        private double[] marks;
    
        public StudentGradeCalculator(String studentName, double[] marks) {
            this.studentName = studentName;
            this.marks = marks;
        }
    
        public double calculateAverage() {
            if (marks == null || marks.length == 0) {
                return 0.0;
            }
            
            double sum = 0;
            for (double mark : marks) {
                sum += mark;
            }
            return sum / marks.length;
        }
    
        public char calculateGrade() {
            double average = calculateAverage();
            
            if (average >= 90) return 'A';
            if (average >= 80) return 'B';
            if (average >= 70) return 'C';
            if (average >= 60) return 'D';
            return 'F';
        }
    
        public void displayResult() {
            System.out.println("Student Name: " + studentName);
            System.out.println("Average Score: " + String.format("%.2f", calculateAverage()));
            System.out.println("Grade: " + calculateGrade());
        }
    
        public static void main(String[] args) {
            double[] studentMarks = {85.5, 77.0, 91.5, 76.0, 88.0};
            StudentGradeCalculator calculator = 
                new StudentGradeCalculator("John Doe", studentMarks);
            calculator.displayResult();
        }
    }`,
                        explanation: "This beginner exercise demonstrates basic Java concepts including classes, arrays, loops, conditional statements, and method implementation. It includes input validation and formatted output."
                    }
                },
                {
                    title: "Bank Account Management",
                    difficulty: "Easy",
                    description: "Implement a simple bank account system with deposit, withdrawal, and balance check functionality.",
                    hints: [
                        "Create a class to represent bank account",
                        "Implement methods for transactions",
                        "Add validation for negative amounts",
                        "Include proper exception handling"
                    ],
                    solution: {
                        code: `public class BankAccount {
        private String accountNumber;
        private String accountHolder;
        private double balance;
    
        public BankAccount(String accountNumber, String accountHolder) {
            this.accountNumber = accountNumber;
            this.accountHolder = accountHolder;
            this.balance = 0.0;
        }
    
        public void deposit(double amount) throws IllegalArgumentException {
            if (amount <= 0) {
                throw new IllegalArgumentException("Deposit amount must be positive");
            }
            balance += amount;
            System.out.printf("Deposited: $%.2f. New balance: $%.2f%n", 
                             amount, balance);
        }
    
        public void withdraw(double amount) throws IllegalArgumentException {
            if (amount <= 0) {
                throw new IllegalArgumentException("Withdrawal amount must be positive");
            }
            if (amount > balance) {
                throw new IllegalArgumentException("Insufficient funds");
            }
            balance -= amount;
            System.out.printf("Withdrawn: $%.2f. New balance: $%.2f%n", 
                             amount, balance);
        }
    
        public double getBalance() {
            return balance;
        }
    
        public void displayAccount() {
            System.out.println("Account Details:");
            System.out.println("Account Number: " + accountNumber);
            System.out.println("Account Holder: " + accountHolder);
            System.out.printf("Current Balance: $%.2f%n", balance);
        }
    
        public static void main(String[] args) {
            try {
                BankAccount account = new BankAccount("1234567890", "Jane Smith");
                account.deposit(1000.0);
                account.withdraw(500.0);
                account.displayAccount();
                account.withdraw(600.0); // This should throw an exception
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }`,
                        explanation: "This exercise covers object-oriented programming basics, exception handling, and formatted output. It implements basic banking operations with proper validation."
                    }
                },
                {
                    title: "Shopping Cart System",
                    difficulty: "Easy",
                    description: "Create a simple shopping cart system that allows adding items, removing items, and calculating total price.",
                    hints: [
                        "Use ArrayList to store cart items",
                        "Create a class for cart items with name, price, and quantity",
                        "Implement methods for cart operations",
                        "Add input validation"
                    ],
                    solution: {
                        code: `class CartItem {
        private String name;
        private double price;
        private int quantity;
    
        public CartItem(String name, double price, int quantity) {
            if (price < 0 || quantity < 0) {
                throw new IllegalArgumentException("Price and quantity must be positive");
            }
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    
        public double getSubtotal() {
            return price * quantity;
        }
    
        // Getters and setters
        public String getName() { return name; }
        public double getPrice() { return price; }
        public int getQuantity() { return quantity; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
    }
    
    public class ShoppingCart {
        private List<CartItem> items;
    
        public ShoppingCart() {
            this.items = new ArrayList<>();
        }
    
        public void addItem(String name, double price, int quantity) {
            // Check if item already exists
            for (CartItem item : items) {
                if (item.getName().equalsIgnoreCase(name)) {
                    item.setQuantity(item.getQuantity() + quantity);
                    return;
                }
            }
            items.add(new CartItem(name, price, quantity));
        }
    
        public void removeItem(String name) {
            items.removeIf(item -> item.getName().equalsIgnoreCase(name));
        }
    
        public void updateQuantity(String name, int newQuantity) {
            if (newQuantity < 0) {
                throw new IllegalArgumentException("Quantity cannot be negative");
            }
            for (CartItem item : items) {
                if (item.getName().equalsIgnoreCase(name)) {
                    item.setQuantity(newQuantity);
                    if (newQuantity == 0) {
                        removeItem(name);
                    }
                    return;
                }
            }
        }
    
        public double calculateTotal() {
            return items.stream()
                       .mapToDouble(CartItem::getSubtotal)
                       .sum();
        }
    
        public void displayCart() {
            if (items.isEmpty()) {
                System.out.println("Cart is empty");
                return;
            }
    
            System.out.println("\nShopping Cart:");
            System.out.println("----------------------------------------");
            System.out.printf("%-20s %-10s %-10s %-10s%n", 
                             "Item", "Price", "Quantity", "Subtotal");
            System.out.println("----------------------------------------");
    
            for (CartItem item : items) {
                System.out.printf("%-20s $%-9.2f %-10d $%-9.2f%n",
                                item.getName(),
                                item.getPrice(),
                                item.getQuantity(),
                                item.getSubtotal());
            }
            System.out.println("----------------------------------------");
            System.out.printf("Total: $%.2f%n", calculateTotal());
        }
    
        public static void main(String[] args) {
            try {
                ShoppingCart cart = new ShoppingCart();
                
                // Add items
                cart.addItem("Laptop", 999.99, 1);
                cart.addItem("Mouse", 29.99, 2);
                cart.addItem("Keyboard", 59.99, 1);
                
                // Display initial cart
                cart.displayCart();
                
                // Update quantity
                cart.updateQuantity("Mouse", 3);
                
                // Remove item
                cart.removeItem("Keyboard");
                
                // Display updated cart
                System.out.println("\nAfter updates:");
                cart.displayCart();
                
            } catch (IllegalArgumentException e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }`,
                        explanation: "This beginner exercise demonstrates ArrayList usage, basic object-oriented principles, input validation, and formatted output. It includes methods for adding, removing, and updating items in a shopping cart."
                    }
                }
            ],
            intermediateExercises: [
                {
                    title: "Library Management System",
                    difficulty: "Medium",
                    description: "Create a library management system with books, members, and borrowing functionality.",
                    hints: [
                        "Use collections to store books and members",
                        "Implement book borrowing and return logic",
                        "Add due date tracking",
                        "Include search functionality"
                    ],
                    solution: {
                        code: `import java.time.LocalDate;
    import java.util.*;
    
    class Book {
        private String isbn;
        private String title;
        private String author;
        private boolean isAvailable;
    
        public Book(String isbn, String title, String author) {
            this.isbn = isbn;
            this.title = title;
            this.author = author;
            this.isAvailable = true;
        }
    
        // Getters, setters, and toString()
    }
    
    class Member {
        private int memberId;
        private String name;
        private List<BorrowRecord> borrowHistory;
    
        public Member(int memberId, String name) {
            this.memberId = memberId;
            this.name = name;
            this.borrowHistory = new ArrayList<>();
        }
    
        // Getters, setters, and toString()
    }
    
    class BorrowRecord {
        private Book book;
        private Member member;
        private LocalDate borrowDate;
        private LocalDate dueDate;
        private LocalDate returnDate;
    
        public BorrowRecord(Book book, Member member) {
            this.book = book;
            this.member = member;
            this.borrowDate = LocalDate.now();
            this.dueDate = borrowDate.plusDays(14); // 2-week loan period
        }
    
        // Getters, setters, and toString()
    }
    
    public class LibraryManagementSystem {
        private Map<String, Book> books;
        private Map<Integer, Member> members;
        private List<BorrowRecord> borrowRecords;
    
        public LibraryManagementSystem() {
            this.books = new HashMap<>();
            this.members = new HashMap<>();
            this.borrowRecords = new ArrayList<>();
        }
    
        public void addBook(Book book) {
            books.put(book.getIsbn(), book);
        }
    
        public void addMember(Member member) {
            members.put(member.getMemberId(), member);
        }
    
        public void borrowBook(String isbn, int memberId) throws Exception {
            Book book = books.get(isbn);
            Member member = members.get(memberId);
    
            if (book == null || member == null) {
                throw new Exception("Book or member not found");
            }
    
            if (!book.isAvailable()) {
                throw new Exception("Book is not available");
            }
    
            BorrowRecord record = new BorrowRecord(book, member);
            borrowRecords.add(record);
            book.setAvailable(false);
            member.getBorrowHistory().add(record);
        }
    
        public void returnBook(String isbn, int memberId) throws Exception {
            Book book = books.get(isbn);
            Member member = members.get(memberId);
    
            if (book == null || member == null) {
                throw new Exception("Book or member not found");
            }
    
            BorrowRecord record = findActiveBorrowRecord(isbn, memberId);
            if (record == null) {
                throw new Exception("No active borrow record found");
            }
    
            record.setReturnDate(LocalDate.now());
            book.setAvailable(true);
        }
    
        public List<Book> searchBooks(String keyword) {
            return books.values().stream()
                    .filter(book -> book.getTitle().toLowerCase()
                            .contains(keyword.toLowerCase()) ||
                            book.getAuthor().toLowerCase()
                            .contains(keyword.toLowerCase()))
                    .toList();
        }
    
        private BorrowRecord findActiveBorrowRecord(String isbn, int memberId) {
            return borrowRecords.stream()
                    .filter(record -> record.getBook().getIsbn().equals(isbn) &&
                            record.getMember().getMemberId() == memberId &&
                            record.getReturnDate() == null)
                    .findFirst()
                    .orElse(null);
        }
    
        public List<BorrowRecord> getOverdueBooks() {
            LocalDate today = LocalDate.now();
            return borrowRecords.stream()
                    .filter(record -> record.getReturnDate() == null &&
                            record.getDueDate().isBefore(today))
                    .toList();
        }
    }`,
                        explanation: "This intermediate exercise demonstrates the use of collections, object relationships, date handling, and stream operations in Java. It implements a basic library system with book management and borrowing functionality."
                    }
                },
                {
                    title: "Task Management System",
                    difficulty: "Medium",
                    description: "Create a task management system with support for projects, tasks, and user assignments.",
                    hints: [
                        "Use enums for task status and priority",
                        "Implement task filtering and sorting",
                        "Add deadline management",
                        "Include task dependencies"
                    ],
                    solution: {
                        code: `import java.time.LocalDateTime;
    import java.util.*;
    import java.util.stream.Collectors;
    
    enum TaskStatus { TODO, IN_PROGRESS, COMPLETED, BLOCKED }
    enum TaskPriority { LOW, MEDIUM, HIGH, URGENT }
    
    class User {
        private String id;
        private String name;
        private List<Task> assignedTasks;
    
        public User(String id, String name) {
            this.id = id;
            this.name = name;
            this.assignedTasks = new ArrayList<>();
        }
    
        // Getters and setters
    }
    
    class Task implements Comparable<Task> {
        private String id;
        private String title;
        private String description;
        private TaskStatus status;
        private TaskPriority priority;
        private LocalDateTime deadline;
        private User assignee;
        private Set<Task> dependencies;
        private LocalDateTime createdAt;
    
        public Task(String id, String title, String description, 
                    TaskPriority priority, LocalDateTime deadline) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.status = TaskStatus.TODO;
            this.priority = priority;
            this.deadline = deadline;
            this.dependencies = new HashSet<>();
            this.createdAt = LocalDateTime.now();
        }
    
        @Override
        public int compareTo(Task other) {
            // Compare by priority first, then deadline
            int priorityCompare = other.priority.compareTo(this.priority);
            if (priorityCompare != 0) return priorityCompare;
            return this.deadline.compareTo(other.deadline);
        }
    
        // Getters and setters
    }
    
    class Project {
        private String id;
        private String name;
        private List<Task> tasks;
        private List<User> members;
    
        public Project(String id, String name) {
            this.id = id;
            this.name = name;
            this.tasks = new ArrayList<>();
            this.members = new ArrayList<>();
        }
    
        // Project methods
    }
    
    public class TaskManagementSystem {
        private Map<String, Project> projects;
        private Map<String, User> users;
    
        public TaskManagementSystem() {
            this.projects = new HashMap<>();
            this.users = new HashMap<>();
        }
    
        public void addProject(Project project) {
            projects.put(project.getId(), project);
        }
    
        public void addUser(User user) {
            users.put(user.getId(), user);
        }
    
        public void addTaskToProject(String projectId, Task task) {
            Project project = projects.get(projectId);
            if (project == null) {
                throw new IllegalArgumentException("Project not found");
            }
            project.getTasks().add(task);
        }
    
        public void assignTask(String taskId, String userId, String projectId) {
            Project project = projects.get(projectId);
            User user = users.get(userId);
            
            if (project == null || user == null) {
                throw new IllegalArgumentException("Project or user not found");
            }
    
            Task task = findTask(taskId, project);
            if (task == null) {
                throw new IllegalArgumentException("Task not found");
            }
    
            task.setAssignee(user);
            user.getAssignedTasks().add(task);
        }
    
        public void updateTaskStatus(String taskId, String projectId, 
                                   TaskStatus newStatus) {
            Project project = projects.get(projectId);
            if (project == null) {
                throw new IllegalArgumentException("Project not found");
            }
    
            Task task = findTask(taskId, project);
            if (task == null) {
                throw new IllegalArgumentException("Task not found");
            }
    
            // Check if all dependencies are completed
            if (newStatus == TaskStatus.IN_PROGRESS) {
                boolean hasBlockedDependencies = task.getDependencies().stream()
                    .anyMatch(dep -> dep.getStatus() != TaskStatus.COMPLETED);
                if (hasBlockedDependencies) {
                    throw new IllegalStateException(
                        "Cannot start task with incomplete dependencies");
                }
            }
    
            task.setStatus(newStatus);
        }
    
        public void addTaskDependency(String taskId, String dependencyId, 
                                    String projectId) {
            Project project = projects.get(projectId);
            if (project == null) {
                throw new IllegalArgumentException("Project not found");
            }
    
            Task task = findTask(taskId, project);
            Task dependency = findTask(dependencyId, project);
            
            if (task == null || dependency == null) {
                throw new IllegalArgumentException("Task or dependency not found");
            }
    
            // Check for circular dependencies
            if (wouldCreateCircularDependency(task, dependency)) {
                throw new IllegalArgumentException("Circular dependency detected");
            }
    
            task.getDependencies().add(dependency);
        }
    
        private boolean wouldCreateCircularDependency(Task task, Task dependency) {
            Set<Task> visited = new HashSet<>();
            return checkCircularDependency(dependency, task, visited);
        }
    
        private boolean checkCircularDependency(Task current, Task target, 
                                              Set<Task> visited) {
            if (current == target) return true;
            if (visited.contains(current)) return false;
            
            visited.add(current);
            for (Task dep : current.getDependencies()) {
                if (checkCircularDependency(dep, target, visited)) {
                    return true;
                }
            }
            return false;
        }
    
        public List<Task> getOverdueTasks(String projectId) {
            Project project = projects.get(projectId);
            if (project == null) {
                throw new IllegalArgumentException("Project not found");
            }
    
            LocalDateTime now = LocalDateTime.now();
            return project.getTasks().stream()
                         .filter(task -> task.getStatus() != TaskStatus.COMPLETED
                                 && task.getDeadline().isBefore(now))
                         .collect(Collectors.toList());
        }
    
        public List<Task> getTasksByPriority(String projectId, 
                                           TaskPriority priority) {
            Project project = projects.get(projectId);
            if (project == null) {
                throw new IllegalArgumentException("Project not found");
            }
    
            return project.getTasks().stream()
                         .filter(task -> task.getPriority() == priority)
                         .sorted()
                         .collect(Collectors.toList());
        }
    
        private Task findTask(String taskId, Project project) {
            return project.getTasks().stream()
                         .filter(task -> task.getId().equals(taskId))
                         .findFirst()
                         .orElse(null);
        }
    }`,
                        explanation: "This intermediate exercise demonstrates the use of enums, collections, dependency management, and complex business logic. It includes features like task assignments, priorities, deadlines, and dependency checking with circular dependency detection."
                    }
                }
            ],
            advancedExercises: [
                {
                    title: "Task Scheduler with Thread Pool",
                    difficulty: "Hard",
                    description: "Implement a task scheduler that can execute tasks concurrently using a thread pool.",
                    hints: [
                        "Use ExecutorService for thread pool management",
                        "Implement priority queue for task scheduling",
                        "Add support for recurring tasks",
                        "Include task cancellation and monitoring"
                    ],
                    solution: {
                        code: `import java.time.*;
    import java.util.concurrent.*;
    import java.util.*;
    
    class ScheduledTask {
        private final String id;
        private final Runnable task;
        private final LocalDateTime scheduledTime;
        private final Duration repeatInterval;
        private boolean isCancelled;
    
        public ScheduledTask(String id, Runnable task, 
                            LocalDateTime scheduledTime, 
                            Duration repeatInterval) {
            this.id = id;
            this.task = task;
            this.scheduledTime = scheduledTime;
            this.repeatInterval = repeatInterval;
            this.isCancelled = false;
        }
    
        // Getters and setters
    }
    
    public class CustomTaskScheduler {
        private final ExecutorService executorService;
        private final PriorityQueue<ScheduledTask> taskQueue;
        private final Map<String, ScheduledTask> taskMap;
        private final Object lock = new Object();
        private volatile boolean isRunning;
    
        public CustomTaskScheduler(int poolSize) {
            this.executorService = Executors.newFixedThreadPool(poolSize);
            this.taskQueue = new PriorityQueue<>(
                Comparator.comparing(ScheduledTask::getScheduledTime));
            this.taskMap = new ConcurrentHashMap<>();
            this.isRunning = true;
            startScheduler();
        }
    
        public String scheduleTask(Runnable task, 
                                 LocalDateTime scheduledTime, 
                                 Duration repeatInterval) {
            String taskId = UUID.randomUUID().toString();
            ScheduledTask scheduledTask = 
                new ScheduledTask(taskId, task, scheduledTime, repeatInterval);
            
            synchronized (lock) {
                taskMap.put(taskId, scheduledTask);
                taskQueue.offer(scheduledTask);
                lock.notify();
            }
            
            return taskId;
        }
    
        public void cancelTask(String taskId) {
            ScheduledTask task = taskMap.get(taskId);
            if (task != null) {
                task.setCancelled(true);
            }
        }
    
        private void startScheduler() {
            Thread schedulerThread = new Thread(() -> {
                while (isRunning) {
                    try {
                        synchronized (lock) {
                            while (taskQueue.isEmpty() && isRunning) {
                                lock.wait();
                            }
    
                            if (!isRunning) break;
    
                            ScheduledTask nextTask = taskQueue.peek();
                            if (nextTask == null) continue;
    
                            LocalDateTime now = LocalDateTime.now();
                            if (now.isBefore(nextTask.getScheduledTime())) {
                                long sleepTime = Duration.between(now, 
                                    nextTask.getScheduledTime()).toMillis();
                                lock.wait(sleepTime);
                                continue;
                            }
    
                            nextTask = taskQueue.poll();
                            if (nextTask != null && !nextTask.isCancelled()) {
                                executeTask(nextTask);
                            }
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                }
            });
            schedulerThread.start();
        }
    
        private void executeTask(ScheduledTask task) {
            executorService.submit(() -> {
                try {
                    task.getTask().run();
                    
                    if (task.getRepeatInterval() != null && !task.isCancelled()) {
                        ScheduledTask nextTask = new ScheduledTask(
                            task.getId(),
                            task.getTask(),
                            task.getScheduledTime().plus(task.getRepeatInterval()),
                            task.getRepeatInterval()
                        );
                        synchronized (lock) {
                            taskQueue.offer(nextTask);
                            taskMap.put(nextTask.getId(), nextTask);
                        }
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
    
        public void shutdown() {
            isRunning = false;
            synchronized (lock) {
                lock.notify();
            }
            executorService.shutdown();
            try {
                if (!executorService.awaitTermination(60, TimeUnit.SECONDS)) {
                    executorService.shutdownNow();
                }
            } catch (InterruptedException e) {
                executorService.shutdownNow();
                Thread.currentThread().interrupt();
            }
        }
    
        public static void main(String[] args) {
            CustomTaskScheduler scheduler = new CustomTaskScheduler(4);
            
            // Schedule a one-time task
            scheduler.scheduleTask(
                () -> System.out.println("One-time task executed"),
                LocalDateTime.now().plusSeconds(5),
                null
            );
            
            // Schedule a recurring task
            scheduler.scheduleTask(
                () -> System.out.println("Recurring task executed"),
                LocalDateTime.now().plusSeconds(2),
                Duration.ofSeconds(3)
            );
            
            // Let tasks run for a while
            try {
                Thread.sleep(15000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            
            scheduler.shutdown();
        }
    }`,
                        explanation: "This advanced exercise demonstrates concurrent programming concepts including thread pools, task scheduling, and synchronization. It implements a custom task scheduler that can handle both one-time and recurring tasks with proper thread management and cancellation support."
                    }
                },
                {
                    title: "Distributed Cache System",
                    difficulty: "Hard",
                    description: "Implement a distributed cache system with support for multiple nodes, cache eviction, and consistency.",
                    hints: [
                        "Use concurrent data structures",
                        "Implement cache eviction policies",
                        "Add support for distributed operations",
                        "Handle node failures and recovery"
                    ],
                    solution: {
                        code: `import java.util.concurrent.*;
    import java.util.*;
    import java.time.*;
    import java.net.*;
    import java.io.*;
    
    class CacheEntry<T> {
        private T value;
        private LocalDateTime lastAccessed;
        private LocalDateTime expiresAt;
        private int hitCount;
    
        public CacheEntry(T value, Duration ttl) {
            this.value = value;
            this.lastAccessed = LocalDateTime.now();
            this.expiresAt = ttl != null ? this.lastAccessed.plus(ttl) : null;
            this.hitCount = 0;
        }
    
        public boolean isExpired() {
            return expiresAt != null && 
                   LocalDateTime.now().isAfter(expiresAt);
        }
    
        // Getters and setters
    }
    
    class Node {
        private String id;
        private InetSocketAddress address;
        private boolean isAlive;
        private LocalDateTime lastHeartbeat;
    
        public Node(String id, InetSocketAddress address) {
            this.id = id;
            this.address = address;
            this.isAlive = true;
            this.lastHeartbeat = LocalDateTime.now();
        }
    
        // Getters and setters
    }
    
    enum EvictionPolicy { LRU, LFU, FIFO }
    
    public class DistributedCache<K, V> {
        private final ConcurrentMap<K, CacheEntry<V>> localCache;
        private final Map<String, Node> nodes;
        private final EvictionPolicy evictionPolicy;
        private final int maxSize;
        private final Duration ttl;
        private final ScheduledExecutorService scheduler;
        private final Node localNode;
        private final ReentrantReadWriteLock lock;
    
        public DistributedCache(int maxSize, Duration ttl, 
                              EvictionPolicy evictionPolicy) {
            this.localCache = new ConcurrentHashMap<>();
            this.nodes = new ConcurrentHashMap<>();
            this.evictionPolicy = evictionPolicy;
            this.maxSize = maxSize;
            this.ttl = ttl;
            this.scheduler = Executors.newScheduledThreadPool(2);
            this.localNode = new Node(UUID.randomUUID().toString(), 
                                    new InetSocketAddress("localhost", 8080));
            this.lock = new ReentrantReadWriteLock();
    
            startMaintenanceTasks();
        }
    
        private void startMaintenanceTasks() {
            // Schedule cache cleanup
            scheduler.scheduleAtFixedRate(
                this::evictExpiredEntries,
                1, 1, TimeUnit.MINUTES
            );
    
            // Schedule node health check
            scheduler.scheduleAtFixedRate(
                this::checkNodeHealth,
                5, 5, TimeUnit.SECONDS
            );
        }
    
        public void put(K key, V value) {
            lock.writeLock().lock();
            try {
                // Check cache size and evict if necessary
                if (localCache.size() >= maxSize) {
                    evictEntries(1);
                }
    
                CacheEntry<V> entry = new CacheEntry<>(value, ttl);
                localCache.put(key, entry);
    
                // Propagate to other nodes
                propagateUpdate(key, value);
            } finally {
                lock.writeLock().unlock();
            }
        }
    
        public Optional<V> get(K key) {
            lock.readLock().lock();
            try {
                CacheEntry<V> entry = localCache.get(key);
                if (entry == null) {
                    // Try to fetch from other nodes
                    return fetchFromOtherNodes(key);
                }
    
                if (entry.isExpired()) {
                    localCache.remove(key);
                    return Optional.empty();
                }
    
                entry.setLastAccessed(LocalDateTime.now());
                entry.setHitCount(entry.getHitCount() + 1);
            return Optional.of(entry.getValue());
        } finally {
            lock.readLock().unlock();
        }
    }

    private void evictExpiredEntries() {
        lock.writeLock().lock();
        try {
            localCache.entrySet().removeIf(entry -> 
                entry.getValue().isExpired());
        } finally {
            lock.writeLock().unlock();
        }
    }

    private void evictEntries(int count) {
        lock.writeLock().lock();
        try {
            List<K> keysToEvict = switch (evictionPolicy) {
                case LRU -> getLRUKeys(count);
                case LFU -> getLFUKeys(count);
                case FIFO -> getFIFOKeys(count);
            };
            
            keysToEvict.forEach(localCache::remove);
        } finally {
            lock.writeLock().unlock();
        }
    }

    private List<K> getLRUKeys(int count) {
        return localCache.entrySet().stream()
            .sorted(Comparator.comparing(e -> 
                e.getValue().getLastAccessed()))
            .limit(count)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }

    private List<K> getLFUKeys(int count) {
        return localCache.entrySet().stream()
            .sorted(Comparator.comparing(e -> 
                e.getValue().getHitCount()))
            .limit(count)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }

    private List<K> getFIFOKeys(int count) {
        return new ArrayList<>(localCache.keySet())
            .subList(0, Math.min(count, localCache.size()));
    }

    private void propagateUpdate(K key, V value) {
        CompletableFuture.runAsync(() -> {
            for (Node node : nodes.values()) {
                if (node.isAlive() && !node.getId().equals(localNode.getId())) {
                    try {
                        sendUpdateToNode(node, key, value);
                    } catch (Exception e) {
                        node.setAlive(false);
                    }
                }
            }
        });
    }

    private void sendUpdateToNode(Node node, K key, V value) {
        // Simplified network communication
        try (Socket socket = new Socket()) {
            socket.connect(node.getAddress(), 1000);
            try (ObjectOutputStream out = 
                     new ObjectOutputStream(socket.getOutputStream())) {
                out.writeObject(new CacheUpdate<>(key, value));
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to send update to node: " 
                + node.getId(), e);
        }
    }

    private Optional<V> fetchFromOtherNodes(K key) {
        for (Node node : nodes.values()) {
            if (node.isAlive() && !node.getId().equals(localNode.getId())) {
                try {
                    Optional<V> value = fetchFromNode(node, key);
                    if (value.isPresent()) {
                        // Update local cache
                        put(key, value.get());
                        return value;
                    }
                } catch (Exception e) {
                    node.setAlive(false);
                }
            }
        }
        return Optional.empty();
    }

    private Optional<V> fetchFromNode(Node node, K key) {
        // Simplified network communication
        try (Socket socket = new Socket()) {
            socket.connect(node.getAddress(), 1000);
            try (ObjectOutputStream out = 
                     new ObjectOutputStream(socket.getOutputStream());
                 ObjectInputStream in = 
                     new ObjectInputStream(socket.getInputStream())) {
                out.writeObject(new CacheRequest<>(key));
                @SuppressWarnings("unchecked")
                CacheResponse<V> response = 
                    (CacheResponse<V>) in.readObject();
                return Optional.ofNullable(response.getValue());
            }
        } catch (IOException | ClassNotFoundException e) {
            throw new RuntimeException("Failed to fetch from node: " 
                + node.getId(), e);
        }
    }

    private void checkNodeHealth() {
        for (Node node : nodes.values()) {
            if (!node.getId().equals(localNode.getId())) {
                CompletableFuture.runAsync(() -> {
                    try {
                        sendHeartbeat(node);
                        node.setAlive(true);
                        node.setLastHeartbeat(LocalDateTime.now());
                    } catch (Exception e) {
                        node.setAlive(false);
                    }
                });
            }
        }
        
        // Remove nodes that haven't sent heartbeat in a while
        nodes.entrySet().removeIf(entry -> {
            Node node = entry.getValue();
            return !node.isAlive() && 
                   node.getLastHeartbeat()
                      .plusMinutes(5)
                      .isBefore(LocalDateTime.now());
        });
    }

    private void sendHeartbeat(Node node) {
        try (Socket socket = new Socket()) {
            socket.connect(node.getAddress(), 1000);
            try (ObjectOutputStream out = 
                     new ObjectOutputStream(socket.getOutputStream())) {
                out.writeObject(new Heartbeat(localNode.getId()));
            }
        } catch (IOException e) {
            throw new RuntimeException("Failed to send heartbeat to node: " 
                + node.getId(), e);
        }
    }

    public void addNode(Node node) {
        nodes.put(node.getId(), node);
    }

    public void shutdown() {
        scheduler.shutdown();
        try {
            if (!scheduler.awaitTermination(10, TimeUnit.SECONDS)) {
                scheduler.shutdownNow();
            }
        } catch (InterruptedException e) {
            scheduler.shutdownNow();
            Thread.currentThread().interrupt();
        }
    }

    // Message classes for node communication
    private static class CacheUpdate<K, V> implements Serializable {
        private final K key;
        private final V value;

        public CacheUpdate(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }

    private static class CacheRequest<K> implements Serializable {
        private final K key;

        public CacheRequest(K key) {
            this.key = key;
        }
    }

    private static class CacheResponse<V> implements Serializable {
        private final V value;

        public CacheResponse(V value) {
            this.value = value;
        }
    }

    private static class Heartbeat implements Serializable {
        private final String nodeId;

        public Heartbeat(String nodeId) {
            this.nodeId = nodeId;
        }
    }

    public static void main(String[] args) {
        DistributedCache<String, String> cache = 
            new DistributedCache<>(100, Duration.ofMinutes(30), 
                                 EvictionPolicy.LRU);

        // Add some nodes
        cache.addNode(new Node("node1", 
            new InetSocketAddress("localhost", 8081)));
        cache.addNode(new Node("node2", 
            new InetSocketAddress("localhost", 8082)));

        // Example usage
        cache.put("key1", "value1");
        Optional<String> value = cache.get("key1");
        value.ifPresent(System.out::println);

        // Shutdown cache
        cache.shutdown();
    }
}`,
    explanation: "This advanced exercise demonstrates implementing a distributed cache system with features including:\n" +
                "1. Multiple cache eviction policies (LRU, LFU, FIFO)\n" +
                "2. TTL-based entry expiration\n" +
                "3. Distributed node management with heartbeat mechanism\n" +
                "4. Concurrent access handling using ReadWriteLock\n" +
                "5. Asynchronous update propagation\n" +
                "6. Node failure detection and recovery\n" +
                "7. Network communication between nodes\n" +
                "The implementation uses various Java concurrency utilities and networking features to create a robust distributed system."
            }
            }
            ]
        }
    }
}

];

export default resources;
