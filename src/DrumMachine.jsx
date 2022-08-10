import "./App.css"
import data from "./JSON";
import DrumPad from "./DrumPad"

// const DrumPad = () => {
//     return (
//         <div className="App ">
//             <div className='container '>
//                 <div className='drum-container'>
//                     <div className='col-md-6'>
//                         <div className='hori-1'>

                           
//                         </div>
//                     </div>
//                     <div className='col-md-6'>hwwww</div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default DrumPad
// const handleOnClick = () => {
//     const sound = document.getElementById(e.aplhabet);
//     sound.play()
// }

// return (
//     <div key={i} className="box drum-pad" onClick={handleOnClick} tabIndex={0} >
//         <audio className="clip" id={e.aplhabet}>
//             <source src={e.url} type="audio/mp3" />
//         </audio>
//         <span>{e.aplhabet}</span>
//     </div>
// )



const DrumMachine = () => {
    return(
        <div className="App">
             <div className='container '>
                 <div className='drum-container'>
                     <div className='col-md-6'>
                         <div className='hori-1'>
                            {data.map((clip)=>{
                                return <DrumPad clip={clip}/>
                            })}
                            
                         </div>
                     </div>
                     <div className='col-md-6'>hwwww</div>
                 </div>
             </div>
         </div>
    )
}

export default DrumMachine;