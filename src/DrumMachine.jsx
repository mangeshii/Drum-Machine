import "./App.css"
import { drumMode, synthMode } from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";
import ControlDisplay from "./ControlDisplay"

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS')
    const [volumeInput, setVolumeInput] = useState({ volume: "0.5" })
    const [power, setPower] = useState(false)
    const [playing, setPlaying] = useState(false)

    console.log(playing)
    
    // const style = power ? { background: "white" } : { background: "pink", boxShadow: "none" };

    const onStyle = { transform: "scale(0.95)", boxShadow: "1px 1px 4px 4px cyan, -1px -1px 4px 4px cyan" };
    const offStyle = { transform: "scale(1)", boxShadow: "none" };

    const togglePower = () => {
        setPower({ power: !power })
    }

    const style = power ? {background: '#476b68'} : playing ? onStyle : offStyle;

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <h3 className="header">DRUMMACHINE</h3>
                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1' style={style}>
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip}
                                        setDisplayName={setDisplayName}
                                        volumeInput={volumeInput}
                                        key={clip.alphabet}
                                        setPlaying={setPlaying}
                                        onStyle={onStyle}
                                        offStyle={offStyle}
                                        power={power}
                                        playing={playing} />

                                })}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <ControlDisplay displayName={displayName}
                                volumeInput={volumeInput}
                                setVolumeInput={setVolumeInput} />

                            <button onClick={togglePower} style={style}>OFF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DrumMachine;



