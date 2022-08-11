import "./App.css"
import drumMode from "./JSON";
import DrumPad from "./DrumPad"
import { useState } from "react";

const DrumMachine = () => {
    const [displayName, setDisplayName] = useState('LOADING PRESETS')

    return (
        <div className="App">
            <div className='container'>
                <div className='drum-container'>
                    <h3 className="header">DRUMMACHINE</h3>
                    <div className="machine">
                        <div className='col-md-6 left-section'>
                            <div className='hori-1'>
                                {drumMode.map((clip) => {
                                    return <DrumPad clip={clip} setDisplayName={setDisplayName} />

                                })}
                            </div>
                        </div>
                        <div className="col-md-6 right-section">
                            <div className="hori-2">
                                {displayName}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default DrumMachine;

