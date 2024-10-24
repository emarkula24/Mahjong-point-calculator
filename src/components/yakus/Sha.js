import SortTilesByValue from "./SortTilesByValue";

export default function isSha(userHand) {
    
    const westWindCounts = userHand.filter(tile => tile.value === "west");

    if (westWindCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}