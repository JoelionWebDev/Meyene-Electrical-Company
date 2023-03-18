import React from "react";
import { social } from "./data";

const Social = () => {
  return (
    <main>
      <div className="social-icon">
        <div className="contact">
          <h3>07035836607</h3>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon, name } = socialIcon;
            return (
              <li key={id}>
                <h4 style={{ paddingLeft: ".5rem", paddingTop: ".5rem" }}>
                  <a href={url}>
                    {icon} {name}
                  </a>
                </h4>
              </li>
            );
          })}
        </ul>
        <p>
          Meyene Electrical Company Headquarter is located At NO: 4 Oloruntegbe
          Street, Ayeteju, Ibeju-Lekki, Lagos State.
        </p>
      </div>
    </main>
  );
};

export default Social;
