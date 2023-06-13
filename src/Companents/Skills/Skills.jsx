import React from 'react';
import './Skills.css';
import speaking from '../../Utils/Image/SkillsSpeaking.svg';
import writing from '../../Utils/Image/SkillsWriting.svg';
import reading from '../../Utils/Image/SkillsReading.svg';
import listening from '../../Utils/Image/SkilllsListing.svg';

const Skills = () => {
  return (
    <section className='skills py-3'>
      <div className="container">
        <div className="skills__inner d-flex justify-content-center gap-5" id='skills'>
          <div className="skills__speaking">
            <div className="skills__card card" style={{ width: '20rem' }}>
              <img className='card__speaking-img card-img-top' src={speaking} alt="speakers" width={320} height={390} />

              <div className="card-body">
                <h2 className='card__title card-title h2'>Speaking</h2>

                <p className='card__text card-text text-black-50'>
                  Improve your English skills and confidence.
                  Live classes and interactive lessons online.
                  20% extra free for a limited time only <br /> <br />

                  Learn English online and improve your
                  skills through our high-quality courses
                  and resources – all designed for adult language learners.
                </p>

                <a href="#/" class="btn btn-dark">Learn more</a>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="skills__cards d-flex gap-5">
              <div className="skills__writing card" style={{ width: "20rem" }}>
                <img className='writeng__img' src={writing} alt="writing" width={293} height={253} />
                <div className="card-body">
                  <h5 className="card-title">Writing</h5>
                  <p className="card-text text-black-50">
                    One of the most important and extensive
                    areas of natural science, the science that
                    studies substances, also their composition
                  </p>
                  <a href="#/" className="btn btn-dark">Learn more</a>
                </div>
              </div>

              <div className="skills__reading card" style={{ width: "20rem" }}>
                <img className='reading__img' src={reading} alt="reading" width={293} height={253} />
                <div className="card-body">
                  <h5 className="card-title">Reading</h5>
                  <p className="card-text text-black-50">
                    perception and response actions of the user
                    resulting from the use and/or upcoming use
                    of the product, system or service
                  </p>
                  <a href="#/" className="btn btn-dark">Learn more</a>
                </div>
              </div>
            </div>

            <div className="skills__listening border rounded mt-3 px-2 d-flex justify-content-between align-items-center">
              <div className="listining-text__content ms-1" style={{width:'20rem'}}>
                <h5 className='listening__title'> Listening </h5>

                <p className='listining__text card-text text-black-50'>
                  Here you can find activities to practise
                  your listening skills. Listening will help you
                  to improve your understanding
                </p>

                <a href="#/" className="btn btn-dark">Learn more</a>
              </div>

              <img className='listining__img' src={listening} alt="listening" width={325} height={255} />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills