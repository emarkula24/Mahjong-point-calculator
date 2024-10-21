import { useContext } from 'react';
import { UserHandContext } from './userHandProvider'; 

export default function DeleteSelectionButton() {
    const { userHand, setUserHand } = useContext(UserHandContext);

    const removeLatestItem = () => {
        // Create a new array without the last item
        const newHand = userHand.slice(0, -1); // This removes the last item
        setUserHand(newHand);
      }


    return (
        <>
        {/* Button to remove the latest addition */}
        <button onClick={removeLatestItem} disabled={userHand.length === 0}>
        Remove Latest
        </button>
        </>
    )
}