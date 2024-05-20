import { useNavigate } from 'react-router-dom';
import Loginpage from '../../pages/loginpage/Login';
import React, { useEffect, useState } from 'react';

const NavbarComponent = () => {
    const navigate = useNavigate();

    const [isLogin, setisLogin] = useState(false);
    const [needLogin, setneedLogin] = useState(true);
    const [user, setUser] = useState('');


    const Logout = (event) => {
        sessionStorage.clear();
        navigate('/login');

    };
    const Login = (event) => {
        sessionStorage.clear();
        navigate('/login');

    };

    useEffect(() => {
        const storedUser = sessionStorage.getItem('username');
        if (storedUser == null) {
            setisLogin(true);
            setneedLogin(false)
        } else {
            setUser(storedUser);
            setisLogin(false);
            setneedLogin(true)
        }
    }, [isLogin]);
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100" style={{ top: '0', left: '0', zIndex: '10' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="row w-100" id="navbarNav">
                            <div className="col d-flex">
                                <a className="navbar-brand" href="#">Navbar</a>

                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    <a className="nav-link" href="/login">Login</a>
                                </div>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <div className='nav-link'>
                                    <p className="" hidden={isLogin}>{isLogin ? '' : 'ขื่อผู้ใช้ = ' + user}</p>
                                </div>
                                <div className='nav-link text-end'>
                                    <button className="btn btn-danger" hidden={isLogin} onClick={Logout}>{isLogin ? '' : 'ออกจากระบบ'}</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav> */}

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid mx-3">
                    <a className="navbar-brand" href="/Home"><img src='Logoicon.png' style={{height:'40px'}}/></a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="row w-100">
                            <div className="col">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">หน้าแรก</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/lesson">บทเรียน</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <ul className="navbar-nav">
                                    <li className="nav-item px-4">
                                        <span className="nav-link text-light" hidden={isLogin}>{isLogin ? '' : 'ขื่อผู้ใช้ : ' + user}</span>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <button className="btn btn-danger" hidden={isLogin} onClick={Logout}>{isLogin ? '' : 'ออกจากระบบ'}</button>
                                        <button className="btn btn-success" hidden={needLogin} onClick={Login}>{needLogin ? '' : 'เข้าสู่ระบบ'}</button>
                                    </li>
                                </ul>


                            </div>
                        </div>

                    </div>
                </div>
            </nav>




        </>
    )
}
export default NavbarComponent