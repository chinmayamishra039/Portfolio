import React from "react"
import "../css/About.css"

const About = () => {
  // const data = [
  //   {
  //     cover: "./images/about.jpg",
  //     catgeory: "ABOUT ME",
  //     title: "Creative Software Engineer based in New York, USA",
  //     desc: "I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.",
  //   },
  // ]
  return (
    <div className="a">
      <div className="a-left">About
        <div className="a-card bg">fbfb</div>
        <div className="a-card">
          <img src={require("../img/pexels-photo.jpeg")} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right"> 
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src="" alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About