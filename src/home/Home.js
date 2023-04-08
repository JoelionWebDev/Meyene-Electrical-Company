import React from "react";
import "./Home.css";
import Hero from "./hero";
import Logo from "./logo";
import Social from "../Social";
import { Link } from "react-router-dom";
import video from "../video/vid1.mp4";
const Home = () => {
  return (
    <React.Fragment>
      <main className="container">
        <div className="heroContainer">
          <Logo />
          <Hero />
        </div>

        <div className="animate">
          <p>Meyene Electrical Company by JoelionWebDev</p>
        </div>

        <div className="home-body">
          <p>
            In the world of increasing fuel prices, having a renewable energy
            source is the best alternative. This is better achieved with MEYENE
            ELECTRICAL services because we give priority to durability, safety
            and efficiency giving you value for your money. In MEYENE ELECTRICAL
            COMPANY,We offer numerous services that have to do with Installation
            of several electrical gadget. Check out our
            <Link to="/Services" className="big-link">
              {" "}
              services{" "}
            </Link>
            page to get more information about the services we offer.
          </p>
          <p>
            Over the years we have provided several electrical installations as
            well as efficient and durable renewable energy to several homes and
            offices in Nigeria and beyond, using solar and inverters system.
            Thanks to the positive feed back we get from our clients, this gives
            us the drive to do better and serve you better.
          </p>

          <h1 className="meye">MEYENE ELECTRICAL</h1>
          <div className="flex flex1">
            <img src="/images/contract img.jpeg" alt="" />
            <div className="text">
              <h3>
                Meyene Electrical Company <br /> Headquarter
              </h3>{" "}
              <p>
                is located At NO: 4 Oloruntegbe Street, Ayeteju, Ibeju-Lekki,
                Lagos State.
              </p>
              <ul className="headquarter">
                <li>
                  You can message us directly through our WhatsApp contact
                  provided
                </li>
                <li>
                  You can also call us directly through the phone number
                  provided
                </li>

                <li>
                  <h5> Email us through: </h5>{" "}
                  <span>
                    {" "}
                    meyeneelectricalcompany <br /> @gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <video
            style={{ backgroundColor: "black" }}
            width="750"
            height="500"
            controls
          >
            <source src={video} type="video/mp4" />
          </video>

          <section className="section2">
            <h2>Our work quality</h2>
            <p>
              We are one of the so many Electrical and Solar Installation
              Companies in the world you can rely on for an outstanding neat and
              exceptional work output. Take your time to go through our site and
              get fed of almost all the information you need about us. You can
              equally reach us for more information.
            </p>
            <div className="flex flex2">
              <div className="img1">
                <h4 className="img-text">
                  Installation of Telecommunication wifi
                </h4>
                <img src="images/telecom wifi.jpg" alt="" />
              </div>
              <div className="img1">
                <h4 className="img-text">Installation of Led moving light</h4>
                <img src="/images/led moving light.jpg" alt="" />
              </div>
            </div>
          </section>
          <section className="s2">
            <img src="/images/work.jpg" width="70%" alt="" />
          </section>

          <section className="s2">
            <h5>
              You can reach us from anywhere in the world, Do good to reach us{" "}
              <br /> through any of our social media handles
            </h5>
            <img src="/images/anywhere.jpg" width="50%" alt="" />
          </section>
          <section className="s2">
            <img src="/images/monday.jpg" width="70%" alt="" />
          </section>
        </div>
        <Social />
      </main>
    </React.Fragment>
  );
};

export default Home;
