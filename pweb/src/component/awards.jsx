import React, { Component } from "react";
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
export default class awards extends Component {
  render() {
    return (
      <section class="resume-section">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="award-title">Awards</h1>
          </span>

          <ul class="fa-ul mb-0">
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              2019 AP Scholar with Honors
            </li>

            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              2020 AP Scholar with Distinction
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Received the SAS Excellence Award, School of Arts & Sciences
              Scholarship Fund
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - Fall 2020 - Spring 2021
            </li>

            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - Fall 2021 - Spring 2022
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - Fall 2022 - Spring 2023
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - Fall 2023 - Spring 2024
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              <a
                href="https://www.https://www.rutgers.edu/news/fulbright-student-dedicated-improving-public-health-among-top-grads-honored-during-matthew.com/watch?v=qn5yOgjV_hw"
                without
                rel="noopener noreferrer"
                target="_blank"
              >
                Matthew Leydt Society
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
