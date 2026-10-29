// =====================================================================
//  HOBBIES — edit this file to update the Hobbies page.
//
//  HOW TO ADD A PHOTO
//    1. Put the image in  public/hobbies/cooking/  or  public/hobbies/photography/
//    2. Reference it by path, e.g.  image: "/hobbies/cooking/biryani.jpg"
//    Leave image as "" and the card shows an empty frame until you add one.
//
//  Newest entries first — just add a new object at the top of a list.
//  To add a brand-new hobby, copy one of the blocks inside `hobbies`.
//  The example entries below are placeholders: replace them with your own.
// =====================================================================

const hobbies = [
  {
    id: "cooking",
    name: "Cooking",
    blurb:
      "Weekend experiments, family recipes and whatever the market had that day. I keep notes on what worked so I can cook it again.",
    layout: "journal", // journal = card with notes; gallery = photo grid
    entries: [
      {
        title: "Chicken biryani, dum style",
        date: "2026-10-12",
        image: "",
        notes:
          "Layered and sealed with dough. Par-boiling the rice to 70% made the difference this time.",
        tags: ["Rice", "Weekend"],
        link: "", // optional: a recipe or blog post
      },
      {
        title: "Masala chai from scratch",
        date: "2026-09-28",
        image: "",
        notes:
          "Crushed cardamom, ginger and a little black pepper. Still tuning the milk-to-water ratio.",
        tags: ["Drinks"],
        link: "",
      },
      {
        title: "Homemade pasta",
        date: "2026-09-07",
        image: "",
        notes:
          "First time rolling dough by hand. Thinner than I expected to need, but worth it.",
        tags: ["Pasta", "First try"],
        link: "",
      },
    ],
  },
  {
    id: "photography",
    name: "Photography",
    blurb:
      "Mostly street, food and the sky at odd hours. Shot on whatever I'm carrying.",
    layout: "gallery",
    entries: [
      {
        title: "Monsoon evening",
        date: "2026-08-19",
        image: "",
        location: "",
        camera: "",
        notes: "",
      },
      {
        title: "Night sky",
        date: "2026-07-03",
        image: "",
        location: "",
        camera: "",
        notes: "",
      },
      {
        title: "Market colours",
        date: "2026-06-21",
        image: "",
        location: "",
        camera: "",
        notes: "",
      },
      {
        title: "Morning light",
        date: "2026-05-30",
        image: "",
        location: "",
        camera: "",
        notes: "",
      },
    ],
  },
];

export default hobbies;
