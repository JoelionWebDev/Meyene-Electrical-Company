import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { data } from "../data";
import Logo from "../home/logo";
import Social from "../Social";
import "./Project.css";

const Projects = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <main className="body">
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
      <div
        className="flex"
        style={{ backgroundColor: "white", paddingTop: "2rem" }}
      >
        <a href="https://wa.me/message/YLOK7D7K3PQ2L1">
          {" "}
          <h1 style={{ color: "green" }}>
            <p> Message Us directly through our WhatsApp</p>
            <i class="fa-brands fa-whatsapp"></i>
          </h1>
        </a>{" "}
        <a href="https://t.me/Meyeneelectricalcompany">
          {" "}
          <h1 style={{ color: "green" }}>
            <p> Or our Telegram</p>
            <i class="fa-brands fa-telegram"></i>
          </h1>
        </a>{" "}
      </div>
      <section className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, title } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={title} className="person-img" />
              </article>
            );
          })}
          <h4 className="quality">We deliver qaulity work</h4>
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
      <div className="social">
        <Social />
      </div>
    </main>
  );
};

export default Projects;
