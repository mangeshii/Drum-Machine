import { useEffect } from "react";

const DrumPad = ({ clip }) => {
    const handleOnClick=()=>{
        const sound = document.getElementById(clip.aplhabet);
        sound.play()
    }

    const handleKeyPressed=(event)=>{
        if(event.keyCode == clip.keycode){
            handleOnClick()
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyPressed)
      
    })

    return (
        <>
            <div key={clip.aplhabet} className="box drum-pad" onClick={handleOnClick} tabIndex={0} >
                <audio className="clip" id={clip.aplhabet}>
                    <source src={clip.url} type="audio/mp3" />
                </audio>
                <span>{clip.aplhabet}</span>
            </div>
        </>
    )
}

export default DrumPad