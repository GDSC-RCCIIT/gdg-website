export const dsaContent = {
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
};