export const cpContent = {
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
};