import { useEffect } from "react";

const DrumPad = ({ clip, setDisplayName, volumeInput, setPlaying, onStyle, offStyle, power, playing }) => {

    const handleOnClick = () => {
        const sound = document.getElementById(clip.alphabet);
        sound.play()
        sound.volume = parseFloat(volumeInput.volume)
        setDisplayName(clip.id)
        setPlaying(true)



    }

    const handleKeyPressed = (event) => {
        if (event.keyCode === clip.keycode) {
            handleOnClick()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPressed)

    })

    return (
        <div className="box drum-pad" onClick={handleOnClick} tabIndex={0} >
            <audio className="clip" id={clip.alphabet}>
                <source src={clip.url} type="audio/mp3" />
            </audio>
            <span >{clip.alphabet}</span>
        </div>
    )
}

export default DrumPad


