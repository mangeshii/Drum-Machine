import "./App.css"
import { drumMode } from "./JSON";
import DrumPad from "./DrumPad"
import {  useEffect, useState } from "react";
import ControlDisplay from "./ControlDisplay";
import { AiOutlinePoweroff } from 'react-icons/ai'

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS...')
    const [volumeInput, setVolumeInput] = useState({ volume: "0.5" })
    const [power, setPower] = useState(true)
    const [displayMode, setDisplayMode] = useState('DRUM');
   
    const togglePower = () => {
        setPower(!power)
    }

    const DrumMode = drumMode.map((clipDrum) => {
        return (
            <DrumPad clipDrum={clipDrum}
                setDisplayName={setDisplayName}
                volumeInput={volumeInput}
                key={clipDrum.alphabet}
                power={power}
                displayMode={displayMode}
            />);

    });


    const stylepowerbtn = power ? { color: 'greenyellow' } : { color: 'red' }

    const deactivatedisplay = !power ? {
        background: "linear-gradient(to bottom right,rgba(255,255,255,0.3),rgba(255,255,255,0.5),rgba(255,255,255,0.3),rgba(255,255,255,0.5),rgba(255,255,255,0.3))", border: "2px solid grey"
    } : { background: "linear-gradient(to bottom right, rgb(52, 152, 219) 12.5%, #a1b1e4 25%, rgb(52, 152, 219) 50%, #a1b1e4 75%, #a1b1e4 100%)" }


    const handleDrumMode = () => {
        setDisplayMode("DRUM")
    }

    const handleSynthMode = () => {
        setDisplayMode("SYNTH")
    }

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <div className="header">
                        <h4 className="head"><span className="header-drum">DRUM</span>MACHINE</h4>
                        <AiOutlinePoweroff style={stylepowerbtn} className="power-icon" onClick={togglePower} />
                    </div>

                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1' >
                                {DrumMode}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <ControlDisplay displayName={displayName}
                                volumeInput={volumeInput}
                                setVolumeInput={setVolumeInput}
                                deactivatedisplay={deactivatedisplay}
                                displayMode={displayMode}
                            />
                            <div className="chg-mode">
                                <button value='DRUM' onClick={handleDrumMode} className="drums">DRUMS</button>
                                <button value='SYNTH' onClick={handleSynthMode} className="synth">SYNTH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default DrumMachine;




