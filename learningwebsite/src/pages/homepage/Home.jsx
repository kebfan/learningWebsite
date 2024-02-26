import NavbarComponent from "../../components/Navbarcomponent/navbar"
import CarouselComponent from "../../components/Carouselcomponent/carousel"
import Footer from "../../components/Footercomponent/footer"
import './Home.scss'

const Home = () => {
  return (
    <>
    
      <div className="main-container">
      <NavbarComponent />
        <CarouselComponent />
        <div className="container d-flex justify-content-center align-items-center w-100" >
          <div className="row w-100" style={{marginBottom:'10em',marginTop:'6em'}}>
            <div className="col-xl-4 d-flex flex-column align-items-center">
              <div className="mb-5 position-relative">
                <img className="rounded-3" src="../img/carousel1.jpg" alt="" />
              </div>
              <button className=" mt-auto">CLICK</button>
            </div>
            <div className="col-xl-4 d-flex flex-column align-items-center">
              <div className="mb-5 position-relative">
                <img className="rounded-3" src="../img/carousel1.jpg" alt="" />
              </div>
              <button className=" mt-auto">CLICK</button>
            </div>
            <div className="col-xl-4 d-flex flex-column align-items-center">
              <div className="mb-5 position-relative">
                <img className="rounded-3" src="../img/carousel1.jpg" alt="" />
              </div>
              <button className=" mt-auto">CLICK</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
