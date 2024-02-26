import './Register.scss'

const Register=()=>{
    return(
<>
      <div className="main-container bg-primary">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="main-card container d-flex justify-content-center align-items-center bg-light">
          <form action="" method="post" style={{width:'60%'}}>
            <div className='d-flex justify-content-center'>
              <h2 style={{fontWeight:'600'}}>สมัครสมาชิก</h2>
            </div>
            <div className='d-flex justify-content-center mb-4'>
              <h2 style={{fontWeight:'700'}}>E-Learning</h2>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center" style={{width:'100%'}}>
              
              <div className="row">
                <div className="col">
                <div className=" my-3 w-100">
                  <label htmlFor="username" className="form-label">Username or Email</label>
                  <input type="text" className="form-control w-100" name="username"/>
                </div>
                <div className=" mt-3 w-100">  
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control w-100" name="password" />
                </div>
                </div>
                <div className="col">
                <div className=" my-3 w-100">
                  <label htmlFor="username" className="form-label">Username or Email</label>
                  <input type="text" className="form-control w-100" name="username"/>
                </div>
                <div className=" mt-3 w-100">  
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control w-100" name="password" />
                </div>
                </div>
                <div className="col">
                <div className=" my-3 w-100">
                  <label htmlFor="username" className="form-label">Username or Email</label>
                  <input type="text" className="form-control w-100" name="username"/>
                </div>
                <div className=" mt-3 w-100">  
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control w-100" name="password" />
                </div>
                </div>
              </div>
               
                <div className="row w-100 mt-2">
                  <div className="col d-flex justify-content-start">
                    <a className='Not-register' href="">ยังไม่ได้สมัครสมาชิก?</a>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <a className='Forgot-password' href="">ลืมรหัสผ่าน?</a>
                  </div>
                </div>
                
                

                <button className='btn-login' type="submit">เข้าสู่ระบบ</button>

                
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}
export default Register