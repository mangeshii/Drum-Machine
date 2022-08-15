import { AiOutlineSound } from 'react-icons/ai'
const ControlDisplay = ({ displayName, volumeInput, setVolumeInput, deactivatedisplay, displayMode }) => {

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
            <div className="hori-2" style={deactivatedisplay}>
                <div className="drum-name">
                    {displayName}
                </div>
                <section className="vol-mode">
                    <p className="vol">{`Volume: ${Math.round(volumeInput.volume * 100)}%`}</p>
                    <p className="mode">MODE: {displayMode}</p>
                </section>
            </div>
            <div className="sound">
                <AiOutlineSound className='sound-icon' />
                <input
                    value={volumeInput.volumeValue}
                    type="range"
                    min="1"
                    max="100"
                    onChange={changeVolume}
                    name="output"
                    className='slider'
                >
                </input>

            </div>
        </>
    )
}

export default ControlDisplay
