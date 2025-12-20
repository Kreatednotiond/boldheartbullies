export const SITE_DATA = {
  brand: {
    name: "Bold Heart Bullies",
    tagline: "Quality American Bullies and Frenchie Bulldogs • Structure • Color • Temperament",
    location: "Wichita, Kansas",
    phone: "316-288-3306",
    email: "boldheartbullies@gmail.com",
    instagram: "https://instagram.com/bold_heart_bullies",
  },

  ownedStuds: [
    {
      id: "turbo",
      name: "Spectrum's Turbo of BHB",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC / UKC",
      dob: "2024-02-20",
      color: "Chocolate Ghost Tri",
      height: "13.5 in",
      weight: "?? lbs",
      studFee: "$1,800",
      owner: "Bold Heart Bullies",
      status: "Owned & Standing Stud",
      hero: "/assets/dogs/studs/turbo/hero.jpg",
      dna: "/assets/dogs/studs/turbo/dna.png",
      gallery: ["/assets/dogs/studs/turbo/hero.jpg"],
    },
  ],

  dams: [
    {
      id: "dolla",
      name: "Dolla of Bold Heart Bullies",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2024-07-28",
      color: "Lilac Tri",
      owner: "Bold Heart Bullies",
      status: "Proven Producer",
      hero: "/assets/dogs/dams/dolla/hero.jpg",
      dna: "/assets/dogs/dams/dolla/dna.png",
      gallery: ["/assets/dogs/dams/dolla/hero.jpg"],

      // ✅ UPDATED: BOTH Dolla + Geronimo images here
      pastLitter: {
        title: "Dolla x CLB’s Geronimo (Outside Stud — owned by Cel’s Legacy Bullies)",
        heroes: [
          "/assets/dogs/dams/dolla/hero.jpg", // Dolla
          "/assets/past_litters/dolla_geronimo_2025/9.jpg", // Geronimo / litter hero
        ],
        count: 8,
        males: 3,
        females: 5,
        gallery: [
          "/assets/past_litters/dolla_geronimo_2025/1.jpg",
          "/assets/past_litters/dolla_geronimo_2025/2.jpg",
          "/assets/past_litters/dolla_geronimo_2025/3.jpg",
          "/assets/past_litters/dolla_geronimo_2025/4.jpg",
          "/assets/past_litters/dolla_geronimo_2025/5.jpg",
          "/assets/past_litters/dolla_geronimo_2025/6.jpg",
          "/assets/past_litters/dolla_geronimo_2025/7.jpg",
          "/assets/past_litters/dolla_geronimo_2025/8.jpg",
        ],
      },

      plannedBreeding: {
        stud: "CLB's Tyson (Outside Stud — owned by Cel’s Legacy Bullies)",
        timing: "Early/Mid 2026",
        studHero: "/assets/dogs/outside/tyson/hero.jpg",
        note: "Planned pairing. No stud page (outside stud).",
      },
    },

    {
      id: "remi",
      name: "CLB's Remi of Bold Heart Bullies",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2025-03-13",
      color: "Blue Tri",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/remi/hero.jpg",
      dna: "/assets/dogs/dams/remi/dna.jpg",
      gallery: ["/assets/dogs/dams/remi/hero.jpg"],
      plannedBreeding: {
        stud: "Hokie (Outside stud — owned by Oceanview Bullies)",
        timing: "Mid-Late 2026",
        studHero: "/assets/dogs/outside/Hokie/hero.jpg",
        note: "Planned pairing. No stud page (outside stud).",
      },
    },

    {
      id: "espie",
      name: "Espie of Bold Heart Bullies",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2025-??-??",
      color: "Blue Tri",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/espie/hero.jpg",
      dna: "/assets/dogs/dams/espie/dna",
      note: "Espie does not have a stud selected yet. BHB is actively searching for the right match when she is of age.",
      gallery: ["/assets/dogs/dams/espie/hero.jpg"],
    },

    {
      id: "lotty",
      name: "BHB Lotty",
      breed: "French Bulldog",
      registry: "AKC",
      dob: "2023-04-28",
      owner: "Bold Heart Bullies",
      status: "Proven Dam",
      hero: "/assets/dogs/dams/lotty/hero.jpg",
      pendingBreeding: {
        stud: "Rango (Outside Stud — owned by Crabbs IncrediBulls)",
        method: "AI",
        dates: ["2025-12-14", "2025-12-16"],
        status: "Awaiting confirmation",
        studHero: "/assets/dogs/outside/rango/hero.jpg",
      },
      pastLitter: {
        title: "Lotty — Past Litter",
        count: 8,
        males: 2,
        females: 6,
        gallery: [
          "/assets/past_litters/lotty_litter_1/1.jpg",
          "/assets/past_litters/lotty_litter_1/2.jpg",
          "/assets/past_litters/lotty_litter_1/3.jpg",
        ],
      },
      gallery: ["/assets/dogs/dams/lotty/hero.jpg"],
    },

    {
      id: "stromi",
      name: "BHB Stromi",
      breed: "French Bulldog",
      registry: "AKC",
      dob: "2023-08-04",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/stromi/hero.jpg",
      gallery: ["/assets/dogs/dams/stromi/hero.jpg"],
    },
  ],

  puppies: [],

  contracts: [
    { label: "Stud Contract (image placeholder)", file: "/assets/contracts/BHB_Stud_Contract.png" },
  ],

  contractsImportant: [
    "Deposits are non-refundable under any circumstances, but may be transferable to a future puppy’s deposit if the breeder agrees.",
    "All sales and services are governed by signed contracts. Website content is informational and may change.",
    "Outside studs referenced for planned/past breedings are not owned by Bold Heart Bullies and do not imply availability for stud services.",
    "For purchases, payments, or contracts: please contact Bold Heart Bullies directly at the email/phone listed on the Contact page.",
  ],
};
