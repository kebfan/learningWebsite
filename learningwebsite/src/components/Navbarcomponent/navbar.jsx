import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Loginpage from '../../pages/loginpage/Login';
const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100" style={{top:'0',left:'0',zIndex:'10'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/login">Login</a>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavbarComponent