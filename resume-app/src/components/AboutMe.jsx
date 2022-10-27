import {
  CalendarOutlined,
  FlagOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Carousel, Card, Col, Row, Button, Tooltip, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
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
    <div className="">
      <Carousel
      //   autoplay
      >
        <div>
          <div style={contentStyle}>
            {" "}
            <Row className="">
              <Col span={24}>
                <div className="bg-gradient-to-r from-gray-800 to-slate-800 h-full">
                  {/* <h1 className=" text-white font-bold text-2xl pt-6 underline font-sans">
                    About Me
                  </h1> */}
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
              {/* <Col span={8}>
                <img style={{ width: "100%" }} alt="example" src={SelfImg} />
              </Col> */}
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
      <div className=" bg-slate-900">
        <Row className="p-4 ml-4">
          <Col span={8}>
            <Avatar size={256} src={SelfImg} />
          </Col>
          <Col span={16} className=" pt-6  ">
            <h1 className="text-white pl-2 text-xl">
              <u>About me</u>
            </h1>
            <div className="">
              <p className="font-sans text-white pl-2 ">
                Hi, i'm a full stack developer. I primaririly use React and
                Dotnet.{" "}
              </p>
              <Row>
                <Col span={8}>
                  <HomeOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">Location : </b>{" "}
                  <i className="font-sans text-white ">Gurgaon</i>
                </Col>

                <Col span={8}>
                  <CalendarOutlined
                    className="p-2"
                    style={{ color: "white" }}
                  />
                  <b className="font-sans text-white ">Age : </b>{" "}
                  <i className="font-sans text-white ">25</i>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <FlagOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">Nationality : </b>{" "}
                  <i className="font-sans text-white ">Indian</i>
                </Col>
                <Col span={8}>
                  <HomeOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">Interests : </b>{" "}
                  <i className="font-sans text-white ">
                    Gaming, Football, Coding
                  </i>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <FlagOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">College : </b>{" "}
                  <i className="font-sans text-white ">
                    Vellore Institute of Technology
                  </i>
                </Col>
                <Col span={8}>
                  <HomeOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">Employment : </b>{" "}
                  <i className="font-sans text-white ">ZS Associates</i>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutMe;
