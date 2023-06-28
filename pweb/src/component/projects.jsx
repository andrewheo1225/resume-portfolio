import React, { Component } from 'react'
import "../style/maincontent.css";
export default class projects extends Component {
  render() {
    return (
        <section class="resume-section" id="ProjectsID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="mb-5">Projects</h1>
          </span>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/HackRU_frontend"
              >
                <h2>HackRU Website</h2>
              </a>
              <h3 className="subheading">Co Web Developer</h3>
              <p className="lead mt-4">
                Worked as a member of HackRU's front-end RnD group to create the
                Spring 2023 HackRU website with the theme as: Pajamas! Used
                React as the front-end framework, and Tailwind as the CSS
                framework. Incorporated Javascript and various public libraries.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/dcwebsite"
              >
                <h2>Dry Cleaning Website</h2>
              </a>
              <h3 className="subheading">Solo Web Developer</h3>
              <p className="lead mt-4">
                Using React as the front-end framework, I created a website that
                is meant to showcase a local dry cleaning business's time
                schedule, services, and owner.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <div className="two-links">
                <a
                  className="tag1"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/andrewheo1225/DCView"
                >
                  <h2>Dry Cleaning Program Front-End</h2>
                </a>
                <h2>&nbsp;/&nbsp;</h2>
                <a
                  className="tag2"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/andrewheo1225/DCOrders"
                >
                  <h2>Back-End</h2>
                </a>
              </div>

              <h3 className="subheading">Solo Web Developer</h3>
              <p className="lead mt-4">
                Using React as the front-end framework, Spring Boot as the
                back-end, and MySQL as the database, this program is meant to be
                an every day utility program for dry cleaning businesses. The
                main user is allowed to create accounts for customers and open a
                clothing registration tab. Each tab contain a list of clothing
                types and dry cleaning service with a pick up date.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/eAuction"
              >
                <h2>eAuction</h2>
              </a>
              <h3 className="subheading">Co Web Developer</h3>
              <p className="lead mt-4">
                Uses JSP/Eclipse as the front-end framework, and MySQL as the
                database. Bootstrap is the main CSS framework used in this
                program. Developed by 3 undergraduate programmers in a Rutger's
                accreddited course, eAuction is a completely online auction
                website for clothes. Introduced with a login page, users are
                allowed to log into, create, update and delete their account.
                Users can look through the entire auction or use filters to
                search for more specific items. Similarly, bids can be made for
                available auctions and users can create their auction if they so
                wished. Each account contains their own list of auctions and
                bids.
              </p>
            </div>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/andrewheo1225/resume-portfolio"
              >
                <h2>Portfolio</h2>
              </a>
              <h3 className="subheading">Solo Web Developer</h3>
              <p className="lead mt-4">
                A single page website designed as a portfolio. React is used as
                the front-end framework with multiple library packages. The
                portfolio contains a sidebar with links to various sections of
                the website and a main section where the information is located.
                Fun fact: what you are looking at right now is the portfolio
                website!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
