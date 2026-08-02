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
    imageAlt: "Daybook Planner logo",
    tags: ["Meant for Students", "Productivity", "Website"],
    technologies: ["Full Stack", "JavaScript"],
    link: "https://daybook-adv.lovable.app/",
    github: "#"
  },
  {
    name: "One-Key Classics",
    description: "Learn piano through an interactive, web-based experience by playing your favorite classical hits!",
    audience: ["students"],
    tags: ["Education", "Music", "Web App"],
    image: "images/okw-screenshot.png",
    imageAlt: "One-Key Classics interface showing an interactive piano keyboard",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://one-key-classics.vercel.app/",
    github: "#"
  },
  {
    name: "ClubHub",
    description: "A club organization app for school teachers, students, and administrators",
    audience: ["students"],
    tags: ["School", "Management", "Clubs"],
    technologies: ["HTML", "JavaScript"],
    link: "#",
    github: "#"
  }
];
