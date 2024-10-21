
const tiles = [
    // Man (Characters - "Manzu")
    { name: "man", value: 1, type: "terminal" },
    { name: "man", value: 2, type: "simple" },
    { name: "man", value: 3, type: "simple" },
    { name: "man", value: 4, type: "simple" },
    { name: "man", value: 5, type: "simple" },
    { name: "man", value: 6, type: "simple" },
    { name: "man", value: 7, type: "simple" },
    { name: "man", value: 8, type: "simple" },
    { name: "man", value: 9, type: "terminal" },
  
    // Pin (Dots - "Pinzu")
    { name: "pin", value: 1, type: "terminal" },
    { name: "pin", value: 2, type: "simple" },
    { name: "pin", value: 3, type: "simple" },
    { name: "pin", value: 4, type: "simple" },
    { name: "pin", value: 5, type: "simple" },
    { name: "pin", value: 6, type: "simple" },
    { name: "pin", value: 7, type: "simple" },
    { name: "pin", value: 8, type: "simple" },
    { name: "pin", value: 9, type: "terminal" },
  
    // Sou (Bamboo - "Souzu")
    { name: "sou", value: 1, type: "terminal" },
    { name: "sou", value: 2, type: "simple" },
    { name: "sou", value: 3, type: "simple" },
    { name: "sou", value: 4, type: "simple" },
    { name: "sou", value: 5, type: "simple" },
    { name: "sou", value: 6, type: "simple" },
    { name: "sou", value: 7, type: "simple" },
    { name: "sou", value: 8, type: "simple" },
    { name: "sou", value: 9, type: "terminal" },
  
    // Winds (Honor tiles, secondary type "honor")
    { name: "east", value: null, type: "wind", secondaryType: "honor" },
    { name: "south", value: null, type: "wind", secondaryType: "honor" },
    { name: "west", value: null, type: "wind", secondaryType: "honor" },
    { name: "north", value: null, type: "wind", secondaryType: "honor" },
  
    // Dragons (Honor tiles, secondary type "honor")
    { name: "white", value: null, type: "dragon", secondaryType: "honor" },
    { name: "green", value: null, type: "dragon", secondaryType: "honor" },
    { name: "red", value: null, type: "dragon", secondaryType: "honor" }
  ];

export { tiles };