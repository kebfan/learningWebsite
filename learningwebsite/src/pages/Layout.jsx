import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
    return (
        <>

            <nav >
                <div className="nav-bar">
                    <ul className="nav-menu">
                        <li>
                            <Link className="dec-none" to="/PageA">pageA</Link>
                        </li>
                        <li>
                            <Link className="dec-none" to="/PageB">pageB</Link>
                        </li>
                        {/* <li>
                            <Link className="dec-none" to="/PageC">pageC</Link>
                        </li>
                        <li>
                            <Link className="dec-none" to="/PageD">pageD</Link>
                        </li> */}
                    </ul>
                </div>

            </nav>

            <Outlet />
        </>
    )
};

export default Layout;