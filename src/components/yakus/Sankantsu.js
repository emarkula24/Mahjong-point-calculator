import SortTilesByValue from "./SortTilesByValue";

export default function isSankantsu(userHand) {

    const valueCount = SortTilesByValue(userHand);
    let quads = 0;

    Object.values(valueCount).forEach(count => {
        if (count === 4) {
            quads++;
        }
    })
    
    if (quads === 3) {
        return true;
    } else {
        return false;
    }

}