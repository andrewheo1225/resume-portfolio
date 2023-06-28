import React, { Component } from 'react'
import "../style/maincontent.css";
export default class employment extends Component {
  render() {
    return (
        <section class="resume-section" id="ExperienceID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="mb-5">Employment</h1>
          </span>

          <div className="experience-section">
            <div className="experience-info">
              <h2>Branch Brook Park Alliance</h2>
              <h3 className="subheading">Information Technology Associate</h3>
              <p className="lead mt-4">
                Leverage Google Analytics to analyze our nonprofit's
                organization and social media platforms. Extracting valuable
                insights from user behavior and engagement metrics, I optimized
                their online presence through strategic enhancements in website
                design, refined content strategies, and targeted marketing
                campaigns.Lead a pollinator conservation project and created a
                specialized web page for it.
              </p>
            </div>
            <h4 className="dateexperience-rightside">Summer 2023</h4>
          </div>

          <div className="experience-section">
            <div className="experience-info">
              <h2>Rutgers University</h2>
              <h3 className="subheading">Learning Assistant</h3>
              <h4 className="subheading">
                Introduction to CS, Physics 1, Physics 1 Lab, Physics 2, Physics
                2 Lab
              </h4>

              <p className="lead mt-4">
                Support students in their educational journey through
                recitations, labs, facilitating learning activities, and
                promoting academic success. I tailor instruction to individual
                needs, contribute to curriculum development, and assess program
                effectiveness.
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              September 2022 - Spring 2024
            </h4>
          </div>

          <div className="experience-section">
            {" "}
            {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
            <div className="experience-info">
              <h2>HackRU</h2>
              <h4 className="subheading">Front-End Developer</h4>
              <p className="lead mt-4">
                Develop a website for HackRU that incorporates a login page,
                admin functionalities and a dashboard. Collaborated with other
                HackRU team members for future projects, continuous integration
                and production
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              September 2022 - Spring 2023
            </h4>
          </div>

          <div className="experience-section">
            {" "}
            {/*  add "className = "education-section" " if you need to add more education for css margin problems */}
            <div className="experience-info">
              <h2>VIP Cleaners</h2>
              <h4 className="subheading">Part-Time Manager</h4>
              <p className="lead mt-4">
                Created schedules according to each staff’s availabilities and
                was responsible for managing any shift changes. Responsible for
                recording all inventory expenditures and facilitating a positive
                environment for the employees.
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              January 2017 - June 2019
            </h4>
          </div>
        </div>
      </section>
    )
  }
}
