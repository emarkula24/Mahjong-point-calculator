import SortTilesByValue from "./SortTilesByValue";

export default function isTon(userHand) {
    
    const eastWindCounts = userHand.filter(tile => tile.value === "east");

    if (eastWindCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}