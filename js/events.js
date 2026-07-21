// EDIT YOUR COMMUNITY OUTREACH EVENTS HERE
//
// Two separate lists power the "Community outreach" section on each audience page:
// - studentEvents  -> shown on students.html
// - elderlyEvents   -> shown on elderly.html
//
// Each event object supports:
// - title: event name
// - date: shown as-is, e.g. "August 16, 2026" or "Every Saturday, 10am"
// - location: where it happens, e.g. "Frisco Public Library"
// - description: a sentence or two about what happens at the event
// - image: optional path to a photo in the 'images/' folder (e.g. "images/event-workshop.jpg")
//          leave as "" to show a gradient tile with the event's initial instead
// - imageAlt: alt text, only needed if you set an image
// - link: optional URL for more info / signup. Leave as "" to hide the button.
//
// To add a new event, copy one of the objects below, edit the fields, and add
// a comma after the previous entry. To remove one, delete its whole { ... } block.

const studentEvents = [
  {
    title: "Coding for Beginners Workshop",
    date: "August 16, 2026",
    location: "Frisco Public Library",
    description: "A hands-on introduction to programming for middle and high school students, no experience required.",
    image: "",
    imageAlt: "",
    link: ""
  },
  {
    title: "Student Tech Meetup",
    date: "September 20, 2026",
    location: "Frisco Community Center",
    description: "Students connect with FAZZ developers, try out our apps, and share ideas for future projects.",
    image: "",
    imageAlt: "",
    link: ""
  }
];

const elderlyEvents = [
  {
    title: "Tech Help Drop-In",
    date: "August 23, 2026",
    location: "Frisco Senior Center",
    description: "A friendly, no-pressure session where volunteers help seniors get comfortable with smartphones, apps, and the internet.",
    image: "",
    imageAlt: "",
    link: ""
  },
  {
    title: "Staying Safe Online Workshop",
    date: "September 13, 2026",
    location: "Frisco Public Library",
    description: "A workshop covering the basics of avoiding scams, protecting personal information, and using technology safely.",
    image: "",
    imageAlt: "",
    link: ""
  }
];
