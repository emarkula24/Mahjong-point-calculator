// Helper functions
const isTerminalOrHonor = (tile) => tile.type === "terminal" || tile.secondaryType === "honor";
const isNonTerminal = (tile) => tile.type !== "terminal";

// Function to find melds and pairs in the hand
 export default  extractMeldsAndPair = (hand) => {
// Helper functions
    const isTerminalOrHonor = (tile) => tile.type === "terminal" || tile.secondaryType === "honor";
    const isNonTerminal = (tile) => tile.type !== "terminal";
  const melds = [];
  let pair = null;

  // Count the occurrences of each tile
  const tileCount = {};

  for (const tile of hand) {
    tileCount[tile.value] = (tileCount[tile.value] || 0) + 1;
  }

  // Extract pairs and melds
  for (const value in tileCount) {
    const count = tileCount[value];

    // Check for a pair (2 of the same tile)
    if (count === 2) {
      pair = hand.find(tile => tile.value === value);
    }

    // Check for melds (3 of the same tile or a sequence)
    if (count >= 3) {
      for (let i = 0; i < count; i++) {
        melds.push(hand.find(tile => tile.value === value));
      }
    }
  }

  // Find sequences for melds
  const sortedHand = hand.slice().sort((a, b) => a.id - b.id);
  for (let i = 0; i < sortedHand.length - 2; i++) {
    // Check if a sequence can be formed
    if (
      sortedHand[i].secondaryType === sortedHand[i + 1].secondaryType &&
      sortedHand[i].secondaryType === sortedHand[i + 2].secondaryType &&
      (sortedHand[i].id + 1 === sortedHand[i + 1].id) &&
      (sortedHand[i].id + 2 === sortedHand[i + 2].id)
    ) {
      melds.push(sortedHand[i], sortedHand[i + 1], sortedHand[i + 2]);
      // Remove the meld from sortedHand for further processing
      sortedHand.splice(i, 3);
      i -= 1; // Adjust the index after splice
    }
  }

  return { melds, pair };
};