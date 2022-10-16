import { Carousel, Card, Col, Row, Button } from "antd";
import React from "react";
import SelfImg from "../Images/Self.jpg";
const { Meta } = Card;
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "600px",
  textAlign: "center",
  content: {
    alignItems: "center",
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  background: "#364d79",
};
function AboutMe() {
  return (
    <div className="mt-2">
      <Carousel
      //   autoplay
      >
        <div>
          <div style={contentStyle}>
            {" "}
            <Row className="">
              <Col span={16}>
                <div className="bg-gradient-to-r from-gray-800 to-slate-800 h-full">
                  <h1 className=" text-white font-bold text-2xl pt-6 underline ">
                    About Me
                  </h1>
                  <span className="text-white text-xl">
                    Hi, I am Amitabh Suyash, a Full Stack Developer{"    "}
                  </span>

                  <Button
                    className="ml-2"
                    onClick={() => {
                      window.location.href = "mailto:amitabh.suyash@gmail.com";
                    }}
                  >
                    Email Me
                  </Button>
                </div>
              </Col>
              <Col span={8}>
                <img style={{ width: "100%" }} alt="example" src={SelfImg} />
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="bg-gradient-to-r from-gray-800 to-slate-800 h-full">
              <h1 className=" text-white font-bold text-2xl pt-6 underline ">
                Work Experience
              </h1>
              <span className="text-white text-xl">
                Business Technology Solutions Associate (Jan 2022-Present)
                {"    "}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default AboutMe;
