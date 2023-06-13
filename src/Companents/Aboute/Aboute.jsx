import React from 'react';
import './Aboute.css';
import image from '../../Utils/Image/AbouteMan.svg'

const Aboute = () => {
  return (
    <section className='aboute' id='aboute'>
      <div className="container">
        <h2 className='aboute__title fs-1'>Aboute Us</h2>
        <div className="aboute__inner d-flex align-items-center justify-content-between">
          <div className="aboute__text-conent">

            <p className='aboute__text fs-5 my-3 mb-5 text-black-50'>
              The model offers a framework for discussing problems related
              to the user's experience, as well as possible ways and means
              of solving them. Application development begins at the top level
              (strategy), where the future software product is described quite
              abstractly from the point of view of the expectations of both users
              and the customer.
            </p>

            <ul className='aboute__list list-unstyled m-0 p-0 d-flex align-items-center gap-5'>
              <li className='aboute__item text-center'>
                <strong className='fs-3'>800</strong>
                <p className='aboute__item-text fs-5 text-black-50'>Pupils</p>
              </li>

              <li className='aboute__item text-center'>
                <strong className='fs-3'>18</strong>
                <p className='aboute__item-text fs-5 text-black-50'>Teachers</p>
              </li>

              <li className='aboute__item text-center'>
                <strong className='fs-3'>6</strong>
                <p className='aboute__item-text fs-5 text-black-50'>Foreign languages</p>
              </li>
            </ul>
          </div>

          <img className='aboute__img' src={image} alt="person" width={500} height={500} />
        </div>
      </div>
    </section>
  )
}

export default Aboute