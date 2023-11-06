import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    ashid,
    online,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Online Tutor",
      icon: mobile,
    },
    {
      title: "Memory Grand Master",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Front End Development Intern",
      company_name: "Ashidiin guur",
      icon: ashid,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Gained exposure to industry-standard tools like GitHub and ReactJS.", 
        "Collaborated with experienced developers, learning by observing their workflows and project contributions.",
      ],
    },
    {
      title: "High School Web Development Instructor",
      company_name: "Volunteer @153rd school",
      icon: online,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2023",
      points: [
        "Empowered high school students with web development skills",
        "Inspired a passion for coding and digital literacy",
        "Created engaging learning experiences",
        "Developed effective teaching materials",
        "Tracked student progress and projects",
        "Fostered problem-solving and critical thinking",
        "Offered mentorship for further education and careers",
       ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "I must say, my experience in this volunteering class has been truly invaluable. The project-based lessons have been a fantastic way for me to learn a lot, and the work we're doing is not just great but also really inspiring. I feel so grateful to be a part of this program.",
      name: "Bolormaa",
      designation: "Current student",
      company: "my volunteering class",
    },
    {
      testimonial:
      "As a mom, I've seen my child's work keep getting better. I was amazed when she made a website on her computer that, in my opinion, looks even better than her project and seems very real. But sure, she has long way to go",
      name: "Baigalmaa",
      designation: "Mother",
      company: "mine",
    },
    {
      testimonial:
      "After seeing her website and projects, I was genuinely impressed. It's truly remarkable, especially considering her age. I even wanted to learn how to code like this, and I believe she has a bright future in this field.",
      name: "x_skywalker_x",
      designation: "Stranger ",
      company: "the Discord community",
    },
  ];
  
  const projects = [
    {
      name: "Grocery list",
      description:
        "Need a shopping buddy? Look no further! This nifty little page is your trusty sidekick for retail therapy. Just jot down your shopping list, and when you're done, give it a swipe of the erase magic wand. Poof, your list vanishes like your money! 😄🛒✨",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://enguunee.github.io/grocery-list/",
    },
    {
      name: "Simple Counter",
      description:
        
        "Feeling frazzled? No worries! Just click the happy buttons to make the numbers dance. Watch those digits boogie up and down, and let your stress samba away! 🕺💃 Stress-busting made fun and easy-peasy!",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://enguunee.github.io/simple-counter/",
    },
    {
      name: "More projects",
      description:
        
"If you're curious and want to explore some of my coding adventures, take a peek at my GitHub. While I may not have a ton of projects (yet), there's always room for more fun! So, come on in, simply click on the link, and let's turn some code into pure fun! 🚀😄",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Enguunee",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };