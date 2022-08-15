import { useEffect } from "react";

const DrumPad = ({ clipDrum, setDisplayName, volumeInput, power }) => {

    const handleOnClick = () => {
        if (power) {
            const sound = document.getElementById(clipDrum.alphabet);
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
        document.addEventListener('keydown', handleKeyPressed)

    })

    return (
        <div style={{ backgroundColor: clipDrum.color }} className="box drum-pad" onClick={handleOnClick} tabIndex={0} >
            <audio className="clip" id={clipDrum.alphabet}>
                <source src={clipDrum.url} type="audio/mp3" />
            </audio>
            <span >{clipDrum.alphabet}</span>
        </div>
    )
}

export default DrumPad



