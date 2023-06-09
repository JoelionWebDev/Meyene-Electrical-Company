import React from "react";
import Logo from "../home/logo";
import Social from "../Social";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="heroContainer">
        <Logo />
        <div className="hero">
          <div className="welcomNote">
            <h1 className="hero2">About Us</h1>
          </div>
        </div>
      </div>
      <section className="s1">
        {" "}
        <h2> Meneye Monday</h2>
        <img src="images/monday.jpg" width="15%" alt="" />
      </section>
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
      <section className="s2">
        <p>
          When it comes to all the related services listed in our service page,
          Meyene Electrical Company is one of the best. We install different
          capacities of inverters and solar arrays, this is done by our highly
          skilled and experienced technicians and engineers. Here, we give
          priority to safety and efficiency.
        </p>
        <p>
          {" "}
          Over the years, we have delivered efficient and durable services to
          several homes and offices in Nigeria and beyound. Thanks to the
          positive feed back we get from our clients, this gives us the drive to
          do better and serve you better.
        </p>
        <p>
          Meyene Electrical Company Headquarter is located At NO: 4 Oloruntegbe
          Street, Ayeteju, Ibeju-Lekki, Lagos State.
        </p>
      </section>

      <Social />
    </div>
  );
};

export default About;
