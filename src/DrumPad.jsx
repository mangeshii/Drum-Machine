import { useEffect,useRef, useState } from "react";

const DrumPad = ({ clipDrum, setDisplayName, volumeInput, power, displayMode }) => {


    const ref=useRef()
    console.log(ref.current)
    
    const handleOnClick = () => {
        if (power) {
            // const sound = document.getElementById(clipDrum.alphabet + displayMode);
            // sound.volume = parseFloat(volumeInput.volume);
            ref.current.play();
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
            <audio ref={ref} className="clip" id={clipDrum.alphabet + displayMode}>
               <source  src={ref} type="audio/mp3" />
            </audio>
            <span >{clipDrum.alphabet}</span>
        </div>
    )
}

export default DrumPad






