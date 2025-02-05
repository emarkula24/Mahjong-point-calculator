import isTanyao from './yakus/Tanyao';
import isChun from './yakus/Chun';
import isHaku from './yakus/Haku';
import isHatsu from './yakus/Hatsu';
import isToitoi from './yakus/Toitoi';
import isTon from "./yakus/Ton";
import isNan from './yakus/Nan';
import isSha from './yakus/Sha';
import isPei from './yakus/Pei';
import isIipeekou from "./yakus/Iipeekou";
import isChanta from "./yakus/Chanta";
import isSankantsu from "./yakus/Sankantsu";
import isShanshokuDoukou from "./yakus/ShanshokuDoukou";
import isHonroutou from "./yakus/Honroutou";
import isShousangen from './yakus/Shousangen';
import isChiitoitsu from './yakus/Chiitoitsu';
import isHonitsu from "./yakus/Honitsu";
import isChinitsu from "./yakus/Chinitsu";
import isRyanpeikou from './yakus/Ryanpeikou';

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
    let sankantsu = isSankantsu(userHand);
    let sanshokuDoukou = isShanshokuDoukou(userHand);
    let honroutou = isHonroutou(userHand);
    let shousangen = isShousangen(userHand);
    let chiitoitsu = isChiitoitsu(userHand);
    let honitsu = isHonitsu(userHand);
    let chinitsu = isChinitsu(userHand);
    let ryanpeikou = isRyanpeikou(userHand);
    console.log(chanta);
    return;
}

export {CountHan};