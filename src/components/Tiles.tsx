const tiles = [
  // Man (Characters - "Manzu")
  { id: 1, value: "m1", type: "terminal", secondaryType: "manzu" },
  { id: 2, value: "m2", type: "simple", secondaryType: "manzu" },
  { id: 3, value: "m3", type: "simple", secondaryType: "manzu" },
  { id: 4, value: "m4", type: "simple", secondaryType: "manzu" },
  { id: 5, value: "m5", type: "simple", secondaryType: "manzu" },
  { id: 6, value: "m6", type: "simple", secondaryType: "manzu" },
  { id: 7, value: "m7", type: "simple", secondaryType: "manzu" },
  { id: 8, value: "m8", type: "simple", secondaryType: "manzu" },
  { id: 9, value: "m9", type: "terminal", secondaryType: "manzu" },

  // Pin (Dots - "Pinzu")
  { id: 10, value: "p1", type: "terminal", secondaryType: "pinzu" },
  { id: 11, value: "p2", type: "simple", secondaryType: "pinzu" },
  { id: 12, value: "p3", type: "simple", secondaryType: "pinzu" },
  { id: 13, value: "p4", type: "simple", secondaryType: "pinzu" },
  { id: 14, value: "p5", type: "simple", secondaryType: "pinzu" },
  { id: 15, value: "p6", type: "simple", secondaryType: "pinzu" },
  { id: 16, value: "p7", type: "simple", secondaryType: "pinzu" },
  { id: 17, value: "p8", type: "simple", secondaryType: "pinzu" },
  { id: 18, value: "p9", type: "terminal", secondaryType: "pinzu" },

  // Sou (Bamboo - "Souzu")
  { id: 19, value: "s1", type: "terminal", secondaryType: "souzu" },
  { id: 20, value: "s2", type: "simple", secondaryType: "souzu" },
  { id: 21, value: "s3", type: "simple", secondaryType: "souzu" },
  { id: 22, value: "s4", type: "simple", secondaryType: "souzu" },
  { id: 23, value: "s5", type: "simple", secondaryType: "souzu" },
  { id: 24, value: "s6", type: "simple", secondaryType: "souzu" },
  { id: 25, value: "s7", type: "simple", secondaryType: "souzu" },
  { id: 26, value: "s8", type: "simple", secondaryType: "souzu" },
  { id: 27, value: "s9", type: "terminal", secondaryType: "souzu" },

  // Winds (Honor tiles, secondary type "honor")
  { id: 28, value: "east", type: "wind", secondaryType: "honor" },
  { id: 29, value: "west", type: "wind", secondaryType: "honor" },
  { id: 30, value: "south", type: "wind", secondaryType: "honor" },
  { id: 31, value: "north", type: "wind", secondaryType: "honor" },

  // Dragons (Honor tiles, secondary type "honor")
  { id: 32, value: "green", type: "dragon", secondaryType: "honor" },
  { id: 33, value: "red", type: "dragon", secondaryType: "honor" },
  { id: 34, value: "white", type: "dragon", secondaryType: "honor" }
];

export { tiles };
