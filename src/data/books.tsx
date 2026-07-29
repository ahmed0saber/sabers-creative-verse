export interface Book {
  title: string;
  author: string;
  description: string;
  rating: number; // Out of 5
  coverUrl: string;
}

export const books: Book[] = [
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    description:
      "Designing flexible, scalable software with independent, maintainable architecture.",
    rating: 4.9,
    coverUrl: "/images/books/clean-architecture.jpg",
  },
  {
    title: "Micro Frontends in Action",
    author: "Michael Geers",
    description:
      "Build scalable frontend applications using independent, modular micro frontends.",
    rating: 4.9,
    coverUrl: "/images/books/microfrontends-in-action.jpg",
  },
  {
    title: "Dive Into Design Patterns",
    author: "Alexander Shvets",
    description:
      "Learn practical design patterns with clear examples and illustrations.",
    rating: 4.9,
    coverUrl: "/images/books/dive-into-design-patterns.png",
  },
  {
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    description:
      "Understand common algorithms through visual explanations and practical examples.",
    rating: 4.9,
    coverUrl: "/images/books/grokking-algorithms.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    description:
      "Comprehensive guide to modern JavaScript, programming, and web development.",
    rating: 4.9,
    coverUrl: "/images/books/eloquent-javascript.jpg",
  },
  {
    title: "Architecting Accessibility",
    author: "Christopher Porter",
    description:
      "Learn practical web accessibility through real-world scenarios and examples.",
    rating: 4.8,
    coverUrl: "/images/books/architecting-accessibility.png",
  },
  {
    title: "Working Effectively With Legacy Code",
    author: "Michael C. Feathers",
    description: "Safely modify, test, and improve existing legacy codebases.",
    rating: 4.6,
    coverUrl: "/images/books/working-effectively-with-legacy-code.jpg",
  },
  {
    title: "Web Security for Developers",
    author: "Malcolm McDonald",
    description:
      "Protect web applications from common vulnerabilities and security threats.",
    rating: 4.6,
    coverUrl: "/images/books/web-security-for-developers.jpg",
  },
  {
    title: "Grokking Data Structures",
    author: "Marcello La Rocca",
    description:
      "Learn essential data structures with intuitive explanations and visuals.",
    rating: 4.5,
    coverUrl: "/images/books/grokking-data-structures.webp",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "Writing readable, maintainable, and professional code through best practices.",
    rating: 4.4,
    coverUrl: "/images/books/clean-code.jpg",
  },
  {
    title: "Data Structures and Algorithms with JavaScript",
    author: "Michael McMillan",
    description:
      "Master DSA concepts using JavaScript implementations and exercises.",
    rating: 4.2,
    coverUrl:
      "/images/books/data-structures-and-algorithms-with-javascript.jpg",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    description:
      "Deep dive into JavaScript's core concepts and hidden behaviors.",
    rating: 4,
    coverUrl: "/images/books/you-dont-know-js.jpg",
  },
];
