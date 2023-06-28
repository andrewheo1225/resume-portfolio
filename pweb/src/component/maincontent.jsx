import React from "react";
import "../style/maincontent.css";

import About from "./about";
import Education from "./education";
import Employment from "./employment";
import Leadership from "./leadership";
import Skills from "./skills";
import Awards from "./awards";
import Projects from './projects';
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

      <About/>

      <hr class="horizontal-line" />

      {/* Education Section of Main Content */}
      
      <Education/>

      <hr class="horizontal-line" />
      {/*  Employment SECTION */}
      
      <Employment/>

      <hr class="horizontal-line" />
      {/* LEADERSHIP SECTION */}
      
      <Leadership/>
      <hr class="horizontal-line" />
      {/* SKILLS SECTION */}
      <Skills/>

      <hr class="horizontal-line" />

      {/* Awards */}
      <Awards/>

      <hr class="horizontal-line" />
      {/* Projects SECTION */}
      <Projects/>
      
    </div>
  );
}

export default maincontent;
