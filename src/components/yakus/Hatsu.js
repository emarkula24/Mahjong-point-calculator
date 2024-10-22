
export default function isHatsu (userHand) {

    const greenDragonCounts = userHand.filter(tile => tile.value === "green");

    if (greenDragonCounts.length >= 3) {
        return true;
    } else {
        return false;
    }
}
