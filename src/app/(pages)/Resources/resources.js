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
