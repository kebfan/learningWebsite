import './Register.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const apiUrl = 'http://localhost:8080/backendelearning/service/RegisterApi'; //โยง API
const apiLoginUrl = 'http://localhost:8080/backendelearning/service/LoginApi'; //โยง API



const Register = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({}); //สร้าง Input เก็บค่าจาก input username & password...

  const [loading, setLoading] = useState(false); //สร้าง status loading เวลากด login
  const [isHidden, setHidden] = useState(false);

  const Change = (event) => {
    const name = event.target.name;  //ชื่อ param
    const value = event.target.value; //ค่า param
    setInputs((values) => ({ ...values, [name]: value }));

    // setInputs((values) => ({ ...values, [name]: value })); //ยัดค่าลง setInputs
  };

  const Registeration = (event) => {
    event.preventDefault(); //ทำให้หน้าไม่ reload
    setLoading(true); //set loading status ให้โชว์
    if (inputs.section == null || inputs.gradeLevel == null) {
      console.log("section or grade null!!!!!!!!");
      Swal.fire({
        title: 'Warning ! ! !',
        text: 'Section or Grade level is invalid!',
        icon: 'warning',
        confirmButtonText: 'Ok'
      }).then((result) => {
        setLoading(false);

      });

    }
    else {
      const formData = new FormData();
      formData.append('username', inputs.username);
      formData.append('password', inputs.password);
      formData.append('name', inputs.name);
      formData.append('lastname', inputs.Lastname);
      formData.append('email', inputs.Email);
      formData.append('number', inputs.Phonenumber);
      formData.append('section', inputs.section);
      formData.append('gradeLevel', inputs.gradeLevel);

      fetch(apiUrl, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 1) {
            console.log(data.message);
            navigate('/');
            Swal.fire({
              title: 'Register Successfully!',
              icon: 'success',
              confirmButtonText: 'Ok'
            }).then((result => {
              if(result.isConfirmed){
                window.location.reload();
              }
            }))
          } else if (data.status === 0) {
            console.error(data.message);

          } else if (data.status === 3) {
            console.error(data.message);

          } else if (data.status === 4) {
            console.error(data.message);

          } else if (data.status === 5) {
            console.error(data.message);

          }
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          const formDataSession = new FormData();
          formDataSession.append('username', inputs.username);
          formDataSession.append('password', inputs.password);

          fetch(apiLoginUrl, {
            method: 'POST',
            body: formDataSession,
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
        });
    }

    console.log('Value =', inputs)


  };
  useEffect(() => {
    console.log('change na ja');
    if (inputs.password && inputs.Confirmpassword) {
      console.log("passing ");
      if (inputs.password !== inputs.Confirmpassword) {
        console.log("pass not match!");
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  }, [inputs]);
  return (
    <>
      <div className="main-container bg-white">
        <div className="area" >
          <ul className="circles">
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
        <div className="main-container-register">


          <div className="d-flex justify-content-center align-items-center h-100">

            <div className="main-card-register shadow-lg container bg-white d-flex justify-content-center align-items-center">

              <form action="" style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center' onSubmit={(e) => { Registeration(e) }}>
                <div className='row' style={{ width: '100%' }}>
                  <div className="col left-card px-2 shadow-sm d-flex justify-content-center align-items-center">
                    <h2 style={{ fontWeight: '500', color: '#ffffff', textShadow: '0px 0px 20px #F5F5F5' }}>
                      สมัครสมาชิก<br />
                      E-Learning
                    </h2>
                  </div>

                  <div className="col my-2 " style={{ borderRadius: '10px' }}>
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100%' }}>

                      <div className="row" >
                        <h4 className='mt-5'>ข้อมูลส่วนตัว</h4>
                        <div className="col my-4">
                          <div className=" my-3 w-100">
                            <label htmlFor="username" className="form-label">ชื่อผู้ใช้งาน</label>
                            <input type="text" className="form-control w-100" name="username" onChange={Change} placeholder='กรุณากรอกชื่อผู้ใช้งาน' required />
                          </div>
                          <div className=" mt-3 w-100">
                            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                            <input type="password" className="form-control w-100" name="password" minLength={8} onChange={Change} placeholder='กรุณากรอกรหัสผ่าน' required />
                          </div>
                          <div className=" mt-3 w-100">
                            <label htmlFor="Confirmpassword" className="form-label">ยืนยันรหัสผ่าน</label>
                            <input type="password" className="form-control w-100" name="Confirmpassword" minLength={8} onChange={Change} placeholder='กรุณากรอกรหัสผ่านอีกครั้ง' required />
                            <p className='text-center' style={{ color: '#f00000', fontSize: '9px' }} disabled={isHidden}>{isHidden ? '***Password and confirm password is not match!***' : ''}</p>
                          </div>
                        </div>
                        <div className="col my-4">
                          <div className=" my-3 w-100">
                            <label htmlFor="Email" className="form-label">อีเมล</label>
                            <input type="email" className="form-control w-100" name="Email" onChange={Change} placeholder='กรุณากรอกอีเมลของผู้ใช้' required />
                          </div>
                          <div className=" mt-3 w-100">
                            <label htmlFor="name" className="form-label">ชื่อ</label>
                            <input type="text" className="form-control w-100" name="name" onChange={Change} placeholder='กรุณากรอกชื่อจริงของผู้ใช้งาน' required />
                          </div>
                          <div className=" mt-3 w-100">
                            <label htmlFor="Lastname" className="form-label">นามสกุล</label>
                            <input type="text" className="form-control w-100" name="Lastname" onChange={Change} placeholder='กรุณากรอกนามสกุลของผู้ใช้งาน' required />
                          </div>
                        </div>
                        <div className=" mb-3 w-100">
                          <label htmlFor="Phonenumber" className="form-label">เบอร์โทรศัพท์</label>
                          <input type="text" className="form-control w-100" name="Phonenumber" onChange={Change} placeholder='กรุณากรอกเบอร์โทรศัพท์' maxLength={10} onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }} required />
                        </div>
                      </div>
                      <div className="row">
                        <h4 className='mt-2'>ข้อมูลระดับชั้นปีการศึกษาและห้องเรียน</h4>
                        <div className="col">
                          <div className=" mt-3 w-100">
                            <label htmlFor="Section" className="form-label">ห้องเรียน</label>
                            <select className="form-select" aria-label="Default select example" onChange={Change} required defaultValue="0" name='section'>
                              <option value="0">กรุณาเลือกห้องเรียน</option>
                              <option value="1">ห้อง 1</option>
                              <option value="2">ห้อง 2</option>
                              <option value="3">ห้อง 3</option>
                              <option value="4">ห้อง 4</option>
                              <option value="5">ห้อง 5</option>
                              <option value="6">ห้อง 6</option>
                              <option value="7">ห้อง 7</option>
                              <option value="8">ห้อง 8</option>
                              <option value="9">ห้อง 9</option>
                              <option value="10">ห้อง 10</option>
                            </select>
                          </div>
                        </div>
                        <div className="col">
                          <div className=" mt-3 w-100">
                            <label htmlFor="Gradelevel" className="form-label">ระดับชั้นปีการศึกษา</label>
                            <select className="form-select" aria-label="Default select example" onChange={Change} required defaultValue="0" name='gradeLevel'>
                              <option value="0">กรุณาเลือกระดับชั้นปีการศึกษา</option>
                              <option value="1">ม.1</option>
                              <option value="2">ม.2</option>
                              <option value="3">ม.3</option>
                              <option value="4">ม.4</option>
                              <option value="5">ม.5</option>
                              <option value="6">ม.6</option>
                            </select>
                          </div>
                        </div>
                      </div>


                      <div className="row w-100 mt-4">
                        <div className="col d-flex justify-content-end">
                          <a className='Have-password' href="/login">มีรหัสอยู่แล้ว?</a>
                        </div>
                      </div>
                      <button className='btn-register' type="submit" disabled={loading}>
                        {loading ? 'กำลังโหลด...' : 'สมัครสมาชิก'}
                      </button>
                    </div>
                  </div>

                </div>


              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Register