export default function isRyanpeikou(userHand) {
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
    console.log(sameMelds, seenOnce, seenTwice)
    if (sameMelds.size === 6) {
        return true;
    } else {
        return false;
    }
}
