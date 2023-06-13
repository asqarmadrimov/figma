import React from 'react';
import './Footer.css';
import siteLogo from '../../Utils/Image/siteLogo.svg';

const Footer = () => {
  return (
    <footer className='footer pb-3'>
      <div className="container">
        <hr className='my-4' />
        <div className="footer__inner d-flex align-items-center justify-content-between">
          <a href="/public/index.html">
            <img className='footer__logo' src={siteLogo} alt="" width={106} height={54} />
          </a>

          <p className='footer__text text-black-50 fs-6 p-0 m-0'>
            Terms and Conditions • Privacy Policy • Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer