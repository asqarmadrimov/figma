import React from 'react';
import './Contact.css';
import contact from '../../Utils/Image/ContactMan.svg';

const Contact = () => {
  return (
    <section className='contact p-3 pt-5' id='contact'>
      <div className="container">
        <div className="contact__inner d-flex justify-content-between align-items-center">
          <img className='contact__image' src={contact} alt="contact" width={477} height={429} />

          <div className="contact__content">
            <h2 className='contact__title fs-2'>
              Contact Us
            </h2>

            <p className='contact__text text-black-50 my-5 '>
              Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources
            </p>

            <div className="contact__from d-flex align-items-center">
              <input className= 'contact__inp rounded py-3 px-5' placeholder='Enter Your E-mail' type="email" />
              <button className='contact__btn py-3 px-4 btn btn-dark' type='submit'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact