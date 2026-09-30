export type Observation = {
  scene: string;
  trait: string;
  whatHappens: string[];
  whyItReflects: string[];
};

export type Scene = {
  number: string;
  character: string;
  film: string;
  medium: "Film" | "Television";
  traits: string[];
  observations: Observation[];
  videoSrc?: string;
  imageSrc?: string;
  imagesSrc?: string[];
  portrait?: boolean;
};

export const scenes: Scene[] = [
  {
    number: "01",
    character: "Miranda Priestly",
    film: "The Devil Wears Prada",
    medium: "Film",
    traits: ["Sense of Superiority", "Entitlement", "Lack of Empathy", "Need for Admiration"],
    observations: [
      {
        scene: "The Cerulean Blue Speech",
        trait: "Sense of Superiority",
        whatHappens: [
          "Miranda gives a speech asserting her superior knowledge of fashion, dismissing Andrea's opinion entirely.",
          "She traces a cerulean sweater from her own editorial decision down to Andrea's thrift-store find.",
        ],
        whyItReflects: [
          "Positions herself as the sole authority in the room.",
          "Dismisses others' perspectives without consideration.",
          "Uses intellectual dominance as a form of control.",
        ],
      },
      {
        scene: "Impossible Demands",
        trait: "Entitlement",
        whatHappens: [
          "Miranda expects Andrea to obtain unpublished Harry Potter manuscripts for her children.",
          "Routinely demands employees drop everything regardless of their personal lives.",
          "Shows little concern when Andrea is overwhelmed, focusing only on performance.",
        ],
        whyItReflects: [
          "Assumes others should prioritize her needs over their own.",
          "Expects special treatment because of her position.",
        ],
      },
    ],
    videoSrc: "/videos/miranda.mp4",
    portrait: true,
  },
  {
    number: "02",
    character: "Alauddin Khilji",
    film: "Padmaavat",
    medium: "Film",
    traits: ["Entitlement", "Grandiosity", "Arrogance", "Manipulation", "Dominance"],
    observations: [
      {
        scene: "Obsession with Padmavati",
        trait: "Entitlement",
        whatHappens: [
          "After hearing about Padmavati's beauty, Khilji becomes determined to possess her despite her being another ruler's wife.",
          "Treats her as an object of conquest rather than a person.",
        ],
        whyItReflects: [
          "Believes he deserves whatever he desires.",
          "Does not respect others' boundaries or rights.",
          "Treats people as possessions rather than individuals.",
        ],
      },
      {
        scene: "Capture of Ratan Singh",
        trait: "Manipulation",
        whatHappens: [
          "Khilji uses deception during diplomatic interactions to imprison Ratan Singh.",
          "Exploits trust to further his own ambitions.",
        ],
        whyItReflects: [
          "Exploits trust for personal gain.",
          "Places his desires above ethical considerations.",
          "Manipulates situations with calculated deception.",
        ],
      },
    ],
    videoSrc: "/videos/khilji.mov",
  },
  {
    number: "03",
    character: "Jordan Belfort",
    film: "The Wolf of Wall Street",
    medium: "Film",
    traits: ["Grandiosity", "Self-Importance", "Need for Admiration"],
    observations: [
      {
        scene: "Sell Me This Pen",
        trait: "Grandiosity",
        whatHappens: [
          "Jordan constantly presents himself as a master salesman and genius entrepreneur.",
          "Performs confidence for an audience of employees who hang on his every word.",
        ],
        whyItReflects: [
          "Believes he possesses exceptional, unique abilities.",
          "Creates and maintains an image of being uniquely talented.",
          "Performs competence as much as he practises it.",
        ],
      },
      {
        scene: "Motivational Speeches",
        trait: "Need for Admiration",
        whatHappens: [
          "Jordan delivers dramatic speeches to employees who cheer and idolize him.",
          "Feeds on their admiration while positioning himself as larger than life.",
        ],
        whyItReflects: [
          "Thrives on admiration and attention from others.",
          "Needs to be seen as extraordinary.",
          "Uses others' enthusiasm to reinforce his self-image.",
        ],
      },
    ],
    imagesSrc: ["/images/jb/1.jpg", "/images/jb/2.jpg", "/images/jb/3.jpg"],
  },
  {
    number: "04",
    character: "Patrick Bateman",
    film: "American Psycho",
    medium: "Film",
    traits: ["Excessive Self-Focus", "Lack of Empathy", "Preoccupation with Status"],
    observations: [
      {
        scene: "Morning Routine",
        trait: "Excessive Self-Focus",
        whatHappens: [
          "Patrick narrates an elaborate grooming routine focused on perfect appearance.",
          "Every product, every step, every reflection in the mirror is deliberate and ritualistic.",
        ],
        whyItReflects: [
          "Intense preoccupation with image and physical perfection.",
          "Identity heavily constructed around appearance and status.",
        ],
      },
      {
        scene: "Interactions with Colleagues",
        trait: "Lack of Empathy",
        whatHappens: [
          "Patrick shows little genuine emotional connection to others.",
          "Views people primarily through their usefulness or status relative to his own.",
        ],
        whyItReflects: [
          "Difficulty recognising others as independent individuals.",
          "Relationships revolve around maintaining and projecting self-image.",
          "Empathy is performed rather than felt.",
        ],
      },
    ],
    videoSrc: "/videos/bateman.mov",
  },
  {
    number: "05",
    character: "Komolika",
    film: "Kasautii Zindagii Kay",
    medium: "Television",
    traits: ["Need for Admiration", "Manipulation", "Entitlement", "Sense of Superiority"],
    observations: [
      {
        scene: "Superiority Over Prerna",
        trait: "Sense of Superiority",
        whatHappens: [
          "Komolika frequently presents herself as more intelligent, sophisticated, and powerful than those around her.",
          "She mocks and belittles Prerna, treating her as inferior and unworthy.",
          "Often enters situations confident she is always the smartest person in the room.",
        ],
        whyItReflects: [
          "Looks down on others, especially those she considers beneath her socially.",
          "Derives self-worth from comparison and domination.",
        ],
      },
      {
        scene: "Charm and Control",
        trait: "Manipulation",
        whatHappens: [
          "Komolika uses charm and social influence to manipulate situations.",
          "Expects to get what she wants regardless of others' feelings or rights.",
        ],
        whyItReflects: [
          "Uses personal appeal as a tool for control.",
          "Expects outcomes to bend to her will.",
          "Shows little regard for the emotional cost to others.",
        ],
      },
    ],
    imagesSrc: [
      "/images/kk/kk1.jpg",
      "/images/kk/kk2.jpg",
      "/images/kk/kk3.jpg",
      "/images/kk/kk4.jpg",
    ],
  },
];
