export const cppContent = {
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
};