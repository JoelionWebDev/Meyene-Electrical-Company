import React from "react";
import Logo from "../home/logo";
import "./Contact.css";
import Social from "../Social";

const Contact = () => {
  return (
    <main>
      <div className="heroContainer">
        <Logo />
        <div className="hero">
          <div className="welcomNote">
            <h1 className="hero2">
              You Can Contact Us <br />
              <span>Using any of the Below handles</span>
            </h1>
          </div>
        </div>
      </div>
      <h2>this is the contact page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita enim
        aspernatur, soluta molestias optio sapiente autem eum. Minima amet minus
        ea dolorum reprehenderit vitae, sit necessitatibus eum repellendus sint
        magnam asperiores. Et suscipit necessitatibus provident aspernatur sunt
        sed odio architecto animi quidem. Autem commodi maxime excepturi aut
        nemo cum quo?
      </p>
      <Social />
    </main>
  );
};

export default Contact;
