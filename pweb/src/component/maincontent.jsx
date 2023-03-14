import React from "react";
import "../style/maincontent.css";
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

import { faCheckSquare, faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pdf from "../img/resume.pdf";

function maincontent() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <div class="content">
      {/* About Section of Main Content */}

      <section class="resume-section" id="AboutID">
        <div className="resume-section-content">
          <h1 className="mb-1">
            Andrew
            <span class="text-primary">Heo</span>
          </h1>

          <div className="subheading mb-5">
            2420 Rossett St · Fort Lee, NJ 07024 · (201) 952-9020 ·{" "}
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

      <hr class="horizontal-line" />

      {/* Education Section of Main Content */}
      <section class="resume-section" id="EducationID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="mb-5">Education</h1>
          </span>

          <div className="education-section">
            <div className="education-info">
              <h2>Rutger's University - New Brunswick</h2>
              <h3 className="subheading">Bachelor of Science, GPA: 4.0/4.0</h3>
              <h4 className="subheading mt-4">
                Major : Bachelor of Science - Computer Science
                <br />
                Minor : Digital Communication Information and Media
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
          <div className="education-section">
            <div className="education-info">
              <h2 className="mt-4">Fort Lee High School</h2>
              <h4 className="subheading">Technical Focus</h4>
              <h4 className="subheading mt-3 ">GPA: 3.6/4.0</h4>
              <h4 className="subheading mt-3 ">AP Related Courses</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">US History</h5>
                  <h6 className="card-subtitle mb-2 text-muted">4/5</h6>
                  <p className="card-text">
                    Study the cultural, economic, political, and social
                    developments that have shaped the United States from c. 1491
                    to the present. Analyze texts, visual sources, and other
                    historical evidence and write essays expressing historical
                    arguments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">World History(Modern)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">4/5</h6>
                  <p className="card-text">
                    Study the cultural, economic, political, and social
                    developments that have shaped the world from c. 1200 CE to
                    the present. Analyze texts, visual sources, and other
                    historical evidence and write essays expressing historical
                    arguments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Computer Science A</h5>
                  <h6 className="card-subtitle mb-2 text-muted">4/5</h6>
                  <p className="card-text">
                    Get familiar with the concepts and tools of computer science
                    as you learn a subset of the Java programming language.
                    You'll do hands-on work to design, write, and test computer
                    programs that solve problems or accomplish tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">US Government And Polictics</h5>
                  <h6 className="card-subtitle mb-2 text-muted">5/5</h6>
                  <p className="card-text">
                    Study the key concepts and institutions of the political
                    system and culture of the United States. You'll read,
                    analyze, and discuss the U.S. Constitution and other
                    documents as well as complete a research or applied civics
                    project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Computer Science Principles</h5>
                  <h6 className="card-subtitle mb-2 text-muted">5/5</h6>
                  <p className="card-text">
                    Introductory college-level computing course that introduces
                    students to the breadth of the field of computer science.
                    Students learn to design and evaluate solutions and to apply
                    computer science to solve problems through the development
                    of algorithms and programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card w-100" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Calculus AB</h5>
                  <h6 className="card-subtitle mb-2 text-muted">5/5</h6>
                  <p className="card-text">
                    Explore the concepts, methods, and applications of
                    differential and integral calculus. You’ll work to
                    understand the theoretical basis and solve problems by
                    applying your knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
            <h4 className="date-rightside mt-1">September 2016 - May 2020 </h4>
          </div>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/*  Employment SECTION */}
      <section class="resume-section" id="ExperienceID">
        <div className="resume-section-content">
          <span className="reveal">
            <h1 className="mb-5">Employment</h1>
          </span>

          <div className="experience-section">
            <div className="experience-info">
              <h2>Rutgers University</h2>
              <h3 className="subheading">Learning Assistant</h3>

              <p className="lead mt-4">
                Independently lead supplemental study groups or weekly
                recitations with undergraduate students. Attend weekly meetings
                with faculty and organize discussions, workshops and group work
                for students
              </p>
            </div>
            <h4 className="dateexperience-rightside">
              September 2022 - Present
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
              September 2022 - Present
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

      <hr class="horizontal-line" />
      {/* LEADERSHIP SECTION */}
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

      <hr class="horizontal-line" />
      {/* SKILLS SECTION */}
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
              <h3 className="skill-icon">Scalability</h3>
            </li>
            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
              <h3 className="skill-icon">Microservice Architecture</h3>
            </li>
          </ul>
        </div>
      </section>

      <hr class="horizontal-line" />

      {/* Awards */}
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
              Rutger's Deans List - 2020
            </li>

            <li>
              <span class="fa-li">
                <FontAwesomeIcon icon={faAward} />
              </span>
              Rutger's Deans List - 2021
            </li>
          </ul>
        </div>
      </section>

      <hr class="horizontal-line" />
      {/* Projects SECTION */}
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
    </div>
  );
}

export default maincontent;
