import React from "react";
import "../style/sidebar.css";
import andrew from "../img/img-1.jpg";
import { Nav, Navbar } from "react-bootstrap";


function sidebar() {
  function scrollAbout(){
    const element = document.getElementById("AboutID");
    element.scrollIntoView();
  }
  function scrollEducation(){
    const element = document.getElementById("EducationID");
    element.scrollIntoView();
  }
  function scrollExperience(){
    const element = document.getElementById("ExperienceID");
    element.scrollIntoView();
  }
  function scrollLeadership(){
    const element = document.getElementById("LeadershipID");
    element.scrollIntoView();
  } 
  function scrollSkillsAwards(){
    const element = document.getElementById("SkillsAwardsID");
    element.scrollIntoView();
  }
  function scrollProjects(){
    const element = document.getElementById("ProjectsID");
    element.scrollIntoView();
  }
  return (
    <>
      {/*is enabled for bigger screen untill hamburger menu media query is triggered */}
      <div class="sidebar">
        <img
          src={andrew}
          className="img-fluid img-profile rounded-circle mb-4 ms-4"
          alt="error"
        />
        <a onClick={scrollAbout}>About</a>
        <a onClick={scrollEducation}>Education</a>
        <a onClick={scrollExperience}>Experience</a>
        <a onClick={scrollLeadership}>Leadership</a>
        <a onClick={scrollSkillsAwards}>Skills & Awards</a>
        <a onClick={scrollProjects}>Projects</a>
       
      </div>

       {/*disappears when screen is small and enable hamburger menu*/}
      <div class="menutoggle">
        <Navbar collapseOnSelect expand="lg" className = "navbar-color" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" onClick={scrollAbout}>About</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" onClick={scrollEducation}>Education</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" onClick={scrollExperience}>Experience</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" onClick={scrollLeadership}>Leadership</Nav.Link>
              <Nav.Link className = "text-dark ps-2 square border-bottom border-dark" onClick={scrollSkillsAwards}>Skills & Awards</Nav.Link>
              <Nav.Link className = "text-dark ps-2"onClick={scrollProjects}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default sidebar;
