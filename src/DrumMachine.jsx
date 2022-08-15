import "./App.css"
import { drumMode, synthMode } from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";
import ControlDisplay from "./ControlDisplay";
import { AiOutlinePoweroff } from 'react-icons/ai'

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS...')
    const [volumeInput, setVolumeInput] = useState({ volume: "0.5" })
    const [power, setPower] = useState(true)

    const togglePower = () => {
        setPower(!power)
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <div className="header">
                        <h4 className="head"><span className="header-drum">DRUM</span>MACHINE</h4>
                        <button className="power-btn">
                            <AiOutlinePoweroff className="power-icon" onClick={togglePower} />
                        </button>
                    </div>

                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1' >
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip}
                                        setDisplayName={setDisplayName}
                                        volumeInput={volumeInput}
                                        key={clip.alphabet}
                                        power={power} />

                                })}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <ControlDisplay displayName={displayName}
                                volumeInput={volumeInput}
                                setVolumeInput={setVolumeInput} />

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DrumMachine;




