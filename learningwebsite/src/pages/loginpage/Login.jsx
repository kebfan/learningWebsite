import './Login.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const apiUrl = 'http://localhost:8080/backendelearning/service/LoginApi'; //โยง API

const Loginpage = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({}); //สร้าง Input เก็บค่าจาก input username & password

    const [loading, setLoading] = useState(false); //สร้าง status loading เวลากด login

    const Change = (event) => {
        const name = event.target.name;  //ชื่อ param
        const value = event.target.value; //ค่า param
        setInputs((values) => ({ ...values, [name]: value })); //ยัดค่าลง setInputs
    };

    const Login = (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('username', inputs.username);
        formData.append('password', inputs.password);

        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === 1) {
                    console.log(data.message);

                    sessionStorage.setItem('userId', data.userID);
                    sessionStorage.setItem('username', data.username);
                    sessionStorage.setItem('name', data.name);
                    sessionStorage.setItem('surname', data.surname);
                    sessionStorage.setItem('role', data.role);

                } if(sessionStorage.getItem('role') === "2"){
                    Swal.fire({
                        title: 'Login Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                    navigate('/');
                } else if(sessionStorage.getItem('role') === "1"){
                    Swal.fire({
                        title: 'Login Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    });
                    navigate('/admin');
                }
                else {
                    console.error(data.message);
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Username or password is invalid!',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'An error occurred. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                });
            })
            .finally(() => {
                setLoading(false);
            });

    };

    useEffect(() => {

    }, []);
    return (
        <>
            <div className="main-container bg-white">
                <div className="area" >
                    <ul className="circles-login">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
                <div className="main-container-login d-flex justify-content-center align-items-center h-100">
                    <div className="main-card-login container d-flex justify-content-center align-items-center bg-light shadow-lg">
                        <form action="" onSubmit={Login} style={{ width: '60%' }}>
                            <div className="d-flex justify-content-center">
                                <h2 style={{ fontWeight: '600' }}>เข้าสู่ระบบ</h2>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h2 style={{ fontWeight: '700' }}>E-Learning</h2>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%' }}>
                                <div className="my-2 w-100">
                                    <label htmlFor="username" className="form-label">
                                        ชื่อผู้ใช้งาน
                                    </label>
                                    <input type="text" className="form-control w-100" name="username" onChange={Change} required />
                                </div>
                                <div className="mt-2 w-100">
                                    <label htmlFor="password" className="form-label">
                                        รหัสผ่าน
                                    </label>
                                    <input type="password" className="form-control w-100" name="password" onChange={Change} required />
                                </div>
                                <div className="row w-100 mt-2">
                                    <div className="col d-flex justify-content-start">
                                        <a className="Not-register" href="/register">
                                            ยังไม่ได้สมัครสมาชิก?
                                        </a>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <a className="Forgot-password" href="">
                                            ลืมรหัสผ่าน?
                                        </a>
                                    </div>
                                </div>
                                <button className='btn-login' type="submit" disabled={loading}>
                                    {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loginpage;
