import CheckIdenticalMelds from "./CheckIdenticalMeld"
export default function isIipeekou(userHand) {
    const seenOnce = new Set();
    const seenTwice = new Set();

    for (const obj of userHand) {
        if (obj.type === "simple" || obj.type === "terminal") {
            if (seenOnce.has(obj.value)) {
                seenTwice.add(obj.value);
                continue;
            }
            seenOnce.add(obj.value);
        }
    }

    const sameMelds = seenOnce.intersection(seenTwice);
    if (sameMelds.size === 3) {
        return true;
    } else {
        return false;
    }
}
