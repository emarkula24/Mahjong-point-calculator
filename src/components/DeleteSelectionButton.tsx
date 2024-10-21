
export default function DeleteSelectionButton({userHand, setUserHand}) {

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