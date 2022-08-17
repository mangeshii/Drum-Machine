import { useEffect,useRef, useState } from "react";

const DrumPad = ({ clipDrum, setDisplayName, volumeInput, power, displayMode }) => {

    const inputRef=useRef()

    const handleOnClick = () => {
        if (power) {
            inputRef.current.volume=parseFloat(volumeInput.volume);
            inputRef.current.play()
            setDisplayName(clipDrum.id);
           
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
            <audio ref={inputRef} src={(displayMode == 'DRUM') ? clipDrum.urls[0]: clipDrum.urls[1]} className="clip" id={clipDrum.alphabet + displayMode}/>
            <span >{clipDrum.alphabet}</span>
        </div>
    )
}

export default DrumPad






