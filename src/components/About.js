import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/img1.jpg'

const About = () => {
    
    const html = 80;
    const javascript = 76
    const react = 83
   const responsive = 85;
 

  return (
    <section id="about" className="block about-block">
    <Container fluid>
      <div className="title-holder">
        <h2>About Us</h2>
        <div className="subtitle">learn more about us</div>
      </div>
      <Row>
        <Col sm={6}>
          <Image src={img1} />
        </Col>
        <Col sm={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
         
          <div className='progress-block'>
            <h4>HTML / CSS / Bootstrap</h4>
            <ProgressBar now={html} label={`${html}%`} />
          </div>
          <div className='progress-block'>
            <h4>responsive / Tailwind CSS</h4>
            <ProgressBar now={responsive} label={`${responsive}%`} />
          </div>
          <div className='progress-block'>
            <h4>javascript/ES6</h4>
            <ProgressBar now={javascript} label={`${javascript}%`} />
          </div>
          <div className='progress-block'>
            <h4>React 18</h4>
            <ProgressBar now={react} label={`${react}%`} />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About