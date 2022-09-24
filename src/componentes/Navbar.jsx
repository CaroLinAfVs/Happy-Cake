import { Link } from "react-router-dom"

function Navbar() {
    return (<div className="conteiner">
        <div className="links">
            <div className="homelink">
                <p><img src="https://cdn-icons-png.flaticon.com/512/2544/2544056.png" /> <Link to="/" >Home</Link></p>
            </div>
            <div className="contact">
                <p><img src="https://cdn-icons-png.flaticon.com/512/595/595714.png" /><Link to="/contact">Contact</Link></p>
            </div>
        </div>
        <div className="happyCake">
            <p>Happy Cake</p><img src="https://cdn-icons-png.flaticon.com/512/992/992717.png" />
        </div>
    </div>)
}

export default Navbar