import React from 'react';
import './Pricing.css';
import coures from '../../Utils/Image/PricingCourse.svg';
import classes from '../../Utils/Image/PricingClasses.svg';
import tuition from '../../Utils/Image/PricingTir.svg';

const Pricing = () => {
  return (
    <section className='Pricing' id='pricing'>
      <div className="container">
        <h2 className='pricing fs-1 text-center'>Pricing</h2>
        <div className="pricing__inner">
          <ul className='pricing__list d-flex justify-content-center gap-5 flex-wrap m-0 p-0'>
            <li className='pricing__item list-unstyled'>
              <img src={coures} alt="coures" width={311} height={311} />

              <h3 className='pricing__subtitle my-3 h3'>
                Self-study online course
              </h3>

              <p className='pricing__text text-black-50 fs-6'>
                Start learning English online
                in live classes with qualified
                EC teachers and students
                from all over the world.
              </p>

              <button className='pricing__btn btn btn-secondary py-2 fs-4 px-3'>
                £5.99 <span className='ms-2 fs-6'> per month</span>
              </button>
            </li>

            <li className='pricing__item list-unstyled'>
              <img src={classes} alt="coures" width={311} height={311} />

              <h3 className='pricing__subtitle my-3 h3'>
                Live online classes
              </h3>

              <p className='pricing__text text-black-50 fs-6'>
                Start learning English online in live classes
                with qualified EC teachers and students
                from all over the world.
              </p>

              <button className='pricing__btn btn btn-secondary py-2 fs-4 px-3'>
                £12.99 <span className='ms-2 fs-6'> per month</span>
              </button>
            </li>

            <li className='pricing__item list-unstyled'>
              <img src={tuition} alt="coures" width={311} height={311} />

              <h3 className='pricing__subtitle my-3 h3'>
                Personal Tuition
              </h3>

              <p className='pricing__text text-black-50 fs-6'>
                Start learning English online in live classes
                with qualified EC teachers and students
                from all over the world.
              </p>

              <button className='pricing__btn btn btn-secondary py-2 fs-4 px-3'>
                £20.99 <span className='ms-2 fs-6'> per month</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing