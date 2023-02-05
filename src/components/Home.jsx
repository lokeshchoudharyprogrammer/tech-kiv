import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech Kiv</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            officiis aliquid quia qui ratione quo veritatis praesentium quod.
            Corrupti, voluptatem. Totam dolor nulla quod incidunt architecto quo
            provident harum sequi ipsa ducimus tenetur veritatis id blanditiis,
            aliquam ut laborum excepturi repudiandae veniam numquam animi
            recusandae mollitia maxime odit. Eaque hic cum quaerat perferendis
            placeat autem, incidunt sapiente, perspiciatis quas delectus
            voluptatum. Fuga atque, veniam corporis impedit natus accusantium
            unde ipsam expedita voluptates repellendus quaerat cupiditate
            incidunt at laboriosam inventore amet iste eligendi excepturi,
            quibusdam aspernatur. Facere, eligendi.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
