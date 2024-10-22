
export default function isHaku (userHand) {

    const whiteDragonCounts = userHand.filter(tile => tile.value === "white");

    if (whiteDragonCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}
