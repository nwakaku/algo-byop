export function WaitForAttacher({contractInfo}){
    return(
        <div className="waitingforattacher">
            <h2 className="animate">Waiting for attacher</h2>
            <textarea value={contractInfo} disabled/>
        </div>
    )
}