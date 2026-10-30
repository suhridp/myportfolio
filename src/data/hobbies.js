// =====================================================================
//  HOBBIES — edit this file to update the Hobbies page.
//
//  HOW TO ADD A PHOTO
//    1. Put the image in  public/hobbies/cooking/  or  public/hobbies/photography/
//    2. Reference it by path, e.g.  images: ["/hobbies/cooking/biryani.jpg"]
//       Several photos of the same dish? List them all; the first is the cover.
//    Keep photos under ~500 KB (resize to ~1600px wide first).
//
//  Entries show in the order they appear here — put new ones at the top.
//  date is optional ("YYYY-MM-DD"); leave it "" if you're not sure.
//  To add a brand-new hobby, copy one of the blocks inside `hobbies`.
// =====================================================================

const C = (name) => `/hobbies/cooking/${name}.jpg`;

const hobbies = [
  {
    id: "cooking",
    name: "Cooking",
    blurb:
      "Mostly desserts: cakes, cheesecakes and Indian sweets, with the odd savoury snack in between.",
    layout: "dishes", // dishes = photo cards; gallery = photo grid
    entries: [
      {
        title: "Mango sticky rice",
        date: "2026-06-05",
        images: [C("mango-sticky-rice")],
        notes: "Thai-style sweet coconut sticky rice with fresh mango, finished with sesame.",
        tags: ["Mango", "Rice"],
      },
      {
        title: "Blueberry cheesecake",
        date: "2026-05-27",
        images: [C("blueberry-cheesecake")],
        notes: "Creamy cheesecake under a thick blueberry compote.",
        tags: ["Cheesecake"],
      },
      {
        title: "Pesto cheese toast",
        date: "2026-05-27",
        images: [C("pesto-cheese-toast")],
        notes: "Toast spread with green pesto and topped with a cheese sauce.",
        tags: ["Savoury", "Snack"],
      },
      {
        title: "Tres leches, without cream",
        date: "2026-05-26",
        images: [C("tres-leches-no-cream")],
        notes: "The milk-soaked sponge on its own, without the cream topping this time.",
        tags: ["Cake", "Soaked"],
      },
      {
        title: "Gajar ka halwa",
        date: "2026-01-01",
        images: [C("gajar-ka-halwa-1"), C("gajar-ka-halwa-2")],
        notes: "Grated carrots slow-cooked in milk and ghee with dry fruits. Made on New Year's Day.",
        tags: ["Indian sweet", "Winter"],
      },
      {
        title: "Mawa cake",
        date: "2025-12-25",
        images: [C("mawa-cake")],
        notes: "My signature bake. A ring cake made with mawa (khoya), topped with slivered almonds.",
        tags: ["Cake", "Signature"],
      },
      {
        title: "Pista cake",
        date: "2025-10-22",
        images: [C("pista-cake")],
        notes: "Pistachio sponge with a nut topping.",
        tags: ["Cake"],
      },
      {
        title: "Choco chip cake",
        date: "2025-10-22",
        images: [C("chocochip-cake")],
        notes: "A simple sponge loaded with chocolate chips.",
        tags: ["Cake"],
      },
      {
        title: "Bomboloni",
        date: "2025-09-02",
        images: [C("bomboloni")],
        notes: "Italian fried doughnuts, rolled in sugar while still warm.",
        tags: ["Fried", "Dough"],
      },
      {
        title: "Ukadiche modak",
        date: "2025-08-27",
        images: [C("modak-1"), C("modak-2")],
        notes: "Steamed rice-flour dumplings with a coconut and jaggery filling, made for Ganesh Chaturthi.",
        tags: ["Indian sweet", "Festive", "Steamed"],
      },
      {
        title: "Malai kulfi",
        date: "2025-08-17",
        images: [C("malai-kulfi")],
        notes: "Slow-reduced milk frozen into kulfi on a stick.",
        tags: ["Indian sweet", "Frozen"],
      },
      {
        title: "Tres leches",
        date: "2025-08-16",
        images: [C("tres-leches-1"), C("tres-leches-2")],
        notes: "Sponge cake soaked in three kinds of milk, topped with cream and pistachios.",
        tags: ["Cake", "Soaked"],
      },
      {
        title: "Churros",
        date: "2025-08-08",
        images: [C("churros")],
        notes: "Piped, fried and tossed in cinnamon sugar. One of them came out as a heart.",
        tags: ["Fried", "Dough"],
      },
      {
        title: "Strawberry chocolate cake",
        date: "2025-02-16",
        images: [C("strawberry-chocolate-cake")],
        notes: "A heart-shaped chocolate cake covered in sliced strawberries.",
        tags: ["Cake", "Chocolate"],
      },
      {
        title: "Almond chocolate cake",
        date: "2025-02-16",
        images: [C("almond-chocolate-cake")],
        notes: "Chocolate cake with an almond crust around the edge.",
        tags: ["Cake", "Chocolate"],
      },
      {
        title: "Mango cheesecake",
        date: "",
        images: [C("mango-cheesecake-1"), C("mango-cheesecake-2")],
        notes: "Topped with thin mango slices arranged into a rose.",
        tags: ["Cheesecake", "Mango"],
      },
    ],
  },
  {
    id: "photography",
    name: "Photography",
    blurb:
      "Mostly street, food and the sky at odd hours. Shot on whatever I'm carrying.",
    layout: "gallery",
    // Add photos here, newest first, e.g.
    // {
    //   title: "Monsoon evening",
    //   date: "2026-08-19",
    //   images: ["/hobbies/photography/monsoon-evening.jpg"],
    //   location: "Kolkata",
    //   camera: "Galaxy A35",
    //   notes: "",
    // },
    // This tab stays hidden until there's at least one photo.
    entries: [],
  },
];

export default hobbies;
