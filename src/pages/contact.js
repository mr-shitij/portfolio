import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {ImLocation} from 'react-icons/im'
import {IoIosCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import Constants from '../constants'

function Contact() {
  return (
    <Container id='ContanctUS' className='pt-2'>
      <Row>
        <Col>
          <div class="contact-content section-content">

            <h2 class="h3 section-title">
              Have You Any Project? Please Drop a Message
            </h2>

            <p class="section-text">
              Get in touch and let me know how i can help. Fill out the form and
              i’ll be in touch as soon as possible.
            </p>

            <ul class="contact-list">
              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <ImLocation/>
                </div>

                <div class="wrapper">
                  <h3 class="h4 contact-item-title">Address:</h3>

                  <address class="contact-info">{Constants.contactData.address}</address>
                </div>
              </li>

              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <IoIosCall/>
                </div>

                <div class="wrapper">
                  <h3 class="h4 contact-item-title">Phone:</h3>
                  {Constants.contactData.phones.map((phone,i) => (
                    <a key={i} href={`tel:${phone}`} class="contact-info">{phone}</a>
                  ))}
                </div>
              </li>

              <li class="contact-list-item">
                <div class="contact-item-icon">
                  <MdEmail/>
                </div>

                <div class="wrapper">
                  <h3 class="h4 contact-item-title">Email:</h3>
                  {Constants.contactData.emails.map((email,i) => (
                    <a href={`mailto:${email}`} class="contact-info">{email}</a>
                  ))}   
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col className='mb-3'>
          <form action="" class="contact-form">
            <div class="form-wrapper">
              <label for="name" class="form-label">
                Name
              </label>

              <div class="input-wrapper">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="e.g John Doe"
                  class="input-field"
                />

                <ion-icon name="person-circle"></ion-icon>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="email" class="form-label">
                Email
              </label>

              <div class="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="e.g johndoe@mail.com"
                  class="input-field"
                />

                <ion-icon name="mail"></ion-icon>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="phone" class="form-label">
                Phone
              </label>

              <div class="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone Number"
                  class="input-field"
                />

                <ion-icon name="call"></ion-icon>
              </div>
            </div>

            <div class="form-wrapper">
              <label for="message" class="form-label">
                Message
              </label>

              <div class="input-wrapper">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write message..."
                  class="input-field"
                ></textarea>

                <ion-icon name="chatbubbles"></ion-icon>
              </div>
            </div>

            <div className='center'>
              <button type="submit" class="button button-secondary">
                Send
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
