import { Carousel, Card, Col, Row, Button, Tooltip, List } from "antd";
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
  const data = [
    {
      title: "Army Public School-Dhaula kuan, New Delhi",
      description: (
        <ul>
          <li>10th - 9.4 CGPA</li>
          <li>12th - 92.2% (PCM with CS)</li>
        </ul>
      ),
    },
    {
      title: "Vellore Institute of Technology",
      description: "Computer Science Engineering - 8.45 CGPA",
    },
  ];
  const skillData = [
    {
      title: "React",
    },
    {
      title: "Dotnet",
    },
    {
      title: "Excel-VBA",
    },
    {
      title: "Game Dev (Unity,C#)",
    },
    {
      title: "Java",
    },
    {
      title: "C/C++",
    },
  ];
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
                  <h1 className=" text-white font-bold text-2xl pt-6 underline font-sans">
                    About Me
                  </h1>
                  <span className="text-white text-xl font-serif">
                    Hi, I am Amitabh Suyash, a Full Stack Developer{"    "}
                  </span>
                  <Tooltip title="amitabh.suyash@zs.com">
                    <Button
                      className="ml-2"
                      onClick={() => {
                        window.location.href =
                          "mailto:amitabh.suyash@gmail.com";
                      }}
                    >
                      Email Me
                    </Button>
                  </Tooltip>
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
          <div style={contentStyle}>
            <div className="bg-gradient-to-r from-gray-800 to-slate-800 h-full">
              <h1 className=" text-white font-bold text-2xl pt-6 underline ">
                Skills
              </h1>
              <div className="text-white text-xl pt-12">
                <List
                  className="  text-white text-xl "
                  itemLayout="horizontal"
                  dataSource={skillData}
                  split={false}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <h3 className="  text-white text-lg">{item.title}</h3>
                        }
                        description={
                          <p className="  text-white text-sm">
                            {item.description}
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <div className="bg-gradient-to-r from-gray-800 to-slate-800 h-full">
              <h1 className=" text-white font-bold text-2xl pt-6 underline ">
                Education
              </h1>
              <div className="pt-12">
                <List
                  className="  text-white text-xl "
                  itemLayout="horizontal"
                  dataSource={data}
                  split={false}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <h3 className="  text-white text-2xl">
                            {item.title}
                          </h3>
                        }
                        description={
                          <p className="  text-white text-sm">
                            {item.description}
                          </p>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default AboutMe;
