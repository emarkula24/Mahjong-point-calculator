// Example implementation of SortTilesByValue
export default function SortTilesByValue(userHand) {
    const valueCounts = {};

    userHand.forEach(tile => {
        // Assuming tile has a value property
        if (valueCounts[tile.value]) {
            valueCounts[tile.value]++;
        } else {
            valueCounts[tile.value] = 1;
        }
    });
    console.log(valueCounts);
    return valueCounts;
}
