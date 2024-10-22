const SortTilesByType = (userHand) => {
    
    const typeCounts = {};
    userHand.forEach(tile => {
        if (typeCounts[tile.type]) {
            typeCounts[tile.type]++;
        } else {
            typeCounts[tile.type] = 1;
        }
    });
    console.log(typeCounts);
    return typeCounts;
};

// Default export
export default SortTilesByType;