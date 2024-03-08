import { ethers } from "ethers";
import { useEffect, useState } from "react";

import close from "../assets/close.svg";

const Home = ({ home, provider, escrow, toggleProp }) => {
  console.log(home);
  return (
    <div className="home">
      <div className="home__details">
        <div className="home__image">
          <img src={home.image} alt="Home" />
        </div>
        <div className="home__overview">
          <h1>{home.name}</h1>
          <p>
            <strong>{home.attributes[2].value}</strong> Beds|
            <strong>{home.attributes[3].value}</strong> Bath|
            <strong>{home.attributes[4].value}</strong> sqft
          </p>
          <p>{home.address}</p>
        </div>
        <div>
          <button
            className="home__buy" /* onClick={buyHandler} disabled={hasBought} */
          >
            Buy
          </button>
          <button
            className="home__contact" /* onClick={buyHandler} disabled={hasBought} */
          >
            Contact Agent
          </button>
          <hr />
          <h2>Overview</h2>
          <p>{home.description}</p>
          <hr />
          <h2>Facts & Features</h2>
          <ul>
            {home.attributes.map((attributes, index) => (
              <li>
                <strong>{attributes.trait_type}</strong>:{attributes.value}
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <button onClick={toggleProp} className="home__close">
          <img src={close} alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default Home;
