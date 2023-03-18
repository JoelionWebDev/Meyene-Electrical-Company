import React from "react";
import Logo from "../home/logo";
import "./SolaAndInverter.css";
import Social from "../Social";

const SolarAndInverter = () => {
  return (
    <main>
      <div className="heroContainer">
        <Logo />
        <div className="hero">
          <div className="welcomNote">
            <h1 className="hero2">
              Sola and <br /> Inverter
            </h1>
          </div>
        </div>
      </div>
      <section className="solar1">
        <div className="text">
          <h3>7.5/8KVA Inverter + 8 Batteries</h3>
          <p>
            7.5/8kva inverter is suitable for offices and homes that needs
            better power back-up in case of power outage. it works for longer
            hours on average load . Below are the list of appliances that can be
            used with this inverter capacity.
          </p>
          <ol>
            <li>2 AC (1.5hp)</li>
            <li>1 (inverter) freezer</li>
            <li>3LED TVs</li>
            <li>3 decoders</li>
            <li>2 Sound system</li>
            <li>16 channel CCTV camera</li>
            <li>6 Laptops /PC</li>
            <li>40 lighting unit(led bulbs)</li>
            <li>4 Fans</li>
            <li>1 blender</li>
          </ol>
        </div>
        <img src="/images/inverter1.jpg" alt="" />
      </section>
      <hr />
      <section className="solar2">
        <div>
          <h3>3.5KVA Inverter + 4 Batteries</h3>
          <img src="/images/solar2.jpg" alt="" />
        </div>
        <div className="text">
          <p>
            3.5kva inverter is suitable for offices and homes that needs better
            power back-up <br /> in case of power outage. it works for longer
            hours on average load . Below are the <br /> list of appliances that
            can be used with this inverter capacity.
          </p>
          <ol>
            <li>2 LED TVs</li>
            <li>2 decoders</li>
            <li>1 (inverter) freezer</li>
            <li>30 lighting unit(led bulbs)</li>
            <li>3 Fans</li>
            <li>1 blender</li>
            <li>4 Laptops</li>
          </ol>
        </div>
      </section>
      <section className="solar1">
        <div className="text">
          <h3>2kva Inverter</h3>
          <p>
            This inverter is suitable for homes and offices with low power
            consumption. It is meant to power basic appliances . Below are the
            list of appliances that can be used with this inverter capacity.
          </p>
          <ol>
            <li>2 LED TVs</li>
            <li>2 decoders</li>
            <li>12 lighting unit(led bulbs)</li>
            <li>2 Fans</li>
            <li>1 blender</li>
            <li>2 Laptops</li>
          </ol>
          <p>
            This setup contains 2.5kva pure sine wave inverter, 2pcs of 200ah
            batteries, battery rack and other installation accessories.
          </p>
        </div>
        <img src="/images/solar3.jpg" alt="" />
      </section>
      <section className="solar2">
        <div>
          <h3>5KVA Inverter + 4 Batteries</h3>
          <img src="/images/solar4.jpg" alt="" />
        </div>
        <div className="text">
          <p>
            5kva inverter is suitable for offices and homes that needs better
            power back-up in case of <br /> power outage. it works for longer
            hours on average load . Below are the list of appliances <br /> that
            can be used with this inverter capacity.
          </p>
          <ol>
            <li>2 LED TVs</li>
            <li>2 decoders</li>
            <li>1 (inverter) freezer</li>
            <li>30 lighting unit(led bulbs)</li>
            <li>3 Fans</li>
            <li>1 blender</li>
            <li>4 Laptops</li>
            <li>2 Sound system</li>
            <li>1 AC (1.5hp)</li>
          </ol>
        </div>
      </section>
      <Social />
    </main>
  );
};

export default SolarAndInverter;
