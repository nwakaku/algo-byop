export function AcceptWager({wager, standardUnit, accept, decline}){
    return(
        <div className="acceptwager">
            <h2>Wager: { wager } {standardUnit}</h2>
            <button onClick={() => accept()}>Accept Wager</button>
            <button onClick={() => decline()}>Decline Wager</button>
        </div>
    )
}