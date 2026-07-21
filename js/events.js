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
    title: "BPA and DECA workshop",
    date: "August 1, 2026 at 2-3 PM",
    location: "Frisco Public Library Meeting Room 1, or on Zoom",
    description: "ICDC and BPA NLC finalists and winners explain their tactics to place high at International business competitions! Sign up today",
    image: "",
    imageAlt: "",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSepmuspYK9iAg60k5g135sGK8n-RJ2ywWvntxYmGgeUTmS3aw/viewform?usp=publish-editor"
  },
  
];

const elderlyEvents = [
  {
    title: "AI Real vs Fake: How to protect your privacy in today's digitalized world",
    date: "TBD",
    location: "Frisco Senior Center",
    description: "TBD... stick around soon to find out!",
    image: "",
    imageAlt: "",
    link: ""
  },
  
];
