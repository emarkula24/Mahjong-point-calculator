import SortTilesByType from "./SortTilesByType";

export default function isHonroutou(userHand) {


    let honroutou = true;

    userHand.forEach(tile => {
        if (tile.secondaryType === "honor" || tile.type === "terminal") {
            honroutou = true;
        } else {
            honroutou = false;
        }
    })
    return honroutou;
}