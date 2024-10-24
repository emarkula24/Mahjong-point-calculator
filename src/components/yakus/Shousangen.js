
export default function isShousangen(userHand) {
    
    let shousangen = false;

    const greenDragonCounts = userHand.filter(tile => tile.value === "green").length;
    const redDragonCounts = userHand.filter(tile => tile.value === "red").length;
    const whiteDragonCounts = userHand.filter(tile => tile.value === "white").length;

    console.log(greenDragonCounts)
    if (greenDragonCounts === 3 && redDragonCounts === 3) {
            if (whiteDragonCounts === 2) {
                shousangen = true;
            }
    }

    else if (greenDragonCounts === 3 && whiteDragonCounts === 3) {
        if (redDragonCounts === 2) {
            shousangen = true;
        }
    }
    
    else if (whiteDragonCounts === 3 && redDragonCounts === 3) {
        if (greenDragonCounts === 2) {
            shousangen = true;
        }
    }

    return shousangen;
    
}