import { tiles } from "./components/Tiles.js";

const buttonData = tiles.map ((tile, index) => {
    const label = tile.value
    ? `${tile.name} ${tile.value} (${tile.type})` 
    : `${tile.name} (${tile.type})`;

return {
    id: index +1,
    label: label,
    onClick: () => console.log(label)
};
})

export {buttonData};