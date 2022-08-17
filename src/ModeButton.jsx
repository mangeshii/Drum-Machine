const ModeButton=({setDisplayMode})=>{

    const handleDrumMode = () => {
        setDisplayMode("DRUM")
    }

    const handleSynthMode = () => {
        setDisplayMode("SYNTH")
    }

    return(
        <>
        <button value='DRUM' onClick={handleDrumMode} className="drums">DRUMS</button>
        <button value='SYNTH' onClick={handleSynthMode} className="synth">SYNTH</button>
        </>
    )
}
export default ModeButton