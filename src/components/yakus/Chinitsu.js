export default function isHonitsu(userHand) {

    const manCounts = userHand.filter(tile => tile.secondaryType === "manzu").length;
    const pinCounts = userHand.filter(tile => tile.secondaryType === "pinzu").length;
    const souCounts = userHand.filter(tile => tile.secondaryType === "souzu").length;
    const honorCounts = userHand.filter(tile => tile.secondaryType === "honor").length;
    
    // Check if the hand is Honitsu for each suit
    const isManzuHonitsu = manCounts >= 14 && pinCounts === 0 && souCounts === 0 && honorCounts === 0;
    const isPinzuHonitsu = pinCounts >= 14 && manCounts === 0 && souCounts === 0 && honorCounts === 0;
    const isSouzuHonitsu = souCounts >= 14 && manCounts === 0 && pinCounts === 0 && honorCounts === 0;

    // Return true if any of the conditions for Honitsu is met
    return isManzuHonitsu || isPinzuHonitsu || isSouzuHonitsu;
}
