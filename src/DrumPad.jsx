import { useEffect} from "react";

const DrumPad = ({ clipDrum, setDisplayName, volumeInput, power, displayMode }) => {

    const handleOnClick = () => {
        if (power) {
            const sound = document.getElementById(clipDrum.alphabet + displayMode);
            console.log(sound)
            sound.play()
            sound.volume = parseFloat(volumeInput.volume)
            setDisplayName(clipDrum.id)
        }
    }

    const handleKeyPressed = (event) => {
        if (event.keyCode === clipDrum.keycode) {
            handleOnClick()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPressed);
    }, [])

    return (
        <div style={{ backgroundColor: clipDrum.color }} className="box drum-pad" onClick={handleOnClick} tabIndex={0}>
            <audio className="clip" id={clipDrum.alphabet + displayMode}>
                {displayMode === "DRUM" ? (<source src={clipDrum.urls[0]} type="audio/mp3" /> ): (<source src={clipDrum.urls[1]} type="audio/mp3" />)}
            </audio>
            <span >{clipDrum.alphabet}</span>
        </div>
    )
}

export default DrumPad






