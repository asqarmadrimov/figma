import React from 'react';
import './Headers.css'
import siteLogo from '../../Utils/Image/siteLogo.svg';
import Gamburger from '../../Utils/Image/gamburger.svg';

const Headers = () => {
  return (
    <header className='header p-3'>
      <div className="container">
        <div className="header__inner d-flex align-items-center justify-content-between">
          <a href="/public/index.html">
            <img src={siteLogo} alt="" width={106} height={54} />
          </a>

          <nav className='header__nav nav'>
            <ul className='nav__list list-unstyled p-0 m-0 d-flex gap-4'>
              <li className='nav__item '>
                <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#hero">
                  Home
                </a>
              </li>

              <li className='nav__item '>
                <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#skills">
                  Skills
                </a>
              </li>

              <li className='nav__item'>
                <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#aboute">
                  About Us
                </a>
              </li>

              <li className='nav__item '>
                <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#pricing">
                  Pricing
                </a>
              </li>

              <li className='nav__item'>
                <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#contact">
                  Contacts
                </a>
              </li>

            </ul>
          </nav>

          <a className='header__btn btn btn-outline-dark px-4 py-2' href="#/">
            Let’s Talk
          </a>

          <button className="header__gamburger d-none btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img src={Gamburger} alt="gamburger" width={30} height={17} />
          </button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-center">
              <ul className='nav__list list-unstyled p-0 m-0 text-center'>
                <li className='nav__item '>
                  <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#/">
                    Home
                  </a>
                </li>

                <li className='nav__item '>
                  <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#/">
                    Skills
                  </a>
                </li>

                <li className='nav__item '>
                  <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#/">
                    About Us
                  </a>
                </li>

                <li className='nav__item '>
                  <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#/">
                    Pricing
                  </a>
                </li>

                <li className='nav__item '>
                  <a className='nav__link text-decoration-none text-black-50 fw-semibold fs-5' href="#/">
                    Contacts
                  </a>
                </li>

              </ul>

              <a className='btn btn-outline-dark my-3 px-4 py-2' href="#/">
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Headers