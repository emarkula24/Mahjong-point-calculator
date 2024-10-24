export default function isHonitsu(userHand) {

    const manCounts = userHand.filter(tile => tile.secondaryType === "manzu").length;
    const pinCounts = userHand.filter(tile => tile.secondaryType === "pinzu").length;
    const souCounts = userHand.filter(tile => tile.secondaryType === "souzu").length;
    const honorCounts = userHand.filter(tile => tile.secondaryType === "honor").length;
    
    // Total number of tiles in hand
    const totalTiles = userHand.length;

    // Check if the hand is Honitsu for each suit
    const isManzuHonitsu = manCounts >= 2 && pinCounts === 0 && souCounts === 0 && (manCounts + honorCounts) === totalTiles;
    const isPinzuHonitsu = pinCounts >= 2 && manCounts === 0 && souCounts === 0 && (pinCounts + honorCounts) === totalTiles;
    const isSouzuHonitsu = souCounts >= 2 && manCounts === 0 && pinCounts === 0 && (souCounts + honorCounts) === totalTiles;

    // Return true if any of the conditions for Honitsu is met
    return isManzuHonitsu || isPinzuHonitsu || isSouzuHonitsu;
}
