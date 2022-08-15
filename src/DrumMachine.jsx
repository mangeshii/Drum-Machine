import "./App.css"
import { drumMode, synthMode } from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";
import ControlDisplay from "./ControlDisplay"

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS')
    const [volumeInput, setVolumeInput] = useState({ volume: "0.5" })
    const [power, setPower] = useState(true)
    const [playing, setPlaying] = useState(false)

    const style = power ? { background: "WHITE" } : { background: "black" };

    const togglePower = () => {
        setPower(!power)
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <h3 className="header">DRUMMACHINE</h3>
                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1' >
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip}
                                        setDisplayName={setDisplayName}
                                        volumeInput={volumeInput}
                                        key={clip.alphabet}
                                        setPlaying={setPlaying}
                                        power={power}
                                        playing={playing}
                                        style={style} />

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



