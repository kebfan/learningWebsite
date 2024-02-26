import Carousel from 'react-bootstrap/Carousel';
import './carousel.scss'

function CarouselComponent() {
    return (
        <Carousel className='CarouselMain' fade='true' data-bs-theme="dark">
            <Carousel.Item className='CarouselItem'>
                <img
                    className="d-block w-100"
                    src="../img/carousel1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className='CarouselItem'>
                <img
                    className="d-block w-100"
                    src="../img/carousel2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className='CarouselItem'>
                <img
                    className="d-block w-100"
                    src="../img/carousel3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;