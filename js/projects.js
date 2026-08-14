// ADD NEW PROJECTS HERE
//
// AUDIENCE — this controls which page a project shows up on:
//   audience: ["students"]              -> students.html only
//   audience: ["elderly"]               -> elderly.html only
//   audience: ["students", "elderly"]   -> both pages
// The home page always shows the first few projects regardless of audience.
// If you leave "audience" out, the project shows on the home page only.
//
// IMAGE GUIDELINES:
// - Image dimensions: 600x400px or any 3:2 aspect ratio (e.g., 900x600px)
// - Supported formats: PNG, JPG, SVG, WEBP
// - File size: Keep under 500KB for better loading
// - Place images in the 'images/' folder
// - Images will be automatically cropped to fit the 150px height with center focus
// - The "image" field is optional: leave it out and a tile with the
//   project's initial will be shown instead
//
// EXAMPLE:
// {
//   name: "Your App Name",
//   description: "A brief description...",
//   audience: ["students"],
//   image: "images/your-app-screenshot.png",
//   imageAlt: "Your app interface showing main features",
//   tags: ["Category", "Type", "Platform"],
//   technologies: ["Tech1", "Tech2"],
//   link: "https://your-app-link.com",
//   github: "https://github.com/your-repo"
// }

const projects = [
  {
    name: "Daybook Planner",
    description: "A next-generation, all-in-one planning app meant for students. Easily track tasks and events through a seamless interface.",
    audience: ["students"],
    image: "images/daybook_screenshot.png",
    imageAlt: "Daybook Planner Screenshot",
    tags: ["Meant for Students", "Productivity", "Website"],
    technologies: ["Full Stack", "JavaScript"],
    link: "https://daybook-adv.lovable.app/",
    github: "#"
  },
  {
    name: "One-Key Classics",
    description: "Learn piano through an interactive, web-based experience by playing your favorite classical hits!",
    audience: ["students", "elderly"],
    tags: ["Education", "Music", "Web App"],
    image: "images/okw-screenshot.png",
    imageAlt: "One-Key Classics Screenshot",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://one-key-classics.vercel.app/",
    github: "#"
  },
  {
    name: "ClubBase",
    description: "A club organization app for school teachers, students, and administrators",
    audience: ["students"],
    tags: ["School", "Management", "Clubs"],
    image: "images/club_hub_screenshot.png",
    imageAlt: "ClubBase Screenshot",
    technologies: ["HTML", "JavaScript"],
    link: "https://club-base.app/",
    github: "https://github.com/afangbc/Club-Hub"
  },
  {
    name: "SAT Prep",
    description: "An app to help students prepare for the SAT exam, with error DNA, Bluebook test reviews, and a full course for content.",
    audience: ["students"],
    tags: ["School", "SAT", "Course"],
    image: "images/sat_prep.png",
    imageAlt: "SAT Prep Screenshot",
    technologies: ["HTML", "JavaScript"],
    link: "https://sat-app-flame.vercel.app/",
    github: "#"
  }
];
