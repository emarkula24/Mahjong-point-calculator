import SortTilesByValue from "./SortTilesByValue";

export default function isNan(userHand) {
    
    const southWindCounts = userHand.filter(tile => tile.value === "south");

    if (southWindCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}