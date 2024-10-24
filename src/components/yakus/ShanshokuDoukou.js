
export default function isShanshokuDoukou(userHand) {
    
    // Group tiles by number
    const groupedTiles = userHand.reduce((acc, tile) => {
        const tileNumber = tile.value[1]; // Extract the number from the value (e.g., p4 -> 4)
        const tileSuit = tile.value[0]; // Extract the suit from the value (e.g., p4 -> p)

        if (!acc[tileNumber]) {
            acc[tileNumber] = { count: 0, suits: new Set() };
        }
        acc[tileNumber].count += 1;
        acc[tileNumber].suits.add(tileSuit);
        
        return acc;
    }, {});
    
    console.log(groupedTiles);
    // Check for any number if we have at least 3 tiles across different suits
    for (const number in groupedTiles) {
        const group = groupedTiles[number];
        console.log(group)
        if (group.count >= 9 && group.suits.size >= 3) {
            return true; // Found a valid Shanshoku Doukou
        }
    }

    return false; // No valid Shanshoku Doukou found
}