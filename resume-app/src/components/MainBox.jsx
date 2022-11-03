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
            <span className="text-white text-6xl  text-center p-6 ">
              I'm Amitabh Suyash
            </span>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <span className="text-white text-xl m-1 text-center mt-4s">
              I'm a Gurgaon based Full Stack Software Engineer, currently
              working at ZS Associates helping build a modern internal tools.
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainBox;
