
export default function isChun (userHand) {
    const redDragonCounts = userHand.filter(tile => tile.value === "red");

    if (redDragonCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}
