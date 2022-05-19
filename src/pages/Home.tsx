import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Home = () => {
    return (
        <Wrapper className='p-0 m-0'>
            <div className='main-wrapper'>
                <Row className='w-100 mx-auto'>
                    <Col xs={12} >
                        <Carousel interval={2500} slide={true} controls={false} indicators={false} nextIcon='' prevIcon='' nextLabel='' prevLabel=''>
                            <Carousel.Item>
                                <img
                                    className="d-block image-1-zoom mx-auto"
                                    src="/images/first-image.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block image-2-zoom mx-auto"
                                    src="/images/second-image.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block image-3-zoom mx-auto"
                                    src="/images/third-image.png"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col xs={12} style={{ marginTop: '120px' }}>
                        <Row className='justify-content-center '>
                            <Col xs={12} className='text-center'>
                                <ShopButton href="https://www.facebook.com/jinish.store/shop" className='m-3'>SHOP NOW</ShopButton>
                            </Col>
                            <Col xs={12} className='text-center'>
                                <ShopButton href="https://www.messenger.com/t/107520848442880/?messaging_source=source%3Apages%3Amessage_shortlink" className='mb-5'>MAKE A WISH</ShopButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled(Container)`
.main-wrapper {
    height:100vh;
    width:100%;
    overflow:hidden;
    overflow-y: auto;
    position:relative;
    background: linear-gradient(-74deg,#37c8db, #1ed8cf,#32cfe4 , #49c793 , #54df99 , #8bd5e7, #61bea7, #6fc5a4,#24c7bf);
    background-size:400% 400%;
    position:relative;
    animation: color-change 4s ease-in-out infinite;
    transition:.5s;
    z-index:10;
    
    &:before {
        content:'';
        position:absolute;
        height:100%;
        width:100%;
        top:-60px;
        background:url('/images/background.png');
        background-position:center;
        background-size: 98% 700px;
        background-repeat:no-repeat;
        z-index:-1;
    }
}
    @keyframes color-change {
        0% {
            background-position:0 20%;
        }
        20% {
            background-position:0 50%;
        }
        40% {
            background-position:0 70%;
        }
        60% {
            background-position:0 90%;
        }
        80% {
            background-position:0 100%;
        }
        100% {
            background-position:100% 0;
        }
    }
    .carousel-inner{
        overflow:visible!important;
    }
.carousel-item {
    margin-top:160px;
    img {
        max-width:240px;
        max-height:280px;
    }
}
.image-1-zoom {
    animation: zoom-in-zoom-out 3.5s ease ;
}
.image-2-zoom {
    animation: zoom-in-zoom-out 3.5s ease ;
}
.image-3-zoom {
    animation: zoom-in-zoom-out 3.5s ease;
}
@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(1.6, 1.6);
    
  }
}
`;

const ShopButton = styled.a`
    z-index:99999;
    display: inline-block;
    text-decoration: none;
    outline:none;
    border:2px solid #ffffff7a;
    padding:8px 29px;
    border-radius:8px;
    background:linear-gradient(to right,#61CDA8,#91E3BC);
    color:#fff!important;
    white-space:nowrap;
    transition:.1s;
    font-weight:600;
    letter-spacing:2px;
    &:active {
        box-shadow: 0 5px #666;
        color:#2b2b2b!important;
        transform: translateY(8px);
    }
   
   
`;
// const ContactButton = styled.button`
//     outline:none;
//     border:none;
//     padding:8px 29px;
//     border-radius:23px;
//     background-color:#014a8f;
//     color:#fff;
//     white-space:nowrap;
//     transition:.2s;
//     &:hover {
//         box-shadow:1px 1px 8px #c5dbff;
//     }
// `;

export default Home;