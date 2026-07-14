export interface JourneyReference {
  label: string;
  url: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface JourneyData {
  headline: string;
  story: string;
  milestones: JourneyMilestone[];
  references: JourneyReference[];
}

const journey: JourneyData = {
  headline:
    "Born in 2001. Building software before 2014. Releasing software since 2017.",
  story: `I've been building software from an early age. Although much of my earliest work was created locally and is no longer available, my verifiable online journey dates back to 2014, when I created my developer account on Kongregate, at just 13 years old. By then, I had already been experimenting with game development for some time.

I began by creating games with Scratch, GameMaker Studio, and Construct 2. In 2017, I published my first online game on Kongregate, built with Construct 2, marking my first public software release.

In 2018, I transitioned from no-code and low-code game development to writing code, learning C++ fundamentals and strengthening my understanding of computer science. By 2020, I had started sharing code publicly on Pastebin, created my GitHub account, and published a mobile application built with Sketchware on itch.io.

In 2021, I expanded into web development by building my first full-stack web application, a Google Forms clone built with native PHP, MySQL, and vanilla JavaScript, and deployed to Heroku, followed by an anonymous messaging platform inspired by Sarahah. These projects marked the beginning of my journey into modern web development.

In 2022, while still a university student, I began working as a full-time frontend developer, turning a lifelong passion into a profession.

I graduated in 2023 with a Bachelor's degree in Physics from the Faculty of Science, Kafr El-Sheikh University. My journey from game development to software engineering has shaped my approach to continuous learning, problem-solving, and building products that create real value.

The journey continues, but I just wanted to share how it started!`,
  milestones: [
    {
      year: "Pre-2014",
      title: "Early Beginnings",
      description:
        "Started building software locally, experimenting with game development using Scratch, GameMaker Studio, and Construct 2.",
    },
    {
      year: "2014",
      title: "First Online Presence",
      description:
        "Created developer account on Kongregate at age 13, marking the start of a verifiable online journey.",
    },
    {
      year: "2017",
      title: "First Public Release",
      description:
        "Published first online game on Kongregate, built with Construct 2 — the first public software release.",
    },
    {
      year: "2018",
      title: "Transition to Code",
      description:
        "Moved from no-code/low-code game development to writing actual code, learning C++ and computer science fundamentals.",
    },
    {
      year: "2020",
      title: "Open Source & Mobile",
      description:
        "Started sharing code on Pastebin, created GitHub account, and published a mobile app built with Sketchware on itch.io.",
    },
    {
      year: "2021",
      title: "Web Development",
      description:
        "Built first full-stack web application — a Google Forms clone with PHP, MySQL, and vanilla JavaScript, deployed on Heroku.",
    },
    {
      year: "2022",
      title: "Professional Career",
      description:
        "Began working as a full-time frontend developer while still a university student, turning passion into profession.",
    },
    {
      year: "2023",
      title: "Graduation",
      description:
        "Graduated with a Bachelor's degree in Physics from Kafr El-Sheikh University.",
    },
    {
      year: "Present",
      title: "The Journey Continues",
      description:
        "The journey continues, but I just wanted to share how it started!",
    },
  ],
  references: [
    {
      label: "My Profile on Construct",
      url: "https://www.construct.net/en/users/729901/ahmed0saber",
    },
    {
      label: "My Profile on Kongregate",
      url: "https://www.kongregate.com/en/accounts/asaber33",
    },
    {
      label: "My Profile on Itch.io",
      url: "https://itch.io/profile/ahmed0saber0",
    },
    {
      label: "My Profile on Pastebin",
      url: "https://pastebin.com/u/ahmed0saber",
    },
    {
      label: "My Profile on SoloLearn",
      url: "https://www.sololearn.com/en/profile/16660838",
    },
    {
      label: "My First Full Stack Web App",
      url: "https://github.com/ahmed0saber/ask-bin",
    },
    {
      label: "My First Repository on GitHub",
      url: "https://github.com/ahmed0saber/ehrth",
    },
  ],
};

export default journey;
