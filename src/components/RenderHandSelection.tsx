import {useContext} from 'react';
import { UserHandContext } from './userHandProvider';
import { tiles } from './Tiles';


const TilesTable = () => {
    const { userHand, setUserHand } = useContext(UserHandContext);
    
     // Group tiles by secondaryType
    const groupedTiles = tiles.reduce((acc, tile) => {
        const { secondaryType } = tile;
        if (!acc[secondaryType]) {
        acc[secondaryType] = [];
        }
        acc[secondaryType].push(tile);
        return acc;
    }, {});

    // Click handler
    const handleTileClick = (tile) => {
        console.log(`Tile clicked! ID: ${tile.id}, Value: ${tile.value}`);
        console.log(tile)
        if (userHand.length < 14) {
        setUserHand((prev) => [...prev, tile]);
        } else {
            return;
        }
    };

    return (
        <>
        {/* goes through the objects to sort them correctly, instead of writing them all out one by one. */}
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {Object.keys(groupedTiles).map((secondaryType) => (
            <div key={secondaryType} style={{ margin: '10px' }}>
            <h2>{secondaryType.charAt(0).toUpperCase() + secondaryType.slice(1)}</h2>
            <table style={{ border: '1px solid #ccc', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Tile</th>
                </tr>
                </thead>
                <tbody>
                {groupedTiles[secondaryType].map((tile) => (
                    <tr key={tile.id} onClick={() => handleTileClick(tile)} style={{ cursor: 'pointer' }}>
                    <td>{tile.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        ))}
        </div>
        </>
    );
    };

    export default TilesTable;
