import React, { Component } from 'react'
import Pdf from "../img/resume.pdf";
import "../style/maincontent.css"; 
export default class about extends Component {
  render() {
    return (
        <section class="resume-section" id="AboutID">
        <div className="resume-section-content">
          <h1 className="mb-1">
            Andrew
            <span class="text-primary">Heo</span>
          </h1>

          <div className="subheading mb-5">
            Fort Lee, NJ · (201) 952-9020 ·{" "}
            <a href="mailto:name@email.com">andrewheo1225@gmail.com</a>
            {" · "}
            <a href={Pdf} without rel="noopener noreferrer" target="_blank">
              Resume PDF
            </a>
          </div>
          <p className="lead mb-5">
            I excel in utilizing modern frameworks in web development that
            focuses on the front-end and back-end. Eager to learn various
            databases and technologies to further expand my current skillset. I
            am an undergraduate student majoring in Computer Science at Rutgers
            University, New Brunswick.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/andrew-heo-56b0a81b6/"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://github.com/andrewheo1225"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/andrewheo1225"
              >
                <i class="fa fa-github"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://www.instagram.com/02_hya/"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/02_hya/"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </a>
            <a
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100071982594286"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100071982594286"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </a>
          </div>
        </div>
      </section>
    )
  }
}
