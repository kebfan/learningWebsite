import './Login.scss';
import { useState } from 'react';
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
        event.preventDefault(); //ทำให้หน้าไม่ reload
        setLoading(true); //set loading status ให้โชว์

        const formData = new FormData();
        formData.append('username', inputs.username);
        formData.append('password', inputs.password);

        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 1) {
                    console.log(data.message);
                    Swal.fire({
                      title: 'Login Successfully!',
                      icon: 'success',
                      confirmButtonText: 'Ok'
                    })
                    navigate('/');
                } else {
                    console.error(data.message);
                    Swal.fire({
                      title: 'Warning ! ! !',
                      text: 'Username or password is invalid!',
                      icon: 'warning',
                      confirmButtonText: 'Ok'
                    })
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="main-container bg-primary">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="main-card container d-flex justify-content-center align-items-center bg-light">
                        <form action="" onSubmit={Login} style={{ width: '60%' }}>
                            <div className="d-flex justify-content-center">
                                <h2 style={{ fontWeight: '600' }}>เข้าสู่ระบบ</h2>
                            </div>
                            <div className="d-flex justify-content-center mb-5">
                                <h2 style={{ fontWeight: '700' }}>E-Learning</h2>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%' }}>
                                <div className="my-3 w-100">
                                    <label htmlFor="username" className="form-label">
                                        Username or Email
                                    </label>
                                    <input type="text" className="form-control w-100" name="username" onChange={Change} />
                                </div>
                                <div className="mt-3 w-100">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control w-100" name="password" onChange={Change} />
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
