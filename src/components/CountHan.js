import isTanyao from './yakus/Tanyao';
import isChun from './yakus/Chun';
import isHaku from './yakus/Haku';
import isHatsu from './yakus/Hatsu';
import isToitoi from './yakus/Toitoi';
import isTon from "./yakus/Ton";
import isNan from './yakus/Nan';
import isSha from './yakus/Sha';
import isPei from './yakus/Pei';
import isIipeekou from "./yakus/iipeekou";
import isChanta from "./yakus/Chanta";

export default function CountHan(userHand) {
    console.log(userHand);
    // these return true depending on if the conditions for the yaku is met
    let tanyao = isTanyao(userHand);
    let chun = isChun(userHand); 
    let haku = isHaku(userHand);
    let hatsu = isHatsu(userHand);
    let toitoi = isToitoi(userHand);
    let ton = isTon(userHand);
    let nan = isNan(userHand);
    let sha = isSha(userHand);
    let pei = isPei(userHand);
    let iipeekou = isIipeekou(userHand);
    let chanta = isChanta(userHand);
    console.log(chanta);
    return;
}

export {CountHan};