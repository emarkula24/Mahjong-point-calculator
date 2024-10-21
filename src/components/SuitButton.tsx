export default function SuitButton({suit, onClick}) {
    return (
        <>
        <button onClick={() => onClick(suit) }>
            {suit}
        </button>
        </>
    )
}