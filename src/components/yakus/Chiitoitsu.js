
export default function isChiitoitsu(userHand) {

    let pairCounter = 0;
    // Group tiles by number
    const groupedTiles = userHand.reduce((acc, tile) => {
        const tileNumber = tile.value[1]; // Extract the number from the value (e.g., p4 -> 4)
        const tileSuit = tile.value[0]; // Extract the suit from the value (e.g., p4 -> p)

        const tileKey =`${tileSuit}${tileNumber}`;

        if (!acc[tileKey]) {
            acc[tileKey] = { count: 0, suits: new Set() };
        }
        acc[tileKey].count += 1;
        acc[tileKey].suits.add(tileSuit);

        return acc;
     }, {});

    for (const number in groupedTiles) {
        const group = groupedTiles[number];
        if (group.count === 2) {
            pairCounter++;
        }
    }

    
    if (pairCounter === 7) {
        return true;
    } else {
        return false;
    }
}