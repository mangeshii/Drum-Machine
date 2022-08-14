const ControlDisplay = ({ displayName, volumeInput, setVolumeInput }) => {

    const changeVolume = (e) => {
        const volume = e.target.value / 100;
        const message = "Volume: " + e.target.value;
        setVolumeInput({
            volume: volume,
            currentSound: message,
            volumeValue: e.target.value,
            message: message
        })
    }
    return (
        <>
            <div className="hori-2">
                {displayName}
            </div>
            <input
                value={volumeInput.volumeValue}
                type="range"
                min="1"
                max="100"
                onChange={changeVolume}
                name="output"
            >
            </input>
            <section>
                <p contenteditable="true">{`Volume: ${Math.round(volumeInput.volume * 100)}%`}</p>
            </section>
        </>
    )
}

export default ControlDisplay