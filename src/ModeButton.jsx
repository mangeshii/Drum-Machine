const ModeButton=({setDisplayMode,power,deactivatedbuttonDrum,deactivatedbuttonSynth})=>{

    const handleDrumMode = () => {
        if(power){
            setDisplayMode("DRUM")
        }

    }

    const handleSynthMode = () => {
        if(power){
            setDisplayMode("SYNTH")
        }

    }

    return(
        <>
        <button style={deactivatedbuttonDrum} value='DRUM' onClick={handleDrumMode} className="drums">DRUMS</button>
        <button  style={deactivatedbuttonSynth} value='SYNTH' onClick={handleSynthMode} className="synth">SYNTH</button>
        </>
    )
}
export default ModeButton