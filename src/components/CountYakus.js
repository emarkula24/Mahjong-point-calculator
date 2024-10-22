import isTanyao from './yakus/Tanyao';
import isChun from './yakus/Chun';
import isHaku from './yakus/Haku';
import isHatsu from './yakus/Hatsu';
import isToitoi from './yakus/Toitoi';

export default function CountYakus(userHand) {
    console.log(userHand);
    // these return true depending on if the conditions for the yaku is met
    let tanyao = isTanyao(userHand);
    let chun = isChun(userHand); 
    let haku = isHaku(userHand);
    let hatsu = isHatsu(userHand);
    let toitoi = isToitoi(userHand);
    console.log(toitoi);
    return;
}

export {CountYakus};