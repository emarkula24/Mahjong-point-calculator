import SortTilesByValue from "./SortTilesByValue";

export default function isPei(userHand) {
    
    const northWindCounts = userHand.filter(tile => tile.value === "north");

    if (northWindCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}