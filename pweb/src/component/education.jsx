import React, { Component } from "react";
import "../style/maincontent.css";
export default class education extends Component {
  render() {
    return (
      <section class="resume-section" id="EducationID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="mb-5">Education</h1>
          </span>

          <div className="education-section">
            <div className="education-info">
              <h2>Rutger's University - New Brunswick</h2>
              <h3 className="subheading">Bachelor of Science, GPA: 4.0/4.0, Summa Cum Laude</h3>
              <h4 className="subheading mt-4">
                Major : Bachelor of Science - Computer Science
                <br />
                Minor : Digital Communication Information and Media
                <br />
                Rutgers Data Science Certificate
              </h4>
              <h3 className="subheading mt-4">Related Courses: </h3>
              <div className="row">
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Introduction to Computer Science
                      </h5>
                      <p className="card-text">
                        Intensive introduction to computer science. Problem
                        solving through decomposition. Writing, debugging, and
                        analyzing programs in Java. Algorithms for sorting and
                        searching.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Data Structures</h5>
                      <p className="card-text">
                        Investigate the essential properties of data structures
                        and algorithms for operating on them; to use these
                        structures as tools to assist algorithm design; to
                        extend exposure to searching, sorting and hashing
                        techniques.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Computer Architecture</h5>
                      <p className="card-text">
                        Covers the fundamental issues in the design of modern
                        computer systems, including the design and
                        implementation of key hardware components such as the
                        processor, memory, and I/O devices, and the
                        software/hardware interface.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Principles of Information and Data Management
                      </h5>
                      <p className="card-text">
                        Querying various forms of information such as structured
                        data in relational databases, unstructured text (IR),
                        semi-structured data (XML, web). Implement conceptual
                        modeling, schema design, basics of database management
                        system services (transactions, reliability, security,
                        optimization). Advanced topics include: finding patterns
                        in data, information mapping and integration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Data 101</h5>
                      <p className="card-text">
                        Learn R, a statistical software environment and
                        programming language that is used to analyze and
                        visualize datasets. Required to solve complex "data
                        puzzles" on a weekly basis and understand the usage of
                        "big data".
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Systems Programming</h5>
                      <p className="card-text">
                        Focuses on how to think about, build, debug, and test
                        large computer programs. Learn how to use tools such as
                        debuggers, profilers, source version control systems,
                        and integrated development environments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Design/Analyze Algorithms</h5>
                      <p className="card-text">
                        Methods for comparing complexity of algorithms: worst
                        and average cases, lower bounds on algorithm classes,
                        and verification of correctness. Application of such
                        analysis to variety of specific algorithms: searching,
                        merging, sorting; graph problems; language problems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Data Management For Data Science
                      </h5>
                      <p className="card-text">
                        Designed to provide students with the knowledge and
                        skills needed to acquire and curate real word data, to
                        explore the data to discover patterns and distributions,
                        and to manage large datasets with databases. Uses Python
                        and Python libraries to analyze data sets. Gain
                        experience using relational databases like SQL and NoSQL
                        databases.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Introduction to Data Science
                      </h5>
                      <p className="card-text">
                        Expands on topics needed to solve problems involving
                        data, which includes preparation (collection and
                        integration), characterization and presentation
                        (information visualization), analysis (machine learning
                        and data mining), and products (applications).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card w-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Principles Programming</h5>
                      <p className="card-text">
                        The course is aimed at making the student familiar with
                        the general concepts common to all programming languages
                        so as to facilitate learning new languages. Language
                        paradigms (i.e., logic, functional, procedural,
                        object-oriented) are compared and implementation
                        strategies are discussed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="date-rightside-special">
              September 2020 - May 2024
            </h4>
          </div>
          {/* High school Education */}
        </div>
      </section>
    );
  }
}
