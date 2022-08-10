import { useEffect } from "react";

const DrumPad = ({ clip }) => {
    const handleOnClick = () => {
        const sound = document.getElementById(clip.alphabet);
        sound.play()
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
        <>
            <div key={clip.alphabet} className="box drum-pad" onClick={handleOnClick} tabIndex={0} >
                <audio className="clip" id={clip.alphabet}>
                    <source src={clip.url} type="audio/mp3" />
                </audio>
                <span>{clip.alphabet}</span>
            </div>
        </>
    )
}

export default DrumPad