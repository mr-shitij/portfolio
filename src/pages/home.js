import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../App.css'
import Constants from '../constants'
function home({tab,setTab}) {
  return (
    <>
      <div class="hero" id="home">
        <figure class="hero-banner">
          <picture>
            <source
              srcset="./assets/images/homePage-PhotoRoom.png"
              media="(min-width: 300px)"
            />
            <source
              srcset="./assets/images/homePage-PhotoRoom.png"
              media="(min-width: 300px)"
            />
            <img
              src="./assets/images/homePage-PhotoRoom.png"
              alt="A man in a blue shirt with a happy expression"
              class="w-100"
            />
          </picture>
        </figure>

        <div class="hero-content">
          <h2 class="h2 hero-title">We Design & Build Creative Products</h2>

          <div onClick={()=>{
              setTab(Constants.CONTACT)
          }} class="button button-primary">
            Get in touch
          </div>
        </div>
      </div>
      <Container className='mb-5'>
          <h4 className=' h2 hero-title center'>Where to Find Me</h4>
          <div className='center'>
          <Row style={{
             width:'300px'
          }} className='mt-3 socialMedia'>
          <Col>
             <a href={Constants.facebookLink} >
              <FaFacebook  size={25}/>
            </a>
          </Col>
          <Col >
             <a href={Constants.twitterLink} >
              <FaTwitter color='skyblue'  size={25}/>
            </a>
          </Col>
          <Col >
             <a href={Constants.instagramLink} >
              <FaInstagram color='purple'  size={25}/>
            </a>
          </Col>
          <Col >
             <a href={Constants.linkedinLink} >
              <FaLinkedin size={25}/>
            </a>
          </Col>
          <Col>
             <a href={Constants.githubLink} >
              <FaGithub color='black' size={25}/>
            </a>
          </Col>

        </Row>
          </div>
          
      </Container>    
    </>
  )
}

export default home
