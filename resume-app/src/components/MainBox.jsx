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
import backgroundImg from "../Images/bg.jpg";
import "../styles/generalStyles.css";
const { Meta } = Card;

function MainBox() {
  return (
    <div
      className="bg-img flex justify-center justify-items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="introBox align-middle justify-center justify-items-center">
        <Row>
          <Col span={24}>
            <div className="flex  items-center justify-center">
              <div className="group relative cursor-pointer border-b border-white-700 p-4  transition ease-in-out duration-500 hover:border-white-100 hover:scale-110">
                <div className="text-5xl flex items-center relative">
                  {"Amitabh Suyash".split("").map((letter, i) => (
                    <div
                      key={i}
                      className="text-white origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-5xl absolute bottom-0 top-0  flex items-center ">
                  {"Amitabh Suyash".split("").map((letter, i) => (
                    <div
                      key={i}
                      className="text-white origin-top transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="p-6">
          <Col span={24}>
            <span
              className=" text-xl  text-center "
              style={{ color: "lightcyan" }}
            >
              I'm a Gurgaon based Full Stack Software Engineer, currently
              working at ZS Associates helping build modern internal tools.
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainBox;
