import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmad",
  initials: "AD",
  url: "https://dillion.io",
  location: "",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Frontend Engineer. I love building things and helping people. Very active on Basketball Court🏀.",
  summary:
    "Hello there, I'm Ahmad, I design web and mobile applications that are user-friendly, beautiful and convert your target audience.",
  avatarUrl: "/pp.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "React Native",
    "Expo",
    "Redux",
    "Firebase",
    "Supabase",
    "Tanstack",
    "Node.js",
    "Figma",
    "Photoshop",
    "Postgres",
    "Adobe XD",
    "TailwindCSS",
    "HTML",
    "CSS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "ahmadsta7@gmail.com.com",
    tel: "+23407030044515",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dev-Ahmadubah/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmad-uba-ahmad-226a84197/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ahmadubahh",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Shamrock Innovations",
      href: "",
      badges: [],
      location: "On-Site",
      title: "Frontend Developer",
      logoUrl: "",
      start: "Oct 2021",
      end: "Aug 2023",
      description:
        "I worked with different teams to create pixel-perfect UI components, improving user satisfaction by 85%. I optimized the website’s code, reducing load times by 30% and enhancing the user experience. I also implemented a front-end caching strategy that made the app 70% more responsive and reduced server load. Additionally, I mentored interns in web development, improving the quality of their projects by 80%. Overall, I contributed to over 15 projects, delivering impactful results for the organization.",
    },
    {
      company: "Lexington Technologies",
      badges: [],
      href: "",
      location: "On-Site",
      title: "Frontend Developer",
      logoUrl: "",
      start: "Nov 2023",
      end: "Oct 2024",
      description:
        "I integrated Redux for state management, optimizing application performance and reducing load times by 47%. I developed and implemented React components using React Router to improve navigation and user experience. I actively participated in code reviews, providing constructive feedback and ensuring adherence to best practices. I also enhanced data extraction and processing by creating reusable code snippets for future projects. Furthermore, I collaborated with team members to improve backend integration by optimizing data workflows and processes.",
    },
    {
      company: "Mighty Meld",
      href: "",
      badges: [],
      location: "Remote",
      title: "Product Concil",
      logoUrl: "",
      start: "March 2024",
      end: "May 2024",
      description:
        "I provided actionable feedback that led to key improvements in product usability. I collaborated closely with the development team to share user experience insights and suggest enhancements. I also took part in product review sessions, offering insights to boost functionality and user satisfaction.",
    },

  ],
  education: [
    {
      school: "Nigerian Army University, Biu",
      href: "",
      degree: "Bachelor's Degree in Software Engineering (Bsc)",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Dua GPT",
      href: "https://dua-gpt.vercel.app/",
      dates: "",
      active: true,
      description: "A customer loyalty program ",
      technologies: ["React", "Typescript", "TailwindCSS", "Supabase", "Together AI"],
      links: [
        {
          type: "Website",
          href: "https://boomerang-hq.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dua-gpt.png",
      video: "",
    },
    {
      title: "Boomerang",
      href: "https://culgust.netlify.app/",
      dates: "",
      active: true,
      description: "A customer loyalty program ",
      technologies: ["React", "Typescript", "TailwindCSS", "Firebase", "Tanstack"],
      links: [
        {
          type: "Website",
          href: "https://boomerang-hq.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/boomerang.png",
      video: "",
    },
    {
      title: "Culgust",
      href: "https://culgust.netlify.app/",
      dates: "",
      active: true,
      description: "Designed, developed a food recipe web app",
      technologies: ["React", "Javascript", "TailwindCSS", "Spoonacular Api"],
      links: [
        {
          type: "Website",
          href: "https://culgust.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/culgust.png",
      video: "",
    },
   
    {
      title: "Bank App Landing Page",
      href: "  https://bankapplandingpage.netlify.app/",
      dates: "",
      active: true,
      description: "Designed, developed a landing page for a bank app",
      technologies: ["TailwindCSS", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://bankapplandingpage.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bank.png",
      video: "",
    },
    {
      title: "Colormuse",
      href: "https://color-muse.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Developed a color generator app",
      technologies: ["Next.js", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://color-muse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Dev-Ahmadubah/ColorMuse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/color.png",
      video: "",
    },
    {
      title: "Hoop Master",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a Basketball workout app that help hoopers to elevate thier games",
      technologies: [
        "React Native",
        "Typescript",
        "NativeWind",
        "Firebase",
        "TailwindCSS",
        "Open AI"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hoop-master.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Dev Hunt",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "Github",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image: "",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Float UI",
  //     dates: "Open Source",
  //     location: "Github",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image: "",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Mighty Meld ",
  //     dates: "Hackathon",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image: "",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image: "",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  // ],
} as const;
