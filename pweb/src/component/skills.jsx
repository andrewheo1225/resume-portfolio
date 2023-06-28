import React, { Component } from 'react'
import { faCheckSquare, faAward } from "@fortawesome/free-solid-svg-icons";
import "../style/maincontent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faHtml5,
    faCss3,
    faNpm,
    faBootstrap,
    faDiscord,
    faGit,
    faGoogleDrive,
    faJs,
    faJava,
  } from "@fortawesome/free-brands-svg-icons";

export default class skills extends Component {
  render() {
    return (
      <section class="resume-section" id="SkillsAwardsID">
      <div class="resume-section-content">
        <span className="reveal">
          <h1 class="mb-5">Skills</h1>
        </span>

        <h2 class="subheading mb-3">Programming Languages & Tools</h2>
        <div className="social-icons">
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faHtml5} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faCss3} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faReact} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faBootstrap} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faNpm} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faGit} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faGoogleDrive} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faJava} />
            </a>
          </a>
          <a className="social-icon">
            <a>
              <FontAwesomeIcon icon={faJs} />
            </a>
          </a>
        </div>

        <h2 class="subheading mt-3">Focus</h2>
        <ul class="fa-ul mb-0">
          <li>
            <span class="fa-li">
              <FontAwesomeIcon icon={faCheckSquare} />
            </span>
            <h3 className="skill-icon">Functional Components</h3>
          </li>
          <li>
            <span class="fa-li">
              <FontAwesomeIcon icon={faCheckSquare} />
            </span>
            <h3 className="skill-icon">
              Responsitivity, emphasis on Mobile Visibility
            </h3>
          </li>
          <li>
            <span class="fa-li">
              <FontAwesomeIcon icon={faCheckSquare} />
            </span>
            <h3 className="skill-icon">Databases</h3>
          </li>
          <li>
            <span class="fa-li">
              <FontAwesomeIcon icon={faCheckSquare} />
            </span>
            <h3 className="skill-icon">Website Design and Development</h3>
          </li>
        </ul>
      </div>
    </section>
    )
  }
}
