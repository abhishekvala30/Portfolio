/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhishek's Portfolio",
  description:
    "Self-motivated DevOps & SRE Engineer with a focus on problem solving and technical expertise. Dedicated to ensuring high system availability, scalability, and security. Proficient in cloud platforms. Proven track record in reducing downtime, improving performance, and driving cost savings. Committed to continuous improvement and eager to contribute expertise to future roles.",
  og: {
    title: "Abhishek Vala Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Abhishek Vala",
  logo_name: "AbhishekVala",
  nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1CiYHSo3oMMqF5CEOyMV3ZPF_188aHxBh/view?usp=sharing",
  portfolio_repository: "https://github.com/abhishekvala30",
  githubProfile: "https://github.com/abhishekvala30",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/abhishekvala30",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-vala",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:abhishekvala06@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/abhishekvala",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/the_banna__sa",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DevOps & SRE",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Collaborating with software development teams to improve system stability",
        "⚡ Ensuring high availability and scalability of critical applications and services",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Marwadi University Rajkot",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "MARWADI",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Architecture",
        "⚡ Apart from this, I have done courses on Security, Networking, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.marwadiuniversity.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Kubernetes Administartor",
      subtitle: "- CNCF",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.credly.com/badges/e198901e-e533-4c83-81ba-01d05d65c94d/public_url",
      alt_name: "CKA",
      color_code: "#8C151599",
    },
    {
      title: "AWS Solution Architect - Associate",
      subtitle: "- AWS",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.credly.com/badges/babb94cd-0b36-4a8c-9d72-151718a0012f/public_url",
      alt_name: "SAA",
      color_code: "#00000099",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "- AWS",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "CCP",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups and evolved compnies as a Network Engineer, Implementation engineer, DevOps and SRE engineer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Site Reliability Engineer",
          company: "Panamax Inc.",
          company_url: "https://www.panamaxil.com/",
          logo_path: "tiktok_logo.png",
          duration: "Jan 2023 - Present",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Monitoring system performance and reliability. Troubleshooting and resolving incidents to minimize downtime. Ensuring high availability and scalability of critical applications and services. Implementing best practices for disaster recovery and backup.",
          color: "#000000",
        },
        {
          title: "Implementation Engineer",
          company: "Mindarray Systems Pvt. Ltd",
          company_url: "https://www.motadata.com/",
          logo_path: "legato_logo.png",
          duration: "Oct 2021 - Jan 2023",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Implemented our products in client environments and provide solutions in accordance with their needs. Promoted as a L3 engineer and handled critical project for the company",
          color: "#0879bf",
        },
        {
          title: "Network Engineer",
          company: "Yudiz Solutions",
          company_url: "https://www.yudiz.com/",
          logo_path: "muffito_logo.png",
          duration: "Dec 2020 - Oct 2021",
          location: "Ahmedabad, Gujarat, India",
          description:
            "Worked as a network engineer. Where I was managing the network systems as well as a system administrator and all other devices and their troubleshooting.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Cyber Security Intern",
          company: "Azure Skynet Solutions Pvt. Ltd",
          company_url: "https://www.azureskynet.com/",
          logo_path: "tiktok_logo.png",
          duration: "Jun 2019 - Jul 2019",
          location: "Gurgaon, Haryana, India",
          description:
            "Gain the hand on knowledge on the various security concepts and tools to mitigate the risks and vulnerability",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Volunteer",
          company: "ASME",
          company_url: "https://www.asme.org/",
          logo_path: "google_logo.png",
          duration: "Jan 2019",
          location: "Rajkot, Gujarat, India",
          description: "",
          color: "#4285F4",
        },
        {
          title: "MU Fest Coordinator",
          company: "Marwadi University",
          company_url: "https://www.marwadiuniversity.ac.in/",
          logo_path: "microsoft_logo.png",
          duration: "Feb 2019",
          location: "Rajkot, Gujarat, India",
          description: "",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Cloud, DevOps & SRE, Scripting and etc..",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Ahmedabad, Gujarat, India",
    locality: "Gujarat",
    country: "India",
    region: "Asia",
    postalCode: "380054",
    streetAddress: "Ahmedabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
