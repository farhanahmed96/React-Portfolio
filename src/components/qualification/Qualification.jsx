import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Pakistan - Institude
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Pakistan - Institude
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Art Expert</h3>
                <span className="qualification__subtitle">
                  Pakistan - Institude
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Grapic Designing</h3>
                <span className="qualification__subtitle">
                  Pakistan - Institude
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2018 -2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Wordpress Developer</h3>
                <span className="qualification__subtitle">Webexpert</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">WebDesigner</h3>
                <span className="qualification__subtitle">
                ZM Global
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>


            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WebDesigner</h3>
                <span className="qualification__subtitle">ZM Global</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounded"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
