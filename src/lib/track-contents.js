import { cppContent } from './cpp-content';
import { dsaContent } from './dsa-content';
import { cpContent } from './competitive_programming-content'; 

export const trackContents = {
    4: {  // C++ Track
        content: cppContent,
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
    5: {  // DSA Track
        content: dsaContent,
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
    6: {  // CP Track
        content: cpContent,
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
        }
    }
};