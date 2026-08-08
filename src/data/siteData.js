export const SITE_DATA = {
  brand: {
    name: "Bold Heart Bullies",
    tagline: "Quality American Bullies and Frenchie Bulldogs • Structure • Color • Temperament",
    location: "Wichita, Kansas",
    phone: "316-288-3306",
    email: "info@boldheartbullies.com",
    instagram: "https://instagram.com/boldheart_bullies",
  },

  ownedStuds: [
    {
      id: "Melo",
      name: "BHB's Melo",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2025-03-17",
      color: "Blue Tri",
      height: "13 in",
      studFee: "$1000 ($500 Deposit)",
      owner: "Bold Heart Bullies",
      status: "Owned and Standing Stud",
      hero: "/assets/dogs/studs/melo/hero.jpeg",
      dna: "/assets/dogs/dams/espie/dna.png",
      glallery: ["/assets/dogs/studs/melo/hero.jpeg",
      ]
    }
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
      hero: "/assets/dogs/dams/remi/hero.jpeg",
      dna: "/assets/dogs/dams/remi/dna.png",
      gallery: ["/assets/dogs/dams/remi/hero.jpeg"],
      plannedBreeding: {
        stud: "PBK Ghost (Outside stud — owned by Production Bully Kennels)",
        timing: "Late 2026, Early 2027",
        studHero: "/assets/dogs/outside/ghost/hero.jpeg",
        note: "Planned pairing. No stud page (outside stud).",
      },
    },

    {
      id: "brookie",
      name: "Brookie of Bold Heart Bullies",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2025-04-13",
      color: "Black Tri-Color Merle",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/brookie/hero.jpg",
      dna: "/assets/dogs/dams/brookie/dna.PNG",
      note: "Brookie has not had any previous litters.",
      gallery: ["/assets/dogs/dams/brookie/hero.jpg"],
},

    {
      id: "espie",
      name: "Espie of Bold Heart Bullies",
      breed: "American Bully",
      class: "Pocket",
      registry: "ABKC",
      dob: "2025-03-17",
      color: "Blue Tri",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/espie/hero.jpg",
      dna: "/assets/dogs/dams/espie/dna.png",
      note: "Espie has not had any previous litters.",
      gallery: ["/assets/dogs/dams/espie/hero.jpg"],
      plannedBreeding: {
        stud: "Rambo (Outside stud — owned by UpOne Bullys)",
        timing: "Late 2026, Early 2027",
        studHero: "/assets/dogs/outside/rambo/hero.JPG",
        note: "Planned pairing. No stud page (outside stud).",
      },
  },

    { 
      id: "aja",
      name: "BHB Aja",
      breed: "American Bully",
      class: "Pocket",
      reigstry: "ABKC",
      dob: "2024-07-28",
      color: "Chocolate Tri",
      owner: "Bold Heart Bullies",
      status: "Proven Producer",
      hero: "/assets/dogs/dams/Aja/hero.jpg",
      dna: "/assets/dogs/dams/dolla/dna.png",
      gallery: ["/assets/dogs/dams/Aja/hero.jpg"],
      confirmedBreeding: {
        stud: "Hank (Outside Stud — owned by StayFresh Bullyz)",
        method: "AI",
        dueDates: ["2026-06-23"],
        status: "Birthed 4 boys and 2 girls",
        picks: "Available picks: 2nd through 6th picks available",
        depositNote: "Deposits are required to reserve a pick. Please contact Bold Heart Bullies to confirm availability before sending payment.",
        reserveSubject: "Reserve a Pick - Aja x Hank",
        studHero: "/assets/dogs/outside/hank/hero.JPEG",
      },
    },

    {
      id: "chyna",
      name: "Chyna",
      breed: "French Bulldog",
      registry: "AKC",
      dob: "2024-06-26",
      owner: "Bold Heart Bullies",
      status: "Proven Dam",
      hero: "/assets/dogs/dams/Chyna/hero.PNG",
      gallery: ["/assets/dogs/dams/Chyna/hero.PNG"],
      confirmedBreeding: {
        stud: "Rango (Outside Stud — owned by Crabbs IncrediBulls)",
        method: "AI",
        dueDates: ["2026-07-15"],
        status: "Birthed 2 boys and 1 girls",
        picks: "Available picks: All Picks available.",
        depositNote: "Deposites are required to resrve a pick. Please contact Bold Heart Bullies before submitting a deposit.",
        reserveSubject: "Reserve a Pick - Chyna x Rango",
        studHero: "/assets/dogs/outside/rango/hero.jpg",
      },
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

      pastLitter: {
        title: "Lotty x Mr. Banks (Outside Stud)",
        heroes: [
          "/assets/dogs/dams/lotty/hero.jpg",
          "/assets/dogs/outside/banks/hero.jpg", 
        ],
        count: 8,
        males: 2,
        females: 6,
        gallery: [
          "/assets/past_litters/lotty_litter_1/1.jpeg",
          "/assets/past_litters/lotty_litter_1/2.jpeg",
          "/assets/past_litters/lotty_litter_1/3.jpeg",
          "/assets/past_litters/lotty_litter_1/4.jpeg",
          "/assets/past_litters/lotty_litter_1/5.jpeg",
          "/assets/past_litters/lotty_litter_1/6.jpeg",
          "/assets/past_litters/lotty_litter_1/7.jpeg",
          "/assets/past_litters/lotty_litter_1/8.jpeg",
        ],
      },
      gallery: ["/assets/dogs/dams/lotty/hero.jpg"],
    },

    {
      id: "stormi",
      name: "BHB Stormi",
      breed: "French Bulldog",
      registry: "AKC",
      dob: "2025-08-13",
      owner: "Bold Heart Bullies",
      status: "Young Prospect",
      hero: "/assets/dogs/dams/stromi/hero.png",
      gallery: ["/assets/dogs/dams/stromi/hero.png"],
    },
  ],

  puppies: [
    {
      id: "aja-hank-2026",
      title: "Aja x Hank",
      status: "Litter of 6",
      price: "Males $3,000 - Females $3,500",
      description: "Born June 23, 2026. Now accepting deposits and reservations for available puppies.",

      featuredImage:
      "/assets/available_puppies/aja_hank/pedigree1.jpg",

      
      parents: {
        sire: { name: "Hank", hero: "/assets/dogs/outside/hank/hero.JPEG" },
        dam:  { name: "Aja", hero: "/assets/dogs/dams/Aja/hero.jpg" },
      },
    pedigree: {
      name: "Pedigree",
      photos: [
        "/assets/available_puppies/aja_hank/pedigree1.jpg",
      ],
    },
      available: [
        { id: "male1", sex: "Male", status: "Sold", price: "SOLD" },
      { id: "male3", sex: "Male", status: "Available", price: "$3000", photo: "/assets/available_puppies/aja_hank/1.jpg",},
        { id: "male4", sex: "Male", status: "Available", price: "$3000", photo: "/assets/available_puppies/aja_hank/2.jpg",},
        { id: "female1", sex: "Female", status: "Available", price: "$3500", photo: "/assets/available_puppies/aja_hank/5.jpg",},
        { id: "female2", sex: "Female", status: "Available", price: "$3500", photo: "/assets/available_puppies/aja_hank/6.jpg",},
      ],

      reserveSubject: "Reserve a Puppy - Aja x Hank",
      depositNote: "A deposit is required to reservean available puppy. Please contact Bold Heart Bullies to confirm availablility before submitting payment.",
    },

    {
        id: "Chyna-Rango-2026",
      title: "Chyna x Rango",
      status: "Litter of 3", 
      price: "Males $3,000 - Females $3,500",
      description: "Born July 16, 2026. Now accepting deposits and reservations for available puppies.",
      
      featuredImage:"/assets/available_puppies/chyna_rango/1.jpg",


      parents: {
        sire: { name: "Rango", hero: "/assets/dogs/outside/rango/hero.jpg" },
        dam:  { name: "Chyna", hero: "/assets/dogs/dams/Chyna/hero.PNG" },
      },
      available: [
      { id: "male3", sex: "Male", status: "Available", price: "$3000", photo: "/assets/available_puppies/chyna_rango/1.jpg",},
        { id: "male4", sex: "Male", status: "Available", price: "$3000", photo: "/assets/available_puppies/chyna_rango/2.jpg",},
        { id: "female1", sex: "Female", status: "Available", price: "$3500", photo: "/assets/available_puppies/chyna_rango/3.jpg",},
      ],

      reserveSubject: "Reserve a Puppy - Chyna x Rango",
      depositNote: "A deposit is required to reservean available puppy. Please contact Bold Heart Bullies to confirm availablility before submitting payment.",
    },
  ],
  contracts: [],

contractsImportant: [
  "Deposits are non-refundable under any circumstances, but may be transferable to a future puppy's deposit if the breeder agrees.",
  "All sales and services are governed by signed contracts. Website content is informational and may change.",
  "Outside studs referenced for planned/past breedings are not owned by Bold Heart Bullies and do not imply availability for stud services.",
  "For purchases, payments, or contracts: please contact Bold Heart Bullies directly at the email/phone listed on the Contact page.",
],
};

