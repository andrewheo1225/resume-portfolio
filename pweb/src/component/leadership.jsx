import React, { Component } from 'react'
import "../style/maincontent.css";
export default class leadership extends Component {
  render() {
    return (
        <section class="resume-section" id="LeadershipID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1>Leadership</h1>
          </span>

          <div className="leadership-section">
            <div className="leadership-info">
              <h2 className="mt-5">International Volunteer HQ</h2>
              <h3 className="subheading">Construction/Education</h3>
              <h4 className="subheading">Phillippines</h4>
              <p className="lead mt-4">
                Collaborated in constructing a new elementary school, cement
                road that connects the school to their homes, removing trash and
                litter from various habitats, and extracting potential trees
                that could harm a student’s health. Educated elementary students
                in various Mathematic curriculums and taught basic English
                grammar. Implemented a new program where volunteers would travel
                to specific habitats, remove litter and non-biodegradable trash,
                and advocated for increasing awareness of climate change and
                ecosystem preservation.
              </p>
            </div>
            <h4 className="leadership-rightside">May 2019 - August 2019</h4>
          </div>
        </div>
      </section>
    )
  }
}
