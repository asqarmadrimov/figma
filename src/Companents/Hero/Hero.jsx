import React from 'react';
import './Hero.css';
import women from '../../Utils/Image/heroWomen.svg';

const Hero = () => {
  return (
    <section className='hero p-0 m-0' id='hero'>
      <div className="container">
        <div className="hero__inner d-flex align-items-center justify-content-between">
          <div className="hero__text-content">
            <h1 className='hero__title'>
              Learn
              Any Foreign
              Language
            </h1>

            <p className='hero__text text-black-50 my-4 fs-4'>
              With our teachers who write a program for
              each student, you will be able to make your
              first sketch after the first lesson.
            </p>

            <a className='hero__btn btn btn-dark py-3 px-5' href="#/">
              Get started
            </a>
          </div>

          <img className='hero__image' src={women} alt="women" width={661} height={661} />
        </div>
      </div>
    </section>
  )
}

export default Hero