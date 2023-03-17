import React from "react";
import Logo from "../home/logo";
import Social from "../Social";
import "./Project.css";

const Projects = () => {
  return (
    <main>
      <div className="heroContainer">
        <Logo />
        <div className="hero">
          <div className="welcomNote">
            <h1 className="hero2">
              Some of Our Past <br /> Projects
            </h1>
          </div>
        </div>
      </div>
      <section className="pro1">
        <div className="p1">
          <img src="/images/p18.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p20.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p21.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p22.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p1.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p17.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p16.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p15.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p14.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p13.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p7.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p8.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p9.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p10.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p11.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p1.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p4.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p5.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p6.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p3.jpg" alt="project name" />
        </div>
        <div className="p1">
          <img src="/images/p2.jpg" alt="project name" />
        </div>
      </section>
      <Social />
    </main>
  );
};

export default Projects;
