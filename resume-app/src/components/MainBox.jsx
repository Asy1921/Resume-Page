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
            <span
              className=" text-6xl  text-center p-6 "
              style={{ color: "lightblue" }}
            >
              I'm
              <span className="waviy"> Amitabh Suyash</span>
            </span>
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
