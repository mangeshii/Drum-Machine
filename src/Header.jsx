import { AiOutlinePoweroff } from 'react-icons/ai';
const Header = ({power,setPower}) => {

    const stylepowerbtn = power ? { color: 'greenyellow' } : { color: 'red' }

      
    const togglePower = () => {
        setPower(!power)
    } 

    return (
        <>
            <h4 className="head"><span className="header-drum">DRUM</span>MACHINE</h4>
            <AiOutlinePoweroff style={stylepowerbtn} className="power-icon" onClick={togglePower} />
        </>
    )
}
export default Header