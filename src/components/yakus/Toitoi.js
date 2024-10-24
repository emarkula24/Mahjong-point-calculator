import SortTilesByValue from "./SortTilesByValue";

    export default function isToitoi(userHand) {

        const valueCounts = SortTilesByValue(userHand);

        let pairCount = 0;
        let tripleCount = 0;

        Object.values(valueCounts).forEach(count => {
            if (count === 2) {
                pairCount++;
            } else if (count === 3) {
                tripleCount++;
            }
        });

        if (pairCount === 1 && tripleCount === 4) {
            return true;
        } else {
            return false;
        }
    };
        
