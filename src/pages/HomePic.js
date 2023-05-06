import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const HomePic = () => {
  return (
    <section className="hero" id="home">
      <div className="heroText">
        <h5 className="text-white" data-aos="fade-up">
          Welcome
        </h5>
        <h1 id="homepictitle" className="text-white mb-lg-4" data-aos="fade-up">
          I'm{" "}
          <></>
          <ReactTypingEffect
            text={["YUHO.", "後端工程師."]}
            speed={120}
            eraseSpeed={120}
            eraseDelay={2000}
            typingDelay={120}
          />
        </h1>

        <div id="react-root"></div>

        <p
          id="homepic-p"
          className="text-secondary-white-color"
          data-aos="fade-up"
        >
          人生充滿可能性，不斷挑戰，超越自我，活出精彩！
        </p>
        <br />
        <a href="#contactus" data-aos="fade-up">
          <button
            type="button"
            className="btn btn-outline-success btn-custom-lg"
          >
            Contact Me
          </button>
        </a>
      </div>

      <div className="videoWrapper">
        {/* <video
          autoPlay
          loop
          muted
          className="custom-video"
          poster="videos/homepic.jpg"
        >
          <source src="videos/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img
          className="custom-video"
          src="videos/bg-developers-guassian.jpeg"
          alt=""
        />
      </div>

      <div className="overlay"></div>
    </section>
  );
};

export default HomePic;
