import {
  CalendarOutlined,
  FlagOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Carousel, Card, Col, Row, Button, Tooltip, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SelfImg from "../Images/Self.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setAqi } from "../store/features/AqiSlice/AqiSlice";
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
  const aqi = useSelector((state) => state.aqi.aqiVal);
  const [apiData, setApiData] = useState();
  const dispatch = useDispatch();
  // const [aqi, setAqi] = useState("");
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
  useEffect(() => {
    fetch(process.env.REACT_APP_API_KEY)
      .then((res) => res.json())
      .then(
        (result) => {
          // setApiData(result);
          console.log(result);
          dispatch(setAqi(result.data.aqi));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          dispatch(setAqi("No data for this locations"));
        }
      );
  }, []);
  return (
    <div className="">
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
                Hi, i'm a full stack developer. I primarily use React and
                Dotnet.{" "}
              </p>
              <Row>
                <Col span={8}>
                  <HomeOutlined className="p-2" style={{ color: "white" }} />
                  <b className="font-sans text-white ">Location : </b>{" "}
                  <i className="font-sans text-white ">
                    <Tooltip title={"AQI:" + aqi}>Gurgaon</Tooltip>
                  </i>
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
