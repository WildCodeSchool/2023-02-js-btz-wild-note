import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ReturnArrow = () => {
    return (
        <div><Link to="/"><IoIosArrowDown style={{ fill: "#cbd1F8", width: "3.5em", height: "3.5em" }} /></Link></div>
    )
}

export default ReturnArrow