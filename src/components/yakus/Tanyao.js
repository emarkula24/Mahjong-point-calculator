import SortTilesByType from "./SortTilesByType"
export default function isTanyao(userHand) {

    const tileCounts = SortTilesByType(userHand);
    
    if (tileCounts.simple === 14) {
        return true;
    } else {
        return false;
    }
}