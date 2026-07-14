export interface Certification {
  title: string;
  organization: string;
  date: string;
  verifyUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Certified Front-End Developer (React)",
    organization: "HackerRank",
    date: "01 January, 2024",
    verifyUrl: "https://www.hackerrank.com/certificates/f61306392d7e",
  },
  {
    title: "Certified Software Engineer",
    organization: "HackerRank",
    date: "08 January, 2024",
    verifyUrl: "https://www.hackerrank.com/certificates/6b5ffb36bfb2",
  },
  {
    title: "Certified GraphQL Developer - Associate",
    organization: "Apollo GraphQL",
    date: "04 November, 2024",
    verifyUrl:
      "https://www.apollographql.com/tutorials/certifications/5327ae60-dfe7-4806-91ae-3406fe7adb80",
  },
  {
    title: "Certified Redis Developer",
    organization: "Redis University",
    date: "09 April, 2024",
    verifyUrl:
      "https://www.credential.net/00896d45-9c22-4b22-841f-86c5566011f4#acc.6bJwcRey",
  },
  {
    title: "Certified Cypress Professional",
    organization: "LambdaTest",
    date: "04 September, 2025",
    verifyUrl:
      "https://www.testmuai.com/certifications/testmuai-certified/C101-9SXI76.png",
  },
  {
    title: "GitHub Foundations Certificate Exam",
    organization: "Microsoft",
    date: "23 June, 2026",
    verifyUrl:
      "https://learn.microsoft.com/en-gb/users/ahmedsaber-5944/credentials/bc7f1872efdd0aae",
  },
  {
    title: "Certified English Proficiency (B2 Upper Intermediate)",
    organization: "EF SET",
    date: "16 January, 2026",
    verifyUrl: "https://cert.efset.org/en/9ZFJSA",
  },
];

export default certifications;
