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
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/pp.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
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
      title: "Frontend Engineer",
      logoUrl: "",
      start: "Oct 2021",
      end: "Apr 2022",
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },

    {
      company: "Boomerang",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/",
      start: "JUly 2024",
      end: "Present",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
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
      description: "Designed, developed a food recipe web app ",
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
      description: "Developed an open-source logging and analy",
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
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Dev Hunt",
      dates: "November 23rd - 25th, 2018",
      location: "Github",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Float UI",
      dates: "Open Source",
      location: "Github",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Mighty Meld ",
      dates: "Hackathon",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
